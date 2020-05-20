import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/contact";

function contactUrl(id) {
  return `${apiEndpoint}/${id}`;
}
export function getContacts() {
  return http.get(apiUrl + "/contact/");
}

export function saveContact(letter) {
  return http.post(apiEndpoint, letter);
}

export function getContact(id) {
  return http.get(apiUrl + "/contact/" + id);
}

export function deleteCareer(id) {
  return http.delete(contactUrl(id));
}
