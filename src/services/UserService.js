class UserService {
  constructor(repository, logger) {
    this.repository = repository;
    this.logger = logger;

    this.logger.info(this.repository);
  }

  async insert(payload) {
    let result;
    try {
      result = await this.repository.insert(payload);
      result = true;
    } catch (err) {
      this.logger.error("Test");
      throw err;
    }

    return result;
  }
}

module.exports = UserService;