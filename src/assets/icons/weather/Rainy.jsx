function Rainy({ size = 48, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M34 28H14C9.58 28 6 24.42 6 20C6 16.13 8.7 12.9 12.36 12.14C12.13 11.45 12 10.74 12 10C12 5.58 15.58 2 20 2C22.7 2 25.08 3.32 26.56 5.36C27.32 5.13 28.14 5 29 5C33.97 5 38 9.03 38 14C38 14.34 37.98 14.67 37.94 15C41.38 15.75 44 18.58 44 22C44 25.31 41.31 28 38 28H34Z"
        fill={color}
        fillOpacity="0.85"
      />
      <line x1="16" y1="34" x2="14" y2="42" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="32" x2="22" y2="40" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="34" x2="30" y2="42" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
export default Rainy;