import http from './http';

export function getAllComplaints() {
  return http.get('/complaint');
}

export function getComplaintById(id) {
  return http.get(`/complaint/${id}`);
}

export function getComplaintsByUserId(id) {
  return http.get(`/complaint/user/${id}`);
}

export function addComplaint(userId, complaint) {
  return http.post(`/complaint/user/${userId}`, complaint);
}

export function deleteComplaintById(id) {
  return http.delete(`complaint/${id}`);
}

export function updateComplaintById(id, data) {
  return http.patch(`/complaint/${id}`, data);
}
