import React, { FC } from 'react';
import {Box, Button, Stack, Grid } from '@mui/joy';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { amountAdded, reset } from '../../services/counter/counter-slice';

const Counter: FC = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	const handleClick = () => dispatch(amountAdded(3));
	const clearCount = () => dispatch(reset());
	return (
		<div className="p-2">
			<div>
				<Box sx={{ flexGrow: 4 }}>
					<Grid container spacing={2} minHeight={500}>
						<Grid xs display="flex" justifyContent="center" alignItems="center">
							<Stack direction="row" spacing={2}>
								<Button 
								color='primary'
								onClick={handleClick}
								data-testid="counter-button"
								>
									Count is: {count}
								</Button>
								<Button 
								color='primary'
								onClick={clearCount}
								data-cy="counter-clear-bttn"
								>
									Clear Count
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</Box>
			</div>
		</div>
	);
};

export default Counter;
