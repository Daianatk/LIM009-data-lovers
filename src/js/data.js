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
        array.push(indicatorsOfArray[n]['indicatorName']);        //array con todos los indicadores 
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

  filterData: (country, indicador, dat, by) => {   //recibe como parametros un pais y un indicador, y retorna la data correspondiente 
    let arrResult = dat[country]["indicators"];
    let objResult = [];
    for (let i = 0; i < arrResult.length; i++) {
      if (arrResult[i]["indicatorName"] == indicador) {
        objResult = arrResult[i][by];
      }
    }
    return objResult;
  },
};
