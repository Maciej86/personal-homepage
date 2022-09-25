const color = {
  whiteLilac: "rgb(251,251,254)",
  white: "rgb(255,255,255)",
  mineShaft: "rgb(37,37,37)",
  slateGray: "rgb(110,126,145)",
  scienceBlue: "rgb(3,102,214)",
  iron: "rgba(209,213,218, .3)",
  gallery: "rgb(235,235,235)",
  dodgerBlue: "rgb(33,136,255)",
  violet: "rgba(9, 10, 51, 0.1)",
  codGray: "rgba(54, 54, 54, 0.72)",
};

export const ThemeLight = {
  color: {
    background: color.whiteLilac,
    backgroundTile: color.white,
    buttonText: color.white,
    buttonTheme: color.slateGray,
    buttonThemeBackground: color.iron,
    buttonBackground: color.scienceBlue,
    textColor: color.mineShaft,
    textColorLight: color.slateGray,
    textBlue: color.scienceBlue,
    border: color.iron,
    shadowTile: color.violet,
  },
  radius: "4px",
};

export const ThemeDark = {
  color: {
    background: color.mineShaft,
    backgroundTile: color.codGray,
    buttonText: color.white,
    buttonTheme: color.white,
    buttonThemeBackground: color.iron,
    buttonBackground: color.dodgerBlue,
    textColor: color.gallery,
    textColorLight: color.gallery,
    textBlue: color.scienceBlue,
    border: color.iron,
    shadowTile: color.violet,
  },
  radius: "4px",
};
