const localStorageKey = "theme";

export const saveThemeInLocalStorage = (theme) =>
  localStorage.setItem(localStorageKey, JSON.stringify(theme));

export const getThemeInLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || true;
