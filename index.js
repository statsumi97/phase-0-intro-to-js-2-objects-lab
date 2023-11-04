const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

//
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
employee.streetAddress = '12 Broadway';

//
function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee;
}
console.log(deleteFromEmployeeByKey(employee.name, employee.streetAddress));

//
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
console.log(destructivelyDeleteFromEmployeeByKey(employee.name, employee.streetAddress));

/*
describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
    it('returns employee without the deleted key/value pair', function () {
      let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

      expect(newEmployee['name']).to.equal(undefined);
    });

    it('modifies the original employee', function () {
      let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

      expect(employee['name']).to.equal(undefined);
      expect(employee).to.equal(newEmployee);
    });
  });
});
  */
