import { ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@tanstack/react-router';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import {
	setAnchorElNav,
	setShowCart,
} from '../../services/appbar/appbar-slice';
import { useGetPagesQuery } from '../../services/appbar/pagesApiSlice';
import { CartDrawer } from '../CartProducts/CartDrawer';

const ResponsiveAppBar: FC = () => {
	const { data = [] } = useGetPagesQuery([]);
	const anchorElNav = useAppSelector((state) => state.appBar.anchorElNav);
	const showCart = useAppSelector((state) => state.appBar.showCart);
	const cart = useAppSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		dispatch(setAnchorElNav(event.currentTarget));
	};

	const handleCloseNavMenu = () => {
		dispatch(setAnchorElNav(null));
	};

	return (
		<AppBar position="static" sx={{ background: 'gray', boxShadow: 'none' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{data.map((page) => {
								const { id, menuTitle, pageURL } = page;
								return (
									<MenuItem key={id} onClick={handleCloseNavMenu}>
										<Typography
											key={id}
											component={Link}
											to={pageURL}
											color="primary"
										>
											{menuTitle}
										</Typography>
									</MenuItem>
								);
							})}
						</Menu>
					</Box>

					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>

					<Box
						m={1}
						display="flex"
						justifyContent="flex-end" // flex-start -> for left , center-> center, flex-end-> for left
						alignItems="flex-end"
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{data.map((page) => {
							const { id, menuTitle, pageURL } = page;
							return (
								<Button
									key={id + menuTitle}
									component={Link}
									to={pageURL}
									color="inherit"
								>
									{menuTitle}
								</Button>
							);
						})}
					</Box>
					<Badge badgeContent={cart.cartItems.length} color="secondary">
						<ShoppingCartCheckoutOutlined
							onClick={() => dispatch(setShowCart(true))}
						/>
						<CartDrawer
							key={cart.cartItems.length}
							open={showCart}
							onClose={() => dispatch(setShowCart(false))}
						/>
					</Badge>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
