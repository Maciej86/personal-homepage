import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "github",
  initialState: {
    repo: [],
    loading: false,
  },
  reducers: {
    fetchRepoGithub: () => {},
    fetchRepoGithubSucces: (state, { payload: fetchRepo }) => {
      state.repo = fetchRepo;
      state.loading = true;
    },
  },
});

export const { fetchRepoGithub, fetchRepoGithubSucces } = githubSlice.actions;

export const selectRepo = (state) => state.repo;

export default githubSlice.reducer;
