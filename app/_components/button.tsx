type ButtonProps = {
   onClick?: () => void;
   children: React.ReactNode;
   variant?: 'primary' | 'secondary' | 'danger' | 'positive';
   size?: 'small' | 'medium' | 'large';
   disabled?: boolean;
   fullWidth?: boolean;
   type?: 'button' | 'submit' | 'reset';
   className?: string;
};

export const Button: React.FC<ButtonProps> = ({
   onClick,
   children,
   variant = 'primary',
   size = 'medium',
   disabled = false,
   fullWidth = false,
   type = 'button',
   className = '',
}) => {
   const baseStyle =
      'flex items-center text-black justify-center gap-1 rounded-lg transition-colors outline-none';

   const variantStyles = {
      primary: 'bg-primary hover:bg-primaryHover',
      secondary: 'bg-secondary hover:bg-secondaryHover',
      danger: 'bg-danger hover:bg-dangerHover',
      positive: 'bg-positive hover:bg-positiveHover',
   };

   const sizeStyles = {
      small: 'px-2 py-1 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-4 text-lg',
   };

   const widthStyle = fullWidth ? 'w-full' : '';

   const buttonStyle = `
    ${baseStyle}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${widthStyle}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

   return (
      <button
         onClick={onClick}
         disabled={disabled}
         type={type}
         className={buttonStyle}
      >
         {children}
      </button>
   );
};
