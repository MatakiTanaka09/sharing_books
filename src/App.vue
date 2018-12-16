<template>
<div id="app" class="app">
    <TheHeader />
    <router-view/>
</div>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
    name: 'App',
    components: {
        TheHeader
    }
}
</script>

<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<!-- <img src="./assets/logo.png"> -->
