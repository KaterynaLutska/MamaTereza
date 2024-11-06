import { Fund } from "@/types/Fund";
import { fetchFunds } from "@api/request";
import FundCard from "@components/FundCard";
import { FC, useEffect, useState } from "react";


const AboutPage: FC = () => {
	const [funds, setFunds] =  useState<Fund[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(()=> {
	  const loadFunds = async () => {
			try {
					const data: Fund[] = await fetchFunds();
					setFunds(data); 
			} catch (error) {
				console.log(error)
			} finally {
					setLoading(false);
			}
		}
		loadFunds();
	},[])

	return (
			<div>
					<h1>Funds</h1>
					<ul className="funs_list">
					{funds.map(fund => (
        <FundCard fund={fund} key={fund.name} />
      ))}
					</ul>
			</div>
	)
};

export default AboutPage;
