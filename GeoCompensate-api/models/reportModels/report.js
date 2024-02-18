const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reportSchema = new Schema({
    employeeId: { type: Schema.Types.ObjectId, ref: "Employee", require: true },
    startDate: { type: Date, require: true },
    endDate: { type: Date, require: true },
    hours: { type: Schema.Types.Number, default: 0 },
    pay: { type: Schema.Types.Number, default: 0 }
});

module.exports = model("Report", reportSchema);