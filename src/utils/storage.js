export function guardarUsuario(usuario) {
  const usuarios = obtenerUsuarios();
  usuarios[usuario.email] = usuario;
  localStorage.setItem('wp_usuarios', JSON.stringify(usuarios));
}

export function obtenerUsuarios() {
  const raw = localStorage.getItem('wp_usuarios');
  return raw ? JSON.parse(raw) : {};
}

export function obtenerUsuarioPorEmail(email) {
  const usuarios = obtenerUsuarios();
  return usuarios[email] || null;
}

export function guardarSesion(email, nombre) {
  localStorage.setItem('wp_sesion_email', email);
  localStorage.setItem('wp_sesion_nombre', nombre);
}

export function obtenerSesion() {
  return {
    email: localStorage.getItem('wp_sesion_email'),
    nombre: localStorage.getItem('wp_sesion_nombre'),
  };
}

export function cerrarSesion() {
  localStorage.removeItem('wp_sesion_email');
  localStorage.removeItem('wp_sesion_nombre');
}

export function guardarTema(tema) {
  localStorage.setItem('wp_tema', tema);
}

export function obtenerTema() {
  return localStorage.getItem('wp_tema') || 'light';
}

export function obtenerBebidasHoy(email) {
  const hoy = new Date().toLocaleDateString('es-ES');
  const key = `wp_bebidas_${email}_${hoy}`;
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : [];
}

export function guardarBebida(email, bebida) {
  const hoy = new Date().toLocaleDateString('es-ES');
  const key = `wp_bebidas_${email}_${hoy}`;
  const bebidas = obtenerBebidasHoy(email);
  bebidas.unshift({
    ...bebida,
    id: Date.now(),
    hora: new Date().toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    })
  });
  localStorage.setItem(key, JSON.stringify(bebidas));
  return bebidas;
}