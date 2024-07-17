import { FC } from "react";

import Header from "../Header";
import RoutesPath from "../RoutesPath";

const BasePage: FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <RoutesPath />
      </div>
    </>
  );
};

export default BasePage;
