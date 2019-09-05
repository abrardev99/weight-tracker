<template>
  <div class="home">
    <weight-form></weight-form>
    <br />
    <hr />
    <br />
    
      <show-list></show-list>
   
  </div>
</template>

<script>
// @ is an alias to /src
import WeightForm from "@/components/WeigthForm.vue";
import ShowList from "../components/ShowList.vue";

export default {
  name: "home",
  components: {
    WeightForm,
    ShowList
  }
};
</script>
<style  scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-leave {
}

.fade-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
}
</style>
