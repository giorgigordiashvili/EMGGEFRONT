import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/subscribe";

function subscribeUrl(id) {
  return `${apiEndpoint}/${id}`;
}
export function getSubscribes() {
  return http.get(apiUrl + "/subscribe/");
}

export function saveSubscribe(letter) {
  return http.post(apiEndpoint, letter);
}

export function getSubscribe(id) {
  return http.get(apiUrl + "/contact/" + id);
}

export function deleteSubscribe(id) {
  return http.delete(subscribeUrl(id));
}
