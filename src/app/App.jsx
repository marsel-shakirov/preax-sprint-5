import { MainPage } from '../pages';
import { Footer, Header } from '../widgets';

import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.content}>
			<Header />
			<MainPage />
			<Footer />
		</div>
	);
};
