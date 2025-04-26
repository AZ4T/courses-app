import styles from './Button.module.css';
import cn from 'classnames';

export default function Button({
	buttonText,
	onClick,
	className,
	type = 'button',
}) {
	return (
		<button
			className={cn(styles.button, className)}
			onClick={onClick}
			type={type}
		>
			{buttonText}
		</button>
	);
}
