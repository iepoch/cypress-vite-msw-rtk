import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Products } from './productsApiSlice';

export interface CartItem extends Products {
	id: number;
	cartQuantity: number;
	cartPrice: number;
	cartTotalQuantity: number;
	cartTotalAmount: number;
}
interface CartItemsState {
	cartItems: CartItem[];
}
const initialState: CartItemsState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems') || '')
		: ([] as CartItem[]),
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<CartItem>): void {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id,
			);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
				toast.info(
					`increase ${state.cartItems[itemIndex].title} cart quantity`,
					{
						position: 'bottom-left',
					},
				);
			} else {
				const cartItem = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(cartItem);
				toast.success('added new product to cart', {
					position: 'bottom-left',
				});
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		removeFromCart(state, action: PayloadAction<CartItem>): void {
			const itemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload.id,
			);
			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
				toast.info(
					`Decreased ${state.cartItems[itemIndex].title} cart quantity`,
					{
						position: 'bottom-left',
					},
				);
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const clearCartItems = state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id,
				);

				state.cartItems = clearCartItems;
				localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
				toast.error(`${action.payload.title} has been removed from cart`, {
					position: 'bottom-left',
				});
			}
		},
		clearCart(state) {
			state.cartItems = [];
		},
		reset: () => initialState,
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
