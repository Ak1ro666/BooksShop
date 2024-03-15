import { FC } from 'react';

import styles from './BooksContainer.module.scss';
import { BookItemResolve, Book } from '@/entities/book';

interface IBooksContainerProps {
	books: BookItemResolve[];
}

export const BooksContainer: FC<IBooksContainerProps> = ({ books }) => {
	return (
		<div className={styles.container}>
			{books.length && books.map((book, index) => <Book key={index} book={book} />)}
		</div>
	);
};

