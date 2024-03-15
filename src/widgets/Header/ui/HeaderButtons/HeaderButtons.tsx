import { Button } from '@/shared/ui/ui/Button';
import { FC } from 'react';
import { dataButtons } from '../../model/header.data';
import styles from './HeaderButtons.module.scss';
import { useBooksContext } from '@/app/providers/BookProvider/ui/BookProvider';

export const HeaderButtons: FC = () => {
	const { bookItemsCard } = useBooksContext();

	return (
		<ul className={styles.buttons}>
			{dataButtons.map(el => (
				<Button key={el.imgPath} className={styles.button} path={el.path}>
					<img src={el.imgPath} alt={el.name} />
					{el.name === 'Shop' && bookItemsCard.length > 0 && <div className={styles.count}>{bookItemsCard.length}</div>}
				</Button>
			))}
		</ul>
	);
};

