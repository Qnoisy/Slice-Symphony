import { Button } from 'components/Button';
import { PizzasTypeArray } from 'types';
import styles from './MainCard.module.scss';

interface MainCardProps {
	date: PizzasTypeArray;
}

export const MainCard = ({ date }: MainCardProps) => {
	return (
		<article className={styles.mainCard}>
			<img className={styles.mainCard__img} src={date.info.img} alt='' />
			<div className={styles.mainCard__block}>
				<h2 className={styles.mainCard__title}>{date.info.name}</h2>
				<div className={styles.mainCard__description}>
					{date.info.description}
				</div>
				<div className={styles.mainCard__row}>
					<button onClick={() => console.log('btn')}>
						<Button>Add to cart</Button>
					</button>
					<div className={styles.mainCard__price}>{date.info.price}</div>
				</div>
			</div>
		</article>
	);
};
