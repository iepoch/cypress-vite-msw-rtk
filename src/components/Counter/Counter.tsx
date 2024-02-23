import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import React, { FC } from 'react';
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
									onClick={handleClick}
									variant="contained"
									data-testid="counter-button"
								>
									Count is: {count}
								</Button>
								<Button
									onClick={clearCount}
									variant="contained"
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
