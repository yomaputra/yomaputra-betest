class UserRepository {
  constructor(db, logger) {
    const modelUser = require("../models/users")(db);

    // Object.assign(this.model, modelUser);
    // Object.assign(this.logger, logger)

    this.model = modelUser;
    this.logger = logger;
  }

  async insert(payload) {
    try {
      const result = await this.model.insertOne(payload);

      return result;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
}

module.exports = UserRepository;