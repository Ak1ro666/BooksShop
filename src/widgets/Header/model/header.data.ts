import { IHeaderData, IHeaderDataButtons } from '../types/header.interface';

export const data: IHeaderData[] = [
	{
		name: 'books',
		link: '/',
	},
	{
		name: 'audiobooks',
		link: '/audiobooks',
	},
	{
		name: 'stationery & gifts',
		link: '/gifts',
	},
	{
		name: 'blog',
		link: '/blog',
	},
];

export const dataButtons: IHeaderDataButtons[] = [
	{
		name: 'User',
		path: '/profile',
		imgPath: '/assets/icons/header/user.svg',
	},
	{
		name: 'Search',
		path: '',
		imgPath: '/assets/icons/header/search.svg',
	},
	{
		name: 'Shop',
		path: '',
		imgPath: '/assets/icons/header/shop.svg',
	},
];

