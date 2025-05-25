// src/components/CourseForm/CourseForm.jsx
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { getAuthorsList } from '../../store/authors/selectors.ts';
import { addAuthor, fetchAllAuthors } from '../../store/authors/thunk.ts';
import { addCourse, updateCourse } from '../../store/courses/thunk.ts';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import AuthorItem from './components/AuthorItem/AuthorItem';
import getCourseDuration from '../../helpers/getCourseDuration';
import styles from './CourseForm.module.css';

export default function CreateCourse() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const authorList = useAppSelector(getAuthorsList);
	const { courseId } = useParams();
	const isEditMode = Boolean(courseId);

	useEffect(() => {
		dispatch(fetchAllAuthors());
	}, [dispatch]);

	const [form, setForm] = useState({
		title: '',
		description: '',
		duration: '',
		authorName: '',
	});
	const [errors, setErrors] = useState({});
	const [selectedAuthors, setSelectedAuthors] = useState([]);

	const selectedAuthorsId = selectedAuthors.map((a) => a.id);

	const availableAuthors = authorList.filter(
		(a) => !selectedAuthorsId.includes(a.id)
	);

	const handleChange = ({ target: { name, value } }) => {
		if (name === 'duration' && value && !/^\d*$/.test(value)) return;
		setForm((f) => ({ ...f, [name]: value }));
		setErrors((e) => ({ ...e, [name]: '' }));
	};

	const handleCreateAuthor = () => {
		const name = form.authorName.trim();
		if (name.length < 2) {
			setErrors((e) => ({ ...e, authorName: 'At least 2 characters' }));
			return;
		}
		dispatch(addAuthor(name))
			.then(() => dispatch(fetchAllAuthors()))
			.catch((err) => {
				console.error('Failed to create author', err);
			});
		setForm((f) => ({ ...f, authorName: '' }));
	};

	const handleAddAuthor = (author) => {
		setSelectedAuthors((s) => [...s, author]);
	};

	const handleRemoveAuthor = (author) => {
		setSelectedAuthors((s) => s.filter((a) => a.id !== author.id));
	};

	const handleDurationChange = (e) => {
		const digits = e.target.value.replace(/\D/g, '');
		setForm((f) => ({ ...f, duration: digits }));
		setErrors((e) => ({ ...e, duration: '' }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = {};
		if (form.title.trim().length < 2)
			newErrors.title = 'Title is required.';
		if (form.description.trim().length < 2)
			newErrors.description = 'Description is required.';
		if (!parseInt(form.duration, 10))
			newErrors.duration = 'Duration is required.';
		if (!selectedAuthorsId.length)
			newErrors.authors = 'Pick at least one author.';

		if (Object.keys(newErrors).length) {
			setErrors(newErrors);
			return;
		}

		const newCourse = {
			title: form.title.trim(),
			description: form.description.trim(),
			duration: parseInt(form.duration, 10),
			authors: selectedAuthorsId,
		};

		if (isEditMode) {
			dispatch(updateCourse(courseId, newCourse)).then(() =>
				navigate('/courses')
			);
		} else {
			dispatch(addCourse(newCourse)).then(() => navigate('/courses'));
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>
					{isEditMode ? 'Edit Course' : 'Create Course'}
				</h2>
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
						<Button
							buttonText={isEditMode ? 'Update' : 'Create'}
							type="submit"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
