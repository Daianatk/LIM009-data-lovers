window.bank = {
  getUniqueCountry: (data) => {
    let arrUniqueCountry = [];
    arrUniqueCountry = Object.keys(data);
    return arrUniqueCountry;
  },
  arrayOfIndicators: (countryToexample, dta) => {       //retorna un array que contiene todos los indicadores por pais.
    let countries = Object.keys(dta);
    let datos = "";
    for (let j = 0; j < countries.length; j++) {
      if (countries[j] == countryToexample) {
        datos = dta[countries[j]];
      }
    }
    let arrayOfobject = Object.keys(datos);
    let indicatorsOfArray = datos[arrayOfobject[0]];
    let array = [];
    for (let n = 0; n < indicatorsOfArray.length; n++) {
      let arrindicators = indicatorsOfArray[n];
      array.push(arrindicators['indicatorName']);
    }
    return array;
  },

  objectOfdata: (country, indicador, dat) => {   //recibe como parametros un pais y un indicador, y retorna la data correspondiente 
    let arrIndicator = bank.arrayOfIndicators(country, dat);
    let arrResult = dat[country]["indicators"];
    let datThree = "";
    for (let i = 0; i < arrIndicator.length; i++) {
      if (arrIndicator[i] == indicador) {
        datThree = arrResult[i]["data"];
      }
    }
    return datThree;
  },
  paisSelected: (names) => {
    let arrPaises = document.getElementsByName(names);
    let seleccion = "";
    for (let i = 0; i < arrPaises.length; i++) {
      if (arrPaises[i].checked == true) {
        seleccion = arrPaises[i].value;
        return seleccion;
      }
    }
  },
  intervalYears: (idFrom, idTo) => {
    let From = parseInt(document.getElementById(idFrom).value);
    let To = parseInt(document.getElementById(idTo).value);
    let arrYears = [];
    for (let i = From + 1960; i <= To + 1960; i++) {
      arrYears.push(i);
    }
    return arrYears;
  },
  arrValuesSelect: (arrSelect,idpais,idindicador) => {
    let countrySelect = bank.paisSelected(idpais);
    let indicatorSelect = document.getElementById(idindicador).value;
    let objData = bank.objectOfdata(countrySelect, indicatorSelect, WORLDBANK);
    let arrvalues = [];
    for (let i = 0; i <= arrSelect.length; i++) {
      arrvalues.push(objData[arrSelect[i]]);
    }
    return arrvalues;
  },
  arrValues: (idpais, idindicador) => {
    let countrySelect = bank.paisSelected(idpais);
    let indicatorSelect = document.getElementById(idindicador).value;
    let objDtaAll = bank.objectOfdata(countrySelect, indicatorSelect, WORLDBANK);
    let arrData = Object.keys(objDtaAll);
    let valores = [];
    for (let i = 0; i < arrData.length; i++) {
      valores.push(objDtaAll[arrData[i]]);
    }
    return valores;
  },
};
