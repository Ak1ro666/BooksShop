import { FC, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';

interface IQueryProviderProps {
	children: ReactNode;
}

export const QueryProvider: FC<IQueryProviderProps> = ({ children }) => {
	const [queryClient] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		}),
	);

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

