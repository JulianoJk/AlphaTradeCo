import { useState } from "react";
import {
  useTheme,
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  CloseRounded as CloseRoundedIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import ToggleColorMode from "../ui/ToogleColorMode.component";
import useScrollDirection from "../../hooks/useScrollDirection";
import { useStyles } from "./Header.styles";
import logoOne from "../../assets/logoOne.jpg";
import { useAppState } from "../context/AppContext";
import EnglishIllustration from "../ui/images/EnglishIllustration";

interface AppAppBarProps {
  toggleColorMode: () => void;
}

const Header = ({ toggleColorMode }: AppAppBarProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const scrollDirection = useScrollDirection();
  const { mode } = useAppState();
  const { classes } = useStyles({ mode });

  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);
  const navigateToSection = (sectionId: string) => {
    navigate(sectionId);
    setOpen(false);
  };

  const appBarStyles = {
    boxShadow: 0,
    bgcolor: "transparent",
    backgroundImage: "none",
    mt: 2,
    maxWidth: { xs: "100%", md: "55em" },
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: {
      xs: scrollDirection === "down" ? -11 : -6,
      md: "1px",
    },
    transform: {
      xs: scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)",
      md: "translateY(0)",
    },
    transition: "transform 0.2s ease-in-out",
  };

  const toolbarStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
    borderRadius: "1.5em",
    backgroundColor: mode === "light" ? "hsla(220, 60%, 99%, 0.6)" : "#1c1b1b",
    backdropFilter: "blur(24px)",
    maxHeight: 40,
    border: mode === "light" ? "2px solid #201f1f" : "2px solid white",
    borderColor: "divider",
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/products/", label: "Products" },
    { path: "/contact/", label: "Contact" },
    { path: "/about-us/", label: "About us" },
    { path: "/about-us/sustainability/", label: "Sustainability" },
    { path: "/faq/", label: "FAQ" },
  ];

  const renderButtons = () =>
    menuItems.map((item, index) => {
      const isActive = location.pathname === item.path;
      return (
        <Button
          key={index}
          className={`${classes.buttonEffect} ${
            isActive ? "active" : "fromLeft"
          }`}
          variant="text"
          size="small"
          sx={{
            "&.MuiButton-root:hover": { bgcolor: "transparent" },
            "&.active": {
              backgroundPosition: "0",
              "&:before": {
                width: "100%",
              },
            },
          }}
          onClick={() => navigateToSection(item.path)}
        >
          <Typography
            color={mode === "dark" ? "#C9C9C9" : "#1c1b1b"}
            variant="body1"
          >
            {item.label}
          </Typography>
        </Button>
      );
    });

  const renderMenuItems = () =>
    menuItems.map((item, index) => (
      <MenuItem
        key={index}
        onClick={() => navigateToSection(item.path)}
        sx={{ paddingTop: "2.2em" }}
      >
        <Typography
          color={mode === "dark" ? "#C9C9C9" : "#1c1b1b"}
          variant="body1"
        >
          {item.label}
        </Typography>
      </MenuItem>
    ));

  return (
    <AppBar position="fixed" sx={appBarStyles}>
      <Container maxWidth="lg">
        <Toolbar variant="regular" sx={toolbarStyles}>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <img
              src={logoOne}
              width={70}
              height={50}
              style={{ paddingRight: "1em" }}
              onClick={() => navigateToSection("/")}
              alt="Logo"
            />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {renderButtons()}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <EnglishIllustration style={{ marginLeft: "8px" }} />
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon
                fontSize="large"
                sx={{
                  color:
                    mode === "dark"
                      ? theme.palette.common.white
                      : theme.palette.common.black,
                }}
              />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  height: "100vh",
                  backgroundColor: "background.default",
                },
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ToggleColorMode
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                  />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon
                      fontSize="large"
                      sx={{
                        color:
                          mode === "dark"
                            ? theme.palette.common.white
                            : theme.palette.common.black,
                      }}
                    />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                {renderMenuItems()}
                <Box
                  sx={{
                    mt: "auto",
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <EnglishIllustration />
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
