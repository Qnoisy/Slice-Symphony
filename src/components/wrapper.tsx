import { Route, Routes } from 'react-router-dom';
import { Contact } from 'routes/Contact';
import { Promotions } from 'routes/Promotions';
import '../common/general.scss';
import '../common/reset.scss';
import { Container } from './Container';
import { Footer } from './Footer';
import { CustomForm } from './Form';
import { Header } from './Header/Header';
import { Menu } from './Main/Menu';

const Wrapper = () => {
	return (
		<div className='wrapper'>
			<div className='header'>
				<Container>
					<Header />
				</Container>
			</div>
			<div className='main'>
				<Container>
					<Routes>
						<Route path='/' element={<Menu />} />
						<Route path='/promotions' element={<Promotions />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/form' element={<CustomForm />} />
					</Routes>
				</Container>
			</div>
			<div className='footer'>
				<Container>
					<Footer />
				</Container>
			</div>
		</div>
	);
};

export default Wrapper;
