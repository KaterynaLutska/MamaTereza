import { FC, useContext, useEffect, useState } from "react";

import { Fund } from "@/types/Fund";
import { fetchFunds } from "@api/request";
import FundCard from "@components/FundCard";
import Loader from "@components/Loader";
import { FundsContext } from "@contexts/FundsContext";
import { FundsContextProps } from "@contexts/types/FundsContext";

const FundsPage: FC = () => {
  const [newFunds, setNewFunds] = useState<Fund[]>([]);
  const {
    funds,
    setFunds,
    fundsBySlug,
    isLoaded,
    setIsLoaded,
    isLoading,
    setIsLoading,
    compareFundsWithData,
    isAllFundsExist,
    setAllFundsExist,
  } = useContext<FundsContextProps>(FundsContext);

  const loadFunds = () => {
    if (!isLoaded && !isLoading && !isAllFundsExist) {
      fetchFunds()
        .then((data: Fund[]) => {
          setFunds(data);
          setNewFunds(data);
          setIsLoaded(false);
          setIsLoading(true);
          const isAllFundsExist: boolean = compareFundsWithData(newFunds, funds);
          setAllFundsExist(isAllFundsExist);
        })
        .catch((error) => {
          console.error("Failed to load funds:", error);
        })
        .finally(() => {
          setIsLoaded(true);
          setIsLoading(false);

          console.log("is Loaded", isLoaded);
          console.log("is isLoading", isLoading);
        });
    }
  };

  useEffect(() => {
    loadFunds();
    console.log("Loaded", isLoaded);
    console.log("Loading", isLoading);
  }, []);

  console.log("fundsBySlug", fundsBySlug);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Funds</h1>
      {isLoaded && (
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
