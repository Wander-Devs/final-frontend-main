import http from './http';

export function getAllOrders() {
  return http.get('order/all');
}
export function deleteOrderById(id) {
  return http.delete(`order/${id}`);
}
