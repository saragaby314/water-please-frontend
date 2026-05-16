import Drop from '../assets/icons/Drop';
import Calendar from '../assets/icons/Calendar';
import User from '../assets/icons/User';
import './BottomNav.css';

function BottomNav({ vistaActual, onChange, tema }) {
  const colorActivo = tema === 'dark' ? '#90CAF9' : '#065A82';
  const colorInactivo = tema === 'dark' ? '#64748B' : '#94A3B8';

  return (
    <nav className="bottom-nav">
      <button
        className={`nav-btn ${vistaActual === 'hoy' ? 'active' : ''}`}
        onClick={() => onChange('hoy')}
      >
        <Drop size={24} color={vistaActual === 'hoy' ? colorActivo : colorInactivo} />
        <span className="nav-label">HOY</span>
      </button>

      <button
        className={`nav-btn ${vistaActual === 'historial' ? 'active' : ''}`}
        onClick={() => onChange('historial')}
      >
        <Calendar size={24} color={vistaActual === 'historial' ? colorActivo : colorInactivo} />
        <span className="nav-label">HISTORIAL</span>
      </button>

      <button
        className={`nav-btn ${vistaActual === 'yo' ? 'active' : ''}`}
        onClick={() => onChange('yo')}
      >
        <User size={24} color={vistaActual === 'yo' ? colorActivo : colorInactivo} />
        <span className="nav-label">YO</span>
      </button>
    </nav>
  );
}

export default BottomNav;