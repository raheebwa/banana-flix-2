export const baseUrl = import.meta.env.VITE_APP_BASE_URL || "http://localhost:8080";

//  endpoints
export * from "./react-query/api/movie.api";
export * from "./react-query/api/user.api";

//  hooks
export * from "./react-query/hooks/movie.hook";
export * from "./react-query/hooks/user.hook";
