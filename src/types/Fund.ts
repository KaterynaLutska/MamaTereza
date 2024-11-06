import { Project } from "./Project";

export interface Fund {
  name: string;
  id: number;
  capital: number;
  foundedYear: number;
  imageURL: string;
  info: string;
  projects: Project[];
}
