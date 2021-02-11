const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('creates intern object', () => {
    const intern = new Intern('Joy', 304, 'my-email@email.com', 'University of Pancakes');

    expect(intern.name).toBe('Joy');
    expect(intern.id).toBeGreaterThanOrEqual(1);
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('gets intern name', () => {
    const intern = new Intern('Joy', 304, 'my-email@email.com', 'University of Pancakes');

    const name = intern.getName();

    expect(name).toEqual(expect.stringContaining(intern.name));
});

test('gets intern id', () => {
    const intern = new Intern('Joy', 304, 'my-email@email.com', 'University of Pancakes');

    const id = intern.getId();

    expect(id).toEqual(expect.stringContaining(intern.id.toString()));
});

test('gets intern email', () => {
    const intern = new Intern('Joy', 304, 'my-email@email.com', 'University of Pancakes');

    const email = intern.getEmail();

    expect(email).toEqual(expect.stringContaining(intern.email));
});

test('gets intern school', () => {
    const intern = new Intern('Joy', 304, 'my-email@email.com', 'University of Pancakes');

    const school = intern.getSchool();

    expect(school).toEqual(expect.stringContaining(intern.school));
})

test('gets intern role', () => {
    const intern = new Intern('Joy', 304, 'my-email@email.com', 'University of Pancakes');

    const role = intern.getRole();

    expect(role).toBe('Intern');
})
