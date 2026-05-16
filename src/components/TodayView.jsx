import { useState, useEffect } from 'react';
import { calcularRecomendacion, calcularProgreso } from '../utils/hydration';
import { obtenerBebidasHoy, guardarBebida } from '../utils/storage';
import { useWeather } from '../hooks/useWeather';
import WeatherCard from './WeatherCard';
import ProgressBar from './ProgressBar';
import './TodayView.css';

const BEBIDAS_CATALOGO = [
    { id: 1, nombre: 'Agua', factor: 1.0 },
    { id: 2, nombre: 'Agua con gas', factor: 1.0 },
    { id: 3, nombre: 'Té verde', factor: 0.9 },
    { id: 4, nombre: 'Té negro', factor: 0.9 },
    { id: 5, nombre: 'Infusión de hierbas', factor: 0.95 },
    { id: 6, nombre: 'Café americano', factor: 0.8 },
    { id: 7, nombre: 'Café con leche', factor: 0.85 },
    { id: 8, nombre: 'Leche entera', factor: 0.95 },
    { id: 9, nombre: 'Leche desnatada', factor: 0.95 },
    { id: 10, nombre: 'Bebida isotónica', factor: 0.92 },
    { id: 11, nombre: 'Refresco de cola', factor: 0.7 },
    { id: 12, nombre: 'Refresco de naranja', factor: 0.7 },
    { id: 13, nombre: 'Zumo de naranja', factor: 0.8 },
    { id: 14, nombre: 'Zumo de manzana', factor: 0.8 },
];

function TodayView({ usuario }) {
    const { weather, loading: weatherLoading } = useWeather();
    const [bebidas, setBebidas] = useState([]);
    const [bebidaSeleccionada, setBebidaSeleccionada] = useState(BEBIDAS_CATALOGO[0]);
    const [cantidad, setCantidad] = useState('250');

    const temperatura = weather?.temperatura ?? 20;
    const recomendacion = calcularRecomendacion(usuario, temperatura);

    const totalHidratante = Math.round(
        bebidas.reduce((sum, b) => sum + b.cantidad * b.factor, 0)
    );

    const progreso = calcularProgreso(totalHidratante, recomendacion);

    useEffect(() => {
        const bebidasGuardadas = obtenerBebidasHoy(usuario.email);
        setBebidas(bebidasGuardadas);
    }, [usuario.email]);

    function handleRegistrar(e) {
        e.preventDefault();
        const ml = Number(cantidad);
        if (!ml || ml <= 0) return;

        const nuevaBebida = {
            nombre: bebidaSeleccionada.nombre,
            factor: bebidaSeleccionada.factor,
            cantidad: ml,
        };

        const actualizadas = guardarBebida(usuario.email, nuevaBebida);
        setBebidas(actualizadas);
        setCantidad('250');
    }

    return (
        <div className="today-view">

            {/* SALUDO */}
            <div className="greeting">
                <h2>Hola, {usuario.nombre.charAt(0).toUpperCase() + usuario.nombre.slice(1)}</h2>
                <p>Tu recomendación de hoy</p>
            </div>

            {/* WEATHER CARD */}
            <WeatherCard weather={weather} loading={weatherLoading} />

            {/* RECOMENDACIÓN */}
            <div className="card recomendacion-card">
                <p className="recomendacion-label">Recomendación diaria</p>
                <p className="recomendacion-valor">{recomendacion} mL</p>
                <div className="recomendacion-desglose">
                    <span>Base: {Math.max(usuario.sexo === 'hombre' ? 2500 : 2000, usuario.peso * 35)} mL</span>
                    <span>Actividad: +{usuario.nivel_actividad === 'moderado' ? 500 : usuario.nivel_actividad === 'deportista' ? 1000 : 0} mL</span>
                    <span>Temperatura {temperatura}°C: +{temperatura < 20 ? 0 : temperatura <= 25 ? 250 : temperatura <= 30 ? 500 : 1000} mL</span>
                </div>
            </div>

            {/* PROGRESO */}
            <div className="card progreso-card">
                <div className="progreso-header">
                    <span>Has bebido hoy</span>
                    <span className="progreso-ml">{totalHidratante} mL</span>
                </div>
                <ProgressBar porcentaje={progreso.porcentaje} estado={progreso.estado} />
                <div className="progreso-footer">
                    <span className={`estado-badge estado-${progreso.estado}`}>
                        {progreso.estado === 'bajo' && 'Necesitas beber más'}
                        {progreso.estado === 'medio' && 'Vas por buen camino'}
                        {progreso.estado === 'casi' && '¡Casi lo logras!'}
                        {progreso.estado === 'cumplido' && '¡Objetivo cumplido!'}
                    </span>
                    {progreso.estado !== 'cumplido' && (
                        <span className="falta-ml">Faltan {progreso.falta} mL</span>
                    )}
                </div>
            </div>

            {/* FORMULARIO REGISTRAR BEBIDA */}
            <div className="card form-card">
                <h3>Registrar bebida</h3>
                <form onSubmit={handleRegistrar}>
                    <div className="form-group">
                        <label>Tipo de bebida</label>
                        <select
                            value={bebidaSeleccionada.id}
                            onChange={(e) => {
                                const b = BEBIDAS_CATALOGO.find(b => b.id === Number(e.target.value));
                                setBebidaSeleccionada(b);
                            }}
                        >
                            {BEBIDAS_CATALOGO.map(b => (
                                <option key={b.id} value={b.id}>
                                    {b.nombre} (×{b.factor})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Cantidad (mL)</label>
                        <input
                            type="number"
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
                            min="1"
                            max="2000"
                            placeholder="250"
                        />
                    </div>

                    <button type="submit" className="btn-registrar">
                        + Registrar bebida
                    </button>
                </form>
            </div>

            {/* LISTA BEBIDAS HOY */}
            {bebidas.length > 0 && (
                <div className="card lista-card">
                    <h3>Bebidas de hoy</h3>
                    <ul className="bebidas-lista">
                        {bebidas.map((b) => (
                            <li key={b.id} className="bebida-item">
                                <span className="bebida-nombre">{b.nombre}</span>
                                <span className="bebida-cantidad">{b.cantidad} mL</span>
                                <span className="bebida-hora">{b.hora}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
}

export default TodayView;