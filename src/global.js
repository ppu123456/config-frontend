// export const baseApiUrl = "http://localhost:3000"
export const baseApiUrl = "https://config-backend.herokuapp.com"
import { error, success } from "./config/msgs"

export function showError(e) {
  if (e && e.response && e.response.data) {
    error(e.response.data)
  } else if (typeof e === "string") {
    error(e)
  } else {
    error("Oops... Erro inesperado. Entre em contato com assistência.")
  }
}

export function showSuccess() {
    success()
}