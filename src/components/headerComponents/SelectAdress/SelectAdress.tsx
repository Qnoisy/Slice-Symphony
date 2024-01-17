import { Button } from 'components/Button';
import { RadioGroup } from 'components/RadioGroup';
import { useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import styles from './SelectAdress.module.scss';

interface SelectAdressProps {}

export const SelectAdress = ({}: SelectAdressProps) => {
	const locations: { value: string; label: string; id: number | string }[] = [
		{ value: 'test1', label: `- lorem text1 lorem`, id: 1 },
		{ value: 'test2', label: `- lorem text2 lorem`, id: 2 },
		{ value: 'test3', label: `- lorem text3 lorem`, id: 3 },
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
				<button onClick={() => console.log(value, 'click')}>
					<Button>Accept</Button>
				</button>
			</div>
		</div>
	);
};
