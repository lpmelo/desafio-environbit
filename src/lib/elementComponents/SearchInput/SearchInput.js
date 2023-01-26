import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const SearchInput = ({
  id,
  options,
  placeholder,
  className,
  size,
  handleChange,
}) => {
  return (
    <>
      <Autocomplete
        freeSolo
        id={id}
        className={className}
        disableClearable
        options={options.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
        size={size}
        onSelect={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
};

export default SearchInput;
