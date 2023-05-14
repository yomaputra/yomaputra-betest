const controller = {};

controller.getAll = async (req, res, next) => {

}

controller.store = async (req, res, next) => {
  try {
    const { userService } = res.locals;
    const { logger } = req.app.locals;

    logger.info("Controller Started");

    await userService.insert(req.body);
    res.status(200).json(req.body);
  } catch (err) {
    next(err);
  }
}

module.exports = controller;