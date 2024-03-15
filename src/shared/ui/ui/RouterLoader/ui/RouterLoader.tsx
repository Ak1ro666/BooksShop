import { FC } from 'react';
import styles from './RouterLoader.module.scss';

export const RouterLoader: FC = () => {
	return (
		<div className="center">
			<div className={styles['loader']}>
				<div className={styles['loader-square']}></div>
				<div className={styles['loader-square']}></div>
				<div className={styles['loader-square']}></div>
				<div className={styles['loader-square']}></div>
				<div className={styles['loader-square']}></div>
				<div className={styles['loader-square']}></div>
				<div className={styles['loader-square']}></div>
			</div>
		</div>
	);
};

