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

interface Action {
  icon: JSX.Element;
  name: string;
}

const initialActions: Action[] = [
  { icon: <ItalyIllustration height="1em" />, name: "IT" },
  { icon: <GermanyIllustration height="1em" />, name: "DE" },
  { icon: <GreeceIllustration height="1em" />, name: "GR" },
];

const LanguagesMenus: React.FC = () => {
  const [open, setOpen] = useState(false);
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
        sx={{}}
        arrow
        title={
          <Box
            sx={{
              backgroundColor: "transparent",
              width: "100%",
              borderRadius: "3px",
              border: "2px solid #000000",
            }}
          >
            <List>
              {actions.map((action, index) => (
                <MenuItem
                //   sx={{ top: 8 }}
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
          size="small"
          aria-controls={open ? "language-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {mainIcon.icon}
          </Box>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default LanguagesMenus;
