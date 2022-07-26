import { takeEvery, call, put, delay, select } from "redux-saga/effects";
import { getRepoGithub } from "../getRepoGithub";
import {
  toggleTheme,
  fetchRepoGithub,
  fetchRepoGithubError,
  fetchRepoGithubSucces,
  selectTheme,
} from "./slice";
import { saveThemeInLocalStorage } from "./Theme/themeLocalStorage";

function* fetchRepoGithubHendler() {
  try {
    yield delay(1500);
    const repoGithub = yield call(getRepoGithub);
    yield put(fetchRepoGithubSucces(repoGithub));
  } catch (error) {
    yield put(fetchRepoGithubError());
    console.error(error);
  }
}

function* toggleThemeHendler() {
  const theme = yield select(selectTheme);
  yield call(saveThemeInLocalStorage, theme);
}

export function* githubSaga() {
  yield takeEvery(fetchRepoGithub.type, fetchRepoGithubHendler);
  yield takeEvery(toggleTheme.type, toggleThemeHendler);
}
