import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  ExitToApp,
  Favorite,
  FontDownload,
  ShoppingCart,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
import { ModalRegister } from "../components/Modals/ModalRegister.jsx";
import { AppState, LogOut } from "../Context/AppProvider.jsx";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isAuth = localStorage.getItem("token");
  const [isOpenModalAuth, setIsOpenModalAuth] = useState(false);

  const { user } = AppState() || {};
  const likedClothCount = user?.likedClothes ? user?.likedClothes?.length : 0;
  const CartClothCount = user?.cart ? user?.cart?.length : 0;

  const router = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleModalAuthOpen = () => {
    setIsOpenModalAuth(true);
  };

  const handleModalAuthClose = () => {
    setIsOpenModalAuth(false);
    handleMobileMenuClose();
  };

  const menuId = "menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => router("/profile")}>Профиль</MenuItem>
      {user?.role === "admin" && (
        <MenuItem onClick={() => router("/admin")}>Админ панель</MenuItem>
      )}
      <MenuItem
        onClick={() => {
          handleMenuClose();
          localStorage.removeItem("token");
          localStorage.removeItem("userInfo");
          router("/");
        }}
      >
        Выйти
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => router("/profile")}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Профиль</p>
      </MenuItem>
      <MenuItem
        onClick={() => (router("/profile/favorite"), handleMenuClose())}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={likedClothCount} color="error">
            <Favorite />
          </Badge>
        </IconButton>
        <p>Понравившиеся</p>
      </MenuItem>
      <MenuItem onClick={() => (router("/basket"), handleMenuClose())}>
        <IconButton size="large" aria-label="cart" color="inherit">
          <Badge badgeContent={CartClothCount} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Корзина</p>
      </MenuItem>
      {user?.role === "admin" && (
        <MenuItem onClick={() => router("/admin")}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu"
            aria-haspopup="true"
            color="inherit"
          >
            <FontDownload />
          </IconButton>
          <p>Админ панель</p>
        </MenuItem>
      )}
      <MenuItem
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("userInfo");
          handleMobileMenuClose();
          router("/");
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToApp />
        </IconButton>
        <LogOut />
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }} />
          <Typography variant="h6" noWrap component={Link} to="/">
            Design Custom
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {isAuth ? (
            <>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  onClick={() => router("/profile/favorite")}
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={likedClothCount} color="error">
                    <Favorite />
                  </Badge>
                </IconButton>
                <IconButton
                  onClick={() => router("/basket")}
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={CartClothCount} color="error">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              <Button onClick={handleModalAuthOpen}>Войти</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {isAuth && (
        <>
          {renderMobileMenu}
          {renderMenu}
        </>
      )}
      {isOpenModalAuth && (
        <ModalRegister
          open={isOpenModalAuth}
          handleClose={handleModalAuthClose}
        />
      )}
    </Box>
  );
};
