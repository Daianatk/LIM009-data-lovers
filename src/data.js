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

  arrayOfdata: (country,indicador)=>{
    let contries=Object.keys(WORLDBANK);
    let datos2="";
      for(let m=0;m<contries.length;m++){
        if(contries[m]==country){
        datos2=WORLDBANK[contries[m]];
        }
      };
    let arrayOfcontry=Object.keys(datos2);
    let indicadores=datos2.indicators;
    let objectsOfarray="";
    let datos_2="";
    let arrayFinal=[];
    for(let i=0;i<indicadores.length;i++){
      objectsOfarray=indicadores[i];
        if(objectsOfarray.indicatorName==indicador){
        datos_2= objectsOfarray.data;
        }
//arrayFinal=
    };
       return JSON.stringify(datos_2);
  },
};
/*const example = () => {
  return 'example';
};

window.example = example;
*/