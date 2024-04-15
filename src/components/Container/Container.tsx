import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
	const containerClassName = classNames(styles.container, className);

	return <div className={containerClassName}>{children}</div>;
};
