import { useState } from 'react';
import { guardarUsuario, guardarSesion, cerrarSesion } from '../utils/storage';
import { calcularRecomendacion } from '../utils/hydration';
import { useNavigate } from 'react-router-dom';
import './ProfileView.css';

function ProfileView({ usuario, onUsuarioActualizado }) {
  const navigate = useNavigate();
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState({
    peso: usuario.peso,
    edad: usuario.edad,
    nivel_actividad: usuario.nivel_actividad,
  });
  const [guardado, setGuardado] = useState(false);
  const recomendacion = calcularRecomendacion(usuario);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleGuardar(e) {
    e.preventDefault();
    const usuarioActualizado = {
      ...usuario,
      peso: Number(form.peso),
      edad: Number(form.edad),
      nivel_actividad: form.nivel_actividad,
    };
    guardarUsuario(usuarioActualizado);
    guardarSesion(usuarioActualizado.email, usuarioActualizado.nombre);
    onUsuarioActualizado(usuarioActualizado);
    setEditando(false);
    setGuardado(true);
    setTimeout(() => setGuardado(false), 2000);
  }

  function handleLogout() {
    cerrarSesion();
    navigate('/');
  }

  return (
    <div className="profile-view">
      <h2 className="profile-title">Mi perfil</h2>

      {guardado && (
        <div className="profile-guardado">
          Perfil actualizado correctamente
        </div>
      )}

      <div className="card profile-card">
        <div className="profile-avatar">
          {usuario.nombre.charAt(0).toUpperCase()}
        </div>
        <div className="profile-info">
          <h3>{usuario.nombre.charAt(0).toUpperCase() + usuario.nombre.slice(1)}</h3>
          <p>{usuario.email}</p>
        </div>
      </div>

      <div className="card profile-recomendacion">
        <span className="profile-rec-label">Tu recomendación diaria base</span>
        <span className="profile-rec-valor">{recomendacion} mL</span>
      </div>

      <div className="card">
        <div className="profile-section-header">
          <h3>Datos personales</h3>
          {!editando && (
            <button
              className="btn-editar"
              onClick={() => setEditando(true)}
            >
              Editar
            </button>
          )}
        </div>

        {!editando ? (
          <div className="profile-datos">
            <div className="profile-dato">
              <span className="dato-label">Sexo</span>
              <span className="dato-valor">{usuario.sexo === 'hombre' ? 'Hombre' : 'Mujer'}</span>
            </div>
            <div className="profile-dato">
              <span className="dato-label">Edad</span>
              <span className="dato-valor">{usuario.edad} años</span>
            </div>
            <div className="profile-dato">
              <span className="dato-label">Peso</span>
              <span className="dato-valor">{usuario.peso} kg</span>
            </div>
            <div className="profile-dato">
              <span className="dato-label">Actividad</span>
              <span className="dato-valor">{usuario.nivel_actividad}</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleGuardar} className="profile-form">
            <div className="form-group">
              <label>Edad</label>
              <input
                type="number"
                name="edad"
                value={form.edad}
                onChange={handleChange}
                min="13"
                max="120"
              />
            </div>
            <div className="form-group">
              <label>Peso (kg)</label>
              <input
                type="number"
                name="peso"
                value={form.peso}
                onChange={handleChange}
                min="20"
                max="500"
              />
            </div>
            <div className="form-group">
              <label>Nivel de actividad</label>
              <select
                name="nivel_actividad"
                value={form.nivel_actividad}
                onChange={handleChange}
              >
                <option value="sedentario">Sedentario</option>
                <option value="moderado">Moderado</option>
                <option value="deportista">Deportista</option>
              </select>
            </div>
            <div className="profile-form-btns">
              <button type="submit" className="btn-guardar">
                Guardar
              </button>
              <button
                type="button"
                className="btn-cancelar"
                onClick={() => setEditando(false)}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>

      <button className="btn-logout" onClick={handleLogout}>
        Cerrar sesión
      </button>

    </div>
  );
}

export default ProfileView;