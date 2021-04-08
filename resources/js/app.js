import ReactDOM from "react-dom";
import App from "./components/src/App";
import React from "react";
import {Provider} from "react-redux";
import store from "./components/src/redux/store/store";

require('./bootstrap');

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('root'));
}
