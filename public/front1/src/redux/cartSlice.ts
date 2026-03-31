import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ProductType } from '../types/ProductType';

export interface CartItem extends ProductType {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  currentStoreId: number | null;
  cartTotal: number;
}

const initialState: CartState = {
  items: [],
  currentStoreId: null,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: ProductType; storeId: number }>) => {
      const { product, storeId } = action.payload;

      if (state.currentStoreId !== null && state.currentStoreId !== storeId) {
        if (window.confirm("¿Deseas vaciar tu carrito actual de la otra tienda para añadir productos de esta tienda?")) {
           state.items = [{ ...product, quantity: 1 }];
           state.currentStoreId = storeId;
           state.cartTotal = Number(product.price);
        }
        return;
      }

      state.currentStoreId = storeId;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      
      state.cartTotal = state.items.reduce(
        (action, item) => action + Number(item.price) * item.quantity,0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.currentStoreId = null;
      state.cartTotal = 0;
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
