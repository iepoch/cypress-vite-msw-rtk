import { Drawer, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { CartItems } from './CartItem';

type Props = {
  open: boolean;
  onClose: (event: Event) => void;
};

export const CartDrawer = ({ open, onClose }: Props) => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      PaperProps={{
        sx: {
          width: 500,
          backgroundColor: 'white',
          borderRadius: 0,
          alignItems: 'center',
        },
      }}
    >
      <>
        <h2>Cart</h2>
        {cart.cartItems.length === 0 ? <p> No Items in cart</p> : null}
        {cart.cartItems.map((product) => (
          <div>
            <CartItems
              key={
                product.id +
                product.price +
                product.rating.count +
                product.rating.rate
              }
              product={product}
            />
            <Typography sx={{ marginLeft: 40 }}>
              Total: ${(product.price * product.cartQuantity).toFixed(2)}
            </Typography>
          </div>
        ))}
      </>
    </Drawer>
  );
};
