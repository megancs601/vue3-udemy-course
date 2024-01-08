<template>
  <button @click="addOne">Add 10</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //this.$store.commit('increase', { value: 10 });
      //same as above
      this.$store.commit({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>
