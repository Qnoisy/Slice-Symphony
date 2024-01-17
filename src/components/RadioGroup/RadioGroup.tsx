import { FaLocationDot } from 'react-icons/fa6';
import styles from './RadioGroup.module.scss';

interface RadioGroupProps {
	name: string;
	items: { value: string; label: string; id: number | string }[];
	value: string | null;
	onChange: (value: string) => void;
}

export const RadioGroup = ({
	name,
	items,
	value,
	onChange,
}: RadioGroupProps) => {
	return (
		<>
			{items.map(item => (
				<div className={styles.radioGroup} key={item.id}>
					<input
						className={styles.radioGroup__input}
						type='radio'
						name={name}
						value={item.value}
						id={name + item.value}
						checked={value === item.value}
						onChange={e => onChange(e.target.value)}
					/>
					<label
						htmlFor={name + item.value}
						className={styles.radioGroup__label}
					>
						<FaLocationDot /> {item.label}
					</label>
				</div>
			))}
		</>
	);
};
