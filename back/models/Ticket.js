const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const slugify = require("slugify");

const ticketSchema = new Schema(
  {
    name: { type: String, minlength: 1, required: true, unique: true },
    description: { type: String, minlength: 1, required: true },
    price: { type: Number, min: 1, required: true },
    stock: { type: Number, required: true },
    number: { type: Number, required: true },
  },
  { timestamps: true },
  // slugify(console.log(this.name), {
  //   replacement: "-",
  //   lower: true,
  // }),
);

ticketSchema.set("toJSON", { virtuals: true });

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
