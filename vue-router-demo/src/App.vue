<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import Counter from "./components/Counter.vue";
</script>

<template>
  <div>
    <Counter />
    <Nav />
    <RouterView />
  </div>
</template>
