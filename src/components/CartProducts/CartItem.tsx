import { useDispatch } from 'react-redux';
import {
  CartItem,
  addToCart,
  removeFromCart,
} from '../../services/products/cartSlice';
import {
  Button,
  CardActions,
} from '@mui/material';
import { AspectRatio, Avatar, Box, Typography} from '@mui/joy';
import { useState } from 'react';

type Props = {
  product: CartItem;
};

export const CartItems = ({ product }: Props) => {
  const dispatch = useDispatch();
  const [ loading , setLoading] = useState(true)

  return (
 <Box key={ product.id + product.price + product.rating.rate }
      sx={{ display: 'flex',  flexDirection:'column', maxHeight:400}}>
      <Box
      maxHeight={200}
      width={400}
      display="flex"
      alignItems="center"
      gap={4}
      p={4}
      sx={{ }}
      >
        <Typography level="body-sm" variant="plain" >{product.title}</Typography> 
        <Typography level="body-sm" variant="plain">Price: ${product.price}</Typography>
        <Avatar alt={product.description} src={product.image} sx={{  alignItems: 'left', blockSize:50}} />
      </Box>
      <Box   display="flex"  alignItems="center" gap={6} p={2}>
      <Typography level="body-sm" variant="plain">Quantity</Typography> 
        <Button size="small" onClick={() => dispatch(addToCart(product))}>
          +
        </Button>
        {product.cartQuantity}
        <Button size="small" onClick={() => dispatch(removeFromCart(product))}>
          -
        </Button>
      </Box>
    </Box>
  );
};
