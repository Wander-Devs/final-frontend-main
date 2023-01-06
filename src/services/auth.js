import http from './http';

export function login(form) {
  return http.post('/auth/login', form);
}

export function logout() {
  localStorage.removeItem('gg');
}

export function getCurrentUser() {
  if (localStorage.getItem('gg')) {
    return JSON.parse(localStorage.getItem('gg'));
  }
  return null;
}

export function register(form) {
  return http.post('/auth/register', form);
}
