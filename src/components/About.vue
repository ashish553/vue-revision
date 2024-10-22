<template>
  <div>
    <h2>About Us</h2>
  </div>
</template>

<script>
export default {
    name: 'About',
    created() {
      console.log('Created about');
      
    },
    beforeUnmount() {
      console.log('beforeUnmount');
      
    }
}
</script>

<style>

</style>