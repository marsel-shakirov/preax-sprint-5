import { Input, Logo } from '../../../shared/ui';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<form method="get" className={styles.inputWrapper}>
				<Input />
				<div className={styles.searchIcon}></div>
			</form>
		</header>
	);
};
