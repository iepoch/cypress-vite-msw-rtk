import {  CartItem  } from "../../services/products/cartSlice";
import { Card, CardContent, CardMedia } from "@mui/material";

type Props = {
    product: CartItem;
    addToCart: (clickProduct: CartItem) => void;

}

export const  CartItems =  ({product }: Props) =>{
    return (
        <Card key={product.id + product.rating.count + product.rating.rate} sx={{
            maxWidth: 420,
            alignContent: 'center',
            backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }} >
            <CardContent sx={{display: "flex", justifyContent:"center"}}>
                <h3>{product.title}</h3>
                 <CardMedia component="img"  sx={{ height: 140 }} image={product.image} />
            </CardContent>
            <CardContent>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.cartQuantity}</p>
                    <p>Total: ${(product.price * product.cartQuantity).toFixed(2)}</p>
                </CardContent>
        </Card>
    )
}