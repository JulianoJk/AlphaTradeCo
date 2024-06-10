import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../assets/images/logo.png";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          backgroundColor: "#0d2a49",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <img
          src={Logo}
          alt="Logo-AlphaTrades-co"
          width="100px"
          height="100px"
        />
        <IconButton onClick={handleDrawerToggle} autoFocus={false}>
          <CloseIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "90vh",
        position: "fixed",
        top: "1em", // Adjust the distance from the top as needed
        left: "50%",
        transform: "translateX(-50%)",
        marginBottom: "5em",
      }}
    >
      <AppBar component="nav">
        <Toolbar sx={{ height: "5em", backgroundColor: "#0d2a49" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: -1, display: { sm: "none" } }}
          >
            <MenuIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: { sm: "flex", positionLeft: 0 },
            }}
          >
            <img
              src={Logo}
              alt="Logo-AlphaTrades-co"
              width="70em"
              height="70em"
            />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex", positionLeft: 0 } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", ":focus": "none" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
