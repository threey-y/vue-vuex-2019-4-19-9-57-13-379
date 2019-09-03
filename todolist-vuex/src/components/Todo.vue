<template>
  <div class="todo">
    <h2>{{this.$store.state.count}}</h2>
  </div>
</template>

<script>

export default {
  name: 'Counter',
  props: {
    msg: String
  }
}
</script>