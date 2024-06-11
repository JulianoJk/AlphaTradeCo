import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
export interface ColorMap {
  [colorName: string]: string;
}

export interface ThemePalette {
  [colorName: string]: ColorMap;
}

const Palette: ThemePalette = {
  Mono: {
    Grey1: "#F7FAFF",
    Grey2: "#DFE7F5",
    Grey3: "#CED9EB",
    Grey4: "#ABB8CF",
    Grey5: "#7989A6",
    Grey6: "#526482",
    Navy: "#191530",
    Charcoal: "#31312d",
    White: "#FFFFFF",
  },
  Red: {
    Red1: "#F8DDDF",
    Red2: "#F2BABF",
    Red3: "#EC989F",
    Red4: "#E6757E",
    Red5: "#DF535E",
  },
  Cyan: {
    Cyan1: "#DEF4F7",
    Cyan2: "#BCEAF0",
    Cyan3: "#9BE0E9",
    Cyan4: "#79D5E2",
    Cyan5: "#58CBDA",
  },
  Blue: {
    Medium: "#007CB6",
    Dark: "#003C71",
    Light: "#7BCCF1",
    BG: "#B9E1F9",
  },
  Teal: {
    Medium: "#008291",
    Dark: "#154B5B",
    Light: "#78D5E1",
    BG: "#B9E9ED",
  },
  Orange: {
    Medium: "#DA3441",
    Dark: "#892937",
    Light: "#F99C90",
    BG: "#F9D2C4",
  },
  Purple: {
    Medium: "#963CBD",
    Dark: "#512179",
    Light: "#C693DC",
    BG: "#DEBEEB",
  },
  Green: {
    Medium: "#008851",
    Dark: "#1B4F3C",
    Light: "#76DEAB",
    BG: "#D3EFD4",
  },
  Yellow: {
    Medium: "#F6C26D",
    Dark: "#976D19",
    Light: "#EFE2BA",
    Gold: "#FFD700",
  },
};
export const theme: Theme = createTheme({
  palette: {
    common: {
      black: Palette.Mono.Charcoal,
      gold: Palette.Yellow.Gold,
      white: Palette.Mono.White,
    },
    primary: {
      main: Palette.Yellow.Medium,
      light: Palette.Yellow.Light,
      dark: Palette.Yellow.Dark,
    },
    secondary: {
      main: Palette.Yellow.Dark,
      light: Palette.Orange.BG,
      dark: Palette.Orange.Dark,
    },
    grey: {
      "100": Palette.Mono.Grey1,
      "200": Palette.Mono.Grey2,
      "300": Palette.Mono.Grey3,
      "400": Palette.Mono.Grey4,
      "500": Palette.Mono.Grey5,
      "600": Palette.Mono.Grey6,
    },
    red: {
      "100": Palette.Red.Red1,
      "200": Palette.Red.Red2,
      "300": Palette.Red.Red3,
      "400": Palette.Red.Red4,
      "500": Palette.Red.Red5,
    },
    cyan: {
      "100": Palette.Cyan.Cyan1,
      "200": Palette.Cyan.Cyan2,
      "300": Palette.Cyan.Cyan3,
      "400": Palette.Cyan.Cyan4,
      "500": Palette.Cyan.Cyan5,
    },
    Orange: {
      medium: Palette.Orange.Medium,
      dark: Palette.Orange.Dark,
      light: Palette.Orange.Light,
      bg: Palette.Orange.BG,
    },
    blue: {
      medium: Palette.Blue.Medium,
      dark: Palette.Blue.Dark,
      light: Palette.Blue.Light,
      bg: Palette.Blue.BG,
    },

    teal: {
      medium: Palette.Teal.Medium,
      dark: Palette.Teal.Dark,
      light: Palette.Teal.Light,
      bg: Palette.Teal.BG,
    },
    orange: {
      medium: Palette.Orange.Medium,
      dark: Palette.Orange.Dark,
      light: Palette.Orange.Light,
      bg: Palette.Orange.BG,
    },
    purple: {
      medium: Palette.Purple.Medium,
      dark: Palette.Purple.Dark,
      light: Palette.Purple.Light,
      bg: Palette.Purple.BG,
    },
    green: {
      medium: Palette.Green.Medium,
      dark: Palette.Green.Dark,
      light: Palette.Green.Light,
      bg: Palette.Green.BG,
    },
    yellow: {
      medium: Palette.Yellow.Medium,
      light: Palette.Yellow.light,
    },
    action: {
      disabledBackground: Palette.Mono.Grey3,
      disabled: Palette.Mono.White,
    },
  },
} as ThemeOptions);
