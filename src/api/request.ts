import { Fund } from "@/types/Fund";
import { ProjectsTop } from "@/types/ProjectsTop";
import { FUNDS, LOCAL_HOST, PROJECTS,  } from "@utils/constants";

export const fetchFunds = async (): Promise<Fund[]> => {
	const URL = LOCAL_HOST + FUNDS

  try {
    const response = await fetch(URL); 
    if (!response.ok) {
      throw new Error(`Error fetching funds: ${response.statusText}`);
    }
    const data: Fund[] = await response.json();
    return data || [];
   } catch (error) {
    console.error('Error fetching funds:', error);
		return []
   }
};

export const fetchTopProject = async (): Promise<ProjectsTop[]> => {
	const URL = LOCAL_HOST + PROJECTS
  try {
    const response = await fetch(URL); 
    if (!response.ok) {
      throw new Error(`Error fetching funds: ${response.statusText}`);
    }
    const data: ProjectsTop[] = await response.json();
    return data || [];
   } catch (error) {
    console.error('Error fetching funds:', error);
		return []
   }
};
