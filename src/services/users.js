import http from './http';

export function getAllUsers() {
  return http.get('/auth/user');
}

export function getUserById(id) {
  return http.get(`/auth/user/${id}`);
}

export function updateUserById(id, updatedUserDetails) {
  return http.patch(`/auth/user/${id}`, updatedUserDetails);
}

export function deleteUserById(id) {
  return http.delete(`/auth/user/${id}`);
}
