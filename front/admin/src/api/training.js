// AUTO-GENERATED from Postman collection. Edit if needed.
import http from "@/utils/http";

// training APIs

export function postTrainingCourses(data = {}, config = {}) {
  return http({ url: "/api/training/courses", method: "POST", data, ...config });
}

export function postTrainingCourses1Enroll(data = {}, config = {}) {
  return http({ url: "/api/training/courses/1/enroll", method: "POST", data, ...config });
}

export function postTrainingCourses1AttemptsStart(data = {}, config = {}) {
  return http({ url: "/api/training/courses/1/attempts/start", method: "POST", data, ...config });
}
