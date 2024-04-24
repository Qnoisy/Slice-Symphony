import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Form, Formik } from 'formik';
import styles from './Form.module.scss';
import { initialValues, schemas } from './helper';

interface FormProps {}

export const CustomForm = ({}: FormProps) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={schemas.custom}
			onSubmit={() => console.log('success')}
		>
			<Form className={styles.form}>
				<Input
					label={'Name'}
					name={'firstName'}
					id={'firstName'}
					placeholder={'Enter name'}
				/>
				<Input
					label={'Last Name'}
					name={'lastName'}
					id={'lastName'}
					placeholder={'Enter last name'}
				/>
				<Input
					label={'Email'}
					name={'email'}
					id={'email'}
					placeholder={'Enter email'}
				/>
				<Button>Send</Button>
			</Form>
		</Formik>
	);
};
