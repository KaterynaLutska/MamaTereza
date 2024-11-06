import { FC, useContext, useEffect, useState } from "react";

import { Fund } from "@/types/Fund";
import { fetchFunds } from "@api/request";
import FundCard from "@components/FundCard";
import { StoreContext } from "@contexts/StoreContext";
import { StoreContextProps } from "@contexts/types/StoreContext";


const AboutPage: FC = () => {
	const { funds} = useContext<StoreContextProps>(StoreContext)

  return (
    <div>
      <h1>Funds</h1>
      <ul className="funs_list">
        {funds.map((fund) => (
          <FundCard fund={fund} key={fund.name} />
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
