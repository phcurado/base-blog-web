import api from "../config/api";
import routes from "../config/routes";

class AuthService {

  static login(username, password) {
    return api.post(routes.signIn, { email: username, password: password })
  }
}

export default AuthService;