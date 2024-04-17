import { Box, Button, Divider, Drawer, Sheet, Typography } from '@mui/joy';
import React from 'react';
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
		<Drawer open={open} onClose={onClose} anchor="right">
			<Box
				width={500}
				display="flex"
				justifyContent="center"
				flexDirection="column"
				alignItems="center"
				gap={4}
				p={2}
				sx={{ backgroundColor: 'white' }}
			>
				<h2>Cart</h2>
				<Divider size={'md'} />
				<Button
					sx={{ p: 3, mt: 2 }}
					onClick={() => dispatch(clearCart())}
					size="md"
					variant="soft"
				>
					Clear the cart
				</Button>
				{cart.cartItems.length === 0 ? <p> No Items in cart</p> : null}
				{cart.cartItems.map((product) => (
					<Sheet
						key={
							product.id + product.price + product.rating.rate + product.title
						}
						color="neutral"
						variant="plain"
						sx={{ mt: 4, maxWidth: '100%' }}
					>
						<CartItems product={product} />
						<Typography level="title-md" variant="soft">
							Total: ${(product.price * product.cartQuantity).toFixed(2)}
						</Typography>
						<Divider />
					</Sheet>
				))}
			</Box>
		</Drawer>
	);
};
