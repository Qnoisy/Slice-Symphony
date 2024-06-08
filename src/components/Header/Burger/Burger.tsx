import classNames from 'classnames';
import { Twirl as Hamburger } from 'hamburger-react';
import { useEffect } from 'react';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './Burger.module.scss';

interface BurgerProps {
	active: boolean;
	setActive: (active: boolean) => void;
	theme: string;
	setTheme: () => void;
	onClick: () => void;
}

export const Burger = ({
	active,
	setActive,
	theme,
	setTheme,
	onClick,
}: BurgerProps) => {
	useEffect(() => {
		const handleEscKeyPress = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setActive(false);
			}
		};
		document.addEventListener('keydown', handleEscKeyPress);
		return () => {
			document.removeEventListener('keydown', handleEscKeyPress);
		};
	}, [setActive]);
	const renderContentBurger = () => {
		return (
			<div
				className={classNames(styles.burger__content, {
					[styles.active]: active,
				})}
				onClick={onClick}
			>
				<div
					className={classNames(styles.burger__block, {
						[styles.active]: active,
					})}
					onClick={e => e.stopPropagation()}
				>
					{renderBurger()}
					<div className={styles.burger__links}>
						<Link to='/' className={styles.burger__linkText}>
							Menu
						</Link>
						<Link to='/contact' className={styles.burger__linkText}>
							Contact us
						</Link>
						<Link
							to='/promotions'
							className={classNames(styles.burger__linkText)}
						>
							Promotions
						</Link>
						<p className={styles.burger__row}>
							<button onClick={setTheme} className={styles.burger__theme}>
								{theme === 'light' ? (
									<span className={styles.burger__theme}>
										<MdLightMode />
									</span>
								) : (
									<span className={styles.burger__theme}>
										<MdOutlineLightMode />
									</span>
								)}
							</button>
							<button className={classNames(styles.burger__theme)}>En</button>
						</p>
					</div>
				</div>
			</div>
		);
	};
	const renderBurger = () => {
		return (
			<Hamburger toggled={active} toggle={onClick} size={22} color='#a5a5a5' />
		);
	};

	return (
		<div>
			{renderContentBurger()}
			{renderBurger()}
		</div>
	);
};
