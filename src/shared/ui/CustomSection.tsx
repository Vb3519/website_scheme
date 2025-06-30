type CustomSection_Props = React.HtmlHTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
}; // типизация для section, div, article и т.д.

const CustomSection: React.FC<CustomSection_Props> = ({
  className,
  title,
  icon,
  children,
  ...props
}: CustomSection_Props) => {
  return (
    <section
      className={`m-auto flex flex-col gap-4 ${className ? className : ''}`}
      {...props}
    >
      {/* ----- Условный рендеринг (два разных варианта): ----- */}
      {title && <h2 className="text-center font-semibold text-xl">{title}</h2>}
      {icon ? icon : null}
      {/* ----------------------------------------------------- */}

      {children}
    </section>
  );
};

export default CustomSection;
