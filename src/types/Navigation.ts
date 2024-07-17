export enum NavigationKeys {
  HOME = "Home",
  ABOUT = "About",
  CONTACTS = "Contacts",
}

export type NavigationItemProps = {
  name: NavigationKeys;
  link: string;
	label: string
};
