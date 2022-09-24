import { createSlice } from "@reduxjs/toolkit";
import { getThemeInLocalStorage } from "./Theme/themeLocalStorage";

const personSlice = createSlice({
  name: "person",
  initialState: {
    repo: [],
    loading: "",
    theme: getThemeInLocalStorage(),
  },
  reducers: {
    fetchRepoGithub: (state) => {
      state.loading = "loading";
    },
    fetchRepoGithubSucces: (state, { payload: fetchRepo }) => {
      state.repo = fetchRepo;
      state.loading = "success";
    },
    fetchRepoGithubError: (state) => {
      state.loading = "error";
    },
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const {
  fetchRepoGithub,
  fetchRepoGithubSucces,
  fetchRepoGithubError,
  toggleTheme,
} = personSlice.actions;

export const selectRepo = (state) => state.person;
export const selectRepoState = (state) => selectRepo(state).repo;
export const selectRepoLoading = (state) => selectRepo(state).loading;
export const selectTheme = (state) => selectRepo(state).theme;

export default personSlice.reducer;
