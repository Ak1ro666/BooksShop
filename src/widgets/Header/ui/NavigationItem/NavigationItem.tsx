import { Link, useLocation } from 'react-router-dom';

import { FC } from 'react';
import { IHeaderData } from '@/widgets/Header/types/header.interface';
import { classNames as cn } from '@/shared/lib/classNames/classNames'
import styles from './NavigationItem.module.scss';

export const NavigationItem: FC<IHeaderData> = ({ name, link }) => {
	const location = useLocation();


	return (
		<li className={cn(styles.item, {[styles.active]:location.pathname === link }, [])}>
			<Link to={link}>{name}</Link>
		</li>
	);
};

