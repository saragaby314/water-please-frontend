# Memoria Técnica — Water Please Frontend
## Prototipo 3.0 · React 
**Autora:** Saray Guillen  
**Bootcamp:** FullStack · The Bridge 2026  
**Fecha:** Mayo 2026  
**Repositorio:** [water-please-frontend](https://github.com/saragaby314/water-please-frontend)

---

## 1. Descripción del Proyecto

Water Please es una aplicación web de seguimiento de hidratación personalizada. El Prototipo 3.0 es el frontend desarrollado en React que implementa la lógica de cálculo científico directamente en el cliente, usando localStorage como capa de persistencia y la API de Open-Meteo para obtener la temperatura real del usuario.

---

## 2. Contexto y Evolución

| Versión | Tecnología | Descripción |
|---------|-----------|-------------|
| 1.0 | HTML + CSS | Prototipo visual estático |
| 2.0 | Node.js + Express + PostgreSQL | Backend funcional con JWT |
| **3.0** | **React + Vite** | **Frontend con lógica científica (este proyecto)** |
| 4.0 | React Native | App móvil (futuro) |

---

## 3. Stack Tecnológico

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| React | 18 | Framework UI |
| Vite | 5.x | Bundler y dev server |
| React Router | 6 | Navegación SPA |
| Open-Meteo API | - | Temperatura en tiempo real |
| localStorage | Web API | Persistencia de datos |
| Inter | Google Fonts | Tipografía |

---

## 4. Arquitectura del Proyecto

```
src/
├── pages/          # Páginas principales
├── components/     # Componentes reutilizables
├── hooks/          # Custom hooks
├── utils/          # Lógica de negocio
├── services/       # Llamadas a APIs
└── assets/icons/   # SVGs organizados
...
```

### Decisiones de arquitectura

**Sin backend en el Prototipo 3.0**
Se decidió usar localStorage en lugar del backend del Prototipo 2.0 para cumplir los requisitos del proyecto de React de forma autónoma. La fusión con el backend es el objetivo del Prototipo 4.0.

**SVGs como componentes React**
Todos los iconos son componentes JSX que aceptan props de tamaño y color. Esto permite adaptar los iconos al tema claro/oscuro sin archivos externos.

**Fórmula científica en el frontend**
La fórmula de hidratación se calcula en `utils/hydration.js` replicando la lógica del backend (Prototipo 2.0), basada en fuentes EFSA, IOM/NAM y ACSM.

---

## 5. Requisitos Cumplidos

### Obligatorios

#### useState
Usado en todos los componentes para gestionar estado local:
- `Login.jsx` → estado de formularios, modo (login/register), errores
- `TodayView.jsx` → bebidas, bebida seleccionada, cantidad, confirmación
- `Dashboard.jsx` → vista activa, usuario, tema
- `ProfileView.jsx` → modo edición, formulario, guardado

#### useEffect
- `Dashboard.jsx` → verificar sesión al montar, aplicar tema
- `TodayView.jsx` → cargar bebidas del día al montar
- `useWeather.js` → obtener geolocalización y clima al montar

#### localStorage
Gestión centralizada en `utils/storage.js`:

| Clave | Contenido |
|-------|-----------|
| `wp_usuarios` | Usuarios registrados |
| `wp_sesion_email` | Email de sesión activa |
| `wp_sesion_nombre` | Nombre de sesión activa |
| `wp_tema` | Preferencia dark/light |
| `wp_bebidas_{email}_{fecha}` | Historial diario de bebidas |

#### Mínimo 5 componentes
El proyecto tiene **8 componentes funcionales**:

| Componente | Responsabilidad |
|-----------|-----------------|
| `Login` | Autenticación y registro |
| `Dashboard` | Layout principal y navegación |
| `BottomNav` | Navegación inferior |
| `TodayView` | Vista principal del día |
| `HistoryView` | Historial de bebidas |
| `ProfileView` | Perfil editable |
| `WeatherCard` | Tarjeta del clima |
| `ProgressBar` | Barra de progreso visual |

### Opcional

#### API externa — Open-Meteo
- **URL:** `https://api.open-meteo.com/v1/forecast`
- **Datos obtenidos:** temperatura, código de clima, is_day
- **Geolocalización:** `navigator.geolocation` con fallback a Bilbao
- **Custom hook:** `useWeather.js` gestiona todo el ciclo

---

## 6. Fórmula Científica

RECOMENDACIÓN = (BASE × FACTOR_EDAD) + ACTIVIDAD + TEMPERATURA
BASE = MAX(EFSA_fija, peso × 35)
EFSA_fija: Hombre 2500 mL | Mujer 2000 mL
FACTOR_EDAD:
< 14 años → × 0.8
14-64 años → × 1.0

64 años → × 0.95

ACTIVIDAD_EXTRA:
Sedentario → +0 mL
Moderado → +500 mL
Deportista → +1000 mL
TEMPERATURA_EXTRA:
< 20°C → +0 mL
20-25°C → +250 mL
25-30°C → +500 mL

30°C → +1000 mL

**Fuentes:**
- EFSA 2010 — European Food Safety Authority
- IOM/NAM 2005 — Institute of Medicine
- ACSM — American College of Sports Medicine

---

## 7. Custom Hooks

### `useWeather`
Gestiona la obtención del clima:
1. Solicita geolocalización al navegador
2. Si se permite → coordenadas reales
3. Si se deniega → coordenadas de Bilbao (43.2630, -2.9350)
4. Llama a Open-Meteo con `temperature_2m`, `weather_code`, `is_day`
5. Determina icono según código WMO y si es día o noche

### `useLocalStorage`
Hook genérico para leer y escribir en localStorage con estado React sincronizado.

---

## 8. Gestión de Estado del Clima

Open-Meteo devuelve códigos WMO estándar. La función `getWeatherDescription` los mapea a texto e icono SVG:

| Código | Descripción | Icono día | Icono noche |
|--------|-------------|-----------|-------------|
| 0 | Despejado | Sunny | Night |
| 1-2 | Mayormente despejado | PartlyCloudy | Night |
| 3 | Nublado | Cloudy | Cloudy |
| 45-48 | Niebla | Foggy | Foggy |
| 51-67 | Lluvia | Rainy | Rainy |
| 71-77 | Nieve | Snowy | Snowy |
| 95-99 | Tormenta | Stormy | Stormy |

---

## 9. Diseño y UX

### Principios aplicados
- **Mobile-first:** max-width 480px
- **Sin emojis:** todos los iconos son SVGs propios
- **Modo oscuro/claro:** variables CSS con persistencia en localStorage
- **Feedback inmediato:** confirmación visual al registrar bebida
- **Tipografía:** Inter (Google Fonts) para legibilidad

### Paleta de colores

| Variable | Light | Dark |
|----------|-------|------|
| `--primary` | #065A82 | #4FC3F7 |
| `--bg` | #dceef5 | #0F172A |
| `--bg-card` | #FFFFFF | #1E293B |

---

## 10. Decisiones Técnicas

### ¿Por qué localStorage y no backend?
El Prototipo 3.0 es un proyecto React independiente que cumple los requisitos del módulo. La integración con el backend del Prototipo 2.0 está planificada para el Prototipo 4.0 en React Native.

### ¿Por qué SVGs como componentes?
Los archivos SVG importados como componentes React permiten pasar props dinámicas (color, tamaño) sin CSS adicional. Es más mantenible que sprites o imágenes estáticas.

### ¿Por qué Open-Meteo y no otra API del tiempo?
Open-Meteo es gratuita, sin API key, con cobertura global y datos fiables. No requiere registro ni configuración adicional.

---

## 11. Gestión del Proyecto

### Ramas Git

main          ← Código estable
dev           ← Integración
feat/login    ← Autenticación
feat/dashboard ← Dashboard base
feat/today-view ← Vista principal
feat/history-profile ← Historial y perfil

---

## 12. Roadmap

| Versión | Estado | Objetivo |
|---------|--------|----------|
| 3.0 | ✅ | Frontend React (este proyecto) |
| 4.0 | 🔜 | React Native — app móvil |
| 5.0 | 💭 | Integración backend + frontend |

---

## 13. Conclusiones

El Prototipo 3.0 demuestra:
- Uso correcto de hooks de React
- Gestión de estado y efectos secundarios
- Integración con API externa
- Persistencia con localStorage
- Diseño responsive mobile-first
- Arquitectura modular y mantenible
- Lógica científica implementada en el frontend

La fórmula de hidratación, desarrollada originalmente en el backend (Prototipo 2.0), se ha portado al frontend manteniendo coherencia científica con las fuentes EFSA, IOM/NAM y ACSM.
