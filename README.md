# Water Please Frontend

[![Version](https://img.shields.io/badge/version-3.0.0-blue?style=flat)](https://github.com/saragaby314/water-please-frontend)
[![Status](https://img.shields.io/badge/status-en_progreso-yellow?style=flat)](https://github.com/saragaby314/water-please-frontend)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

Frontend de la aplicación Water Please — seguimiento de hidratación personalizada con recomendaciones científicas.

---

## Sobre el Proyecto

Water Please calcula tu recomendación diaria de agua basándose en:

- **Género y peso corporal** (Recomendaciones EFSA 2010)
- **Edad** (Factores de corrección pediátricos y geriátricos)
- **Nivel de actividad** (Sedentario, moderado, deportista)
- **Temperatura ambiente** (Ajustes dinámicos vía Open-Meteo)

---

## Evolución del Proyecto

| Versión | Estado | Descripción |
|---------|--------|-------------|
| **Prototipo 1.0** | ✅ | HTML + CSS estático |
| **Prototipo 2.0** | ✅ | Backend Node.js + Express + PostgreSQL |
| **Prototipo 3.0** | ⏳ | Frontend React (este repositorio) |
| **Prototipo 4.0** | 🔜 | React Native (app móvil) |

---

## Stack Tecnológico

| Tecnología | Uso |
|-----------|-----|
| [![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/) | Framework UI |
| [![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/) | Bundler y dev server |
| [![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat&logo=reactrouter&logoColor=white)](https://reactrouter.com/) | Navegación entre páginas |
| [![Open-Meteo](https://img.shields.io/badge/Open--Meteo-API-blue?style=flat)](https://open-meteo.com/) | Temperatura en tiempo real |
| [![localStorage](https://img.shields.io/badge/localStorage-Storage-333?style=flat)](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) | Persistencia de datos |

---

## Requisitos

- **Node.js** v22 o superior
- **npm** v10 o superior

---

## Instalación

git clone git@github.com:saragaby314/water-please-frontend.git
cd water-please-frontend
npm install
npm run dev

## Estructura del Proyecto
```
en progreso

```

---

## Fórmula Científica

BASE = MAX(EFSA_fija, peso × 35)
EFSA: 2500 mL (hombre) | 2000 mL (mujer)
EDAD_FACTOR:
<14: × 0.8 | 14-64: × 1.0 | >64: × 0.95
ACTIVIDAD_EXTRA:
Sedentario: 0 | Moderado: +500 | Deportista: +1000
TEMPERATURA_EXTRA (vía Open-Meteo):
<20°C: 0 | 20-25°C: +250 | 25-30°C: +500 | >30°C: +1000
RECOMENDACIÓN = (BASE × FACTOR_EDAD) + ACTIVIDAD + TEMPERATURA

**Fuentes:**
- EFSA 2010: https://www.efsa.europa.eu/en/efsajournal/pub/1459
- IOM/NAM 2005: https://www.nationalacademies.org/

---

## Características

- ✅ Login y registro de usuarios
- ✅ Cálculo personalizado con fórmula científica
- ✅ Temperatura real via Open-Meteo
- ✅ Registro de bebidas con factor de hidratación
- ✅ Progreso diario visual
- ✅ Historial de consumo
- ✅ Modo oscuro / claro
- ✅ Diseño mobile-first

---

## Repositorio Backend

El backend REST API (Prototipo 2.0) está en:
👉 [water-please-backend](https://github.com/saragaby314/water-please-backend)

---

## Autora

**Saray Guillen**