import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const className = `${styles.btn} ${styles[variant]}`;

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}