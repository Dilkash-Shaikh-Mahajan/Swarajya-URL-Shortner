import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Menubar from './component/Menubar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Menubar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
