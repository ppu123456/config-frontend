<template>
  <div id="vue-app">
    <VueHeader />
    <VueMenu />
    <VueContent />
    <VueFooter />
  </div>
</template>

<script>
import VueHeader from "@/components/template/VueHeader.vue"
import VueMenu from "@/components/template/VueMenu.vue"
import VueContent from "@/components/template/VueContent.vue"
import VueFooter from "@/components/template/VueFooter.vue"

import { auth, onChanged } from '@/firebase'

export default {
  name: "App",
  components: { VueHeader, VueMenu, VueContent, VueFooter },
  mounted() {
    onChanged(auth, (user)=> {
      console.log(user)
    })
  }
}
</script>

<style>
* {
  font-family: 'Lato', sans-serif;
}

body {
  margin: 0;
}

#vue-app {
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "vue-header vue-header"
    "vue-menu vue-content"
    "vue-menu vue-footer"
}
</style>
