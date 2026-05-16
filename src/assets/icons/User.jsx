function User({ size = 24, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20C4 16.68 7.58 14 12 14C16.42 14 20 16.68 20 20" />
    </svg>
  );
}
export default User;