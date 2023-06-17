import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavMenu from "./contents/NavMenu";
import UserMenu from "./contents/UserMenu";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrollBackground(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMenuOpen = (event) => {
    setMobileMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(null);
  };

  const drawerMenu = (
    <Menu
      anchorEl={mobileMenuOpen}
      open={!!mobileMenuOpen}
      onClose={handleMenuClose}
      sx={{}}
    >
      <NavMenu />
      <UserMenu />
    </Menu>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
        background: scrollBackground ? "rgba(0,0,0,0.6)" : "transparent",
        transition: "background 0.3s ease",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Toolbar disableGutters>
          <Typography sx={{ fontSize: 25, fontWeight: 900, letterSpacing: 2 }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              SUMMER CAMP
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            {isMobile ? (
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <NavMenu />
            )}
          </Box>
          <Box>{!isMobile && <UserMenu />}</Box>
        </Toolbar>
      </Container>
      {drawerMenu}
    </AppBar>
  );
};

export default Header;

// background: "linear-gradient(45deg, #353A5F, #9EBAF3)",
