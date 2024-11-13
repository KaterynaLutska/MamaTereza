export enum NavigationKeys {
  HOME = "Home",
  ABOUT = "About",
  FUNDS = "FUNDS",
  CONTACTS = "Contacts",
  PROJECTS = "Projects",
}

export type NavigationItemProps = {
  name: NavigationKeys;
  link: string;
  label: string;
};
