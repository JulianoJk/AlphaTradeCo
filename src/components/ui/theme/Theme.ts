import React from "react";
import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
export interface ColorMap {
  [colorName: string]: string;
}

export interface ThemePalette {
  [colorName: string]: ColorMap;
}
export interface ExtendedTypographyOptions extends TypographyOptions {
  body2semibold: React.CSSProperties;
  body2medium: React.CSSProperties;
  body3semibold: React.CSSProperties;
  body3: React.CSSProperties;
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
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: "h5",
          subtitle2: "h6",
          body1: "p",
          body2: "p",
          body3: "p",
          body2medium: "p",
          body2semibold: "p",
          body3semibold: "p",
        },
        variant: "body2",
        fontFamily: ["Faktum", "Poppins", "sans-serif"].join(","),
      },
      styleOverrides: {
        root: { textTransform: "none", color: Palette.Mono.Navy },
        h1: {
          fontSize: 48,
          lineHeight: "52px",
          fontWeight: 700,
        },
        h2: {
          fontSize: 40,
          lineHeight: "44px",
          fontWeight: 700,
        },
        h3: {
          fontSize: 32,
          lineHeight: "40px",
          fontWeight: 700,
        },
        h4: {
          fontSize: 20,
          lineHeight: "24px",
          fontWeight: 700,
        },
        subtitle1: { fontSize: 20, lineHeight: "24px", fontWeight: 600 },
        subtitle2: { fontSize: 16, lineHeight: "20px", fontWeight: 600 },
        body1: {
          fontSize: 18,
          lineHeight: "22px",
          fontWeight: 400,
        },
        body2: {
          fontSize: 14,
          lineHeight: "18px",
          fontWeight: 400,
        },
        body3: {
          fontSize: 12,
          lineHeight: "16px",
          fontWeight: 400,
        },
        body2semibold: {
          fontSize: 14,
          lineHeight: "18px",
          fontWeight: 600,
        },
        body2medium: {
          fontSize: 14,
          lineHeight: "18px",
          fontWeight: 500,
        },
        body3semibold: {
          fontSize: 12,
          lineHeight: "16px",
          fontWeight: 600,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "& .MuiTouchRipple-root": {
            display: "none !important",
          },
          "& .MuiTouchRipple-ripple": {
            display: "none !important",
          },
          "& .MuiTouchRipple-childPulsate": {
            display: "none !important",
          },
          "& .MuiTouchRipple-ripplePulsate": {
            display: "none !important",
          },
          "& .MuiTouchRipple-rippleVisible": {
            display: "none !important",
          },
          "& .MuiTouchRipple-childLeaving": {
            display: "none !important",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
          height: 40,
          "&.Mui-selected": {
            backgroundColor: Palette.Mono.White,
            fontWeight: 600,
            color: Palette.Orange.Dark,
          },
          "&&:hover": {
            color: Palette.Orange.Medium,
            backgroundColor: Palette.Orange.BG,
            "& > div > svg": {
              fill: Palette.Orange.Medium,
            },
            "& > div > span": {
              color: Palette.Orange.Medium,
            },
            "& > .MuiTypography-root": {
              color: Palette.Orange.Dark,
            },
          },
          "&.Mui-disabled": {
            backgroundColor: Palette.Mono.White,
            color: Palette.Mono.Grey5,
            fontWeight: 400,
            "&:hover": {
              backgroundColor: Palette.Mono.White,
              color: Palette.Mono.Grey5,
              "& > div > svg": {
                fill: Palette.Mono.Grey5,
              },
              cursor: "auto",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: 14,
          "&.Mui-selectMenu": {
            "&.Mui-selectMenu": {
              paddingRight: 8,
              fontWeight: 500,
              paddingLeft: 8,
              "&&:hover": {
                color: Palette.Orange.Medium,
              },
            },
            "&&:hover": {
              color: Palette.Orange.Medium,
            },
          },
          "&&:focus": {
            background: "none",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          minWidth: 30,
        },
        contained: { "&.Mui-focusVisible": { boxShadow: "none" } },
        textPrimary: {
          "&&:hover": {
            backgroundColor: "trasparent",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        formControl: {
          "label + &": {
            marginTop: 0,
          },
        },
        underline: {
          "&:before": {
            transition: "none",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            backgroundColor: Palette.Orange.Dark,
            paddingBottom: 16,
            margin: 0,
            borderRadius: 4,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: Palette.Mono.Grey3,
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: Palette.Mono.White,
          borderColor: Palette.Mono.Navy,
          width: 32,
          minHeight: 32,
          height: 32,
          border: "solid 1.5px",
          borderRadius: 20,
          boxShadow: Palette.Mono.White,
          marginLeft: 16,
          "&:hover": {
            fill: Palette.Orange.Medium,
            borderColor: Palette.Orange.Medium,
            backgroundColor: Palette.Mono.White,
          },
          "&:active": {
            fill: Palette.Orange.Dark,
            borderColor: Palette.Orange.Dark,
            backgroundColor: Palette.Mono.White,
            boxShadow: "none",
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginLeft: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        gutters: {
          paddingLeft: 0,
          paddingRight: 8,
        },
        container: {
          paddingRight: 0,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          "&&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          outline: 0,
          "&&:focus": {
            outline: 0,
          },
        },
        padding: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        underlineHover: {
          "&&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          minWidth: 108,
          boxShadow:
            "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.1), 0px 3px 14px 2px rgba(0,0,0,0.1)",
        },
      },
    },
  },
} as ThemeOptions);
