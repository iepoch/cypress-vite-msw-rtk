import React, { useState } from "react";
import { AppBar, Box, Toolbar, Button, Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "@tanstack/react-router";
import { dogsApiSlice  } from "../../services/dogs/dogApiSlice";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { CartDrawer } from "../CartProducts/CartDrawer";
import { useAppSelector } from "../../app/hooks";


const pages_ = [
  {
    menuTitle: "Home",
    pageURL: "/",
  },
  {
    menuTitle: "Cart",
    pageURL: "/cart",

  },
  {
    menuTitle: "Counter",
    pageURL: "/counter",

  },
  {
    menuTitle: "Dogs",
    pageURL: "/dogs",

  },
  {
    menuTitle: "Users",
    pageURL: "/users",

  }
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
    null
  );
  const [showCart, setShowCart]=useState<boolean>(false)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const cart = useAppSelector((state) => state.cart);
   

  const isLoading = () => {
    dogsApiSlice.usePrefetch('fetchBreeds')
  }
  return (
    <AppBar
      position="static"
      sx={{ background: "gray", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages_.map((page, index) => {
                const { menuTitle, pageURL } = page;
                return (
                  <MenuItem key={index} onClick={handleCloseNavMenu} onLoad={isLoading}>
                    <Typography
                      key={index}
                      component={Link}
                      to={pageURL}
                      color="primary"
                    >
                      {menuTitle}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            LOGO
          </Typography>

          <Box
            m={1}
            display="flex"
            justifyContent="flex-end" // flex-start -> for left , center-> center, flex-end-> for left
            alignItems="flex-end"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" }
            }}
          >
            {pages_.map((page, index) => {
              const { menuTitle, pageURL } = page;
              return (
                <Button
                  key={index}
                  component={Link}
                  to={pageURL}
                  color="inherit"
                >
                  {menuTitle}
                </Button>
              );
            })}
          </Box>
          <Badge badgeContent={cart.cartItems.length}  color="secondary">
            <ShoppingCartCheckoutOutlined onClick={() => setShowCart(true)}  />
            <CartDrawer key={cart.cartItems.length} open={showCart} onClose={() => setShowCart(false)} />
          </Badge>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
