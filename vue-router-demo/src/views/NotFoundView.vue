<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div>
    <p>
      path <span>{{ route.path }}</span> is not found!
    </p>
    <p>
      <button @click="router.push('/')">Back to home</button>
    </p>
  </div>
</template>

<style scoped>
span {
  background-color: rgb(196, 196, 196);
}
</style>
