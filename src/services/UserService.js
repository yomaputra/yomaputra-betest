class UserService {
  constructor(repository, logger) {
    this.repository = repository;
    this.logger = logger;
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
      this.logger.error("Test");
      throw err;
    }

    return {
      data,
      message: "User has inserted"
    };
  }

  async getAll() {
    let data;
    try {
      data = await this.repository.getAll();
    } catch (err) {
      this.logger.error("Test");
      throw err;
    }

    return {
      data,
      message: "User has fetch"
    };
  }

  async getOne(identity) {
    let data;
    try {
      data = await this.repository.find(identity);
    } catch (err) {
      this.logger.error("Test");
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
      this.logger.error("Test");
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
      this.logger.error("Test");
      throw err;
    }

    return {
      message: "User has deleted"
    };
  }
}

module.exports = UserService;