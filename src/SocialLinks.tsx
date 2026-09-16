import { profile } from "./data";

function Icon({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const common = {
    className,
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  switch (label) {
    case "YouTube":
      return (
        <svg {...common}>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Pinterest":
      return (
        <svg {...common}>
          <path d="M12 2C6.5 2 2 6.4 2 11.9c0 4.2 2.6 7.8 6.3 9.1-.1-.8-.2-2 0-2.8.2-.8 1.4-5.9 1.4-5.9s-.4-.7-.4-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.6-2.7 3.6-5.9 0-2.4-1.6-4.2-4.6-4.2-3.3 0-5.4 2.5-5.4 5.2 0 1 .3 1.7.8 2.2.2.2.2.3.1.6l-.3 1.1c-.1.3-.2.4-.5.2-1.4-.6-2-2.1-2-3.8 0-2.8 2.4-6.2 7.1-6.2 3.8 0 6.3 2.7 6.3 5.7 0 3.9-2.2 6.8-5.4 6.8-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.8 2-1.2 2.7A10 10 0 0 0 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...common}>
          <path d="M14.2 3c.3 2.6 1.7 4.6 4.3 4.8v3.1c-1.5 0-2.9-.5-4.2-1.3v5.9c0 3.6-2.9 6.5-6.6 6.5A6.6 6.6 0 0 1 5.8 9.8c.6 0 1.2.1 1.7.3v3.3a3.3 3.3 0 1 0 2.4 3.2V3h4.3Z" />
        </svg>
      );
    case "X":
      return (
        <svg {...common}>
          <path d="M18.2 3H21l-6.5 7.4L22 21h-6.2l-4.9-6.4L5.4 21H2.6l7-8L2 3h6.3l4.4 5.8L18.2 3Zm-1.1 16.2h1.8L7 4.7H5.1l12 14.5Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common}>
          <path d="M14 9h3.5V5.5H14C11.5 5.5 9.5 7.5 9.5 10v2H7v3.5h2.5V22h3.5v-6.5H16L16.8 12h-3.3v-2c0-.6.4-1 1-1Z" />
        </svg>
      );
    case "Upwork":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8.2" />
          <path
            d="M9 15.4V10.4c0-1.5 1-2.5 2.4-2.5s2.4 1 2.4 2.5v5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Fiverr":
      return (
        <svg {...common}>
          <path d="M6.8 5.8h5.4v2.3H9.1v2.2h2.7v2.2H9.1V18H6.8V5.8Zm9.5 6.4a1.35 1.35 0 1 1 0-2.7 1.35 1.35 0 0 1 0 2.7Z" />
        </svg>
      );
    default:
      return null;
  }
}

export function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {profile.socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm text-ink hover:border-accent hover:text-accent"
          >
            <Icon label={s.label} />
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
