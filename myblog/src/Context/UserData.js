import { decryptString } from '../utils/encrypt'
import Request from '../utils/http'
const request = new Request()

export async function loadUser() {
  let usuario = {}
  let user = window.sessionStorage.getItem("token")
  if (user) {
    usuario = decryptString(JSON.parse(user))

    return JSON.parse(usuario);

  }

}



