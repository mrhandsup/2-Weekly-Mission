const API_URL = 'https://bootcamp-api.codeit.kr/api';

export function fetchData(url) {
  return fetch(`${API_URL}/${url}`).then(res => {
    if (!res.ok) {
      throw new Error('데이터를 불러오는데 실패했습니다.');
    }
    return res.json();
  });
}

export function getSampleUser() {
  return fetchData('sample/user');
}

export function getSampleFolder() {
  return fetchData('sample/folder');
}

export function getUsers() {
  return fetchData('users/1');
}

export function getSortingTab() {
  return fetchData('users/1/folders');
}

export function getFolders() {
  return fetchData('users/1/links');
}

export function getSearchedFolders(folderId) {
  return fetchData(`users/1/links?folderId=${folderId}`);
}
