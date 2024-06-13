import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(2),
  left: theme.spacing(2),
}));

const initialActions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function PlaygroundSpeedDial() {
  const [mainIcon, setMainIcon] = useState(<SpeedDialIcon />);
  const [actions, setActions] = React.useState(initialActions);
  const [open, setOpen] = React.useState(false);

  const handleActionClick = (actionIndex: number) => {
    const newActions = [...actions];
    const clickedAction = newActions[actionIndex];

    // Swap the icons
    newActions[actionIndex] = { icon: mainIcon, name: "SpeedDialIcon" };
    setMainIcon(clickedAction.icon);
    setActions(newActions);
    setOpen(false); // Close the SpeedDial after an action is clicked
  };

  const handleSpeedDialOpen = () => {
    setOpen(true);
  };

  const handleSpeedDialClose = (event: MouseEvent) => {
    // Close only if the click is outside the SpeedDial or an action is clicked
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
      <Box sx={{ position: "relative", mt: 3, height: 320 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={mainIcon}
          direction="right"
          open={open}
          onClick={open ? () => setOpen(false) : handleSpeedDialOpen}
        >
          {actions.map((action, index) => (
            <SpeedDialAction
              key={`${action.name}-${index}`}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleActionClick(index)}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
