import { FC } from 'react';

import styles from './NotFoundPage.module.scss';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: FC = () => {
	const navigate = useNavigate();

	return (
		<div className={cn(styles.page, {}, ['center'])}>
			<div>
				NotFoundPage
				<button onClick={() => navigate('/')}>Home page</button>
			</div>
		</div>
	);
};

