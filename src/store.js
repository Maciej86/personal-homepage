import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { githubSaga } from "./saga";
import githubReducer from "./slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    github: githubReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(githubSaga);

export default store;
