const userRepository = require('../repositories/userRepository');   

class UserService{

    async createUser(userData){
        if(!userData.name || !userData.email){
            throw new Error('Nome e e-mail são obrigatórios.');
        }
        const user = await userRepository.save(userData);
        return user;
    }

    async findAll(){
        const users = await userRepository.findAll();
        return users;
    }  

    async findUserById(id){
        const user = await userRepository.findById(id);
        return user;
    }

    async updateUser(id, userData){
        const user = await userRepository.updateUser(id,userData);
        return user;
    }

    async deleteUser(id){
        const user = await userRepository.deleteUser(id);
        return user;
    }
}

module.exports = new UserService();