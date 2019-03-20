window.Funciones = {
  arrayOfIndicators: (filtro) => {       //retorna un array que contiene todos los indicadores por pais.
    let pais = Object.keys(WORLDBANK);
    let datos = "";
    for (let j = 0; j < pais.length; j++) {
      if (pais[j] == filtro) {
        datos = WORLDBANK[pais[j]];
      }
    };
    let arrayOfobject = Object.keys(datos);
    let Indicators = datos[arrayOfobject[0]];
    let array = [];
    for (let n = 0; n < Indicators.length; n++) {
      let arrayIndicators = Indicators[n];
      let nameIndicators = arrayIndicators.indicatorName;
      array[n] = nameIndicators;
    }
    return array;
  },

  getUniqueCountry: (data) => {
    let arrUniqueCountry = [];
    arrUniqueCountry = Object.keys(data);
    return arrUniqueCountry;
  },

  arrayOfdata: (country, indicador) => {
    let contries = Object.keys(WORLDBANK);
    let datos2 = "";
    for (let m = 0; m < contries.length; m++) {
      if (contries[m] == country) {
        datos2 = WORLDBANK[contries[m]];
      }
    };
    let indicadores = datos2.indicators;
    let objectsOfarray = "";
    let datos_2 = "";
    for (let i = 0; i < indicadores.length; i++) {
      objectsOfarray = indicadores[i];
      if (objectsOfarray.indicatorName == indicador) {
        datos_2 = objectsOfarray.data;
      }
    };
    return datos_2;
  },

  ArrayOfYears: (indicatorSelected) => {
    let showData = Funciones.arrayOfdata("PER", indicatorSelected);
    let arrayData = Object.keys(showData)
    let años = [];
    for (let i = 0; i < arrayData.length; i++) {
      años.push(arrayData[i]);
    }
    return años;
  },

  paisSelected: (country) => {
    let seleccion = "";
    for (let i = 0; i < country.length; i++) {
      if (country[i].checked == true) {
        seleccion = country[i].value;
        return seleccion;
      }
    }
  },

  CounterOfYears: () => {
    let inputFrom2 = parseInt(document.getElementById("Age-1").value);
    let inputTo2 = parseInt(document.getElementById("Age-2").value);
    let totalYears = inputTo2 - inputFrom2;
    return totalYears;
  },
};
/*const example = () => {
  return 'example';
};

window.example = example;
*/