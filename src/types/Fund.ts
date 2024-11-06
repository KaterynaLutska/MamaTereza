import { Projects } from "./Projects";

export interface Fund {
  name: string;
  id: number;
  capital: number;
  foundedYear: number;
	imageURL: string
	info: string,
	projects: Projects
}
