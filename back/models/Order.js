const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    useremail: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
    },
    orderNumber: { type: Number, $inc: { sequence_value: 1 } },
    tickets: [
      {
        name: { type: String },
        quantity: { type: Number },
        price: { type: Number },
      },
    ],
    status: {
      type: String,
      enum: ["Activo", "Cancelado"],
      default: "Activo",
    },
  },

  { timestamps: true },
);
orderSchema.set("toJSON", { virtuals: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
