const mongoose = require("mongoose");
const { USER_TYPE } = require("../../utils/enums");
const { Schema, model } = mongoose;

const employeeSchema = new Schema({
    employeeId: { type: String, require: true, unique: true },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    departmentId: { type: Schema.Types.ObjectId, ref: "Department", required: true },
    name: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: String,
    email: { type: String, require: true, unique: true },
    phone: Schema.Types.Number,
    ssn: Schema.Types.Number,
    type: { type: Schema.Types.String, enum: Object.keys(USER_TYPE), require: true }, 
    hourlyPay: Schema.Types.Number,
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now }
});

module.exports = model("Employee", employeeSchema);