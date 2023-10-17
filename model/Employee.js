const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const employeesSchema = new Schema({
    firstname: {type: stringify, required: true},
    lastnmae: {type: stringify, required: true}
})

const Employee = mongoose.model("Employee", employeesSchema);
module.exports = Employee;

