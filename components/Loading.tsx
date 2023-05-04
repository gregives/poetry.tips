export function Loading() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-5 h-5 -m-0.5 animate-spin"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
    >
      <circle stroke-opacity="0.2" cx="12" cy="12" r="10.5" />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M22.5 12c0-7.42-7.42-10.5-10.5-10.5"
      />
    </svg>
  );
}
