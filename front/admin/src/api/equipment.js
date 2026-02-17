// AUTO-GENERATED from Postman collection. Edit if needed.
import http from "@/utils/http";

// equipment APIs

export function getEquipment5(params = {}, config = {}) {
  return http({ url: "/api/equipment/5", method: "GET", params, ...config });
}

export function getEquipment(params = {}, config = {}) {
  return http({ url: "/api/equipment", method: "GET", params, ...config });
}

export function putEquipment5(data = {}, config = {}) {
  return http({ url: "/api/equipment/5", method: "PUT", data, ...config });
}

export function postEquipment(data = {}, config = {}) {
  return http({ url: "/api/equipment", method: "POST", data, ...config });
}

export function deleteEquipment5(params = {}, config = {}) {
  return http({ url: "/api/equipment/5", method: "DELETE", params, ...config });
}
