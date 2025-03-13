class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async createUser(userData) {
        const user = new this.userModel(userData);
        return await user.save();
    }

    async getUsers() {
        return await this.userModel.find();
    }

    async updateUser(userId, userData) {
        return await this.userModel.findByIdAndUpdate(userId, userData, { new: true });
    }

    async deleteUser(userId) {
        return await this.userModel.findByIdAndDelete(userId);
    }
}

export default UserService;