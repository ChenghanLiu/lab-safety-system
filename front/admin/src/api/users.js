// AUTO-GENERATED from Postman collection. Edit if needed.
import http from "@/utils/http";

// users APIs

export function getUsers(params = {}, config = {}) {
  return http({ url: "/api/users", method: "GET", params, ...config });
}

export function postUsers(data = {}, config = {}) {
  return http({ url: "/api/users", method: "POST", data, ...config });
}

export function getUsers40(params = {}, config = {}) {
  return http({ url: "/api/users/40", method: "GET", params, ...config });
}

export function putUsers40(data = {}, config = {}) {
  return http({ url: "/api/users/40", method: "PUT", data, ...config });
}

export function deleteUsers40(params = {}, config = {}) {
  return http({ url: "/api/users/40", method: "DELETE", params, ...config });
}
