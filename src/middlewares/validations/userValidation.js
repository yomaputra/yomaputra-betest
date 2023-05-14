const yup = require("yup");

const schema = yup.object({
  body: yup.object({
    userName: yup.string().required(),
    emailAddress: yup.string().email().required(),
    identityNumber: yup
      .string()
      .test("len", "Must be exactly 16 characters", (val) => val.length === 16)
      .required(),
    accountNumber: yup.number().required()
  })
});

module.exports = schema;
