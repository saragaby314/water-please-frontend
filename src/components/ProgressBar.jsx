import './ProgressBar.css';

function ProgressBar({ porcentaje, estado }) {
  return (
    <div className="progress-container">
      <div
        className={`progress-fill progress-${estado}`}
        style={{ width: `${Math.min(porcentaje, 100)}%` }}
      />
      <span className="progress-label">{porcentaje}%</span>
    </div>
  );
}

export default ProgressBar;