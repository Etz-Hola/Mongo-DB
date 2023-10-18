const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const employeesSchema = new Schema({
    firstname: {type: String, required: true},
    lastnmae: {type: String, required: true}
})

const Employee = mongoose.model("Employee", employeesSchema);
module.exports = Employee;

