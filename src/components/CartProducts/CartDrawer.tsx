import { Button, Divider, Sheet, Typography } from '@mui/joy';
import { Drawer } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearCart } from '../../services/products/cartSlice';
import { CartItems } from './CartItem';

type Props = {
	open: boolean;
	onClose: (event: Event) => void;
};

export const CartDrawer = ({ open, onClose }: Props) => {
	const cart = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

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
				<Divider />
				<Button
					sx={{ p: 3, mt: 2 }}
					onClick={() => dispatch(clearCart())}
					size="lg"
					variant="soft"
				>
					Clear the cart
				</Button>
				{cart.cartItems.length === 0 ? <p> No Items in cart</p> : null}
				{cart.cartItems.map((product) => (
					<Sheet
					key={product.id + product.price + product.rating.rate + product.title}
						color="neutral"
						variant="plain"
						sx={{ mt: 1, maxWidth: '90%' }}
					>
						<CartItems product={product}/>
						<Typography level="title-md" variant="soft">
							Total: ${(product.price * product.cartQuantity).toFixed(2)}
						</Typography>
						<Divider />
					</Sheet>
				))}
			</>
		</Drawer>
	);
};
