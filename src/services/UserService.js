class UserService {
  constructor(repository, redis, logger) {
    this.repository = repository;
    this.logger = logger;
    this.redis = redis;
  }

  async insert(payload) {
    let data;
    try {
      data = {
        userName: payload.userName,
        accountNumber: payload.accountNumber,
        emailAddress: payload.emailAddress,
        identityNumber: payload.identityNumber.toString()
      };

      const result = await this.repository.insert(data);

      data = {
        _id: result.insertedId,
        ...data
      };

    } catch (err) {
      this.logger.error({ err });
      throw err;
    }

    return {
      data,
      message: "User has inserted"
    };
  }

  async getAll() {
    let data; let meta;
    try {
      meta = {
        fromCache: true
      };
      const cacheData = await this.redis.get('users-cache');

      if (!cacheData) {
        data = await this.repository.getAll();
        await this.redis.set("users-cache", JSON.stringify(data));
        await this.redis.expire("users-cache", 60);
        // Object.assign(data, result);
        meta.fromCache = false;
      } else {
        data = JSON.parse(cacheData);
      }
    } catch (err) {
      this.logger.error({ err });
      throw err;
    }

    return {
      data,
      message: "User has fetch",
      meta
    };
  }

  async getOne(identity) {
    let data;
    try {
      data = await this.repository.find(identity);
    } catch (err) {
      this.logger.error({ err });
      throw err;
    }

    return {
      data,
      message: "User Found"
    };
  }

  async update(payload, identity) {
    let data;
    try {
      data = {
        userName: payload.userName,
        accountNumber: payload.accountNumber,
        emailAddress: payload.emailAddress,
        identityNumber: payload.identityNumber.toString()
      };

      const result = await this.repository.update(data, identity);

      data = {
        _id: result.insertedId,
        ...data
      };

    } catch (err) {
      this.logger.error({ err });
      throw err;
    }

    return {
      data,
      message: "User has updated"
    };
  }

  async delete(identity) {
    try {
      await this.repository.delete(identity);
    } catch (err) {
      this.logger.error({ err });
      throw err;
    }

    return {
      message: "User has deleted"
    };
  }
}

module.exports = UserService;