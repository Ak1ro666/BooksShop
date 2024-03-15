import { FC } from 'react';

import styles from './Book.module.scss';

import type { BookItemResolve } from '../types/book.interface';
import { getAuthorsListEach } from '@/shared/utils/authors/getAuthorsListEach';
import { useBooksContext } from '@/app/providers/BookProvider/ui/BookProvider';

export const Book: FC<{ book: BookItemResolve }> = ({ book }) => {
	const { addCard, bookItemsCard, removeCard } = useBooksContext();
	

	return (
		<div className={styles.book}>
			<img src={book.image} alt={`book - ${book.title}`} />
			<div className={styles.info}>
				<span>
					{book.authors && book.authors.map((author, index) => getAuthorsListEach(index, book.authors.length, author))}
				</span>
				<h4>{book.title}</h4>
				<p>{book.description}</p>
				<button
					className={'button'}
					onClick={() => {
						bookItemsCard.find(bookItem => bookItem.description === book.description)
							? removeCard(book)
							: addCard(book);
					}}
				>
					{bookItemsCard.find(bookItem => bookItem.description === book.description) ? 'in the cart' : 'Buy now'}
				</button>
			</div>
		</div>
	);
};

