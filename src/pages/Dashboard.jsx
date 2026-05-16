import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerSesion, obtenerUsuarioPorEmail } from '../utils/storage';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Logo from '../assets/icons/Logo';
import Sun from '../assets/icons/Sun';
import Moon from '../assets/icons/Moon';
import BottomNav from '../components/BottomNav';
import TodayView from '../components/TodayView';
import HistoryView from '../components/HistoryView';
import ProfileView from '../components/ProfileView';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [vistaActual, setVistaActual] = useState('hoy');
  const [usuario, setUsuario] = useState(null);
  const [tema, setTema] = useLocalStorage('wp_tema', 'light');

  useEffect(() => {
    const sesion = obtenerSesion();
    if (!sesion.email) {
      navigate('/');
      return;
    }
    const user = obtenerUsuarioPorEmail(sesion.email);
    if (!user) {
      navigate('/');
      return;
    }
    setUsuario(user);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', tema === 'dark');
  }, [tema]);

  function toggleTema() {
    setTema(tema === 'light' ? 'dark' : 'light');
  }

  if (!usuario) return null;

  return (
    <div className={`app-layout ${tema}`}>

      <header className="app-header">
        <Logo height={32} color={tema === 'dark' ? '#4FC3F7' : '#065A82'} />
        <button className="theme-toggle" onClick={toggleTema}>
          {tema === 'light'
            ? <Moon size={22} color="#065A82" />
            : <Sun size={22} color="#4FC3F7" />
          }
        </button>
      </header>

      <main className="app-main">
        {vistaActual === 'hoy' && (
          <TodayView usuario={usuario} tema={tema} />
        )}
        {vistaActual === 'historial' && (
          <HistoryView usuario={usuario} />
        )}
        {vistaActual === 'yo' && (
          <ProfileView
            usuario={usuario}
            onUsuarioActualizado={setUsuario}
          />
        )}
      </main>

      <BottomNav
        vistaActual={vistaActual}
        onChange={setVistaActual}
        tema={tema}
      />

    </div>
  );
}

export default Dashboard;