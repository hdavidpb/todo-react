import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";

import Header from "./components/header";
import Form from "./components/form";
import Aside from "./components/aside";
import { DataProvider } from "./components/dataProvider";

function App() {
  return (
    <Fragment>
      <DataProvider>
        <Header>
          <Form />
        </Header>
      </DataProvider>
      <Aside />
    </Fragment>
  );
}

export default App;
