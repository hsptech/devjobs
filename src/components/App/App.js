import './App.scss';
import Routes from './../../routes';
import Header from './../Header';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="routes-wrapper">
                <Routes />
            </div>
        </div>
    );
}

export default App;
