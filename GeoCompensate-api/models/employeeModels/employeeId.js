const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const employeeIdSchema = new Schema({
    employeeId: { type: Schema.Types.Number, require: true }
});

module.exports = model("EmployeeId", employeeIdSchema);