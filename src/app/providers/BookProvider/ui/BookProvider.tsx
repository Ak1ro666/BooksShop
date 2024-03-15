import { BookItemResolve } from '@/entities/book';
import { FC, ReactNode, createContext, useContext, useState } from 'react';

interface BooksContextProps {
	bookItemsCard: BookItemResolve[];
	addCard: (bookItemCard: BookItemResolve) => void;
	removeCard: (bookItemCard: BookItemResolve) => void;
}

const defaultState: BooksContextProps = {
	bookItemsCard: JSON.parse(localStorage.getItem('books')) || [],
	addCard: () => {},
	removeCard: () => {},
};

const BooksContext = createContext<BooksContextProps>(defaultState);

export const useBooksContext = () => useContext(BooksContext);

export const BookProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [bookItemsCard, setBookItemsCard] = useState<BookItemResolve[]>(
		JSON.parse(localStorage.getItem('books')) || [],
	);

	const addCard = (bookItemCard: BookItemResolve) => {
		setBookItemsCard(prev => {
			const updatedBookItems = [...prev, bookItemCard];
			localStorage.setItem('books', JSON.stringify(updatedBookItems));
			return updatedBookItems;
		});
	};

	const removeCard = (bookItemCard: BookItemResolve) => {
		setBookItemsCard(prev => {
			const updatedBooks = prev.filter(book => book.description !== bookItemCard.description);
			localStorage.setItem('books', JSON.stringify(updatedBooks));
			return updatedBooks;
		});
	};

	return <BooksContext.Provider value={{ bookItemsCard, addCard, removeCard }}>{children}</BooksContext.Provider>;
};

