import classNames from 'classnames';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import styles from './Burger.module.scss';

interface BurgerProps {
	active: boolean;
	setActive: (value: React.SetStateAction<boolean>) => void;
	onClick: React.MouseEventHandler<HTMLLabelElement>;
}

export const Burger = ({ active, setActive, onClick }: BurgerProps) => {
	const [isOpen, SetIsOpen] = useState(false);
	const handlerActiveBurger = () => {
		setActive(false);
		SetIsOpen(false);
	};
	{
		!isOpen ? setActive(false) : setActive(true);
	}

	const renderContentBurger = () => {
		return (
			<div
				className={classNames(styles.burger__content, {
					[styles.active]: active,
				})}
				onClick={handlerActiveBurger}
			>
				<div
					className={classNames(styles.burger__block, {
						[styles.active]: active,
					})}
					onClick={e => e.stopPropagation()}
				>
					{renderBurger()}
					<div className={styles.test1}>
						<div className={styles.test}>1</div>
						<div className={styles.test}>2</div>
						<div className={styles.test}>3</div>
					</div>
				</div>
			</div>
		);
	};
	const renderBurger = () => {
		return (
			<label className={styles.burger} onClick={onClick}>
				<Hamburger
					toggled={isOpen}
					toggle={SetIsOpen}
					size={22}
					color='#a5a5a5'
				/>
			</label>
		);
	};

	return (
		<div>
			{renderContentBurger()}
			{renderBurger()}
		</div>
	);
};
