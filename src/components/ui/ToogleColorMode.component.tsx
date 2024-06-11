import { PaletteMode, useTheme } from "@mui/material";
// import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import MenuButton from "./MenuButton.component";
import LightModeIcon from "@mui/icons-material/LightMode";
interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function ToggleColorMode({
  mode,
  toggleColorMode,
}: ToggleColorModeProps) {
  const theme = useTheme();

  return (
    <MenuButton
      onClick={toggleColorMode}
      size="small"
      aria-label="button to toggle theme"
    >
      {mode === "dark" ? (
        <LightModeIcon
          fontSize="medium"
          sx={{ color: theme.palette.common.white }}
        />
      ) : (
        <ModeNightRoundedIcon
          fontSize="medium"
          sx={{ color: theme.palette.common.black }}
        />
      )}
    </MenuButton>
  );
}
