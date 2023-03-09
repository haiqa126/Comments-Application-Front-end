import http from "../http-common";

class SigninDataService {
  constructor() {}

  // verify if the user exists in the database
  verify(email, password) {
    return http.get("/checkuser", {
      email: email,
      pass: password,
    });
  }
}

export default new SigninDataService();
