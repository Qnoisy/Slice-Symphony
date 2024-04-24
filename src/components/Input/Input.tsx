import { ErrorMessage as Erorr, Field } from 'formik';
import styles from './Input.module.scss';
interface InputProps {
	id: any;
	label: any;
	name: any;
	placeholder: any;
}

export const Input = ({ id, label, name, placeholder }: InputProps) => {
	return (
		<div className={styles.input_container}>
			<label htmlFor={id}>{label}</label>
			<Field name={name} id={id} placeholder={placeholder} />
			<Erorr name={name}>{error => <span>{error}</span>}</Erorr>
		</div>
	);
};
