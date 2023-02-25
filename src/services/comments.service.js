import http from "../http-common";

class CommentsDataService {
  getAll() {
    return http.get("/all");
  }

  create(data) {
    return http.post("/create", {
      data: data,
    });
  }

  //   get(id) {
  //     return http.get(`/tutorials/${id}`);
  //   }

  //   update(id, data) {
  //     return http.put(`/tutorials/${id}`, data);
  //   }

  //   delete(id) {
  //     return http.delete(`/tutorials/${id}`);
  //   }

  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }

  //   findByTitle(title) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}

export default new CommentsDataService();
