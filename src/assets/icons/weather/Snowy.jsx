function Snowy({ size = 48, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M34 28H14C9.58 28 6 24.42 6 20C6 16.13 8.7 12.9 12.36 12.14C12.13 11.45 12 10.74 12 10C12 5.58 15.58 2 20 2C22.7 2 25.08 3.32 26.56 5.36C27.32 5.13 28.14 5 29 5C33.97 5 38 9.03 38 14C38 14.34 37.98 14.67 37.94 15C41.38 15.75 44 18.58 44 22C44 25.31 41.31 28 38 28H34Z"
        fill={color}
        fillOpacity="0.85"
      />
      <circle cx="16" cy="36" r="2.5" fill="#BAE6FD" />
      <circle cx="24" cy="34" r="2.5" fill="#BAE6FD" />
      <circle cx="32" cy="36" r="2.5" fill="#BAE6FD" />
      <circle cx="20" cy="42" r="2.5" fill="#BAE6FD" />
      <circle cx="28" cy="42" r="2.5" fill="#BAE6FD" />
    </svg>
  );
}
export default Snowy;