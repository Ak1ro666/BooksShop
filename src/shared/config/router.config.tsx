import { AudioBooksPage } from '@/pages/AudioBooksPage';
import { BlogPage } from '@/pages/BlogPage';
import { BooksPage } from '@/pages/BooksPage';
import { GiftsPage } from '@/pages/GiftsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RouterLoader } from '@/shared/ui/ui/RouterLoader';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const enum AppRouter {
	BOOKS,
	AUDIOBOOKS,
	GIFTS,
	BLOG,
	NOTFOUNDPAGE,
}

export const AppPath: Record<AppRouter, string> = {
	[AppRouter.BOOKS]: '/',
	[AppRouter.AUDIOBOOKS]: '/audiobooks',
	[AppRouter.GIFTS]: '/gifts',
	[AppRouter.BLOG]: '/blog',
	[AppRouter.NOTFOUNDPAGE]: '*',
};

export const router = createBrowserRouter([
	{
		path: AppPath[AppRouter.BOOKS],
		element: (
			<Suspense fallback={<RouterLoader />}>
				<BooksPage />
			</Suspense>
		),
	},
	{
		path: AppPath[AppRouter.AUDIOBOOKS],
		element: (
			<Suspense fallback={<RouterLoader />}>
				<AudioBooksPage />
			</Suspense>
		),
	},
	{
		path: AppPath[AppRouter.BLOG],
		element: (
			<Suspense fallback={<RouterLoader />}>
				<BlogPage />
			</Suspense>
		),
	},
	{
		path: AppPath[AppRouter.GIFTS],
		element: (
			<Suspense fallback={<RouterLoader />}>
				<GiftsPage />
			</Suspense>
		),
	},
	{
		path: AppPath[AppRouter.NOTFOUNDPAGE],
		element: <NotFoundPage />,
	},
]);

