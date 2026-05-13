const BASE_URL = 'http://localhost:3000';

export async function register(userData) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.json();
}

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.json();
}

export async function logout() {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'GET',
    credentials: 'include',
  });
  return response.json();
}

export async function getRecommendation(temperatura = 20) {
  const response = await fetch(
    `${BASE_URL}/drinks/recommendation?temperatura=${temperatura}`,
    { credentials: 'include' }
  );
  return response.json();
}

export async function getDrinksToday() {
  const response = await fetch(`${BASE_URL}/drinks`, {
    credentials: 'include'
  });
  return response.json();
}

export async function registerDrink(beverage_id, cantidad_ml) {
  const response = await fetch(`${BASE_URL}/drinks`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ beverage_id, cantidad_ml })
  });
  return response.json();
}