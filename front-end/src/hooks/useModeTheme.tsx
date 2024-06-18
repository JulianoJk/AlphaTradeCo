import { useAppState } from "../components/context/AppContext";

type ColorType = string;

const useModeTheme = (
  darkColor: ColorType,
  lightColor: ColorType
): ColorType => {
  const { mode } = useAppState();

  return mode === "dark" ? darkColor : lightColor;
};

export default useModeTheme;
