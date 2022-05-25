const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const slugify = require("slugify");

const eventSchema = new Schema(
  {
    name: { type: String, minlength: 1, required: true, unique: true },
    description: { type: String, minlength: 1, required: true },
    date: { type: Date, required: true },
    place: { type: Number, required: true },
    headerimage: { type: String, minlength: 1, required: false },
    eventmap: { type: String, minlength: 1, required: false },
  },
  { timestamps: true },
  // slugify(console.log(this.name), {
  //   replacement: "-",
  //   lower: true,
  // }),
);

eventSchema.set("toJSON", { virtuals: true });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
