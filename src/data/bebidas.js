/**
 * Catálogo de bebidas con factor de hidratación
 * Basado en literatura científica (EFSA 2010)
 * Factor 1.0 = hidratación equivalente al agua
 */
export const BEBIDAS_CATALOGO = [
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