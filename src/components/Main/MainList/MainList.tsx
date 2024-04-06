import { MutableRefObject } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { PizzasType, typeDeals } from 'types';
import { MainCard } from '../MainCard';
import styles from './MainList.module.scss';

interface MainListProps {
	array: PizzasType[];
	innerRef: MutableRefObject<HTMLDivElement | null>;
	type: typeDeals;
}

export const MainList = ({ array, innerRef, type }: MainListProps) => {
	return (
		<div className={styles.mainList} ref={innerRef}>
			<div className={styles.mainList__row}>
				<h2 className={styles.mainList__title}>{type}</h2>
				<button
					onClick={() =>
						window.scroll({
							top: 0,
							behavior: 'smooth',
						})
					}
				>
					<FaArrowCircleUp className={styles.mainList__link} />
				</button>
			</div>
			<ul className={styles.mainList__list}>
				{array.map(date => (
					<MainCard date={date} key={date.info.id} />
				))}
			</ul>
		</div>
	);
};
