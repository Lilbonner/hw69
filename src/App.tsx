import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './App/Store.ts';
import Search from './Components/Search';
import ShowDetail from './Components/ShowDetail';
import './App.css'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/shows/:id" element={<ShowDetail />} />
                    <Route path="/" element={<Search />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
