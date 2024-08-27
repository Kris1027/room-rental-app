type ButtonProps = {
   onClick?: () => void;
   children: React.ReactNode;
   variant?: 'primary' | 'secondary' | 'danger';
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
      'font-bold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';

   const variantStyles = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
      secondary:
         'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
      danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
   };

   const sizeStyles = {
      small: 'px-2 py-1 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
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
