export function generateSlug(name: string): string {
  return `${name.toLowerCase().replace(/ /g, "-")}`;
}
