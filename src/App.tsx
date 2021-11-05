import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "./components/HomePage/component"
import Quiz from "./components/Quiz/component"
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
import history from './history';

import { configStore } from "./state/store";

const { store, persistor } = configStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/test-day" component={Quiz} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
