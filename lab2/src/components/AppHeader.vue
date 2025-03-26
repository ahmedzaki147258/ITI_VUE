<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserCart } from '@/stores/user-cart.ts'

const cartStore = useUserCart();
onMounted(() => {
  cartStore.fetchCart();
});
</script>

<template>
  <header class="bg-white shadow-sm sticky-top py-2">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <!-- Logo -->
        <router-link to="/" class="text-decoration-none">
          <span class="fs-3 fw-bold text-primary">MyShop</span>
        </router-link>

        <!-- Cart -->
        <div class="d-flex align-items-center gap-3">
          <router-link to="/cart" class="text-dark fs-5 position-relative text-decoration-none">
            <i class="fa-solid fa-cart-plus"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge bg-success rounded-pill">
              {{ cartStore.cartItemCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
