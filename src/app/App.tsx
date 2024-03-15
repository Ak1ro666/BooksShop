import './styles/index.scss';

import { FC } from 'react';
import { MainProvider } from '@/app/providers/MainProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/shared/config/router.config';

const App: FC = () => {
	return (
		<MainProvider>
			<RouterProvider router={router} />
		</MainProvider>
	);
};

export default App;

