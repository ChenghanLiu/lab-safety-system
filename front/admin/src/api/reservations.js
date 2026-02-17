// AUTO-GENERATED from Postman collection. Edit if needed.
import http from "@/utils/http";

// reservations APIs

export function putReservations2Approve(data = {}, config = {}) {
  return http({ url: "/api/reservations/2/approve", method: "PUT", data, ...config });
}

export function postReservations(data = {}, config = {}) {
  return http({ url: "/api/reservations", method: "POST", data, ...config });
}

export function putReservations5Cancel(data = {}, config = {}) {
  return http({ url: "/api/reservations/5/cancel", method: "PUT", data, ...config });
}

export function putReservations7CancelAdmin(data = {}, config = {}) {
  return http({ url: "/api/reservations/7/cancel/admin", method: "PUT", data, ...config });
}

export function getReservationsMy(params = {}, config = {}) {
  return http({ url: "/api/reservations/my", method: "GET", params, ...config });
}

export function getReservationsPending(params = {}, config = {}) {
  return http({ url: "/api/reservations/pending", method: "GET", params, ...config });
}

export function getReservations(params = {}, config = {}) {
  return http({ url: "/api/reservations", method: "GET", params, ...config });
}

export function getReservationsStats(params = {}, config = {}) {
  return http({ url: "/api/reservations/stats", method: "GET", params, ...config });
}
