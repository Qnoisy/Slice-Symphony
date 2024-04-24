import * as Yup from 'yup';

const regx = {
	name: /^[а-яА-Яa-zA-Z]{2,20}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
};

const firstName = Yup.string()
	.matches(regx.name, 'Latin letters, from 2 to 20 characters')
	.required('Enter your first name');

const lastName = Yup.string()
	.matches(regx.name, 'Latin letters, from 2 to 20 characters')
	.required('Enter your last name');

const email = Yup.string()
	.matches(regx.email, 'format example@gmail.com')
	.required('Enter your email');

export const schemas = {
	custom: Yup.object().shape({
		firstName,
		lastName,
		email,
	}),
};
export const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
};
