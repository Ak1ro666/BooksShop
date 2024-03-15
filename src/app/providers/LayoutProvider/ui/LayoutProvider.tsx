import { FC, ReactNode } from 'react';

import { Header } from '@/widgets/Header';

interface ILayoutProviderProps {
	children: ReactNode;
}

export const LayoutProvider: FC<ILayoutProviderProps> = ({ children }) => {
	return (
		<div className={'layout__container'}>
			<Header />
			{children}
			
		</div>
	);
};

