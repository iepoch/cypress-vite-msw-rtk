import { CardMedia, Grid, Rating } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { FC, useContext } from 'react';
import { ProductContext } from '../CartServices/ProductContext';


const CartProducts: FC = () => {
        const {products} = useContext(ProductContext)

	return (
		<Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent="center">
			<Grid item xs={12}>
				<Grid container sx={{ justifyContent: 'space-evenly' }} spacing={2}>
					{products.map((product) => (
						<Card
							key={product.id + product.rating.count + product.rating.rate}
							sx={{
								maxWidth: 320,
								mt: 4,
								backgroundColor: (theme) =>
									theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
							}}
						>
							<CardContent sx={{ alignItems: 'flex-end' }}>
								<CardMedia
									component="img"
									sx={{ height: 140 }}
									image={product.image}
								/>
								<Typography
									sx={{ fontSize: 12 }}
									color="text.secondary"
									gutterBottom
								>
									Product
								</Typography>
								<Rating name="read-only" value={product.rating.rate} readOnly />
								<Typography
									sx={{ fontSize: 12, fontWeight: '600' }}
									component="div"
								>
									{product.title}
								</Typography>
								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									{product.category}
								</Typography>
							</CardContent>

							<CardActions>
								<Button
									size="small"
									onClick={() => handleAddToCart(product as CartItem)}
								>
									Add to Cart
								</Button>
							</CardActions>
						</Card>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};
export default CartProducts;