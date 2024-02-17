import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface CartItem {
 id: number,
 cartQuantity: number,
 cartPrice: number,
 cartTotalQuantity: number,
 cartTotalAmount: number,
  }
interface CartItemsState {
    cartItems: CartItem[],
}
  const initialState: CartItemsState = {
    cartItems: [] as CartItem[],
  };
  
  const cartSlice = createSlice({
    name:"cart",
    initialState, 
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>): void{
           const itemIndex = state.cartItems.findIndex((item )=> item.id === action.payload.id)
              if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info('increase quantity', {
                  position:"bottom-left"
                })
              } else {
                  const cartItem = { ...action.payload, cartQuantity: 1 }
                  state.cartItems.push(cartItem);
                  toast.success('added new product to cart', {
                    position:"bottom-left"
                  })
              }
        },
        reset: () => (initialState),
    }

  })

  export const { addToCart } = cartSlice.actions
  export default cartSlice.reducer;