function Sunny({ size = 48, color = '#FFB800' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="10" fill={color} />
      <line x1="24" y1="4" x2="24" y2="10" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="38" x2="24" y2="44" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="4" y1="24" x2="10" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="38" y1="24" x2="44" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="9.37" y1="9.37" x2="13.6" y2="13.6" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="34.4" y1="34.4" x2="38.63" y2="38.63" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="38.63" y1="9.37" x2="34.4" y2="13.6" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="13.6" y1="34.4" x2="9.37" y2="38.63" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
export default Sunny;