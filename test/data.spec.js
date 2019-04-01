global.window = global;
global.assert = require('chai').assert;
require('../js/src/data');
require('./js/src/main.js');


describe('bank', () => {
  it('debería ser un objeto', () => {
    expect(typeof bank), toBe('object');
  });

  it('debería ser una función', () => {
    expect(typeof example), toBe('function');
  });

  it('debería retornar "example"', () => {
    expect(typeof example), toBe('function');
  });
})
