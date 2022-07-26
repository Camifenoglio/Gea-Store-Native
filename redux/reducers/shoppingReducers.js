import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types/types"

export const initialState = {
    cart: [
        {
            productId: "62d8198126d78fb1f4691810",
            quantity: 5
        },
        {
            productId: "62d8198126d78fb1f4691813",
            quantity: 1
        },
    ],
};

export function shoppingReducers(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const itemId = action.payload;
            let itemInCart = state.cart.find((item) => item.productId === itemId);
            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.productId === itemId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, { productId: itemId, quantity: 1 }],
                };
        }
        case REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item.productId === action.payload);
            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.productId === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter((item) => item.productId !== action.payload),
                };
        }
        case REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.productId !== action.payload),
            };
        }
        case CLEAR_CART: {
            return initialState
        }
        default:
            return state;

    }
};