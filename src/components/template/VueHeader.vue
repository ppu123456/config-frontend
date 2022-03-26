<template>
  <header class="vue-header">
    <i class="fa fa-angle-left fa-lg" />
  </header>
</template>

<script>
export default {
    name: 'VueHeader'
}
</script>

<style>
  .vue-header {
    grid-area: vue-header;
    background: red;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>