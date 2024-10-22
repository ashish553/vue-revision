<template>
  <div>
    <h2>Blog Content</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur cum quisquam aut distinctio illum totam sapiente vero accusantium, ab, nostrum nemo modi corporis iusto quaerat rerum dolor magnam perferendis.</p>
  </div>
</template>

<script>
export default {
    name: 'BlogContent',
    mounted() {
      console.log('Param', this.$route.params.id);
    }
}
</script>

<style>

</style>