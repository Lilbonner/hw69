import { Provider } from 'react-redux';
import store from './App/Store.ts';
import Search from './Components/Search';
import './App.css'

function App() {
    return (
        <Provider store={store}>
            <Search />
        </Provider>
    );
}

export default App;