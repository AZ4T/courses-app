import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import styles from './Login.module.css';
import { useState } from 'react';

export default function Login() {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((f) => ({ ...f, [name]: value }));
		setErrors((err) => ({ ...err, [name]: '' }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newErrors = {};
		if (!form.email) newErrors.email = 'Email is required!';
		if (!form.password) newErrors.password = 'Password is required!';
		setErrors(newErrors);
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Login</h2>
				<div className={styles.wrapper__form}>
					<form className={styles.form} onSubmit={handleSubmit}>
						<Input
							id="email"
							labelText="Email"
							placeholderText="Input text"
							type="text"
							name="email"
							onChange={handleChange}
							error={errors.email}
						/>
						<Input
							id="password"
							labelText="Password"
							placeholderText="Input text"
							type="text"
							name="password"
							onChange={handleChange}
							error={errors.password}
						/>
						<Button
							type="submit"
							className={styles.button}
							buttonText="Login"
						/>
					</form>
					<p className={styles.login_link}>
						If you have an account you may <a href="#">Register</a>
					</p>
				</div>
			</div>
		</div>
	);
}
