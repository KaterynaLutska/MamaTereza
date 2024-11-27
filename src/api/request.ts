import axios, { AxiosResponse } from "axios";

import { Fund } from "@/types/Fund";
import { Project } from "@/types/Project";
import { PATH, URL_BACK } from "@utils/constants";

const { PROJECTS_TOP, PROJECTS, FUNDS } = PATH;

export const fetchFunds = async (): Promise<Fund[]> => {
  const URL = URL_BACK + FUNDS;
  return axios
    .get<Fund[]>(URL)
    .then((response) => response.data || [])
    .catch((error) => {
      console.error("Error fetching funds:", error);
      return [];
    });
};

export const fetchFundsBySlug = async (slug: string): Promise<Fund> => {
  const URL = URL_BACK + FUNDS + `/` + slug;
  return axios
    .get<Fund>(URL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Failed to fetch fund by ID:", error);
      throw error;
    });
};

export const fetchProjects = async (): Promise<Project[]> => {
  const URL = URL_BACK + PROJECTS;

  return axios
    .get<Project[]>(URL)
    .then((response) => response.data || [])
    .catch((error) => {
      console.error("Error fetching projects:", error);
      return [];
    });
};

export const fetchTopProjects = async (): Promise<Project[]> => {
  const URL = URL_BACK + PROJECTS_TOP;
  return axios
    .get<Project[]>(URL)
    .then((response) => response.data || [])
    .catch((error) => {
      console.error("Error fetching top projects:", error);
      return [];
    });
};

export const fetchNewCollectedAmount = async (amount: number, slug: string | undefined, id: number) => {
  const URL = `${URL_BACK}${FUNDS}/${slug}/${id}`;

  const requestConfig = {
    method: "put",
    url: URL,
    data: { collected: amount },
    headers: { "Content-Type": "application/json" },
  };

  return axios(requestConfig)
    .then(async (response) => {
      await fetchProjects();
      return response.data || [];
    })
    .catch((error) => {
      console.error("Failed to update donation:", error);
      throw error;
    });
};
