import { Route, Routes } from 'react-router-dom';
import { Menu } from '../Menu';
import styles from './Main.module.scss';

interface MainProps {}

export const Main = ({}: MainProps) => {
	return (
		<div className={styles.main}>
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/test' element={'123'} />
			</Routes>
		</div>
	);
};
