import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Cart } from '@/interfaces/cart.interface.ts';

export const useUserCart = defineStore('user-cart', () => {
  const userCart = ref<Cart[]>([]);
  const cartItemCount = computed(() => userCart.value.length);
  async function fetchCart() {
      userCart.value = await fetch(`${import.meta.env.VITE_SERVER_URL}/carts`).then(res => res.json());
  }
  async function addToCart(productId: string) {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/carts`, {
        method: 'POST',
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) throw new Error('Failed to add item to cart');
      const newCartItem = await response.json();
      userCart.value.push(newCartItem);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }
  async function deleteFromCart(cartId: string) {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/carts/${cartId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete item from cart');
      userCart.value = userCart.value.filter((cart: Cart) => cart.id !== cartId);
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  }

  return { userCart, cartItemCount, fetchCart, addToCart, deleteFromCart };
});
