import { Drawer } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { addToCart } from "../../services/products/cartSlice";
import { CartItems } from "./CartItem";

export const CartDrawer = () =>{
    const cart = useAppSelector((state) => state.cart);

    return (
        <Drawer open={true} anchor="right" PaperProps={{
            sx:{
                width: 500,
                backgroundColor: "white",
                borderRadius:0,
                alignItems: "center",
            }
        }}>
            <>
            <h2>Cart</h2>
            {cart.cartItems.length === 0 ? <p> No Items in cart</p> :  null}
            {cart.cartItems.map(product => (
                <CartItems key={product.id} product={product} addToCart={addToCart} />

            ))} 
            </>
        </Drawer>
    )
}