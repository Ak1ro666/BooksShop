import { BookService } from '@/shared/services/book.service';
import { categoryData } from '@/shared/ui/model/CategoryContainer/model/category.data';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

export const useBookPageContainer = () => {
	const [startIndex, setStartIndex] = useState<number>(0);
	const [currentCategory, setCurrentCategory] = useState<number>(0);
	const [books, setBooks] = useState([]);
	const [loadingMore, setLoadingMore] = useState<boolean>(false);

	const queryData = useQuery({
		queryKey: ['books/get', currentCategory],
		queryFn: () => BookService.getBooks(categoryData[currentCategory].name),
		select: ({ data }) =>
			data.items.map(book => ({
				image: book.volumeInfo.imageLinks.thumbnail,
				authors: book.volumeInfo.authors,
				title: book.volumeInfo.title,
				description: book.volumeInfo.description,
			})),
	});

	if (queryData.data) console.log(queryData.data);

	useEffect(() => {
		if (queryData.isSuccess) {
			setBooks(queryData.data);
		}
	}, [queryData.isSuccess, queryData.data]);

	const {
		data: moreBooks,
		isSuccess: moreBooksSuccess,
		isLoading,
	} = useQuery({
		queryKey: ['loadMore/books/get', currentCategory],
		queryFn: () => BookService.loadMoreBooks(categoryData[currentCategory].name, startIndex),
		select: ({ data }) =>
			data.items.map(book => ({
				image: book.volumeInfo.imageLinks.thumbnail,
				authors: book.volumeInfo.authors,
				title: book.volumeInfo.title,
				description: book.volumeInfo.description,
			})),
		enabled: loadingMore,
	});

	useEffect(() => {
		if (loadingMore && moreBooksSuccess && moreBooks) {
			setLoadingMore(false);
			setStartIndex(prev => prev + 6);
			setBooks(prevBooks => [...prevBooks, ...moreBooks]);
		}
	}, [loadingMore, moreBooksSuccess, moreBooks]);

	const loadMore = () => {
		setLoadingMore(true);
	};

	return useMemo(
		() => ({
			loadMore,
			currentCategory,
			setCurrentCategory,
			queryData,
			books,
		}),
		[queryData.isSuccess, queryData.isError, queryData.isLoading, books, loadingMore, setLoadingMore, moreBooksSuccess, isLoading],
	);
};
