interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export default function Typography({
  style,
  className = "",
  ...props
}: TypographyProps) {
  return (
    <p className={className || undefined} style={style} {...props}>
      {props.children}
    </p>
  );
}