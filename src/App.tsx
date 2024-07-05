import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import BasePage from "./containers/BasePage";

const App: FC = () => {
  return (
    <Router>
      <BasePage />
    </Router>
  );
};
export default App;
