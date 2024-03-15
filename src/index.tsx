import App from './app/App';
import { MainProvider } from '@/app/providers/MainProvider'
import { createRoot } from 'react-dom/client';
import { someFn } from './test';

someFn(17);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
		<App />
);
