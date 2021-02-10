const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Anne');

    expect(employee.name).toBe('Anne');
})