import styles from './Input.module.css';

export const Input = () => {
	return (
		<input
			type="text"
			className={styles.headerInput}
			placeholder="Поиск по городу"
			aria-label="Search by city"
		/>
	);
};
