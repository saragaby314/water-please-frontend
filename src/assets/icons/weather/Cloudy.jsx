function Cloudy({ size = 48, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M34 36H14C9.58 36 6 32.42 6 28C6 24.13 8.7 20.9 12.36 20.14C12.13 19.45 12 18.74 12 18C12 13.58 15.58 10 20 10C22.7 10 25.08 11.32 26.56 13.36C27.32 13.13 28.14 13 29 13C33.97 13 38 17.03 38 22C38 22.34 37.98 22.67 37.94 23C41.38 23.75 44 26.58 44 30C44 33.31 41.31 36 38 36H34Z"
        fill={color}
        fillOpacity="0.9"
      />
    </svg>
  );
}
export default Cloudy;