import { Projects } from "./Projects";

export interface Fund {
  fundName: string;
  type: string;
  img: string;
  text: string;
  isActive: boolean;
  collected: number;
  left: number;
  projects: Projects;
}
