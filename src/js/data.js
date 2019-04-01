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

  filterData: (country, indicador, dat) => {   //recibe como parametros un pais y un indicador, y retorna la data correspondiente 
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
  intervalYears: (idFrom, idTo,obj) => {
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

  arrValues: (objSelect,yearsSelect) => {   //retorna los valores correspondientes al año y el indicador seleccionado por el usuario
    let valores = [];
    for (let i = 0; i < yearsSelect.length; i++) {
      valores.push(objSelect[yearsSelect[i]]);
    }
    return valores;
  },
  roundN: (number, n) => {    //n es el numero de decimales al que se quiere redondear
    var flotante = parseFloat(number);
    var resultado = Math.round(flotante * Math.pow(10, n)) / Math.pow(10, n);
    return resultado;
  }
};
