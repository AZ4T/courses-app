import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import styles from './Login.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks.ts';
import { getUserSuccessAction } from '../../store/user/actions.ts';
import { fetchCurrentUser } from '../../store/user/thunk.ts';

export default function Login() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
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

	const handleSubmit = async (event) => {
		event.preventDefault();
		const newErrors = {};
		if (!form.email) newErrors.email = 'Email is required!';
		if (!form.password) newErrors.password = 'Password is required!';
		setErrors(newErrors);
		try {
			const resp = await fetch('http://localhost:4000/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: form.email,
					password: form.password,
					name: '',
				}),
			});
			const data = await resp.json();
			const { result, user, message } = data;
			if (!resp.ok) throw new Error(message || 'Login failed');
			dispatch(
				getUserSuccessAction({
					isAuth: true,
					name: user.name,
					email: user.email,
					token: result,
					role: '',
				})
			);
			localStorage.setItem('token', result);
			await dispatch(fetchCurrentUser());

			navigate('/courses');
		} catch (err) {
			alert(err);
		}
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
						If you don't have an account you may{' '}
						<Link to="/registration">Register</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
