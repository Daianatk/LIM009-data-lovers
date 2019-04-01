global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('getUniqueCountry', () => {
  
  it('debería ser una funcion', () => {
    expect(typeof getUniqueCountry).toBe('function');
  });

 it('debería retornar "["PER","MEX","BRA","CHL"]"', () => {
    expect(window.getUniqueCountry(WORLDBANK)).toBe('["PER","MEX","BRA","CHL"]');
  }); 
});

/* window.getUniqueCountry = object;
object(); */