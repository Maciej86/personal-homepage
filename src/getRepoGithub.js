import axios from "axios";

export const getRepoGithub = () =>
  axios
    .get("https://api.github.com/users/Maciej86/repos")
    .then((response) => response.data);
