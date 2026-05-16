const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

export async function currentWeather(lat, lon) {
  const url = `${WEATHER_API}?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,weather_code`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
  const data = await response.json();
  const current = data.current;
  return {
    temperatura: Math.round(current.temperature_2m),
    weatherCode: current.weather_code,
    precipitacion: current.precipitation,
  };
}

export function getWeatherIcon(code) {
  if (code === 0) return 'sunny';
  if (code === 1) return 'partly-cloudy';
  if (code === 2) return 'partly-cloudy';
  if (code === 3) return 'cloudy';
  if (code >= 45 && code <= 48) return 'foggy';
  if (code >= 51 && code <= 67) return 'rainy';
  if (code >= 71 && code <= 77) return 'snowy';
  if (code >= 80 && code <= 82) return 'rainy';
  if (code >= 85 && code <= 86) return 'snowy';
  if (code >= 95 && code <= 99) return 'stormy';
  return 'cloudy';
}

export function getWeatherDescription(code) {
  if (code == null) return { texto: 'Sin datos', icono: 'cloudy' };
  if (code === 0) return { texto: 'Cielo despejado', icono: 'sunny' };
  if (code === 1) return { texto: 'Mayormente despejado', icono: 'partly-cloudy' };
  if (code === 2) return { texto: 'Parcialmente nublado', icono: 'partly-cloudy' };
  if (code === 3) return { texto: 'Nublado', icono: 'cloudy' };
  if (code >= 45 && code <= 48) return { texto: 'Niebla', icono: 'foggy' };
  if (code >= 51 && code <= 57) return { texto: 'Llovizna', icono: 'rainy' };
  if (code >= 61 && code <= 67) return { texto: 'Lluvia', icono: 'rainy' };
  if (code >= 71 && code <= 77) return { texto: 'Nieve', icono: 'snowy' };
  if (code >= 80 && code <= 82) return { texto: 'Chubascos', icono: 'rainy' };
  if (code >= 95 && code <= 99) return { texto: 'Tormenta', icono: 'stormy' };
  return { texto: 'Desconocido', icono: 'cloudy' };
}