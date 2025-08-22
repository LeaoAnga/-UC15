const User = require("../models/userModel");

const users = [];
let currentID = 1;

class UserRepository {
  save(userData) {
    const user = new User(currentID++, userData.name, userData.email);
    users.push(user);
    return user;
  }

  findAll() {
    return users;
  }

  findById(id) {
    return users.find((user) => user.id === id);
  }

  updateUser(id, userData) {
    const user = users.find(user => user.id === id);
    if (user) {
      user.name = userData.name;
      user.email = userData.email;
      return user;
    }
    return null;
  }

  deleteUser(id) {
    const targetId = parseInt(id);
    const index = users.findIndex((user) => user.id === targetId);
    console.log('index: '+index);
    console.log('chega aqui');
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports =  new UserRepository();