import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
}: ButtonProps) {
  const classNames = [styles.btn, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classNames} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} type={type} onClick={onClick}>
      {children}
    </button>
  );
}