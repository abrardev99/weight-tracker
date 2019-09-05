<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/history">History</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  methods: {
    
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s ease;
}

.fade-leave {
}

.fade-leave-active {
  transition: opacity 2s ease;
  opacity: 0;
}
</style>
