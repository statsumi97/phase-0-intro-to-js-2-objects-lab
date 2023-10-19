//1st test
const employee = {name: 'Sam'}
const streetAddress = '11 Broadway'
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const mondayEmployee = {...employee}
    mondayEmployee[key] = value 
    return mondayEmployee
}
//3rd test
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
    const mondayAddress = destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress)
    mondayAddress.streetAddress = '12 Broadway'
    return mondayAddress
}
//4th test
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}
//6th test
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value
    return employee
    const tuesdayEmployee = destructivelyDeleteFromEmployeeByKey(employee, key)
    delete tuesdayEmployee[key]
    return tuesdayEmployee
}