 import CartActionTypes from './cart.types';
 import { addItemToCart, removeItemFromCart, modifyItemQuantity } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: modifyItemQuantity(state.cartItems, action.payload, 1)
      };
    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: modifyItemQuantity(state.cartItems, action.payload, -1)
      };
    default:
      return state;
  }
};

export default cartReducer;
