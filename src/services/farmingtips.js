import http from './http';

export function getAllFarmingTips() {
  return http.get('/tips');
}
export function deletefarmingTipsById(id) {
  return http.delete(`/tips/${id}`);
}

export function addTips(data) {
  return http.post('/tips', data);
}

export function getTipDetails(id) {
  console.log(id);
  return http.get(`/tips/${id}`);
}

export function updateTip(data) {
  return http.patch(`/tips/${data.id}`, data);
}
