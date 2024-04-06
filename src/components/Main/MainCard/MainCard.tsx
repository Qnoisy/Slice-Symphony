import { BasketContext } from 'common/context/context';
import { Button } from 'components/Button';
import { useContext } from 'react';
import { PizzasType } from 'types';
import styles from './MainCard.module.scss';

interface MainCardProps {
	date: PizzasType;
}

export const MainCard = ({ date }: MainCardProps) => {
	const { AddCart } = useContext(BasketContext);
	return (
		<article className={styles.mainCard}>
			<img className={styles.mainCard__img} src={date.info.img} alt='' />
			<div className={styles.mainCard__block}>
				<h2 className={styles.mainCard__title}>{date.info.name}</h2>
				<div className={styles.mainCard__description}>
					{date.info.description}
				</div>
				<div className={styles.mainCard__row}>
					<Button onClick={() => AddCart(date.info.id)}>Add to cart</Button>
					<div className={styles.mainCard__price}>{date.info.price}$</div>
				</div>
			</div>
		</article>
	);
};
