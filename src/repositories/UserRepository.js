/* eslint-disable global-require */
const { ObjectId } = require('mongodb');
const BadRequest = require("../exceptions/BadRequest");

class UserRepository {
  constructor(db, logger) {
    const modelUser = require("../models/users")(db);

    this.model = modelUser;
    this.logger = logger;
  }

  async insert(payload) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await this.model.insertOne(payload);

      return result;
    } catch (err) {
      throw err;
    }
  }

  async getAll() {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await this.model.find().toArray();

      return result;
    } catch (err) {
      throw err;
    }
  }

  async find(identity) {
    // eslint-disable-next-line no-useless-catch
    try {
      const query = {
        $or: [
          // eslint-disable-next-line radix
          { accountNumber: parseInt(identity) },
          { identityNumber: identity }
        ]
      };

      if (ObjectId.isValid(identity)) {
        query.$or.push({ _id: new ObjectId(identity) });
      }

      const result = await this.model.findOne(query);

      if (!result) {
        throw new BadRequest("User not found", "not_found", 404);
      }

      return result;
    } catch (err) {
      throw err;
    }
  }

  async update(payload, identity) {
    // eslint-disable-next-line no-useless-catch
    try {
      const query = {
        _id: new ObjectId(identity)
      };

      const updatePayload = {
        $set: {
          ...payload
        }
      };

      const result = await this.model.updateOne(query, updatePayload);

      if (!result.matchedCount) {
        throw new BadRequest("User not found", "not_found", 404);
      }

      return result;
    } catch (err) {
      throw err;
    }
  }

  async delete(identity) {
    // eslint-disable-next-line no-useless-catch
    try {
      const query = {
        _id: new ObjectId(identity)
      };

      const result = await this.model.deleteOne(query);

      if (!result.deletedCount) {
        throw new BadRequest("User not found", "not_found", 404);
      }

      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserRepository;