window.DATABANK = {
  getUniqueCountry: (data) => {
    let arrUniqueCountry = [];
    arrUniqueCountry = Object.keys(data);
    return arrUniqueCountry;
  },
  arrayOfIndicators: (dta) => {       //retorna un array que contiene todos los indicadores comunes en paises de  la data.
    let countries = Object.keys(dta);
    let array = [];
    countries.forEach(function (element) {
      let indicatorsOfArray = dta[element]["indicators"];
      for (let n = 0; n < indicatorsOfArray.length; n++) {
        array.push(indicatorsOfArray[n]['indicatorName']);        //array con todos los indiccadores comunes 
      }
    });
    let arr2 = [];
    array.forEach(function (element) {            //hallando ind. comunes en los 4 paises y llenando en un array
      for (let i = array.indexOf(element) + 1; i < array.length; i++) {
        if (array[i] == element) {
          arr2.push(element);
        }
      }
    });
    let diferente = [...new Set(arr2)];       //eliminando repeticion luego de encontrar los que son comunes para todos
    return diferente.sort();
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
  filterData: (country, indicador, dat, by) => {   //recibe como parametros un pais y un indicador, y retorna la data correspondiente 
    //let arrIndicator = bank.arrayOfIndicators(dat)
    let arrResult = dat[country]["indicators"];
    let objResult = [];
    for (let i = 0; i < arrResult.length; i++) {
      if (arrResult[i]["indicatorName"] === indicador) {
        objResult = arrResult[i][by];
      }
    }
    return objResult;
  },
  intervalYears: (idFrom, idTo, obj) => {
    let From = parseInt(document.getElementById(idFrom).value);
    let To = parseInt(document.getElementById(idTo).value);
    let arrYears = [];
    for (let i = From + 1960; i <= To + 1960; i++) {
      arrYears.push(i);
    }
    let arrYearsNew = [];
    arrYears.forEach(function (element) {
      if (obj[element] !== "") {
        arrYearsNew.push(element);
      }
    });
    return arrYearsNew;
  },

  arrValues: (objSelect, yearsSelect) => {   //retorna los valores correspondientes al año y el indicador seleccionado por el usuario
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
