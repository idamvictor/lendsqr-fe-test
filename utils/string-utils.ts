export const getInitials = (name: string): string => {
  // Trim whitespace and handle multiple spaces
  const nameArray = name.trim().split(/\s+/).filter(n => n);
  const firstInitial = nameArray[0] ? nameArray[0][0] : "";
  const secondInitial = nameArray[1] ? nameArray[1][0] : "";
  return (firstInitial + secondInitial).toUpperCase();
};