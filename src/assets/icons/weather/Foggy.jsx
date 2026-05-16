function Foggy({ size = 48, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <line x1="8" y1="20" x2="40" y2="20" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      <line x1="12" y1="28" x2="36" y2="28" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <line x1="16" y1="36" x2="32" y2="36" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <path
        d="M28 20H16C12.69 20 10 17.31 10 14C10 11.1 12.01 8.68 14.74 8.1C14.58 7.58 14.5 7.05 14.5 6.5C14.5 3.46 16.96 1 20 1C22.5 1 24.6 2.6 25.28 4.86C25.83 4.62 26.4 4.5 27 4.5C30.04 4.5 32.5 6.96 32.5 10C32.5 10.27 32.48 10.54 32.45 10.8C34.98 11.4 36.7 13.7 36.7 16.4C36.7 18.39 35.1 20 33.1 20H28Z"
        fill={color}
        fillOpacity="0.6"
      />
    </svg>
  );
}
export default Foggy;