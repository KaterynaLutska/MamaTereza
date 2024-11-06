export enum NavigationKeys {
  HOME = "Home",
  ABOUT = "About",
  FUNDS = "FUNDS",
  CONTACTS = "Contacts",
}

export type NavigationItemProps = {
  name: NavigationKeys;
  link: string;
  label: string;
};
