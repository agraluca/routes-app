import { getUser } from "./auth";

export const permissionTypes = {
  HOME: "HOME",
  ADMIN: "ADMIN",
};

export const hasPermission = (permission) => {
  const userPermission = getUser();
  if (permission === permissionTypes.HOME) return true;
  if (userPermission) {
    return userPermission.profile.includes(permission);
    // return userPermission.profile === permission; when profile is not a array
  }
  return false;
};
