<script setup>
import { useRoute, useRouter, RouterLink } from "vue-router";
import cars from "../data/cars.json";

const router = useRouter();
const route = useRoute();
const { params } = route;

const car = cars.find((car) => car.id === parseInt(params.id));
</script>

<template>
  <div>
    <h2>Contact Info</h2>
    <div v-if="car">
      <p>{{ car.contact.dealer }}</p>
      <p>{{ car.contact.phone }}</p>
    </div>
    <div v-else>
      <p>No contact info found!</p>
    </div>

    <div>
      <button @click="router.back()">Go back</button>
    </div>
  </div>
</template>
