import { FC } from 'react';
import { ICategoryContainer } from '../types/category-container.interface';
import { categoryData } from '../model/category.data';
import styles from './CategoryContainer.module.scss';

export const CategoryContainer: FC<ICategoryContainer> = ({ currentCategory, setCurrentCategory }) => {
	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				{categoryData.map(category => (
					<li
						key={category.name}
						className={categoryData[currentCategory] === category ? styles.active : ''}
						onClick={() => setCurrentCategory(categoryData.indexOf(category))}
					>
						{category.name}
					</li>
				))}
			</ul>
		</div>
	);
};

