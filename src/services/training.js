import http from './http';

export function getAlltraining() {
  return http.get('/training');
}
export function deletefarmingTipsById(id) {
  return http.delete(`training/${id}`);
}

export function addTips(data) {
  return http.post('training', data);
}

export function getTipDetails(id) {
  return http.get(`training/${id}`);
}

export function updateTip(data) {
  return http.patch(`training/${data.id}`, data);
}
