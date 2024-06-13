import { PaletteMode, Tooltip } from "@mui/material";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import MenuButton from "./MenuButton.component";

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function ToggleColorMode({
  mode,
  toggleColorMode,
}: ToggleColorModeProps) {
  return (
    <MenuButton
      onClick={toggleColorMode}
      size="small"
      aria-label="button to toggle theme"
    >
      {mode === "dark" ? (
        <WbSunnyRoundedIcon fontSize="medium" sx={{ color: "#FFD700" }} />
      ) : (
        <ModeNightOutlinedIcon fontSize="medium" sx={{ color: "#151515" }} />
      )}
    </MenuButton>
  );
}
