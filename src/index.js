import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss"
import App from "./component/App";
import Layout from "./component/Layout/Layout";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
  <App/>
      </BrowserRouter>
  {/*  <Layout/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

