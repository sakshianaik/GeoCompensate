const mongoose = require("mongoose");
const { CLOCK_TYPE } = require("../../utils/enums");
const { Schema, model } = mongoose;

const timesheetSchema = new Schema({
    employeeId: { type: Schema.Types.ObjectId, ref: "Employee", require: true },
    date: { type: Date, default: Date.now },
    clockIn: { type: Date, default: Date.now },
    clockOut: { type: Date, default: Date.now },
    type: { type: Schema.Types.String, enum: Object.keys(CLOCK_TYPE), require: true },
    clockedOut: { type: Schema.Types.Boolean, default: false },
    clockLocation: { type: Schema.Types.Array, require: true },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now },
    hourlyPay: Schema.Types.Number,
});

module.exports = model("Timesheet", timesheetSchema);