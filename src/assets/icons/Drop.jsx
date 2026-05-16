function Drop({ size = 24, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C12 2 5 9.5 5 14.5C5 18.09 8.13 21 12 21C15.87 21 19 18.09 19 14.5C19 9.5 12 2 12 2Z" />
      <path
        d="M9 15.5C9 13.8 10 12.5 12 11.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
export default Drop;