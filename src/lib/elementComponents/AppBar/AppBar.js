import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import "./AppBar.css";

const ResponsiveAppBar = ({ pages, AppBarClassName, logoIcon, logoTitle }) => {
  const navigate = useNavigate();
  const handleClickRedirect = (url) => {
    navigate(url);
  };

  return (
    <AppBar position="static" className={AppBarClassName}>
      <Container maxWidth="lg" className="appbar-container">
        <Toolbar disableGutters>
          {logoIcon}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => handleClickRedirect("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            className="appbar-logo"
          >
            {logoTitle}
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={() => {
                  handleClickRedirect(page.redirect);
                }}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  handleClickRedirect(page.redirect);
                }}
                sx={{ my: 1, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
