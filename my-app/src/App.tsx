import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './app/store';
import Cart from './Cart/Cart';
import ProductForms from './Products/ProductForm';
import ProductsList from './Products/ProductsList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsList/>
        <ProductForms/>
        <Cart/>
      </div>
    </Provider>
  );
}

export default App;
