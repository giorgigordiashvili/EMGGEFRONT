import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/partner";

function partnerUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPartners() {
  return http.get(apiEndpoint);
}

export function savePartner(partner) {
  if (partner._id) {
    const body = { ...partner };
    delete body._id;
    return http.put(partnerUrl(partner._id), body);
  }
  return http.post(apiEndpoint, partner);
}

export function getPartner(id) {
  return http.get(apiUrl + "/partner/" + id);
}

export function deletePartner(id) {
  return http.delete(partnerUrl(id));
}
