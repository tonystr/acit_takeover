import { StrictMode } from 'react';
import Home from './pages/home/HomeRoute';
import { Inspector } from 'react-dev-inspector'

function App() {
    return (
        <div className='App'>
			<StrictMode>
				<Inspector>
					<Home />
				</Inspector>
			</StrictMode>
        </div>
    );
}

export default App;
