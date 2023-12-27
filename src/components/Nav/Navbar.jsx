import React, { useState } from "react";
import {
  AppBar,
  Box,
  InputBase,
  Container,
  Toolbar,
  Typography,
  alpha,
  styled,
  Popover,
  Button,
} from "@mui/material";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "34%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    borderBottom: "2px solid transparent", // Add transparent underline
    "&:focus": {
      borderBottomColor: "black", // Change the underline color on focus
    },
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "13ch",
      },
    },
  },
}));

function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLoginClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "login-popover" : undefined;

  const handleLogin = () => {
    console.log("Login");
  }
  const handleGoogleLogin = () => {
    console.log("googleLogin");
  }
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{ background: "white", color: "black" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box
                sx={{
                  width: "16%",
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundImage: `url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')`,
                  backgroundSize: "cover",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: "30px", fontWeight: "bold" }}
                >
                  SHOP
                </Typography>
              </Box>
              <Box onClick={handleLoginClick} sx={{ cursor: "pointer" }}>
                <LoginSharpIcon />
              </Box>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box sx={{ padding: "10px" }}>
                  <Button variant="outer-contained" onClick={handleGoogleLogin}>
                    Google
                  </Button>
                  <Button variant="contained" onClick={handleLogin}>
                    Login
                  </Button>
                </Box>
              </Popover>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </>
  );
}

export default Nav;
