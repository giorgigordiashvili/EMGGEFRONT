import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/search";

export function getSearch() {
  return http.get(apiEndpoint);
}
