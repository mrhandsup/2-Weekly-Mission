const API_URL = 'https://bootcamp-api.codeit.kr/api/sample';

export async function getProfile() {
  const response = await fetch(`${API_URL}/user`);
  const body = await response.json();

  return body;
}
