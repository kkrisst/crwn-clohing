import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const increaseItemQuantity = item => ({
  type: CartActionTypes.INCREASE_ITEM_QUANTITY,
  payload: item
});

export const decreaseItemQuantity = item => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item
});
