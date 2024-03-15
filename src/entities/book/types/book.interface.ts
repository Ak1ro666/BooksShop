export interface BookItemResponse {
	items: {
		volumeInfo: {
			imageLinks: {
				thumbnail: string;
			};
			authors: string[];
			title: string;
			description: string;
		};
	}[];
}

export interface BookItem {
	volumeInfo: {
		imageLinks: {
			thumbnail: string;
		};
		authors: string[];
		title: string;
		description: string;
	};
}

export interface BookItemResolve {
	image: string;
	authors: string[];
	title: string;
	description: string;
}

