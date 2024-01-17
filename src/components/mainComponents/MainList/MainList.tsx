import { PizzasTypeArray } from 'types';
import { MainCard } from '../MainCard';
import styles from './MainList.module.scss';

interface MainListProps {
	title: string;
	masOfPizzas: PizzasTypeArray[];
}

export const MainList = ({ title, masOfPizzas }: MainListProps) => {
	return (
		<div className={styles.mainList}>
			<h2 className={styles.mainList__title}>{title}</h2>
			<ul className={styles.mainList__list}>
				{masOfPizzas.map(date => (
					<MainCard date={date} key={date.info.id} />
				))}
			</ul>
		</div>
	);
};
