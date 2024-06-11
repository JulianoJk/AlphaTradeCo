import { useState } from "react";
import {
  PaletteMode,
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
import { useNavigate } from "react-router-dom";
import ToggleColorMode from "../ui/ToogleColorMode.component";
import useScrollDirection from "../../hooks/useScrollDirection";
import { useStyles } from "./Header.styles";
import logoOne from "../../assets/logoOne.jpg";
interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

const Header = ({ mode, toggleColorMode }: AppAppBarProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const scrollDirection = useScrollDirection();
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
    maxWidth: { xs: "100%", md: "50em" },
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
    boxShadow:
      mode === "light"
        ? "0 1px 12px hsla(210, 0%, 0%, 0.05), 0 2px 5px hsla(210, 100%, 80%, 0.5)"
        : "none",
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
    menuItems.map((item, index) => (
      <Button
        key={index}
        className={`${classes.buttonEffect} fromLeft`}
        variant="text"
        size="small"
        sx={{
          "&.MuiButton-root:hover": { bgcolor: "transparent" },
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
    ));

  const renderMenuItems = () =>
    menuItems.map((item, index) => (
      <MenuItem key={index} onClick={() => navigateToSection(item.path)}>
        <Typography>{item.label}</Typography>
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
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
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
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
