const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Anne', 123, 'email@internet.com');

    expect(employee.name).toBe('Anne');
    expect(employee.id).toBeGreaterThanOrEqual(1);
    expect(employee.name).toEqual(expect.any(String));
})