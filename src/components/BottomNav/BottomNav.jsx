import Drop from '../../assets/icons/Drop';
import Calendar from '../../assets/icons/Calendar';
import User from '../../assets/icons/User';
import './BottomNav.css';

function BottomNav({ vistaActual, onChange }) {
  return (
    <nav className="bottom-nav">
      <button
        className={`nav-btn ${vistaActual === 'hoy' ? 'active' : ''}`}
        onClick={() => onChange('hoy')}
      >
        <Drop size={24} color={vistaActual === 'hoy' ? '#065A82' : '#94A3B8'} />
        <span className="nav-label">HOY</span>
      </button>

      <button
        className={`nav-btn ${vistaActual === 'historial' ? 'active' : ''}`}
        onClick={() => onChange('historial')}
      >
        <Calendar size={24} color={vistaActual === 'historial' ? '#065A82' : '#94A3B8'} />
        <span className="nav-label">HISTORIAL</span>
      </button>

      <button
        className={`nav-btn ${vistaActual === 'yo' ? 'active' : ''}`}
        onClick={() => onChange('yo')}
      >
        <User size={24} color={vistaActual === 'yo' ? '#065A82' : '#94A3B8'} />
        <span className="nav-label">YO</span>
      </button>
    </nav>
  );
}

export default BottomNav;