import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { githubSaga } from "././features/saga";
import githubReducer from "././features/slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    person: githubReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(githubSaga);

export default store;
