<template>
  <div class="app">
    <h3>Weight Form</h3>
    <div class="alert alert-success" v-if="success" role="alert">Entry Added Successfully!</div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          v-model="name"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Enter Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Enter Weight In KG</label>
        <input type="number" v-model="weight" class="form-control" placeholder="Weight" required />
      </div>
      <button type="submit" @click.prevent="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      weight: "",
      success: false
    };
  },

  methods: {
    submit() {
      this.$store.commit("setName", this.name);
      this.$store.commit("setWeight", this.weight);
      this.success = true;
      this.name = "";
      this.weight = "";
      // showing base url from .env file
      // console.log(process.env.BASE_URL)
    }
  }
};
</script>

<style scoped>
form {
  width: 50%;
  margin: auto;
}
</style>