import { IButton } from '@/shared/ui/ui/Button/types/button.interface';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Button: FC<IButton> = props => {
	const { path, className, children, ...rest } = props;
	const navigate = useNavigate();

	return (
		<button className={className} onClick={path ? () => navigate(path) : () => {}} {...rest}>
			{children}
		</button>
	);
};

