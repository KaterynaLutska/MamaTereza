import axios from "axios";

import { Fund } from "@/types/Fund";
import { Project } from "@/types/Project";
import { PATH, URL_BACK } from "@utils/constants";

const { PROJECTS_TOP, PROJECTS, FUNDS } = PATH;

export const fetchFunds = async (): Promise<Fund[]> => {
  const URL = URL_BACK + FUNDS;

  try {
    const response = await axios.get<Fund[]>(URL);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching funds:", error);
    return [];
  }
};

export const fetchProjects = async (): Promise<Project[]> => {
  const URL = URL_BACK + PROJECTS;

  try {
    const response = await axios.get<Project[]>(URL);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching funds:", error);
    return [];
  }
};

export const fetchTopProjects = async (): Promise<Project[]> => {
  const URL = URL_BACK + PROJECTS_TOP;

  try {
    const response = await axios.get<Project[]>(URL);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching funds:", error);
    return [];
  }
};

export const fetchNewCollectedAmount = async (amount: number, slug: string | undefined, id: number) => {
  const URL = URL_BACK + `/funds/${slug}/${id}`;

  try {
    const response = await axios.put(
      URL,
      { collected: amount },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    await fetchProjects();
    return response.data || [];
  } catch (error) {
    console.error("Failed to update donation:", error);
  }
};
