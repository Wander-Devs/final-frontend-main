import http from './http';

export function getAllOffers() {
  return http.get('/offer');
}

export function deleteOfferById(id) {
  return http.delete(`offer/${id}`);
}

export function updateOffer(id) {
  return http.patch(`offer/${id}`);
}

export function getOfferDetails(id) {
  console.log(id);
  return http.get(`offer/${id}`);
}

export function addOffer(data) {
  return http.post('offer/add', data);
}

export function getAdsOffers(id) {
  return http.get(`offer/ad-offers/${id}`);
}

export function acceptOffer(id, status) {
  return http.patch(`offer/accept?id=${id}&status=${status}`);
}
