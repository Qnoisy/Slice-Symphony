import { PizzaArray } from '../../../mas/PizzaArray';
import { MainList } from '../MainList';
import styles from './Menu.module.scss';

interface MenuProps {}

interface ListProps {
	img: string;
	text: string;
}

const List = ({ img, text }: ListProps) => {
	return (
		<li className={styles.menu__li}>
			<img src={img} alt='' />
			<span>{text}</span>
		</li>
	);
};

export const Menu = ({}: MenuProps) => {
	return (
		<>
			<nav className={styles.menu}>
				<ul className={styles.menu__list}>
					<List img={'img/icons/pizzas-icons/DealsIcon.svg'} text={'Deals'} />
					<List img={'img/icons/pizzas-icons/PizzasIcon.svg'} text={'Pizzas'} />
					<List img={'img/icons/pizzas-icons/DrinkIcon.svg'} text={'Drinks'} />
					<List img={'img/icons/pizzas-icons/SouceIcon.svg'} text={'Souce'} />
				</ul>
			</nav>
			<div>
				<MainList title={'Pizzas'} masOfPizzas={PizzaArray} />
			</div>
		</>
	);
};
