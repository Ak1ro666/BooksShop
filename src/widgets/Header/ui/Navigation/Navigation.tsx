import { FC } from 'react';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { data } from '../../model/header.data';
import styles from './Navigation.module.scss';

export const Navigation: FC = () => {
	const suc = true;

	return (
		<nav className={cn(styles.nav, { [styles.suc]: suc }, [])}>
			<ul className={styles.list}>
				{data.map(el => (
					<NavigationItem key={el.link} {...el} />
				))}
			</ul>
		</nav>
	);
};

