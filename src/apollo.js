import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = "token";
const DARK_MODE = "dark";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};
export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
};

export const darkModeVar = makeVar(true);
export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  darkModeVar(true);
};
export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  darkModeVar(false);
};

export const client = new ApolloClient({
  uri: "https://nomad-backend-guiwoo.herokuapp.com/",
  cache: new InMemoryCache(),
});
