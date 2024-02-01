const Joi = require("joi");
const Boom = require("boom");

const studentValidation = (data) => {
  const schema = Joi.object({
    fullname: Joi.string().optional().description("fullname of student"),
    nickname: Joi.string().optional().description("nickname of student"),
    lecturer_id: Joi.number().optional().description("lecturer id"),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

module.exports = {
  studentValidation,
};
