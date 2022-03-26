<template>
  <footer class="vue-footer"></footer>
</template>

<script>
export default {
    name: 'VueFooter'
}
</script>

<style>
    .vue-footer {
        grid-area: vue-footer;
        background: #DDD;
        color: #333;

        display: flex;
        justify-content: center;
        align-content: center;
        padding: 10px;
    }
</style>