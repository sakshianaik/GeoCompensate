const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const departmentSchema = new Schema({
    companyId: { type: Schema.Types.ObjectId, ref: "Company", require: true },
    departmentName: { type: Schema.Types.String, require: true },
});

module.exports = model("Department", departmentSchema);