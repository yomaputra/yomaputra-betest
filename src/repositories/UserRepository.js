class UserRepository {
  constructor(db, logger) {
    const modelUser = require("../models/users")(db);

    this.model = modelUser;
    this.logger = logger;
  }

  async insert(payload) {
    try {
      const result = await this.model.insertOne(payload);

      return result;
    } catch (err) {
      throw err;
    }
  }

  async getAll() {
    try {
      let query = {};
      let options = {
        projection: { _id: 1, userName: 1, accountNumber: 1, emailAddress: 1 },
      }
      const result = await this.model.find().toArray();

      return result;
    } catch (err) {
      throw err;
    }
  }

  async find(identity) {
    try {
      let query = {
        $or: [
          { accountNumber: parseInt(identity) },
          { identityNumber: parseInt(identity) }
        ]
      };
      let options = {
        projection: { _id: 1, userName: 1, accountNumber: 1, emailAddress: 1 },
      }
      const result = await this.model.findOne(query);

      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserRepository;