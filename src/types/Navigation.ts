export enum NavigationKeys {
  HOME = "HOME",
  ABOUT = "ABOUT",
  CONTACTS = "CONTACTS",
}

export type NavigationProps = {
  name: NavigationKeys;
  link: string;
};
