import React from "react";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import {
  cardTooltipAbout,
  cardTooltipGitHub,
  cardTooltipLinkedIn,
  content,
  contentLinkedIn,
  contentRepository,
  gitHubUrl,
  linkedInUrl,
  title,
  titleLinkedIn,
  titleRepository,
} from "./constants";
import "./HomePage.css";

const HomePage = () => {
  const handleRedirect = (url) => {
    if (url === "LinkedIn") {
      window.location.assign(linkedInUrl);
    } else {
      window.location.assign(gitHubUrl);
    }
  };
  return (
    <>
      <div className="homepage-content-container">
        <div className="card-container">
          <Card className="card about">
            <CardMedia
              sx={{ height: "52%" }}
              title={cardTooltipAbout}
              image="/images/EnvironBit-logo.jpg"
              className="card-about-media"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {title}
              </Typography>
              <Typography variant="body1" textAlign="justify" margin={"1%"}>
                {content}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="card-container">
          <Card
            className="card clickable"
            onClick={() => handleRedirect("GitHub")}
          >
            <CardMedia
              sx={{ height: "60%" }}
              title={cardTooltipGitHub}
              image="/images/reactjs.jpeg"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {titleRepository}
              </Typography>
              <Typography variant="body1" textAlign="justify">
                {contentRepository}
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="card clickable"
            onClick={() => handleRedirect("LinkedIn")}
          >
            <CardMedia
              sx={{ height: "60%" }}
              title={cardTooltipLinkedIn}
              image="/images/linkedin.png"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
              >
                {titleLinkedIn}
              </Typography>
              <Typography variant="body1" textAlign="justify">
                {contentLinkedIn}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HomePage;
