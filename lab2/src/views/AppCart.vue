<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserCart } from '@/stores/user-cart'
import type { Product } from '@/interfaces/product.interface'

const cartStore = useUserCart();
const carts = ref<{cartId: string, product: Product}[]>([]);
const totalPrice = ref<number>(0);

onMounted(async () => {
  carts.value = await Promise.all(
    cartStore.userCart.map(async (cartItem) => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/products/${cartItem.productId}`);
      if (!response.ok) throw new Error('Failed to fetch product');
      const product = await response.json() as Product;
      return {cartId: cartItem.id, product};
    })
  );
  totalPrice.value = carts.value.reduce((total, item) => {
    return total + item.product.price;
  }, 0);
});

const deleteFromCart = (cartId: string) => {
  cartStore.deleteFromCart(cartId);
  carts.value = carts.value.filter((cart) => cart.cartId !== cartId);
};
</script>

<template>
  <div class="container py-4">
    <h2 class="mb-4">Your Shopping Cart</h2>

    <div v-if="carts.length === 0" class="alert alert-info">
      Your cart is empty. Start shopping!
    </div>

    <div v-else class="row g-4">
      <div class="col-12" v-for="cart in carts" :key="cart.product.id">
        <div class="card shadow-sm">
          <div class="row g-0">
            <!-- Product Image -->
            <div class="col-md-3">
              <img
                :src="cart.product.image"
                class="img-fluid rounded-start h-100 object-fit-cover"
                :alt="cart.product.name"
                style="max-height: 200px;"
              >
            </div>

            <!-- Product Details -->
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">{{ cart.product.name }}</h5>
                <p class="card-text text-muted">{{ cart.product.description }}</p>
                <div class="d-flex align-items-center gap-3">
                  <span class="badge bg-primary">{{ cart.product.category }}</span>
                  <span class="text-success fw-bold">${{ cart.product.price.toFixed(2) }}</span>
                </div>
              </div>
            </div>

            <!-- Remove -->
            <div class="col-md-2">
              <div class="card-body h-100 d-flex flex-column justify-content-between">
                <button
                  @click="deleteFromCart(cart.cartId)"
                  class="btn btn-danger btn-sm align-self-end"
                >
                  <i class="bi bi-trash"></i> Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart Summary -->
      <div class="col-12 mt-4">
        <div class="card shadow-sm">
          <div class="card-body d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Total: ${{ totalPrice.toFixed(2) }}</h5>
            <button class="btn btn-primary btn-lg">checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
