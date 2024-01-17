import '../common/general.scss';
import '../common/let.scss';
import '../common/reset.scss';
import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './headerComponents/Header';
import { Main } from './mainComponents/Main';

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
					<Main />
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
