const Employee = require('../model/Employee')

const getAllEmployees = async (req, res) => {
    const employees = await Employee.find();
    if(!employees) return res.status(204).json({'message': 'No employees found'});
    res.json(data.employees);
}

const createNewEmployee = async (req, res) => {
    if(!req.body?.firstname || !req?.body?.lastname) {
        return res.status(404).json({'message': 'first and last name are required.'});
    }

    try {
        const result = await Employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname
        })
        result.status(201).json(result);  //success
    } catch (err) {
        console.error(err);
    }
}

const updateEmployee = async (req, res) => {
    if(!req?.body?.id) {
        return res.status(400).json({'message': 'ID parameter is required'})
    }
    const employee = await Employee.findOne({ _id: req.body.id}).exec();
    if (!employee) {
        return res.status(204).json({'message': `No employee matches ID ${req.body.id}`});
    }
    if (req.body?.firstname) employee.firstname = req.body.firstname;
    if (req.body?.lastname) employee.lastname = req.body.lastname;
    const result = await employee.save();
    
}

const deleteEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    data.setEmployees([...filteredArray]);
    res.json(data.employees);
}

const getEmployee = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.params.id} not found` });
    }
    res.json(employee);
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}