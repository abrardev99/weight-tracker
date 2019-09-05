<template>
  <div class="app">
    <h3>List</h3>
    <div class="list-group">
      <transition-group name="fade" mode="out-in">
        <a
          v-for="(name, key) in getAllNames"
          :key="key"
          @click="deleteCurrent(key)"
          class="list-group-item list-group-item-action list-group-item-success"
        >| {{name }} | {{ getWeights[key] }}</a>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    getAllNames() {
      return this.$store.getters.getNames;
    },

    getWeights() {
      return this.$store.getters.getWeights;
    }
  },

  methods: {
    deleteCurrent(key) {
      console.log(key);
      this.$store.getters.getNames.splice(key, 1);
      this.$store.getters.getWeights.splice(key, 1);
    }
  }
};
</script>

<style scoped>
.app {
  width: 50%;
  margin: auto;
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