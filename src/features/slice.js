import { createSlice } from "@reduxjs/toolkit";
import { getThemeInLocalStorage } from "./Theme/themeLocalStorage";

const personSlice = createSlice({
  name: "person",
  initialState: {
    repo: [],
    status: "initial",
    theme: getThemeInLocalStorage(),
  },
  reducers: {
    fetchRepoGithub: (state) => {
      state.status = "loading";
    },
    fetchRepoGithubSucces: (state, { payload: fetchRepo }) => {
      state.repo = fetchRepo;
      state.status = "success";
    },
    fetchRepoGithubError: (state) => {
      state.status = "error";
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
export const selectRepoStatus = (state) => selectRepo(state).status;
export const selectTheme = (state) => selectRepo(state).theme;

export default personSlice.reducer;
