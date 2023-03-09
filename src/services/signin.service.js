import http from "../http-common";

class SigninDataService {
  constructor() {}

  // verify if the user exists in the database
  verify(email, password) {
    return http.post("/checkuser", {
      email: email,
      password: password,
    });
  }
}

export default new SigninDataService();
