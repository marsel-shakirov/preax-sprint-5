import styles from './CityCard.module.css';

import WeatherIcons from '../../assets/images/weather-icons/04d.png';

export const CityCard = () => {
	return (
		<div className={styles.info}>
			<div className={styles.dtlWrapper}>
				<h3 className={styles.location}>Кременчуг-константиновское</h3>
				<span className={styles.day}>Суббота, 06 января</span>
				<span className={styles.time}>11:29</span>
			</div>
			<div className={styles.temp}>-7&#176;</div>
			<div className={styles.weather}>
				<img src={WeatherIcons} alt="Weather icon" className={styles.icon04d} />
				<span className={styles.weatherText}>Облачно с прояснениями</span>
			</div>
			<div className={styles.feels}>
				Ощущается как <span className={styles.feelsValue}>-11&#176;</span>
			</div>
		</div>
	);
};
