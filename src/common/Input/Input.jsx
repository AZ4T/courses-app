import styles from './Input.module.css';
import cn from 'classnames';

export default function Input({
	id,
	name,
	type,
	labelText,
	placeholderText,
	value,
	onChange,
	error,
	className,
}) {
	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor={id}>
				{labelText}
				<br />
				<input
					id={id}
					name={name}
					type={type}
					placeholder={placeholderText}
					value={value}
					onChange={onChange}
					className={cn(
						styles.input,
						{ [styles.inputError]: error },
						className
					)}
				/>
			</label>
			{error && <div className={styles.errorText}>{error}</div>}
		</div>
	);
}
