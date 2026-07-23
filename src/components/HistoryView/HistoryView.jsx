import { useState, useEffect } from 'react';
import { obtenerBebidasHoy } from '../../utils/storage';
import './HistoryView.css';

function HistoryView({ usuario }) {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    const bebidasHoy = obtenerBebidasHoy(usuario.email);
    setBebidas(bebidasHoy);
  }, [usuario.email]);

  const totalBebido = Math.round(
    bebidas.reduce((sum, b) => sum + b.cantidad * b.factor, 0)
  );

  return (
    <div className="history-view">
      <h2 className="history-title">Historial de hoy</h2>

      {bebidas.length === 0 ? (
        <div className="history-empty">
          <p>No hay registros hoy</p>
          <p className="history-empty-sub">Registra tu primera bebida en la pestaña HOY</p>
        </div>
      ) : (
        <>
          <div className="card history-resumen">
            <span className="history-resumen-label">Total hidratante hoy</span>
            <span className="history-resumen-valor">{totalBebido} mL</span>
          </div>

          <div className="card">
            <ul className="history-lista">
              {bebidas.map((b) => (
                <li key={b.id} className="history-item">
                  <div className="history-item-left">
                    <span className="history-item-nombre">{b.nombre}</span>
                    <span className="history-item-factor">Factor ×{b.factor}</span>
                  </div>
                  <div className="history-item-right">
                    <span className="history-item-cantidad">{b.cantidad} mL</span>
                    <span className="history-item-hidratante">
                      {Math.round(b.cantidad * b.factor)} mL reales
                    </span>
                    <span className="history-item-hora">{b.hora}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default HistoryView;