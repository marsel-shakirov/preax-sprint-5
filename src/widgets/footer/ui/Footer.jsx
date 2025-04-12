import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.footerText}>
				Проект выполнен в рамках стажировки&nbsp;
				<a
					href="https://preax.ru"
					className={styles.footerLink}
					target="_blank"
					rel="noopener noreferrer"
					lang="en"
				>
					PREAX
				</a>
			</p>
		</footer>
	);
};
