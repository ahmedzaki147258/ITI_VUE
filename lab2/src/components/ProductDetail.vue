<script setup lang="ts">
  import type { Product } from '@/interfaces/product.interface.ts'
  import { useUserCart } from '@/stores/user-cart'

  const cartStore = useUserCart();
  const props = defineProps<{ product: Product }>();
  const addToCart = () => {
    cartStore.addToCart(props.product.id);
  };
  function currencyPipe(price: number) {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  }
</script>

<template>
  <div class="card h-100 shadow-sm">
    <div style="height: 200px; overflow: hidden; position: relative;">
      <img :src="product.image" class="card-img-top h-100 object-fit-cover" :alt="product.name">
      <span class="badge bg-warning position-absolute top-0 end-0 m-2">
        {{ Math.round(product.rating) }}<i class="fa-regular fa-star"></i>
      </span>
    </div>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.name }}</h5>
      <span class="badge bg-secondary mb-2">{{ product.category }}</span>
      <p class="text-muted small mb-2">{{ product.description }}</p>
      <div class="mt-auto d-flex justify-content-between align-items-center">
            <span class="badge bg-light text-dark">
              <i class="bi bi-book"></i> {{ product.stock }} in stock
            </span>
        <span class="text-success fw-bold">{{ currencyPipe(product.price) }}</span>
      </div>
    </div>
    <div class="card-footer bg-white border-0">
      <button class="btn btn-outline-primary w-100" @click="addToCart">
        <i class="bi bi-heart"></i> Add to cart
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
