import type { SVGProps } from "react";

/**
 * Conjunto de ícones em traço único (estilo Lucide), 24x24, stroke 1.5px,
 * herdando `currentColor`. Sem emojis — consistência total de estilo.
 */
export type IconName =
  | "content"
  | "campaign"
  | "branding"
  | "consulting"
  | "course"
  | "positioning"
  | "instagram"
  | "whatsapp"
  | "mail"
  | "clock"
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "sparkle"
  | "menu"
  | "close";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

const paths: Record<IconName, React.ReactNode> = {
  content: (
    <>
      <rect x="3" y="6" width="18" height="14" rx="3" />
      <circle cx="12" cy="13" r="3.2" />
      <path d="M8 6l1.2-2h5.6L16 6" />
    </>
  ),
  campaign: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1Z" />
      <path d="M14 8a4 4 0 0 1 0 8" />
      <path d="M17 5a8 8 0 0 1 0 14" />
    </>
  ),
  branding: (
    <>
      <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 18l.9-5.4L4.2 8.7l5.4-.8Z" />
    </>
  ),
  consulting: (
    <>
      <path d="M4 5h16v10H9l-4 4v-4H4Z" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </>
  ),
  course: (
    <>
      <path d="M3 8.5 12 4l9 4.5L12 13 3 8.5Z" />
      <path d="M7 10.5V15c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4.5" />
      <path d="M21 8.5V14" />
    </>
  ),
  positioning: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.3-4A8 8 0 1 1 9 19.4L4 20Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1.2-.5 1.2-1.1 0-.3-.2-.6-.5-.8l-1.2-.6c-.3-.1-.6 0-.8.2l-.4.5c-1-.5-1.8-1.3-2.3-2.3l.5-.4c.2-.2.3-.5.2-.8l-.6-1.2c-.2-.3-.5-.5-.8-.5C9.5 8.3 9 8.9 9 9.5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="M5 12.5l4 4 10-10" />,
  sparkle: (
    <path d="M12 3c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6Z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
