import plus from '../../../../assets/plus.png';
import trash from '../../../../assets/trash.png';
import styles from './AuthorItem.module.css';

export default function AuthorItem({
	authorName,
	onClickAdd = () => {},
	onClickRemove = () => {},
}) {
	return (
		<div className={styles.container}>
			<span>{authorName}</span>
			{onClickAdd && (
				<img
					src={plus}
					alt="add"
					onClick={onClickAdd}
					className={styles.icon}
				/>
			)}
			{onClickRemove && (
				<img
					src={trash}
					alt="remove"
					onClick={onClickRemove}
					className={styles.icon}
				/>
			)}
		</div>
	);
}
