import Joi from "joi";

describe("Joi", () => {
  it("should can validate object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().required().min(3).max(100).email(),
      password: Joi.string().required().min(6).max(100),
    });
    const request = { username: "Cat@gmail.com", password: "cat123" };
    const result = loginSchema.validate(request, { abortEarly: false });

    console.info(result);
  });
});
