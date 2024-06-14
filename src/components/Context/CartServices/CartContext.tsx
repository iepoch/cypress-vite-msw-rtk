import { ReactNode, createContext, useState } from 'react';

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type ShoppingCartContext = {
    getCartItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
};

type CartItem = {
    id: number;
    cartQuantity: number;
    cartPrice: number;
    cartTotalQuantity: number;
    cartTotalAmount: number;
};

export const CartContext = createContext({} as ShoppingCartContext);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const getCartItemQuantity = (id: number) => {
        return cartItems.find((item) => item.id === id)?.cartQuantity || 0;
    };
    const increaseCartQuantity = (id: number) => {
		setCartItems((currentItems) => {
			if (currentItems.find((item) => item.id === id) == null) {
				return [...currentItems, { id, cartQuantity: 1, cartPrice: 0, cartTotalQuantity: 0, cartTotalAmount: 0 }];
			}
			return currentItems.map((item) => {
				if (item.id === id) {
					return { ...item, cartQuantity: item.cartQuantity + 1 };
				}
				return item;
			});
		});
    };

    const decreaseCartQuantity = (id: number) => {
        setCartItems((currentItems) => {
            if (currentItems.find((item) => item.id === id)?.cartQuantity === 1) {
                return currentItems.filter((item) => item.id !== id);
            }
            return currentItems.map((item) => {
                if (item.id === id) {
                    return { ...item, cartQuantity: item.cartQuantity - 1 };
                }
                return item;
            });
        });
    };

    const removeFromCart = (id: number) => {
        return setCartItems((currentItems) => {
            return currentItems.filter((item) => item.id !== id);
        });
    };

    return (
        <CartContext.Provider
            value={{
                getCartItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}