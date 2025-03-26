<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  import type { Product } from '@/interfaces/product.interface.ts'
  import ProductDetail from '@/components/ProductDetail.vue'

  const products = ref<Product[]>([]);
  onMounted(async ()=>{
    products.value = await fetch(`${import.meta.env.VITE_SERVER_URL}/products`).then(res => res.json());
  });
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 m-1">
    <div class="col" v-for="product in products" :key="product.id">
      <ProductDetail :product="product"></ProductDetail>
    </div>
  </div>
</template>

<style scoped>

</style>
