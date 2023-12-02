const API_URL = 'https://bootcamp-api.codeit.kr/api';

export function getSampleUser() {
  return fetch(`${API_URL}/sample/user`).then(res => res.json());
}

export function getSampleFolder() {
  return fetch(`${API_URL}/sample/folder`).then(res => res.json());
}

export function getUsers() {
  return fetch(`${API_URL}/users/1`).then(res => res.json());
}

export function getSortingTab() {
  return fetch(`${API_URL}/users/1/folders`).then(res => res.json());
}

export function getFolders() {
  return fetch(`${API_URL}/users/1/links`).then(res => res.json());
}

export function getSearchedFolders(folderId) {
  return fetch(`${API_URL}/users/1/links?folderId=${folderId}`).then(res => res.json());
}
