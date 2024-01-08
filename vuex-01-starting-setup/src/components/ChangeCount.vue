<template>
  <button @click="increment">Add 1</button>
  <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   //this.$store.dispatch('increase', { value: 10 });
    //   //same as above
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    ...mapActions(['increment', 'increase']),
  },
};
</script>
