let {
  getAllEmployee,
  getEmployeeById,
  addNewEmployee,
} = require('./employee.js');

describe('Employee functions', () => {
  it('should return all employees', () => {
    let employees = getAllEmployee();
    expect(employees.length).toBe(4);
    expect(employees).toEqual([
      { id: 1, name: 'John Doe', position: 'Software Engineer' },
      { id: 2, name: 'Jane Smith', position: 'Product Manager' },
      { id: 3, name: 'Sam Johnson', position: 'Designer' },
      { id: 4, name: 'Lisa Brown', position: 'DevOps Engineer' },
    ]);
  });
  it('should return a employee By Id', () => {
    let employee = getEmployeeById(4);
    expect(employee).toEqual({
      id: 4,
      name: 'Lisa Brown',
      position: 'DevOps Engineer',
    });
  });
  it('will add new employee', () => {
    let employee = { id: 5, name: 'soham', position: 'DevOps Engineer' };
    addNewEmployee(employee);
    let employees = getAllEmployee();
    expect(employees.length).toBe(5);
  });
});
