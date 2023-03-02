<!-- 
// https://cn.vuejs.org/api/sfc-script-setup.html#script-setup
<script setup>
import { ref } from "vue";

let count = ref(0);
console.log(count);

const addCount = () => {
  console.log("on add");
  count.value++;
};

const subtractCount = () => {
  console.log("on subtract");
  count.value--;
};
</script>
 -->

<script>
export default {
  data() {
    return { count: 0 };
  },
  methods: {
    addCount() {
      console.log("on add");
      this.count++;
    },
    subtractCount() {
      console.log("on subtract");
      this.count--;
    },
  },
};
</script>

<template>
  <main>
    <container class="container">
      <h4>The current count is...</h4>
      <h1>{{ count }}</h1>
      <button @click="addCount()">+</button>
      <button @click="subtractCount()">-</button>
    </container>
  </main>
</template>

<!-- 'scoped' Only Apply style to App.vue but not other.vue -->
<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  text-align: center;
}
</style>
