import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './components/wrapper';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Wrapper />
	</BrowserRouter>
);
