import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import products from '../Products/Product.slice'
import cart from '../Cart/Cart.slice'

export const store = configureStore({
  reducer: {
    products,
    cart 

  },
});

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () =>useDispatch<AppDispatch>()

export default store;
