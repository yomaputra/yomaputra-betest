class UserService {
  constructor(repository, logger) {
    this.repository = repository;
    this.logger = logger;
  }

  async insert(payload) {
    let data;
    try {
      let result = await this.repository.insert(payload);
      data = {
        _id: result.insertedId,
        userName: payload.userName,
        accountNumber: payload.accountNumber,
        emailAddress: payload.emailAddress,
        identityNumber: payload.identityNumber,
      }
    } catch (err) {
      this.logger.error("Test");
      throw err;
    }

    return {
      data: data,
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
      data: data,
      message: "User has inserted"
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
      data: data,
      message: "User has inserted"
    };
  }
}

module.exports = UserService;