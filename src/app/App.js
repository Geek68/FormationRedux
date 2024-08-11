import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { Cart } from '../features/Cart/Cart';
import {TotalOrders} from '../features/Total/Total'
import { Voucher } from '../features/Voucher/voucher';
import { Owner } from '../features/Owner/Owner';
function App() {
  return (
    <Provider store={store}>
        <div>
         <Cart/>
         <TotalOrders/>
         <Voucher/>
         <Owner/>
        </div>
    </Provider>
  );
}

export default App;
