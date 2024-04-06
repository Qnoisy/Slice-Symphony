import { Button } from 'components/Button';
import { RadioGroup } from 'components/RadioGroup';
import { useEffect, useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import styles from './SelectAdress.module.scss';

interface SelectAdressProps {
	active: boolean;
	setActive: (value: React.SetStateAction<boolean>) => void;
}

export const SelectAdress = ({ active, setActive }: SelectAdressProps) => {
	const locations: { value: string; label: string; id: number | string }[] = [
		{ value: 'address1', label: `address one`, id: 1 },
		{ value: 'address2', label: `address two`, id: 2 },
		{ value: 'address3', label: `address three`, id: 3 },
	];
	const [value, setValue] = useState<string>(locations[0].value);

	const renderLocal = (): JSX.Element => {
		const location: string[] | string = locations.map(item =>
			item.value === value ? item.label : ''
		);
		return (
			<div className={styles.selectAdress__local}>
				<FaSearchLocation />
				<span>{location}</span>
			</div>
		);
	};
	useEffect(() => {
		const handleEnterKeyPress = (event: KeyboardEvent) => {
			if (event.key === 'Enter') {
				setActive(false);
			}
		};
		document.addEventListener('keydown', handleEnterKeyPress);
		return () => {
			document.removeEventListener('keydown', handleEnterKeyPress);
		};
	}, []);

	const handlerClick = () => {
		console.log(value);
		setActive(!active);
	};

	return (
		<div className={styles.selectAdress}>
			<h2 className={styles.selectAdress__title}>Choose restaurant in list:</h2>
			<ul className={styles.selectAdress__list}>
				<RadioGroup
					name='test'
					items={locations}
					value={value}
					onChange={setValue}
				/>
			</ul>
			<hr className={styles.selectAdress__hr} />
			<div className={styles.selectAdress__btn}>
				{renderLocal()}
				<Button onClick={handlerClick}>Accept</Button>
			</div>
		</div>
	);
};
