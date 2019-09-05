<template>
  <div class="app">
    <h3>History</h3>
    <chart :options="chartOptionsBar"></chart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptionsBar: {
        xAxis: {
          data: this.$store.getters.getWeights
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "bar",
            data: this.$store.getters.getWeights
          }
        ]
      }
    };
  },

  computed: {
    getAllNames() {
      return this.$store.getters.getNames;
    },

    getWeights() {
      return this.$store.getters.getWeights;
    }
  }
};
</script>

<style  scoped>
.app {
  width: 100%;
  height: 700px;
}

.echarts {
  width: 100%;
  height: 100%;
}
</style>