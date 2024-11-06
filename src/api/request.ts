import axios from "axios";

import { Fund } from "@/types/Fund";
import { Project } from "@/types/Project";
import { FUNDS, LOCAL_HOST, PROJECTS } from "@utils/constants";

export const fetchFunds = async (): Promise<Fund[]> => {
  const URL = LOCAL_HOST + FUNDS;

  try {
    const response = await axios.get<Fund[]>(URL);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching funds:", error);
    return [];
  }
};

export const fetchTopProject = async (): Promise<Project[]> => {
  const URL = LOCAL_HOST + PROJECTS;
  try {
    const response = await axios.get<Project[]>(URL);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching funds:", error);
    return [];
  }
};
