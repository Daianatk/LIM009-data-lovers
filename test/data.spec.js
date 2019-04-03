global.assert = require('chai').assert;
require('../src/js/data');

const input =
{
  'PER': {
    'indicators': [
      {
        'data': {
          '2014': 24.2099990844727,
          '2015': 21.6800003051758,
          '2016': 23.7399997711182,
          '2017': 23.7600002288818,
        },
        'countryName': 'Perú',
        'countryCode': 'PER',
        'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
        'indicatorCode': 'SL.TLF.PART.FE.ZS',
      }],
    'dataSource': 'Indicadores del desarrollo mundial',
    'lastUpdated': '2018-11-14',
  },

  'MEX': {
    'indicators': [
      {
        'data': {
          '2014': 14,
          '2015': 14.1,
          '2016': 14.4,
          '2017': ''
        },
        'countryName': 'México',
        'countryCode': 'MEX',
        'indicatorName': 'Prevalencia de anemia entre mujeres no embarazadas (% de mujeres entre 15-49 años)',
        'indicatorCode': 'SH.ANM.NPRG.ZS'
      }],
    'dataSource': 'Indicadores del desarrollo mundial',
    'lastUpdated': '2018-11-14'
  },

  'BRA': {
    'indicators': [
      {
        'data': {
          '2014': '',
          '2015': 0,
          '2016': '',
          '2017': 0
        },
        'countryName': 'Brasil',
        'countryCode': 'BRA',
        'indicatorName': 'La ley exige igualdad de remuneración para hombres y mujeres por trabajo de igual valor (1=sí; 0=no)',
        'indicatorCode': 'SG.LAW.EQRM.WK'
      }],
    'dataSource': 'Indicadores del desarrollo mundial',
    'lastUpdated': '2018-11-14'
  },

  'CHL': {
    'indicators': [
      {
        'data': {
          '2014': 33.8300018310547,
          '2015': 32.9099998474121,
          '2016': 34.0999984741211,
          '2017': 33.7200012207031
        },
        'countryName': 'Chile',
        'countryCode': 'CHL',
        'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
        'indicatorCode': 'SL.TLF.PART.FE.ZS'
      }],
    'dataSource': 'Indicadores del desarrollo mundial',
    'lastUpdated': '2018-11-14'
  }
};

const output1 = ['PER', 'MEX', 'BRA', 'CHL'];
const output2 = ['Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)'];
const output3 = { '2014': 24.2099990844727, '2015': 21.6800003051758, '2016': 23.7399997711182, '2017': 23.7600002288818 };

describe('DATABANK', () => {
  it('debería ser un objeto', () => {
    expect(typeof DATABANK).toBe('object');
  });
  describe('getUniqueCountry', () => {
    it('debería ser una función', () => {
      expect(typeof DATABANK.getUniqueCountry).toBe('function');
    });
    it('debería retornar ["PER","MEX","BRA","CHL"]', () => {
      expect(DATABANK.getUniqueCountry(input)).toEqual(output1);
    });
    it('debería retornar un nuevo array', () => {
      expect(DATABANK.getUniqueCountry(input)).not.toBe(output1);
    });
  });
  describe('arrayOfIndicators', () => {
    it('debería ser una función', () => {
      expect(typeof DATABANK.arrayOfIndicators).toBe('function');
    });
    it('debería retornar [ "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)"]', () => {
      expect(DATABANK.arrayOfIndicators(input)).toEqual(output2);
    });
    it('debería retornar un nuevo array', () => {
      expect(DATABANK.arrayOfIndicators(input)).not.toBe(output2);
    });
  });
  describe('filterData', () => {
    it('debería ser una función', () => {
      expect(typeof DATABANK.filterData).toBe('function');
    });
    it('debería retornar un objeto', () => {
      expect(DATABANK.filterData('PER', 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)', input, 'data')).toEqual(output3);
    });
    it('debería retornar un objeto', () => {
      expect(DATABANK.filterData('PER', 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)', input, 'data')).not.toBe(output3);
    });
  });
});
