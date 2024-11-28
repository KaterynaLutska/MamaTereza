import { FC, useContext, useEffect, useRef, useState } from "react";

import { Fund } from "@/types/Fund";
import { fetchFunds } from "@api/request";
import FundCard from "@components/FundCard";
import Loader from "@components/Loader";
import { FundsContext } from "@contexts/FundsContext";
import { FundsContextProps } from "@contexts/types/FundsContext";

const FundsPage: FC = () => {
  const [newFunds, setNewFunds] = useState<Fund[]>([]);
  const effectWasExecuted = useRef(false);

  const {
    funds,
    setFunds,
    setIsLoaded,
    isLoading,
    setIsLoading,
    compareFundsWithData,
    isAllFundsExist,
    setAllFundsExist,
  } = useContext<FundsContextProps>(FundsContext);

  const loadFunds = () => {
    if (!isAllFundsExist) {
      setIsLoading(true);
      fetchFunds()
        .then((data: Fund[]) => {
          setFunds(data);
          setNewFunds(data);
          setIsLoading(false);
          // setIsLoaded(true);
          const isAllFundsExist: boolean = compareFundsWithData(newFunds, funds);
          setAllFundsExist(isAllFundsExist);
        })
        .catch((error) => {
          console.error("Failed to load funds:", error);
          setIsLoaded(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  useEffect(() => {
    if (!effectWasExecuted.current) {
      loadFunds();
      effectWasExecuted.current = true;
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Funds</h1>
      {funds && (
        <ul className="funds_list">
          {funds.map((fund) => (
            <FundCard fund={fund} key={fund.name} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FundsPage;
