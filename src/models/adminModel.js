const { Schema, model, mongoose, models } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    dateOfBirth: { type: Date },
    phone: { type: String, default: "" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    typeOfAccess: { type: String, enum: ["manager", "admin"] },
    city: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
  },
  { timestamps: true }
);

const userModel = models.users || model("users", userSchema);

export default userModel;
