<template>
  <div id="app">
    <Todo />
    <button @click="add">+</button>
    <span>{{this.$store.getters.getNum()}}</span>
    <button @click="minus">-</button>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "app",
  components: {
    Todo
  },
  data: function() {
    return {
      numInput: "0"
    };
  },
  methods: {
    add: function() {
      this.$store.commit("add");
    },
    minus: function() {
      this.$store.commit("minus");
    }
  }
};
</script>




