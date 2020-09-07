import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/projectDone";

function projectUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getProjectsDone() {
  return http.get(apiEndpoint);
}
export function deleteProjectDone(id) {
  return http.delete(projectUrl(id));
}

export function getProjectDone(projectId) {
  return http.get(projectUrl([projectId]));
}

export function saveProjectDone(project) {
  if (project._id) {
    const body = { ...project };
    delete body._id;
    return http.put(projectUrl(project._id), body);
  }
  return http.post(apiEndpoint, project);
}
