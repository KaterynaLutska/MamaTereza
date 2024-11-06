export function generateSlug(name: string, id: number): string {
  return `${name.toLowerCase().replace(/ /g, "-")}-${id}`;
}
