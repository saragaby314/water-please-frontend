function Logo({ height = 32, color = '#065A82' }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gota */}
      <path
        d="M16 4C16 4 6 15 6 21C6 27.63 10.48 32 16 32C21.52 32 26 27.63 26 21C26 15 16 4 16 4Z"
        fill={color}
      />
      <path
        d="M11 22C11 19 13 17 16 16"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* Texto */}
      <text
        x="34"
        y="25"
        fontFamily="Segoe UI, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill={color}
      >
        Water Please
      </text>
    </svg>
  );
}
export default Logo;