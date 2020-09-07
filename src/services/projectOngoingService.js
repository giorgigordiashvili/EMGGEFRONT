import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/projectOngoing";

function projectUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getProjectsOngoing() {
  return http.get(apiEndpoint);
}
export function deleteProjectOngoing(id) {
  return http.delete(projectUrl(id));
}

export function getProjectOngoing(projectId) {
  return http.get(projectUrl([projectId]));
}

export function saveProjectOngoing(project) {
  if (project._id) {
    const body = { ...project };
    delete body._id;
    return http.put(projectUrl(project._id), body);
  }
  return http.post(apiEndpoint, project);
}
