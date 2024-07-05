import { FC } from "react";

import Header from "../Header";
import RoutesPath from "../RoutesPath";

const BasePage: FC = () => {
  return (
    <>
      <Header />
      <RoutesPath />
    </>
  );
};

export default BasePage;
