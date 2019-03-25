<<<<<<< HEAD
window.Funciones = {
=======
window.example = {
>>>>>>> a642074e0a8c205083ffb4a183359f9ad1b2cbf3
  getUniqueCountry: (data) => {
    let arrUniqueCountry = [];
    arrUniqueCountry = Object.keys(data);
    return arrUniqueCountry;
  },
<<<<<<< HEAD
=======
  
>>>>>>> a642074e0a8c205083ffb4a183359f9ad1b2cbf3
  arrayOfIndicators: (countryToexample, dta) => {       //retorna un array que contiene todos los indicadores por pais.
    let countries = Object.keys(dta);
    let datos = "";
    for (let j = 0; j < countries.length; j++) {
      if (countries[j] == countryToexample) {
        datos = dta[countries[j]];
<<<<<<< HEAD
      }
    };
    let arrayOfobject = Object.keys(datos);
    let Indicators = datos[arrayOfobject[0]];
    let array = [];
    for (let n = 0; n < Indicators.length; n++) {
      let arrayIndicators = Indicators[n];
      array.push(arrayIndicators['indicatorName']);
    }
    return array;
  },

  objectOfdata: (country, indicador, dat) => {   //recibe como parametros un pais y un indicador, y retorna la data correspondiente 
    let arrIndicator = Funciones.arrayOfIndicators(country, dat);
    let arrResult = dat[country]["indicators"];
    let datThree = "";
    for (let i = 0; i < arrIndicator.length; i++) {
      if (arrIndicator[i] == indicador) {
        datThree = arrResult[i]["data"];
      }
    }
=======
      }
    }
    let arrayOfobject = Object.keys(datos);
    let Indicators = datos[arrayOfobject[0]];
    let array = [];
    for (let n = 0; n < Indicators.length; n++) {
      let arrayIndicators = Indicators[n];
      array.push(arrayIndicators['indicatorName']);
    }
    return array;
  },

  objectOfdata: (country, indicador, dat) => {   //recibe como parametros un pais y un indicador, y retorna la data correspondiente 
    let arrIndicator = example.arrayOfIndicators(country, dat);
    let arrResult = dat[country]["indicators"];
    let datThree = "";
    for (let i = 0; i < arrIndicator.length; i++) {
      if (arrIndicator[i] == indicador) {
        datThree = arrResult[i]["data"];
      }
    }
>>>>>>> a642074e0a8c205083ffb4a183359f9ad1b2cbf3
    return datThree;
  },
};