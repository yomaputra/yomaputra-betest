const controller = {};

controller.getAll = async (req, res, next) => {
  try {
    const { userService } = res.locals;

    const result = await userService.getAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

controller.getOne = async (req, res, next) => {
  try {
    const { userService } = res.locals;

    const result = await userService.getOne(req.params.userIdentity);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

controller.store = async (req, res, next) => {
  try {
    const { userService } = res.locals;

    const result = await userService.insert(req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

controller.update = async (req, res, next) => {
  try {
    const { userService } = res.locals;

    const result = await userService.update(req.body, req.params.userIdentity);

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

controller.delete = async (req, res, next) => {
  try {
    const { userService } = res.locals;

    const result = await userService.delete(req.params.userIdentity);

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = controller;