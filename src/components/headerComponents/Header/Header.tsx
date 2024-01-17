import { Button } from 'components/Button';
import { Burger } from 'components/headerComponents/Burger';
import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Search } from '../../Search';
import { SelectAdress } from '../SelectAdress';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
	const [modalActive, SetModalActive] = useState<boolean>(false);
	const [burgerActive, SetBurgerActive] = useState<boolean>(false);

	const handlerClickModal = () => {
		SetModalActive(true);
	};
	const handlerClickBurger = () => {
		console.log('button');
		SetBurgerActive(true);
	};
	return (
		<div className={styles.header}>
			<Link to='/' className='header__logo'>
				<img className={styles.header__logo} src='img/Logo.svg' alt='' />
			</Link>

			<div onClick={handlerClickModal} className={styles.header__btn}>
				<Button>
					<div className={styles.header__btn}>
						<FaLocationDot />
						<span> Select address </span>
					</div>
				</Button>
			</div>

			<Search active={modalActive} setActive={SetModalActive}>
				<SelectAdress />
			</Search>

			<div className={styles.header__row}>
				{burgerActive && (
					<div className={styles.test1}>
						<div className={styles.test}>1</div>
						<div className={styles.test}>2</div>
						<div className={styles.test}>3</div>
					</div>
				)}

				<button className={styles.language}>En</button>
				<Burger
					active={burgerActive}
					setActive={SetBurgerActive}
					onClick={handlerClickBurger}
				/>
			</div>
		</div>
	);
};
