export function isLoggedIn() {
  return JSON.parse(localStorage.getItem("token"));
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user_credentials"));
}
