<script setup lang="ts">
import students from "@/data/students";
</script>

<template>
  <table class="table">
    <thead class="table-dark">
      <tr>
        <th scope="col">#ID</th>
        <th scope="col">Name</th>
        <th scope="col">City</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key=student.id>
        <th>{{ student.id }}</th>
        <td>{{ student.name }}</td>
        <td>{{ student.city }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>