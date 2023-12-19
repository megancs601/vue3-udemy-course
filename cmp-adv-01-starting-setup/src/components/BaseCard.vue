<template>
    <div>
      <!-- check if there is something to insert into this header slot, if not don't render header tag in DOm -->
        <header v-if="$slots.header">
            <!-- named slot -->
            <slot name="header">
              <!-- this h2 gets shown when there is nothing to slot into the header slot -->
              <!-- <h2> The Default</h2> -->
            </slot>
        </header>
        <!-- slots allow us to insert html content while being able to use vue features-->
        <!-- default slot -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted(){
      // can console log .default too
      console.log(this.$slots.header)
    }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>