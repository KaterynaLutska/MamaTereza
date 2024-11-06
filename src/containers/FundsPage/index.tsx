import { FC, useContext } from "react";

import FundCard from "@components/FundCard";
import { FundsContext } from "@contexts/FundsContext";
import { FundsContextProps } from "@contexts/types/FundsContext";
import Loader from "@components/Loader";

const FundsPage: FC = () => {
  const { funds, isLoaded } = useContext<FundsContextProps>(FundsContext);

  if (!isLoaded) {
    return <Loader/>
  }
  return (
    <div>
      <h1>Funds</h1>
      {isLoaded && (
        <ul className="funs_list">
          {funds.map((fund) => (
            <FundCard fund={fund} key={fund.name} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FundsPage;
