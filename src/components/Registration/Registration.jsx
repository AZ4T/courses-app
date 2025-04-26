import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import styles from './Registration.module.css';
import { useState } from 'react';

export default function Registration() {
	const [form, setForm] = useState({
		name: '',
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
		if (!form.name) newErrors.name = 'Name is required!';
		if (!form.email) newErrors.email = 'Email is required!';
		if (!form.password) newErrors.password = 'Password is required!';
		setErrors(newErrors);
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Registration</h2>
				<div className={styles.wrapper__form}>
					<form className={styles.form} onSubmit={handleSubmit}>
						<Input
							id="name"
							labelText="Name"
							placeholderText="Input text"
							type="text"
							name="name"
							onChange={handleChange}
							error={errors.name}
						/>
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
						If you have an account you may <a href="#">Login</a>
					</p>
				</div>
			</div>
		</div>
	);
}
