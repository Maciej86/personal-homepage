import { createSlice } from "@reduxjs/toolkit";
import { getThemeInLocalStorage } from "./Theme/themeLocalStorage";

const githubSlice = createSlice({
  name: "github",
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
    changeTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const {
  fetchRepoGithub,
  fetchRepoGithubSucces,
  fetchRepoGithubError,
  changeTheme,
} = githubSlice.actions;

export const selectRepo = (state) => state.github;
export const selectRepoState = (state) => selectRepo(state).repo;
export const selectRepoLoading = (state) => selectRepo(state).loading;
export const selectTheme = (state) => selectRepo(state).theme;

export default githubSlice.reducer;
