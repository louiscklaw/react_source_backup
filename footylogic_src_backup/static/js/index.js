import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './index.css';
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

// function userRedirect(nextState, replace) {
//   var defaultLanguage = 'en-gb';
//   var redirectPath = defaultLanguage + nextState.location.pathname
//   replace({
//     pathname: redirectPath,
//   })
// };
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Route path="/:lang?" render={(props) => <App {...props} />} />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
