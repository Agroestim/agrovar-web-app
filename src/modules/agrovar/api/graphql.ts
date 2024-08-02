import { HttpLink, InMemoryCache } from "@apollo/client";
export const SERVER_URI = "https://127.0.0.1:8000/api/v1/";

export const CLIENT_NAME = "agrovar-web-app";

export const CLIENT_VERSION = "v0.1.0-dev";

export const CLIENT_HEADERS = {
  Authorization: "none"
};

export const SERVER_LINK = new HttpLink({
  uri: SERVER_URI,
  credentials: "inlcude"
});

export const CLIENT_CACHE = new InMemoryCache({});
