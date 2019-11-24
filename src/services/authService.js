import api from '../config/api/api';
import routes from '../config/api/routes';
import { CookieHelper } from '../helper';

const AUTH_COOKIE = 'Auth';
class AuthService {
  static async login(username, password) {
    return api
      .post(routes.signIn, { email: username, password: password })
      .then(data => {
        CookieHelper.setCookie(AUTH_COOKIE, data.data.jwt, 1);
      })
      .catch(() => alert('erro'));
  }

  static logout() {
    CookieHelper.deleteCookie(AUTH_COOKIE);
  }

  static isLoggedIn() {
    return CookieHelper.getCookie(AUTH_COOKIE) ? true : false;
  }
}

export default AuthService;
