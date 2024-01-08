<template>
  <button @click="addOne">Add 11</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      //this.$store.commit('increase', { value: 11 });
      //same as above
      this.$store.commit({
        type: 'increase',
        value: 11,
      });
    },
  },
};
</script>
