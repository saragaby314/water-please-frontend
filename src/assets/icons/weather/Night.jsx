function Night({ size = 64, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path
        d="M32 8C22 8 14 16 14 26C14 36 22 44 32 44C38 44 43 41 46 36C43 37 40 37.5 37 37C28 37 21 30 21 21C21 15 24 10 29 7C30 7.3 31 7.6 32 8Z"
        fill={color}
        opacity="0.95"
      />
      <circle cx="50" cy="14" r="2" fill={color} opacity="0.8" />
      <circle cx="44" cy="8" r="1.5" fill={color} opacity="0.6" />
      <circle cx="54" cy="24" r="1" fill={color} opacity="0.5" />
      <circle cx="48" cy="30" r="1.5" fill={color} opacity="0.4" />
      <circle cx="56" cy="16" r="1" fill={color} opacity="0.3" />
    </svg>
  );
}

export default Night;