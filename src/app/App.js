import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { Cart } from '../features/Cart/Cart';
import {TotalOrders} from '../features/Total/Total'
function App() {
  return (
    <Provider store={store}>
        <div>
         <Cart/>
         <TotalOrders/>
        </div>
    </Provider>
  );
}

export default App;
