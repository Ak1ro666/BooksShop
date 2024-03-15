import { FC } from 'react';

import { BooksContainer } from '@/shared/ui/model/BooksContainer';
import { CategoryContainer } from '@/shared/ui/model/CategoryContainer';
import { RouterLoader } from '@/shared/ui/ui/RouterLoader';
import { useBookPageContainer } from '@/widgets/BookPageContainer/ui/useBookPageContainer';

export const BookPageContainer: FC = () => {
	const { currentCategory, setCurrentCategory, books, queryData, loadMore } = useBookPageContainer();

	return (
		<div>
			<CategoryContainer currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
			{queryData.isSuccess && !queryData.isLoading ? <BooksContainer books={books} /> : <RouterLoader />}
			<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
				<button className={'button'} onClick={() => loadMore()}>
					Load more
				</button>
			</div>
		</div>
	);
};

