import { BookPageContainer } from '@/widgets/BookPageContainer'
import { FC } from 'react';
import { LayoutProvider } from '@/app/providers/LayoutProvider';
import { Slider } from '@/widgets/Slider';

const BooksPage: FC = () => {

	return (
		<LayoutProvider>
			<Slider />
			<BookPageContainer />
		</LayoutProvider>
	);
};

export default BooksPage;

