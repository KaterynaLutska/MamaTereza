import { Project } from "@/types/Project";

export function getProjectsByFund(fundId: number, projects: Project[]): Project[] {
  return projects.filter((project) => project.fundId === fundId);
}
