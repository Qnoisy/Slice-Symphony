import classNames from 'classnames';
import { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
	children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
	return (
		<button className={classNames('button', 'css-button-rounded--green')}>
			{children}
		</button>
	);
};
