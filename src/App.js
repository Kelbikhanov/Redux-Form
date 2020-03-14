import React from 'react';
import './App.css';
import ApplicationForm from "./component/TestForm";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store"
import {Provider} from "react-redux";
function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <ApplicationForm/>
          </Provider>
      </BrowserRouter>

  );
}

export default App;
