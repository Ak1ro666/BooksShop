import { FC } from 'react';
import { Link } from 'react-router-dom'

export const Logo: FC = () => {
	return (
		<Link to={'/'}>
			<img src="/assets/logo.svg" alt="logo" />
		</Link>
	);
};

