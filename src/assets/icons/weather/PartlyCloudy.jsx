function PartlyCloudy({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="18" cy="18" r="8" fill="#FFB800" />
      <line x1="18" y1="6" x2="18" y2="10" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6" y1="18" x2="10" y2="18" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8.93" y1="8.93" x2="11.76" y2="11.76" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M36 38H20C16.69 38 14 35.31 14 32C14 29.1 16.01 26.68 18.74 26.1C18.58 25.58 18.5 25.05 18.5 24.5C18.5 21.46 20.96 19 24 19C25.74 19 27.29 19.8 28.32 21.04C28.87 20.88 29.43 20.8 30 20.8C33.76 20.8 36.8 23.84 36.8 27.6C36.8 27.87 36.78 28.14 36.75 28.4C39.28 29 41 31.3 41 34C41 36.21 39.21 38 37 38H36Z"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
}
export default PartlyCloudy;