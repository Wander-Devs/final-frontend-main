import http from './http';

export function getAllPost() {
  return http.get('/post');
}

export function addPost(userId, post) {
  return http.post(`/post/user/${userId}`, post);
}

export function deletePostById(id) {
  return http.delete(`/post/${id}`);
}

export function updatePostById(id, updatedPost) {
  return http.patch(`/post/${id}`, updatedPost);
}

export function getPostDetails(id) {
  return http.get(`/post/${id}`);
}
