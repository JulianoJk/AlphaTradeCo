import React, { useState, JSX } from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  Box,
  IconButton,
  List,
  ListItem,
  MenuItem,
  Typography,
} from "@mui/material";
import EnglishIllustration from "../../ui/images/EnglishIllustration";
import ItalyIllustration from "../../ui/images/ItalyIllustration";
import GermanyIllustration from "../../ui/images/GermanyIllustration";
import GreeceIllustration from "../../ui/images/GreeceIllustration";
import { useAppState } from "../../context/AppContext";

interface Action {
  icon: JSX.Element;
  name: string;
}

const initialActions: Action[] = [
  { icon: <ItalyIllustration height="1em" />, name: "IT" },
  { icon: <GermanyIllustration height="1em" />, name: "DE" },
  { icon: <GreeceIllustration height="1em" />, name: "GR" },
];

const LanguagesMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { mode } = useAppState();
  const [mainIcon, setMainIcon] = useState<Action>({
    icon: <EnglishIllustration height="1em" />,
    name: "EN",
  });
  const [actions, setActions] = useState<Action[]>(initialActions);

  const handleClick = (actionIndex: number) => {
    const newActions = [...actions];
    const clickedAction = newActions[actionIndex];

    newActions[actionIndex] = {
      icon: mainIcon.icon,
      name: mainIcon.name,
    };

    setMainIcon(clickedAction);
    setActions(newActions);
    setOpen(false);
  };

  return (
    <>
      <Tooltip
        open={open}
        sx={{
          "&.MuiTooltip-tooltipArrow": { backgroundColor: "transparent" },
        }}
        arrow
        title={
          <Box
            sx={{
              backgroundColor: "transparent",
              width: "100%",
              borderRadius: "6px",
              border:
                mode === "dark" ? "2px solid #68665f" : "2px solid #c0c0b5",

              marginTop: "-4px",
            }}
          >
            <List>
              {actions.map((action, index) => (
                <MenuItem
                  sx={{
                    borderRadius: "10em",
                    "&.MuiMenuItem-root:hover": {
                      borderRadius: "0.2em",
                      backgroundColor: mode === "light" ? "#9d9c9c70" : "#444444",
                      //   #
                    },
                  }}
                  key={action.name}
                  onClick={() => handleClick(index)}
                >
                  <ListItem
                    disablePadding
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {action.icon}
                    <Typography
                      sx={{
                        fontSize: "1em",
                        fontWeight: "bold",
                      }}
                    >
                      {action.name}
                    </Typography>
                  </ListItem>
                </MenuItem>
              ))}
            </List>
          </Box>
        }
      >
        <IconButton
          onClick={() => setOpen(!open)}
          aria-controls={open ? "language-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableRipple
          disableTouchRipple
          sx={{ ml: -2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {mainIcon.icon}
          </Box>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default LanguagesMenu;
