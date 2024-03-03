import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import counterReducer from '../services/counter/counter-slice';
import { dogsApiSlice } from '../services/dogs/dogApiSlice';
import cartReducer from '../services/products/cartSlice';
import { productsApiSlice } from '../services/products/productsApiSlice';
import {pagesApiSlice} from '../services/appbar/pagesApiSlice';
import { usersApiSlice } from '../services/users/usersApiSlice';
import appBarReducer from '../services/appbar/appbar-slice';

const rootReducer = combineSlices(
	usersApiSlice,
	dogsApiSlice,
	productsApiSlice,
	pagesApiSlice,
	{ counter: counterReducer, cart: cartReducer, appBar: appBarReducer },
);

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(
			dogsApiSlice.middleware,
			usersApiSlice.middleware,
			productsApiSlice.middleware,
			pagesApiSlice.middleware,
		);
	},
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
