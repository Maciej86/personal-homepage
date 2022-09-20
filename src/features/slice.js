import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "github",
  initialState: {
    repo: [],
    loading: "",
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
  },
});

export const { fetchRepoGithub, fetchRepoGithubSucces, fetchRepoGithubError } =
  githubSlice.actions;

export const selectRepo = (state) => state.github;
export const selectRepoState = (state) => selectRepo(state).repo;
export const selectRepoLoading = (state) => selectRepo(state).loading;

export default githubSlice.reducer;
