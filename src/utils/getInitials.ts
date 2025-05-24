export function getInitials(name: string) {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("The param should be a string not empty.");
  }

  return name.trim().charAt(0).toUpperCase();
}