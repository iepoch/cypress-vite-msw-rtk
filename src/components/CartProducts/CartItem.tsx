import { useDispatch } from 'react-redux';
import {
  CartItem,
  addToCart,
  removeFromCart,
} from '../../services/products/cartSlice';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from '@mui/material';

type Props = {
  product: CartItem;
};

export const CartItems = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <Card
      key={
        product.id + product.price + product.rating.count + product.rating.rate
      }
      sx={{
        maxWidth: 300,
        mt: 4,
        p: 4,
        marginLeft: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', maxHeight: 40 }}
      >
        <Typography variant="h6">{product.title}</Typography>
      </CardContent>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <p>Price: ${product.price}</p>
        <CardMedia
          component="img"
          sx={{ objectFit: 'scale-down', alignItems: 'left', width: 90 }}
          image={product.image}
        />
      </CardContent>
      <Typography sx={{ ml: 13.5 }}>Quantity</Typography>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" onClick={() => dispatch(addToCart(product))}>
          +
        </Button>
        {product.cartQuantity}
        <Button size="small" onClick={() => dispatch(removeFromCart(product))}>
          -
        </Button>
      </CardActions>
    </Card>
  );
};
