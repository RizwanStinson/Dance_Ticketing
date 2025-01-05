export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        px-6 py-2 text-[15px] md:text-[17px] md:py-3
        text-base font-medium tracking-wide
        rounded-full
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${
          variant === "primary"
            ? `
          bg-pink-500 hover:bg-pink-600
          text-white
          shadow-lg shadow-pink-500/25 hover:shadow-pink-500/35
          border-2 border-transparent hover:border-pink-400/50
          hover:scale-[1.02] active:scale-[0.98]
        `
            : `
          bg-pink-100 hover:bg-pink-200  
          text-pink-900
          shadow-md shadow-pink-100/20 hover:shadow-pink-200/30
          border-2 border-pink-200/50 hover:border-pink-300
          hover:scale-[1.02] active:scale-[0.98]
        `
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
