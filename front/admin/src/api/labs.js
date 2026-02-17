// AUTO-GENERATED from Postman collection. Edit if needed.
import http from "@/utils/http";

// labs APIs

export function getLabs(params = {}, config = {}) {
  return http({ url: "/api/labs", method: "GET", params, ...config });
}

export function putLabs4(data = {}, config = {}) {
  return http({ url: "/api/labs/4", method: "PUT", data, ...config });
}

export function deleteLabs4(params = {}, config = {}) {
  return http({ url: "/api/labs/4", method: "DELETE", params, ...config });
}

export function postLabs(data = {}, config = {}) {
  return http({ url: "/api/labs", method: "POST", data, ...config });
}
