<template>
  <div>
    <code>query: {{ query }}</code>
    <datatable v-bind="$data" />
  </div>
</template>
<script>
export default {
  data: () => ({
    columns: [
      { title: "User ID", field: "uid", sortable: true },
      { title: "Username", field: "name" },
      { title: "Age", field: "age", sortable: true },
      { title: "Email", field: "email" },
      { title: "Country", field: "country" }
    ],
    data: [],
    total: 0,
    query: {}
  }),
  watch: {
    query: {
      handler(query) {
        this.data = [
          {
            uid: "1",
            name: "Abrar",
            age: "23",
            email: "asbb@email.com",
            country: "Pak"
          },
          {
            uid: "2",
            name: "Ahmad",
            age: "20",
            email: "asbb@email.com",
            country: "Pak"
          },
          {
            uid: "3",
            name: "Abrar",
            age: "23",
            email: "asbb@email.com",
            country: "Pak"
          },
          {
            uid: "4",
            name: "Abrar",
            age: "23",
            email: "asbb@email.com",
            country: "Pak"
          },
          {
            uid: "5",
            name: "Abrar",
            age: "23",
            email: "asbb@email.com",
            country: "Pak"
          },
          {
            uid: "6",
            name: "Abrar",
            age: "23",
            email: "asbb@email.com",
            country: "Pak"
          },
          {
            uid: "7",
            name: "Abrar",
            age: "23",
            email: "asbb@email.com",
            country: "Pak"
          },
          {
            uid: "8",
            name: "Abrar",
            age: "23",
            email: "asbb@email.com",
            country: "Pak"
          },
          {
            uid: "9",
            name: "Abrar",
            age: "23",
            email: "asbb@email.com",
            country: "Pak"
          },
          {
            uid: "9",
            name: "Abrar",
            age: "23",
            email: "asbb@email.com",
            country: "Pak"
          }
        ];
        this.total = this.data.length;
      },
      deep: true
    }
  },

  created() {
    // init query (make all the properties observable by using `$set`)
    const q = { limit: 100, offset: 0, sort: "", order: "", ...this.query };
    Object.keys(q).forEach(key => {
      this.$set(this.query, key, q[key]);
    });
  }
};
</script>