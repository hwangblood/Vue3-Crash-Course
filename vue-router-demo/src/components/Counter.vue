<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <p>
    count: {{ count }}
    <button @click="count = count + 1">Increment</button>
  </p>
</template>
