import { Drawer } from "@mui/material";


export const CartDrawer = () =>{

    return (
        <Drawer open={true} anchor="right" PaperProps={{
            sx:{
                width: 500,
                backgroundColor: "white",
                borderRadius:0
            }
        }}>
            <h1 >
                My Cart
            </h1>
        </Drawer>
    )
}