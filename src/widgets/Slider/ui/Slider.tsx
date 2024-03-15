import { FC, useEffect, useState } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import styles from './Slider.module.scss';

export const Slider: FC = () => {
	
	const [slides, setSlides] = useState([
		'/assets/banners/banner1.png',
		'/assets/banners/banner2.png',
		'/assets/banners/banner3.png',
	]);
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
	};

	useEffect(() => {
		
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.slider}>
			<div className={styles.slides}>
				{slides.map(slide => (
					<img
						key={slide}
						src={slide}
						alt="slide"
						className={cn(styles.slide, { [styles.active]: slide === slides[currentSlide] }, [])}
					/>
				))}
			</div>

			<ul className={styles.slidesNavigation}>
				{slides.map(slide => (
					<li
						key={slide}
						className={currentSlide === slides.indexOf(slide) ? styles.active : ''}
						onClick={() => setCurrentSlide(slides.indexOf(slide))}
					></li>
				))}
			</ul>
		</div>
	);
};

