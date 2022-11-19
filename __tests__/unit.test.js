// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('acknowledges 858-231-7042 as a valid phone number', () => {
    expect(functions.isPhoneNumber('858-231-7042')).toBe(true);
});

test('acknowledges (619)003-0004 as a valid phone number', () => {
    expect(functions.isPhoneNumber('(619)003-0004')).toBe(true);
});

test('acknowledge BILL-HOW as an invalid phone number', () => {
    expect(functions.isPhoneNumber('BILL-HOW')).toBe(false);
});

test('acknowledge phillsteak22@fakemail.com as an invalid phone number', () => {
    expect(functions.isPhoneNumber('phillsteak22@fakemail.com')).toBe(false);
});

test('acknowledge phillsteak23@fakemail.com as a valid email', () => {
    expect(functions.isEmail('phillsteak23@fakemail.com')).toBe(true);
});

test('acknowledge 1@gamers.com as a valid email', () => {
    expect(functions.isEmail('1@gamers.com')).toBe(true);
});

test('acknowledge @gmail.com as an invalid email', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

test('acknowledge @.top as an invalid email', () => {
    expect(functions.isEmail('@.top')).toBe(false);
});

test('acknowledge StrongPassword123 as a strong password', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});

test('acknowledge Str0ng3rPassw0rd$#@$ as a strong password', () => {
    expect(functions.isStrongPassword('passw3rd_great')).toBe(true);
});

test('acknowledge StrongPassword123 as a weak password', () => {
    expect(functions.isStrongPassword('StrongPassword123')).toBe(false);
});

test('acknowledge Str0ng3rPassw0rd$#@$ as a weak password', () => {
    expect(functions.isStrongPassword('Str0ng3rPassw0rd$#@$')).toBe(false);
});

test('acknowledge 12/12/2022 as a valid date', () => {
    expect(functions.isDate('12/12/2022')).toBe(true);
});

test('acknowledge 31/10/1756 as a valid date', () => {
    expect(functions.isDate('31/10/1756')).toBe(true);
});

test('acknowledge March 32nd, 2003 as an invalid date', () => {
    expect(functions.isDate('March 32nd, 2003')).toBe(false);
});

test('acknowledge February 30th, 1999 as an invalid date', () => {
    expect(functions.isDate('February 30th, 1999')).toBe(false);
});

test('acknowledge #256 as a valid color', () => {
    expect(functions.isHexColor('#256')).toBe(true);
});

test('acknowledge #FFFFFF as a valid color', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('acknowledge @#$ as an invalid color', () => {
    expect(functions.isHexColor('@#$')).toBe(false);
});

test('acknowledge JJJXXX as an invalid color', () => {
    expect(functions.isHexColor('JJJXXX')).toBe(false);
});
// TODO - Part 2