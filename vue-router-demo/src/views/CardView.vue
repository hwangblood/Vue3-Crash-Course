<!-- http://localhost:5174/cars/:id -->
<script setup>
import { useRoute, useRouter, RouterView, RouterLink } from "vue-router";
import cars from "../data/cars.json";

const router = useRouter();
const route = useRoute();
const { params } = route;

const showContact = () => {
  /* if (condition) {
    return;
  } */

  return router.push(`/cars/${car.id}/contact`);
};

const car = cars.find((car) => car.id === parseInt(params.id));
</script>

<template>
  <h1>Car View</h1>
  <div v-if="car">
    <p>Name: {{ car.name }}</p>
    <p>Price: ${{ car.price }}</p>
    <p>Year: {{ car.year }}</p>

    <hr />

    <button @click="showContact">Click for contact</button>
    <!-- nested route here -->
    <RouterView />
  </div>
  <div v-else>Car not found!</div>
</template>

<style scoped>
hr {
  margin: 10px 0;
}
</style>
