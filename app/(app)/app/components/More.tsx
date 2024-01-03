export default function More({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 32 32"
      className={className}
    >
      <circle cx="16" cy="16" r="1"/><path d="M16,18a2,2,0,1,1,2-2A2,2,0,0,1,16,18Zm0-2Z"/><circle cx="16" cy="5" r="1"/><path d="M16,7a2,2,0,1,1,2-2A2,2,0,0,1,16,7Zm0-2Z"/><circle cx="16" cy="27" r="1"/><path d="M16,29a2,2,0,1,1,2-2A2,2,0,0,1,16,29Zm0-2Z"/>
    </svg>
  );
}