import { Fund } from "@/types/Fund";

export function findFundById(funds: Fund[], id: number): Fund | undefined {
  return funds.find((fund) => fund.id === id);
}
