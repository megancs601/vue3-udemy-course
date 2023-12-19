<template>
    <div>
        <!-- slots allow us to insert html content while being able to use vue features-->
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>