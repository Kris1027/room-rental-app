type ButtonProps = {
	onClick?: () => void;
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "danger" | "success";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	fullWidth?: boolean;
	type?: "button" | "submit" | "reset";
	className?: string;
};

export const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	variant = "primary",
	size = "medium",
	disabled = false,
	fullWidth = false,
	type = "button",
	className = "",
}) => {
	const baseStyle =
		"flex items-center justify-center gap-2 rounded-lg transition-all duration-300 ease-in-out font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50";

	const variantStyles = {
		primary:
			"bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 focus:ring-blue-300",
		secondary:
			"bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 focus:ring-gray-400",
		danger:
			"bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 focus:ring-red-300",
		success:
			"bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 focus:ring-green-300",
	};

	const sizeStyles = {
		small: "px-3 py-1.5 text-sm",
		medium: "px-4 py-2 text-base",
		large: "px-6 py-3 text-lg",
	};

	const widthStyle = fullWidth ? "w-full" : "";

	const disabledStyle = disabled
		? "opacity-50 cursor-not-allowed"
		: "hover:transform hover:scale-105 active:scale-95";

	const buttonStyle = `
    ${baseStyle}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${widthStyle}
    ${disabledStyle}
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
