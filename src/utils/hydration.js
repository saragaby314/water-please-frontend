export function calcularRecomendacion(usuario, temperatura = 20) {
  const efsa = usuario.sexo === 'hombre' ? 2500 : 2000;
  const base = Math.max(efsa, usuario.peso * 35);
  const factorEdad = usuario.edad < 14 ? 0.8 : usuario.edad > 64 ? 0.95 : 1.0;

  const actividad = {
    sedentario: 0,
    moderado: 500,
    deportista: 1000
  }[usuario.nivel_actividad] ?? 0;

  const extraTemp =
    temperatura < 20 ? 0 :
    temperatura <= 25 ? 250 :
    temperatura <= 30 ? 500 : 1000;

  return Math.round((base * factorEdad) + actividad + extraTemp);
}

export function calcularProgreso(totalBebido, recomendacion) {
  const porcentaje = Math.min(100, Math.round((totalBebido / recomendacion) * 100));
  const falta = Math.max(0, recomendacion - totalBebido);

  let estado = 'bajo';
  if (porcentaje >= 100) estado = 'cumplido';
  else if (porcentaje >= 75) estado = 'casi';
  else if (porcentaje >= 50) estado = 'medio';

  return { porcentaje, falta, estado };
}