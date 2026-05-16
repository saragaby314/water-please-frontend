function Stormy({ size = 48, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M34 26H14C9.58 26 6 22.42 6 18C6 14.13 8.7 10.9 12.36 10.14C12.13 9.45 12 8.74 12 8C12 3.58 15.58 0 20 0C22.7 0 25.08 1.32 26.56 3.36C27.32 3.13 28.14 3 29 3C33.97 3 38 7.03 38 12C38 12.34 37.98 12.67 37.94 13C41.38 13.75 44 16.58 44 20C44 23.31 41.31 26 38 26H34Z"
        fill={color}
        fillOpacity="0.8"
      />
      <polyline
        points="26,28 21,36 25,36 20,46"
        stroke="#FCD34D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
export default Stormy;