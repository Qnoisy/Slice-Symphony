import { BasketContext, ComponentBasketContext } from 'common/context/context';
import { FoodArray } from 'mas/FoodArray';
import { memo, useEffect, useRef, useState } from 'react';
import { SlBasket } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { PizzasType, PizzasTypeNew, typeDeals } from 'types';
import { Basket } from '../Basket';
import { MainList } from '../MainList';
import styles from './Menu.module.scss';

const ICONS_PATH = 'img/icons/pizzas-icons/';
interface IListArr {
	title: typeDeals;
	img: string;
}
interface ListProps {
	listArr: IListArr[];
	refs: any;
}

const listArr: IListArr[] = [
	{
		title: typeDeals.PIZZAS,
		img: `${ICONS_PATH}PizzasIcon.svg`,
	},
	{
		title: typeDeals.DEALS,
		img: `${ICONS_PATH}DealsIcon.svg`,
	},

	{
		title: typeDeals.DRINKS,
		img: `${ICONS_PATH}DrinkIcon.svg`,
	},
	{
		title: typeDeals.SOUCE,
		img: `${ICONS_PATH}SouceIcon.svg`,
	},
];

const List = memo(({ listArr, refs }: ListProps) => {
	const scrollToSection = (
		link: React.MutableRefObject<HTMLDivElement | null>
	) => {
		link.current?.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const renderList = listArr.map((item: IListArr, index) => (
		<li
			key={index}
			className={styles.menu__li}
			onClick={() => scrollToSection(refs[index])}
		>
			<img src={item.img} alt='' />
			<span>{item.title}</span>
		</li>
	));

	return (
		<nav className={styles.menu}>
			<ul className={styles.menu__list}>{renderList}</ul>{' '}
		</nav>
	);
});

export const Menu = () => {
	const Deals = useRef<HTMLDivElement | null>(null);
	const Pizzas = useRef<HTMLDivElement | null>(null);
	const Drinks = useRef<HTMLDivElement | null>(null);
	const Souce = useRef<HTMLDivElement | null>(null);
	const refs = [Deals, Pizzas, Drinks, Souce];
	const [basketArr, setBasketArr] = useState<PizzasTypeNew[]>([]);

	const AddCart = (id: string) => {
		// Проверяем, есть ли уже продукт с таким id в basketArr
		const existingItemIndex = basketArr.findIndex(item => item.info.id === id);

		if (existingItemIndex !== -1) {
			// Если продукт уже есть в корзине, обновляем его count
			setBasketArr(prevBasketArr => {
				const updatedBasketArr = [...prevBasketArr];
				updatedBasketArr[existingItemIndex].count += 1;
				return updatedBasketArr;
			});
		} else {
			// Если продукта еще нет в корзине, добавляем его с count = 1
			const newItem = FoodArray.find(item => item.info.id === id);
			if (newItem) {
				setBasketArr(prevBasketArr => [
					...prevBasketArr,
					{ ...newItem, count: 1 },
				]);
			}
		}
	};

	const clearBasket = () => {
		setBasketArr([]);
		localStorage.removeItem('basket');
	};

	useEffect(() => {
		const basket = JSON.parse(
			localStorage.getItem('basket') || '[]'
		) as PizzasTypeNew[];
		setBasketArr(basket);
	}, []);

	useEffect(() => {
		localStorage.setItem('basket', JSON.stringify(basketArr, null, 2));
	}, [basketArr]);

	const groupedSections: { [key in typeDeals]?: PizzasType[] } = {};
	FoodArray.forEach(item => {
		const itemType = item.info.type;
		if (!groupedSections[itemType]) {
			groupedSections[itemType] = [];
		}
		groupedSections[itemType]?.push(item);
	});
	const sectionsArray: PizzasType[][] = Object.values(groupedSections);

	const renderList = () => {
		const mas = sectionsArray.map((item, index) => {
			return (
				<MainList
					innerRef={refs[index]}
					array={item}
					key={item[0].info.type}
					type={item[0].info.type}
				/>
			);
		});

		return mas;
	};

	return (
		<ComponentBasketContext.Provider
			value={{ basketArr, setBasketArr, clearBasket }}
		>
			<BasketContext.Provider value={{ AddCart }}>
				<div className={styles.container}>
					<List listArr={listArr} refs={refs} />
					<div className={styles.menuBasket}>
						<div>{renderList()}</div>
						<Basket />
					</div>
					<div className={styles.media}>
						<Link to='/basket'>
							<SlBasket className={styles.media__basket} />
							{basketArr.length !== 0 && (
								<div className={styles.basket__length}>{basketArr.length}</div>
							)}
						</Link>
					</div>
				</div>
			</BasketContext.Provider>
		</ComponentBasketContext.Provider>
	);
};
