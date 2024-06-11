import React, { useState } from "react";
import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ToggleColorMode from "../ui/ToogleColorMode.component";
import XIcon from "@mui/icons-material/X";
import { useNavigate } from "react-router-dom";
import useScrollDirection from "../../hooks/useScrollDirection";

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function Header({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navigateToSection = (sectionId: string) => {
    navigate(sectionId);
    setOpen(false);
  };

  const scrollDirection = useScrollDirection();

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
        paddingTop: {
          xs: scrollDirection === "down" ? -11 : -6, // Set paddingTop to 0 if scrolling down on mobile
          md: theme.spacing(2), // Use default padding for larger screens
        },
        transform: {
          xs:
            scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)",
          md: "translateY(0)", // No transformation for larger screens
        },
        transition: "transform 0.2s ease-in-out", // Add transition for smooth hiding/showing
      })}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor:
              theme.palette.mode === "light"
                ? "hsla(220, 60%, 99%, 0.6)"
                : "hsla(220, 0%, 0%, 0.7)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "light"
                ? "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)"
                : "0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)",
          })}
        >
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <XIcon
              fontSize="large"
              sx={{ paddingRight: "1em" }}
              onClick={() => navigateToSection("/")}
            />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => navigateToSection("/")}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => navigateToSection("/products/")}
              >
                Products
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => navigateToSection("/contact/")}
              >
                Contact
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => navigateToSection("/about-us/")}
              >
                About us
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => navigateToSection("/about-us/sustainability/")}
              >
                Sunstainability
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                onClick={() => navigateToSection("/faq/")}
                sx={{ minWidth: 0 }}
              >
                FAQ
              </Button>
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
              <MenuIcon fontSize="large" />
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
                    <CloseRoundedIcon fontSize="large" />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem onClick={() => navigateToSection("/")}>Home</MenuItem>
                <MenuItem onClick={() => navigateToSection("/about-us")}>
                  About us
                </MenuItem>
                <MenuItem onClick={() => navigateToSection("/products")}>
                  Products
                </MenuItem>
                <MenuItem onClick={() => navigateToSection("/pricing")}>
                  Contact
                </MenuItem>
                <MenuItem
                  onClick={() => navigateToSection("/about-us/sunstainability")}
                >
                  Sunstainability
                </MenuItem>
                <MenuItem onClick={() => navigateToSection("/faq")}>
                  FAQ
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
