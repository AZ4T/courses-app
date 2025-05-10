import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import styles from './CreateCourse.module.css';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { useState } from 'react';
import getCourseDuration from '../../helpers/getCourseDuration';
import { v4 as uuidv4 } from 'uuid';
import formatDate from '../../helpers/formatCreationDate.js';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks.ts';
import { addNewCourseAction } from '../../store/courses/actions.ts';
import { addNewAuthorAction } from '../../store/authors/actions.ts';

export default function CreateCourse({ initialAuthorList = [] }) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [form, setForm] = useState({
		title: '',
		description: '',
		duration: '',
		authorName: '',
	});
	const [errors, setErrors] = useState({});
	const [availableAuthors, setAvailableAuthors] = useState(initialAuthorList);
	const [selectedAuthors, setSelectedAuthors] = useState([]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === 'duration' && value && !/^\d*$/.test(value)) return;
		setForm((f) => ({ ...f, [name]: value }));
		setErrors((err) => ({ ...err, [name]: '' }));
	};

	const handleCreateAuthor = () => {
		if (form.authorName.trim().length < 2) {
			setErrors((err) => ({
				...err,
				authorName: 'At least 2 characters',
			}));
			return;
		}
		const newAuthor = {
			id: uuidv4(),
			name: form.authorName.trim(),
		};
		dispatch(addNewAuthorAction(newAuthor));
		setAvailableAuthors((a) => [...a, newAuthor]);
		setForm((f) => ({ ...f, authorName: '' }));
	};

	const handleAddAuthor = (author) => {
		setSelectedAuthors((s) => [...s, author]);
		setAvailableAuthors((a) => a.filter((x) => x.id !== author.id));
	};

	const handleRemoveAuthor = (author) => {
		setAvailableAuthors((a) => [...a, author]);
		setSelectedAuthors((s) => s.filter((x) => x.id !== author.id));
	};

	const handleDurationChange = (e) => {
		const digits = e.target.value.replace(/\D/g, '');
		setForm((f) => ({ ...f, duration: digits }));
		setErrors((e) => ({ ...e, duration: '' }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newErrors = {};
		if (form.title.trim().length < 2)
			newErrors.title = 'Title is required.';
		if (form.description.trim().length < 2)
			newErrors.description = 'Description is required.';
		if (!parseInt(form.duration, 10))
			newErrors.duration = 'Duration is required.';
		if (!selectedAuthors.length)
			newErrors.authors = 'Pick at least one author.';

		if (Object.keys(newErrors).length) {
			setErrors(newErrors);
			return;
		}

		const newCourse = {
			id: uuidv4(),
			title: form.title,
			description: form.description,
			duration: parseInt(form.duration, 10),
			authors: selectedAuthors,
			creationDate: formatDate(),
		};

		dispatch(addNewCourseAction(newCourse));

		navigate('/courses');
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Course Edit/Create Page</h2>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.form_container}>
						<h3 className={styles.title_formInfo}>Main info</h3>
						<Input
							id="title"
							labelText="Title"
							placeholderText="Input text"
							type="text"
							name="title"
							onChange={handleChange}
							error={errors.title}
						/>
						<Input
							id="description"
							labelText="Description"
							placeholderText="Input text"
							type="textarea"
							name="description"
							onChange={handleChange}
							error={errors.description}
							className={styles.description}
						/>
						<h3 className={styles.title_formInfo}>Duration</h3>
						<div className={styles.duration_container}>
							<Input
								id="duration"
								labelText="Duration"
								placeholderText="Input text"
								type="text"
								value={form.duration}
								name="duration"
								onChange={handleDurationChange}
								error={errors.duration}
								className={styles.duration}
							/>
							<span className={styles.duration_text}>
								{getCourseDuration(form.duration)}
							</span>
						</div>

						<div className={styles.authors_container}>
							<div className={styles.author_creation}>
								<h3 className={styles.title_formInfo}>
									Authors
								</h3>
								<div className={styles.create_author}>
									<Input
										id="authorName"
										labelText="Author name"
										placeholderText="Input text"
										type="text"
										value={form.authorName}
										name="authorName"
										onChange={handleChange}
										error={errors.authorName}
										className={styles.authors_input}
									/>
									<Button
										onClick={handleCreateAuthor}
										buttonText="create author"
									/>
								</div>
								<h4 className={styles.authors_title}>
									Authors List
								</h4>
								{availableAuthors.length ? (
									availableAuthors.map((a) => (
										<AuthorItem
											key={a.id}
											authorName={a.name}
											onClickAdd={() =>
												handleAddAuthor(a)
											}
										/>
									))
								) : (
									<p>No authors</p>
								)}
							</div>
							<div className={styles.course_authors}>
								<h4 className={styles.title_formInfo}>
									Course Authors
								</h4>
								{selectedAuthors.length ? (
									selectedAuthors.map((a) => (
										<AuthorItem
											key={a.id}
											authorName={a.name}
											onClickRemove={() =>
												handleRemoveAuthor(a)
											}
										/>
									))
								) : (
									<p>Author list is empty</p>
								)}
							</div>
						</div>
					</div>

					<div className={styles.course_buttons}>
						<Link to="/courses">
							<Button buttonText="cancel" />
						</Link>
						<Button buttonText="create course" type="submit" />
					</div>
				</form>
			</div>
		</div>
	);
}
