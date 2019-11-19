import api from "../config/api/api";
import routes from "../config/api/routes";
import { CookieHelper } from "../helper"

class AuthService {

  static async login(username, password) {
    return api.post(routes.signIn, { email: username, password: password }).then((data) => {
      CookieHelper.setCookie('Auth', data.data.jwt, 1)
    }).catch(() => alert("erro"))
  }
}

export default AuthService;