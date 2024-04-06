import classNames from 'classnames';
import { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void; // Опциональный обработчик события onClick
	className?: string; // Опциональный className для дополнительного стилизации
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
	return (
		<button
			className={classNames('button', 'css-button-rounded--green', className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
