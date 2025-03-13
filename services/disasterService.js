class DisasterService {
    constructor(DisasterModel) {
        this.DisasterModel = DisasterModel;
    }

    async createDisaster(data) {
        const disaster = new this.DisasterModel(data);
        return await disaster.save();
    }

    async getDisasters() {
        return await this.DisasterModel.find();
    }

    async updateDisaster(id, data) {
        return await this.DisasterModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteDisaster(id) {
        return await this.DisasterModel.findByIdAndDelete(id);
    }
}

export default DisasterService;