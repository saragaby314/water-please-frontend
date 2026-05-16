import { useState, useEffect } from 'react';
import { currentWeather, getWeatherDescription } from '../services/apiTiempo';

const DEFAULT_LAT = 43.2630;
const DEFAULT_LON = -2.9350;

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => cargarClima(pos.coords.latitude, pos.coords.longitude),
        () => cargarClima(DEFAULT_LAT, DEFAULT_LON)
      );
    } else {
      cargarClima(DEFAULT_LAT, DEFAULT_LON);
    }
  }, []);

  async function cargarClima(lat, lon) {
    try {
      setLoading(true);
      const datos = await currentWeather(lat, lon);
      const descripcion = getWeatherDescription(datos.weatherCode);
      setWeather({
        temperatura: datos.temperatura,
        icono: descripcion.icono,
        descripcion: descripcion.texto,
      });
    } catch {
      setWeather({ temperatura: 20, icono: '🌡️', descripcion: 'Temperatura por defecto' });
    } finally {
      setLoading(false);
    }
  }

  return { weather, loading, error };
}