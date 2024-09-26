import { HttpLink, InMemoryCache } from "@apollo/client";

export const SERVER_URI = "http://127.0.0.1:8000/api/v1/";
export const SERVER_LINK = new HttpLink({
  uri: SERVER_URI
});

export const CLIENT_NAME = "agrovar-web-app";
export const CLIENT_VERSION = "v0.1.0-dev";
export const CACHE = new InMemoryCache({});
