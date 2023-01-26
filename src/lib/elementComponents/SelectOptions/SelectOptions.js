import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectOptions = ({
  id,
  labelId,
  value,
  handleChange,
  options,
  className,
  size,
  label,
  formControlClassName,
}) => {
  return (
    <>
      <FormControl className={formControlClassName} size={size}>
        <InputLabel>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={value}
          onChange={handleChange}
          className={className}
          size={size}
          label={label}
        >
          {options.map((option) => {
            return <MenuItem value={option.key}>{option.title}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectOptions;
