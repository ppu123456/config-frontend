<template>
  <div class="vue-home">
      <pre>{{this.testes}}</pre>
      <router-link to="/admin">Ola Home</router-link>
      <b-form-input v-model="this.user.email" class="mb-2"></b-form-input>
      <b-form-input v-model="this.user.password" class="mb-2"></b-form-input>
      <b-button class="mb-2" @click="signin" > Logar </b-button>
      <b-button class="mb-2" @click="loadTeste" > Buscar </b-button>
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, showSuccess, showError } from '@/global'
export default {
    name: 'VueHome',
    data() {
      return {
        user: {
          email: '',
          password: ''
        },
        testes: []
      }
    },
    methods: {
      signin () {
        const url = `${baseApiUrl}/signins`
        axios.post(url, this.user)
          .then(() => showSuccess())
          .catch(err => showError(err))
      },
      loadTeste() {
        const url = `${baseApiUrl}/users`
          axios.get(url)
            .then(res => console.log(res.data))
            .catch(err => showError(err))
      }
    }
}
</script>

<style>

</style>