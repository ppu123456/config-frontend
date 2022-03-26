// import { defineComponent } from "vue";
import { createToast } from "mosha-vue-toastify"
import "mosha-vue-toastify/dist/style.css"

// export default defineComponent({
//   setup(e) {
//     createToast(e)
//   }
// })

function error(e) {
  createToast(e, {
    type: 'danger',
    hideProgressBar: true,
    timeout: 5000
  })
}

function success() {
  createToast('Operação realizada com sucesso.', {
    type: 'success',
    hideProgressBar: true,
    timeout: 5000
  })
}

export { error, success }
