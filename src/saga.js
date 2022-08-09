import { takeEvery, call, put } from "redux-saga/effects";
import { getRepoGithub } from "./getRepoGithub";
import { fetchRepoGithub, fetchRepoGithubSucces } from "./slice";

function* fetchRepoGithubHendler() {
  try {
    const repoGithub = yield call(getRepoGithub);
    yield put(fetchRepoGithubSucces(repoGithub));
  } catch (error) {
    console.log(error);
  }
}

export function* githubSaga() {
  yield takeEvery(fetchRepoGithub.type, fetchRepoGithubHendler);
}
