const mongoose = require("mongoose");
const { CLOCK_TYPE } = require("../../utils/enums");
const { Schema, model } = mongoose;

const timesheetSchema = new Schema({
    employeeId: { type: Schema.Types.ObjectId, ref: "Employee", require: true },
    clockIn: { type: Date, default: Date.now },
    clockOut: { type: Date, default: Date.now },
    type: { type: Schema.Types.String, enum: Object.keys(CLOCK_TYPE), require: true },
    clockLocation: { type: Schema.Types.Array, require: true },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now },
});

module.exports = model("Timesheet", timesheetSchema);