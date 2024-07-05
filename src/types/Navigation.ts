export enum NavigationKeys {
  HOME = "HOME",
  ABOUT = "ABOUT",
  CONTACTS = "CONTACTS",
}

export type NavigationItemProps = {
  name: NavigationKeys;
  link: string;
};
