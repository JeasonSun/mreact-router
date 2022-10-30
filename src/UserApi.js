const UserApi = {
  add(info) {
    const users = this.getUsers();
    users.push(info);
    localStorage.setItem("users", JSON.stringify(users));
  },
  getUsers() {
    const localUsers = localStorage.getItem("users");
    let users = [];
    if (localUsers) {
      users = JSON.parse(localUsers);
    }
    return users;
  },
  find(id) {
    const users = this.getUsers();
    return users.find((user) => user.id === id);
  },
  login() {
    localStorage.setItem("login", true);
  },
  isLogin() {
    return localStorage.getItem("login") === "true";
  },
  logout(){
    localStorage.removeItem('login')
  }
};

export default UserApi;
