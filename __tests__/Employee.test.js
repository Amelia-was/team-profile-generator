const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Anne', 123, 'email@internet.com');

    expect(employee.name).toBe('Anne');
    expect(employee.id).toBeGreaterThanOrEqual(1);
    expect(employee.name).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Anne', 123, 'email@internet.com');

    const name = employee.getName();

    expect(name).toEqual(expect.stringContaining(employee.name));
});

test('gets employee id', () => {
    const employee = new Employee('Anne', 123, 'email@internet.com');

    const id = employee.getId();

    expect(id).toEqual(expect.stringContaining(employee.id.toString()));
});

test('gets employee email', () => {
    const employee = new Employee('Anne', 123, 'email@internet.com');

    const email = employee.getEmail();

    expect(email).toEqual(expect.stringContaining(employee.email));
});

test('gets employee role', () => {
    const employee = new Employee('Anne', 123, 'email@internet.com');

    const role = employee.getRole();

    expect(role).toBe('Employee');
});