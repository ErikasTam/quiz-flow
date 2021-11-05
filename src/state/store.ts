import storageSession from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import { AnyAction, createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./reducer";

const persistConfig = {
  key: "quiz-flow-boilerplate",
  storage: storageSession,
};

export const configStore = () => {
  const persistedReducer = persistReducer(persistConfig, reducer);
  let store: Store<{}, AnyAction> = createStore(
    persistedReducer,
    devToolsEnhancer({})
  );

  return {
    store,
    persistor: persistStore(store),
  };
};
