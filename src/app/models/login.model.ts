export class LoginModel {
    public username: String;
    public password: String;
    public token: String;
    
  constructor(
      username: String, password: String, token: String) {
      this.username = username;
      this.password = password
      this.token = token;  
  }
}