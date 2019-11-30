import api from '../config/api/api';
import routes from '../config/api/routes';
import { CookieHelper } from '../helper';

class PostService {
  static async get() {
    return api
      .get(routes.posts)
      .then(data => {
        return data.data;
      })
      .catch(() => alert('erro ao retornar post'));
  }
  static async getById(id) {
    return api
      .get(`${routes.posts}/${id}`)
      .then(data => {
        return data.data;
      })
      .catch(() => alert('erro ao retornar post'));
  }
  static async post(dto) {
    return api
      .post(routes.posts, { post: { ...dto } })
      .then(data => {
        return data.data;
      })
      .catch(() => alert('erro ao retornar post'));
  }
  static async put(id, dto) {
    return api
      .put(`${routes.posts}/${id}`, { post: { ...dto } })
      .then(data => {
        return data.data;
      })
      .catch(() => alert('erro ao retornar post'));
  }
  static async delete(id) {
    return api
      .delete(`${routes.posts}/${id}`)
      .then(data => {
        return data.data;
      })
      .catch(() => alert('erro ao retornar post'));
  }
}

export default PostService;
