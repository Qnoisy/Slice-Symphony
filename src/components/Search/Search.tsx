import classNames from 'classnames';
import React, { useEffect } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
	children: React.ReactNode;
	active: boolean;
	setActive: (value: React.SetStateAction<boolean>) => void;
}

export const Search = ({ active, setActive, children }: SearchProps) => {
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

	return (
		<div
			className={classNames(styles.search, { [styles.active]: active })}
			onClick={() => setActive(false)}
		>
			<div
				className={classNames(styles.search__content, {
					[styles.active]: active,
				})}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};
