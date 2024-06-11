import { PaletteMode } from "@mui/material";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
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
        <WbSunnyRoundedIcon fontSize="medium" sx={{ color: "yellow" }} />
      ) : (
        <ModeNightRoundedIcon fontSize="medium" sx={{ color: "#BDBDBD" }} />
      )}
    </MenuButton>
  );
}
