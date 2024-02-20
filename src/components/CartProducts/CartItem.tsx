import {  CartItem, addToCart  } from "../../services/products/cartSlice";
import { Button, Card, CardContent, CardMedia } from "@mui/material";

type Props = {
    product: CartItem;
    addToCart: (product: CartItem) => void;

}

export const  CartItems =  ({ product }: Props) =>{
    console.log(product)
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
            <CardContent sx={{ display: "flex", justifyContent: 'space-evenly'}}>
                    <p>Price: ${product.price}</p>
                   
                    <p>Quantity: <Button size="small" onClick={() => addToCart(product)}>+</Button>{product.cartQuantity}<Button sx={{ width: 5, height:35}} >-</Button></p>
                </CardContent>
        </Card>
    )
}