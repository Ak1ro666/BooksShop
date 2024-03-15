import type { BookItemResponse } from '@/entities/book';
import { $axios } from '../api/interceptor';

export const BookService = {
	async getBooks(category: string) {
		return await $axios.get<BookItemResponse>(
			`https://www.googleapis.com/books/v1/volumes?key=AIzaSyAMAmI1Mm3G4i9GXKe0iFJRd5379GHwlxg&q=\"subject:${category}\"&printType=books&startIndex=0&maxResults=6&langRestrict=en'`,
		);
	},
	async loadMoreBooks(category: string, startIndex: number) {
		const newIndex = startIndex + 6;

		return await $axios.get<BookItemResponse>(
			`https://www.googleapis.com/books/v1/volumes?key=AIzaSyAMAmI1Mm3G4i9GXKe0iFJRd5379GHwlxg&q=\"subject:${category}\"&printType=books&startIndex=${newIndex}&maxResults=6&langRestrict=en'`,
		);
	},
};

