import classNames from 'classnames';
import { Button } from 'components/Button';
import { useTheme } from 'hooks/useTheme';
import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Search } from '../../Search';
import { Burger } from '../Burger';
import { SelectAdress } from '../SelectAdress';
import styles from './Header.module.scss';

// interface HeaderProps {}

export const Header = () => {
	const [modalActive, SetModalActive] = useState<boolean>(false);
	const [burgerActive, SetBurgerActive] = useState<boolean>(false);
	const { theme, setTheme } = useTheme();

	const handleClickTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	const handlerClickModal = () => {
		SetModalActive(true);
	};
	const handlerClickBurger = () => {
		SetBurgerActive(!burgerActive); // Инвертируем состояние burgerActive
	};

	return (
		<div className={styles.header}>
			<Link to='/' className='header__logo'>
				<img className={styles.header__logo} src='img/Logo.svg' alt='' />
			</Link>
			<Button onClick={handlerClickModal} className={styles.header__btn}>
				<div className={styles.header__btn_inner}>
					<FaLocationDot />
					<span> Select address </span>
				</div>
			</Button>

			<Search active={modalActive} setActive={SetModalActive}>
				<SelectAdress active={modalActive} setActive={SetModalActive} />
			</Search>

			<div className={styles.header__row}>
				{burgerActive && (
					<>
						<div className={styles.header__links}>
							<Link to='/' className={classNames(styles.header__linkText)}>
								Menu
							</Link>
							<Link
								to='/contact'
								className={classNames(styles.header__linkText)}
							>
								Contact us
							</Link>
							<Link
								to='/promotions'
								className={classNames(styles.header__linkText)}
							>
								Promotions
							</Link>
						</div>
						<button onClick={handleClickTheme}>
							{theme === 'light' ? (
								<span className={styles.header__theme}>
									<MdOutlineLightMode />
								</span>
							) : (
								<span className={styles.header__theme}>
									<MdLightMode />
								</span>
							)}
						</button>
					</>
				)}

				<button className={styles.language}>En</button>
				<Burger
					active={burgerActive}
					setActive={SetBurgerActive}
					theme={theme}
					setTheme={handleClickTheme}
					onClick={handlerClickBurger}
				/>
			</div>
		</div>
	);
};
