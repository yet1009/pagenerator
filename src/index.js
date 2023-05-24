import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { HashRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'mobx-react';
import MainLayout from "./views/layout/MainLayout";
import Test from "./views/page/Test";

export const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const Main = () => {

    return (
        <>
            <MainLayout />
            {/*<Test />*/}
        </>
    )
}

root.render(
  <Provider>
      <Router>
        <Main />
      </Router>
  </Provider>
);
