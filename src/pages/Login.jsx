import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  guardarUsuario,
  obtenerUsuarioPorEmail,
  guardarSesion
} from '../utils/storage';
import './Auth.css';
import Logo from '../assets/icons/Logo';

function Login() {
  const navigate = useNavigate();
  const [modo, setModo] = useState('login'); // 'login' | 'register'
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Login form
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  // Register form
  const [registerData, setRegisterData] = useState({
    nombre: '',
    email: '',
    password: '',
    sexo: 'mujer',
    edad: '',
    peso: '',
    altura: '',
    nivel_actividad: 'moderado',
  });

  // ===== LOGIN =====
  function handleLoginChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const usuario = obtenerUsuarioPorEmail(loginData.email);

    if (!usuario || usuario.password !== loginData.password) {
      setError('Email o contraseña incorrectos');
      setLoading(false);
      return;
    }

    guardarSesion(usuario.email, usuario.nombre);
    navigate('/dashboard');
  }

  // ===== REGISTER =====
  function handleRegisterChange(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const existe = obtenerUsuarioPorEmail(registerData.email);
    if (existe) {
      setError('Ese email ya está registrado');
      setLoading(false);
      return;
    }

    const nuevoUsuario = {
      ...registerData,
      edad: Number(registerData.edad),
      peso: Number(registerData.peso),
      altura: Number(registerData.altura),
    };

    guardarUsuario(nuevoUsuario);
    guardarSesion(nuevoUsuario.email, nuevoUsuario.nombre);
    navigate('/dashboard');
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <Logo height={40} />
          <p>Tu hidratación personalizada</p>
        </div>


        {/* TABS */}
        <div className="auth-tabs">
          <button
            className={`auth-tab ${modo === 'login' ? 'active' : ''}`}
            onClick={() => { setModo('login'); setError(null); }}
          >
            Iniciar sesión
          </button>
          <button
            className={`auth-tab ${modo === 'register' ? 'active' : ''}`}
            onClick={() => { setModo('register'); setError(null); }}
          >
            Crear cuenta
          </button>
        </div>

        {error && <div className="error-message">⚠️ {error}</div>}

        {/* LOGIN */}
        {modo === 'login' && (
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Tu contraseña"
                required
              />
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Entrando...' : 'Iniciar sesión'}
            </button>
          </form>
        )}

        {/* REGISTER */}
        {modo === 'register' && (
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={registerData.nombre}
                onChange={handleRegisterChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="Mínimo 6 caracteres"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Sexo</label>
                <select
                  name="sexo"
                  value={registerData.sexo}
                  onChange={handleRegisterChange}
                >
                  <option value="mujer">Mujer</option>
                  <option value="hombre">Hombre</option>
                </select>
              </div>

              <div className="form-group">
                <label>Edad</label>
                <input
                  type="number"
                  name="edad"
                  value={registerData.edad}
                  onChange={handleRegisterChange}
                  placeholder="30"
                  min="13"
                  max="120"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Peso (kg)</label>
                <input
                  type="number"
                  name="peso"
                  value={registerData.peso}
                  onChange={handleRegisterChange}
                  placeholder="60"
                  min="20"
                  max="500"
                  required
                />
              </div>

              <div className="form-group">
                <label>Altura (m)</label>
                <input
                  type="number"
                  name="altura"
                  value={registerData.altura}
                  onChange={handleRegisterChange}
                  placeholder="1.65"
                  min="1"
                  max="2.5"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Nivel de actividad</label>
              <select
                name="nivel_actividad"
                value={registerData.nivel_actividad}
                onChange={handleRegisterChange}
              >
                <option value="sedentario">Sedentario</option>
                <option value="moderado">Moderado</option>
                <option value="deportista">Deportista</option>
              </select>
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Creando cuenta...' : 'Crear cuenta'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export default Login;