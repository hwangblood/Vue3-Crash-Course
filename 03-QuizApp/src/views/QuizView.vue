<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="quiz">
    <h1>Quiz</h1>
    <p>{{ route.params.id }}</p>
  </div>
</template>

<style scoped>
.quiz {
  color: blue;
}
</style>
