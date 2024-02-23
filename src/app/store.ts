import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import counterReducer from '../services/counter/counter-slice';
import { dogsApiSlice } from '../services/dogs/dogApiSlice';
import cartReducer from '../services/products/cartSlice';
import { productsApiSlice } from '../services/products/productsApiSlice';
import { usersApiSlice } from '../services/users/usersApiSlice';

const rootReducer = combineSlices(
	usersApiSlice,
	dogsApiSlice,
	productsApiSlice,
	{ counter: counterReducer, cart: cartReducer },
);

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(
			dogsApiSlice.middleware,
			usersApiSlice.middleware,
			productsApiSlice.middleware,
		);
	},
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
