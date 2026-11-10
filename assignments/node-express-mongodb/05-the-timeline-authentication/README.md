# Assignment 5 - The timeline Authentication

- **Lecture id:** 356
- **Stage:** 5 of 5
- **Status:** not started

## Task

Add user accounts to The Timeline: signup, login, sessions and JWT, so that only the author of an
entry can edit or delete it.

## Notes

- Passwords are hashed, never stored in plain text
- JWT in an httpOnly cookie or an Authorization header, whichever the lecture uses
- Protected routes reject unauthenticated requests with 401
- Signup and login forms with server-side validation
