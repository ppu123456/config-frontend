<template>
  <aside class="vue-menu"></aside>
</template>

<script>
export default {
    name: 'VueMenu'
}
</script>

<style>
    .vue-menu {
        grid-area: vue-menu;
        background: black;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>