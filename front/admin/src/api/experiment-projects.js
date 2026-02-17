// AUTO-GENERATED from Postman collection. Edit if needed.
import http from "@/utils/http";

// experiment-projects APIs

export function postExperimentprojects(data = {}, config = {}) {
  return http({ url: "/api/experiment-projects", method: "POST", data, ...config });
}

export function postExperimentprojects1Reservations(data = {}, config = {}) {
  return http({ url: "/api/experiment-projects/1/reservations", method: "POST", data, ...config });
}

export function putExperimentprojects1(data = {}, config = {}) {
  return http({ url: "/api/experiment-projects/1", method: "PUT", data, ...config });
}

export function getExperimentprojects(params = {}, config = {}) {
  return http({ url: "/api/experiment-projects", method: "GET", params, ...config });
}

export function getExperimentprojectsStatistics(params = {}, config = {}) {
  return http({ url: "/api/experiment-projects/statistics", method: "GET", params, ...config });
}
