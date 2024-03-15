import { LayoutProvider } from '@/app/providers/LayoutProvider';
import { FC } from 'react';

const BlogPage: FC = () => {
	return (
		<LayoutProvider>
			<div>BlogPage</div>
		</LayoutProvider>
	);
};

export default BlogPage;

