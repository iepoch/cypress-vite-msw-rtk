
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppBarState {
	showCart: boolean;
    anchorElNav: null | HTMLElement;

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
        state.showCart = action.payload;
    },
    setAnchorElNav(state, action: PayloadAction<null>){
        state.anchorElNav = action.payload;
    },
    reset: () => initialState,
	},
});

export const { anchorElNav, setShowCart, setAnchorElNav, reset } = appBarSlice.actions;
export default appBarSlice.reducer;
