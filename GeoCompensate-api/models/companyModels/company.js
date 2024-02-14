const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const companySchema = new Schema({
    companyName: { type: Schema.Types.String, require: true },
    companyLocation: { type: Schema.Types.Array, require: true },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now },
});

module.exports = model("Company", companySchema);