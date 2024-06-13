import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EnglishIllustration from "../../ui/images/EnglishIllustration";
import GermanyIllustration from "../../ui/images/GermanyIllustration";
import ItalyIllustration from "../../ui/images/ItalyIllustration";
import GreeceIllustration from "../../ui/images/GreeceIllustration";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  left: theme.spacing(1),
}));

const initialActions = [
  { icon: <GermanyIllustration />, name: "German" },
  { icon: <ItalyIllustration />, name: "Italian" },
  { icon: <GreeceIllustration />, name: "Greek" },
];

export default function PlaygroundSpeedDial() {
  const [mainIcon, setMainIcon] = useState(<EnglishIllustration />);
  const [actions, setActions] = React.useState(initialActions);
  const [open, setOpen] = React.useState(false);
  const handleActionClick = (actionIndex: number) => {
    const newActions = [...actions];
    const clickedAction = newActions[actionIndex];

    // Swap the icons
    newActions[actionIndex] = { icon: mainIcon, name: "SpeedDialIcon" };
    setMainIcon(clickedAction.icon);
    setActions(newActions);
    setOpen(false);
  };

  const handleSpeedDialOpen = () => {
    setOpen(true);
  };

  const handleSpeedDialClose = (event: MouseEvent) => {
    if (
      (event.target as HTMLElement).closest(".MuiSpeedDial-fab") === null &&
      (event.target as HTMLElement).closest(".MuiSpeedDialAction-fab") === null
    ) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleSpeedDialClose);

    return () => {
      document.removeEventListener("click", handleSpeedDialClose);
    };
  }, []);

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box sx={{ position: "relative", mt: 3 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={mainIcon}
          FabProps={{
            sx: {
              bgcolor: "transparent",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "transparent",
                borderRadius: "3px",
                height: "3.5em",
                width: "4em",
                boxShadow: "none",
              },
            },
          }}
          direction="right"
          open={open}
          onClick={open ? () => setOpen(false) : handleSpeedDialOpen}
        >
          {actions.map((action, index) => (
            <SpeedDialAction
              key={`${action.name}-${index}`}
              icon={action.icon}
              onClick={() => handleActionClick(index)}
              FabProps={{
                sx: {
                  bgcolor: "transparent",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "transparent",
                    boxShadow: "none",
                  },
                },
              }}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
