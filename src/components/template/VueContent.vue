<template>
  <div class="vue-content">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'VueContent'
}
</script>

<style>
    .vue-content {
        grid-area: vue-content;
        background-color: #f9f9f9;
        padding: 20px;
    }
</style>