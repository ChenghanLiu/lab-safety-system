# Lab Safety Management System (MVP)

## Roles
- ADMIN: manage everything, users, analytics
- TEACHER: manage projects, approve/reject reservations
- STUDENT: browse, reserve, take exams

## Modules
- Users (register/login, profile; admin CRUD)
- Labs (admin CRUD)
- Equipment (admin CRUD; browse/search)
- Experiment Projects (teacher CRUD; student browse)
- Reservations (student submit; teacher approve/reject; admin overview)
- Training + Exam (MCQ only, record attempts/scores)
- Inspections (plan + report; simple closed loop)
- Analytics (basic charts)

## MVP Defaults
- Reservation time: startAt/endAt UTC
- Conflicts: cannot approve overlapping reservations for same lab; equipment reserves 1 unit
- Exam: MCQ, pass 70, unlimited attempts, not required for reservation
- Inspection states: OPEN -> FIXING -> FIXED -> VERIFIED


