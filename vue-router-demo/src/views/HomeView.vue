<script setup>
import { RouterLink } from "vue-router";

import cars from "../data/cars.json";
</script>
<template>
  <div>
    <h1>Home View</h1>
    <div class="cars">
      <RouterLink v-for="car in cars" :key="car.id" :to="`/cars/${car.id}`">{{
        car.name
      }}</RouterLink>
    </div>
    <div>
      <p>
        <RouterLink :to="`/home`">Redirect '/home' to '/'</RouterLink>
      </p>
      <p><RouterLink :to="`/not-found`">Not Found</RouterLink></p>
    </div>
  </div>
</template>

<style scoped>
.cars {
  display: flex;
}

.cars a {
  text-decoration: none;
  text-align: center;
  color: black;
  width: 100%;
  box-shadow: 1px 1px 10px black;
  margin: 10px;
}
</style>
