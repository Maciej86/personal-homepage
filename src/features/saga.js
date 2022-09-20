import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getRepoGithub } from "../getRepoGithub";
import {
  fetchRepoGithub,
  fetchRepoGithubError,
  fetchRepoGithubSucces,
} from "./slice";

function* fetchRepoGithubHendler() {
  try {
    yield delay(2500);
    const repoGithub = yield call(getRepoGithub);
    yield put(fetchRepoGithubSucces(repoGithub));
  } catch (error) {
    yield put(fetchRepoGithubError());
    console.error(error);
  }
}

export function* githubSaga() {
  yield takeEvery(fetchRepoGithub.type, fetchRepoGithubHendler);
}
