const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String, // ✅ FIXED
      required: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please use a valid email address",
      ],
    },

    password: { type: String, required: true }, // ✅ FIXED

    role: {
      type: String, // ✅ FIXED
      enum: ["admin", "salesperson", "storekeeper"],
      default: "salesperson",
    },

    phone: { type: Number, required: true }, // ✅ FIXED
  },
  {
    timestamps: true, // ✅ FIXED (moved here)
  }
);

module.exports = mongoose.model("User", userSchema);