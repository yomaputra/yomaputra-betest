const controller = {};

controller.getAll = async (req, res, next) => {
  try {
    const { userService } = res.locals;
    const { logger } = req.app.locals;

    let result = await userService.getAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

controller.getOne = async (req, res, next) => {
  try {
    const { userService } = res.locals;
    const { logger } = req.app.locals;

    let result = await userService.getOne(req.params.userIdentity);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

controller.store = async (req, res, next) => {
  try {
    const { userService } = res.locals;
    const { logger } = req.app.locals;

    let result = await userService.insert(req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = controller;