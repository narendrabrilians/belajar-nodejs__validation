import Joi from "joi";

describe("Joi", () => {
  it("should can validate array", () => {
    const hobbiesSchema = Joi.array()
      .items(Joi.string().required().min(3).max(100))
      .min(1)
      .unique();

    const hobbies = ["Coding", "Reading"];
    const result = hobbiesSchema.validate(hobbies, { abortEarly: false });

    console.info(result);
  });
});
