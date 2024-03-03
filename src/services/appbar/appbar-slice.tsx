
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppBarState {
	showCart: boolean;
    anchorElNav: HTMLElement | null

}

const initialState: AppBarState = {
	showCart: false,
    anchorElNav: null,
};

const appBarSlice = createSlice({
	name: 'appBar',
	initialState,
	reducers: {
    stateAnchor(state) {
        state.anchorElNav;
    },
    stateCart(state){
        state.showCart;
    },
    setShowCart(state, action: PayloadAction<boolean>){
      return {
            ...state,
            showCart: action.payload,
        }
    },
    setAnchorElNav(state, action: PayloadAction<HTMLElement | null>){
        return {
            ...state,
            anchorElNav: action.payload,
        }
    },
    reset: () => initialState,
	},
});

export const { setShowCart, setAnchorElNav, reset } = appBarSlice.actions;
export default appBarSlice.reducer;
