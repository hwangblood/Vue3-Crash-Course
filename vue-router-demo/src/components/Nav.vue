<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="nav">
    <!-- 
        if using <a></a> here, every time you click on link, it will refresh whole page, 
        it cause we lose the state of component, because vue app is a single page app.
        
        To persist states , you need to using RouterLink
    -->
    <RouterLink active-class="active" to="/">Home</RouterLink>
    &nbsp;&nbsp;
    <RouterLink active-class="active" to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
}
.active {
  font-weight: 900;
  color: #edaa23;
}
</style>
