import { FC } from 'react';
import { HeaderButtons } from '../HeaderButtons/HeaderButtons';
import { Logo } from '@/shared/ui/ui/Logo'
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Navigation />
			<HeaderButtons />
		</header>
	);
};

