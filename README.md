# Water Please Frontend

[![Version](https://img.shields.io/badge/version-3.0.0-blue?style=flat)](https://github.com/saragaby314/water-please-frontend)
[![Status](https://img.shields.io/badge/status-completado-green?style=flat)](https://github.com/saragaby314/water-please-frontend)
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
| **Prototipo 3.0** | ✅ | Frontend React (este repositorio) |
| **Prototipo 4.0** | 🔜 | React Native (app móvil) próximamente como proyecto particular |

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

## Instalación

```bash
git clone git@github.com:saragaby314/water-please-frontend.git
cd water-please-frontend
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

---

## Estructura del Proyecto

```
src/
├── pages/
│   ├── Login.jsx          # Auth: login + register en tabs
│   └── Dashboard.jsx      # Layout principal con 3 vistas
├── components/
│   ├── BottomNav.jsx      # Navegación inferior HOY/HISTORIAL/YO
│   ├── TodayView.jsx      # Vista principal: clima, recomendación, bebidas
│   ├── HistoryView.jsx    # Historial de bebidas del día
│   ├── ProfileView.jsx    # Datos del usuario editables
│   ├── WeatherCard.jsx    # Tarjeta del clima (Open-Meteo)
│   └── ProgressBar.jsx    # Barra de progreso visual
├── hooks/
│   ├── useWeather.js      # Custom hook: geolocalización + Open-Meteo
│   └── useLocalStorage.js # Custom hook: persistencia en localStorage
├── utils/
│   ├── hydration.js       # Fórmula científica EFSA + IOM + ACSM
│   └── storage.js         # Gestión completa de localStorage
├── services/
│   └── apiTiempo.js       # Llamadas a Open-Meteo API
└── assets/
└── icons/             # SVGs: navegación, tema, clima
...
```
---

## Fórmula Científica

BASE = MAX(EFSA_fija, peso × 35)
EFSA_fija:  Hombre → 2500 mL | Mujer → 2000 mL
FACTOR_EDAD:
< 14 años → × 0.8
14-64 años → × 1.0

64 años → × 0.95

ACTIVIDAD_EXTRA:
Sedentario → +0 mL
Moderado   → +500 mL
Deportista → +1000 mL
TEMPERATURA_EXTRA (Open-Meteo):
< 20°C    → +0 mL
20-25°C   → +250 mL
25-30°C   → +500 mL

30°C    → +1000 mL

RECOMENDACIÓN = (BASE × FACTOR_EDAD) + ACTIVIDAD + TEMPERATURA

**Fuentes científicas:**
- EFSA 2010: https://www.efsa.europa.eu/en/efsajournal/pub/1459
- IOM/NAM 2005: https://www.nationalacademies.org/

---

## Características

- ✅ Login y registro con localStorage
- ✅ Cálculo personalizado con fórmula científica
- ✅ Temperatura real via Open-Meteo API
- ✅ Geolocalización automática del usuario
- ✅ 14 bebidas con factor de hidratación real
- ✅ Progreso diario con barra visual
- ✅ Historial de consumo del día
- ✅ Perfil editable
- ✅ Modo oscuro / claro con persistencia
- ✅ Diseño mobile-first (max 480px)
- ✅ SVGs personalizados (sin emojis)

---

## Repositorio Backend

## Repositorio Backend

El backend REST API (Prototipo 2.0) está en:
👉 [water-please-backend](https://github.com/saragaby314/water-please-backend)

---

## Bootcamp

**FullStack · The Bridge 2026**

## Autora

**Saray Guillen**
