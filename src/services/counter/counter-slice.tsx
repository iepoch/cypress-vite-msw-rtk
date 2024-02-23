// DUCKS pattern
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		incremented(state) {
			// it's okay to do this because immer makes it immutable
			// under the hood
			state.value++;
		},
		decrease(state) {
			state.value--;
		},
		amountAdded(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
		reset: () => initialState,
	},
});

export const { incremented, amountAdded, reset } = counterSlice.actions;
export default counterSlice.reducer;
