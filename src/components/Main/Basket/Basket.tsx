import classNames from 'classnames';
import {
	ComponentBasketContext,
	IComponentBasketC,
} from 'common/context/context';
import { useContext } from 'react';
import { SlBasket } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { PizzasTypeNew } from 'types';
import styles from './Basket.module.scss';

export const Basket = () => {
	const { basketArr, setBasketArr, clearBasket } =
		useContext<IComponentBasketC>(ComponentBasketContext);
	const totalPrice = basketArr.reduce(
		(total, item) => total + item.info.price * item.count,
		0
	);

	const handleAdd = (id: string) => {
		const updatedBasket = basketArr.map(item =>
			item.info.id === id ? { ...item, count: item.count + 1 } : item
		);
		setBasketArr(updatedBasket);
	};

	const handleRemove = (id: string) => {
		const updatedBasket = basketArr
			.map(item =>
				item.info.id === id
					? { ...item, count: Math.max(item.count - 1, 0) } // Уменьшаем count, но не меньше 0
					: item
			)
			.filter(item => item.count > 0); // Удаляем продукт, если его count стал равным 0

		setBasketArr(updatedBasket);
	};

	const renderCards = () => {
		return basketArr.map((item: PizzasTypeNew) => (
			<div className={styles.basket__items} key={item.info.id}>
				<div className={styles.basket__itemRow}>
					<img
						src={item.info.img}
						alt=''
						className={styles.basket__itemImgage}
					/>
					<div className={styles.basket__text}>{item.info.name}</div>
				</div>
				<div className={styles.basket__rowCentr}>
					<button
						className={styles.basket__itemBtn}
						onClick={() => handleAdd(item.info.id)}
					>
						<span>+</span>
					</button>
					<span className={styles.basket__text}>{item.count}</span>
					<button
						className={styles.basket__itemBtn}
						onClick={() => handleRemove(item.info.id)}
					>
						<span>-</span>
					</button>
					<span className={styles.basket__text}>{item.info.price}$</span>
				</div>
			</div>
		));
	};

	return (
		<div className={styles.basket}>
			<div className={styles.basket__content}>
				<Link to='/form'>
					<SlBasket className={styles.basket__img} />
					{basketArr.length !== 0 && (
						<div className={styles.basket__length}>{basketArr.length}</div>
					)}
				</Link>
				{basketArr.length > 0 && renderCards()}
				<div className={classNames(styles.basket__items, styles.basket__row)}>
					<div className={styles.basket__text}>
						total: {totalPrice.toFixed(2)}$
					</div>
					<button
						className={classNames(styles.basket__text, styles.basket__btn)}
						onClick={clearBasket}
					>
						Clear
					</button>
				</div>
			</div>
		</div>
	);
};
