import { FC, ReactNode } from 'react';

import { QueryProvider } from '../../QueryProvider/index';
import { BookProvider } from '@/app/providers/BookProvider'

interface IMainProviderProps {
	children: ReactNode;
}

export const MainProvider: FC<IMainProviderProps> = ({ children }) => {
	return <QueryProvider><BookProvider>{children}</BookProvider></QueryProvider>;
};

