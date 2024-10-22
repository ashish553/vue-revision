<template>
  <div>
    <h2>Blog</h2>
    <router-view />
  </div>
</template>

<script>
export default {
    name: 'Blog',
    mounted() {
      console.log('Param', this.$route.params.id);
    }
}
</script>

<style>

</style>