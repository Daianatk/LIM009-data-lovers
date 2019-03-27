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
    return array.sort();
  },

  objectOfdata: (country, indicador, dat) => {   //recibe como parametros un pais y un indicador, y retorna la data correspondiente 
    let arrIndicator = bank.arrayOfIndicators(country, dat)
    let arrResult = dat[country]["indicators"];
    let objResult = [];
    for (let i = 0; i < arrIndicator.length; i++) {
      if (arrIndicator[i] == indicador) {
        objResult = arrResult[i]["data"];
      }
    }
    return objResult;
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
  arrValuesSelect: (arrSelect,countrySelect,indicatorSelect,data) => {
    let objData = bank.objectOfdata(countrySelect, indicatorSelect,data )
    let newArr=[];
    for (let j = 0; j < arrSelect.length; j++) {
      if (objData[arrSelect[j]] !== "") {
          newArr.push(objData[arrSelect[j]])
      }
    }
    return newArr;
  },
  intervalYears: (idFrom, idTo,pais,indicador,data) => {
    let obj = bank.objectOfdata( pais, indicador,data);
    let From = parseInt(document.getElementById(idFrom).value);
    let To= parseInt(document.getElementById(idTo).value);
    let arrYears = [];
    for (let i = From + 1960; i <= To + 1960; i++) {
      arrYears.push(i);
    }
    let arrYearsNew=[];
    arrYears.forEach(function(element){
      if(obj[element]!==""){
        arrYearsNew.push(element);
      }
    });
    return arrYearsNew;
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
  roundTwo:(numero)=>{
    var flotante = parseFloat(numero);
    var resultado = Math.round(flotante*1000)/1000;
    return resultado;
    }
};
