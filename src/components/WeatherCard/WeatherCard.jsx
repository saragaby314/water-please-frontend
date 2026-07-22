import Sunny from '../../assets/icons/weather/Sunny';
import Cloudy from '../../assets/icons/weather/Cloudy';
import PartlyCloudy from '../../assets/icons/weather/PartlyCloudy';
import Rainy from '../../assets/icons/weather/Rainy';
import Snowy from '../../assets/icons/weather/Snowy';
import Stormy from '../../assets/icons/weather/Stormy';
import Foggy from '../../assets/icons/weather/Foggy';
import Night from '../../assets/icons/weather/Night';
import './WeatherCard.css';

function getWeatherComponent(icono) {
  switch (icono) {
    case 'sunny': return <Sunny size={52} />;
    case 'partly-cloudy': return <PartlyCloudy size={52} />;
    case 'cloudy': return <Cloudy size={52} />;
    case 'rainy': return <Rainy size={52} />;
    case 'snowy': return <Snowy size={52} />;
    case 'stormy': return <Stormy size={52} />;
    case 'foggy': return <Foggy size={52} />;
    default: return <Cloudy size={52} />;
  }
}

function WeatherCard({ weather, loading }) {
  if (loading) {
    return (
      <div className="weather-card weather-loading">
        <p>Cargando clima...</p>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="weather-card">
      <div className="weather-left">
        {getWeatherComponent(weather.icono)}
      </div>
      <div className="weather-right">
        <p className="weather-degrees">{weather.temperatura}°C</p>
        <p className="weather-desc">{weather.descripcion}</p>
      </div>
    </div>
  );
}

export default WeatherCard;