import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import "./MovieCard.css";
import {
  FaceRounded,
  LocationOnRounded,
  TodayRounded,
} from "@mui/icons-material";
import moment from "moment";

const MovieCard = ({ data }) => {
  const returnDateFormatted = (date) => {
    const dateToFormat = moment(date);
    const dateFormatted = dateToFormat.format("DD/MM/YYYY");

    return dateFormatted;
  };

  const removeUnnecessary = (str) => {
    let arr = str.split("/");

    return "/images/" + arr.pop();
  };

  return (
    <>
      <Card className="movie-card">
        <CardMedia
          sx={{ height: "50%" }}
          title={data.title}
          image={removeUnnecessary(data.image)}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            color="white"
          >
            {data.title}
          </Typography>
          <div className="movie-card-information">
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnRounded />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="white" component={"text"}>
                    {data.country}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TodayRounded />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="white" component={"text"}>
                    {returnDateFormatted(data.releaseDate)}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FaceRounded />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="white" component={"text"}>
                    {data.director}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default MovieCard;
