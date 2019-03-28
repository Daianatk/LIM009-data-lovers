
const List_indicators = document.getElementById("List");
const generateList = (arreglo) => {
    let string = `<option disabled selected>----Seleccione un indicador----</option>`;
    for (let x = 0; x < arreglo.length; x++) {
        string += `<option value="${arreglo[x]}">${arreglo[x]}</option>`
    }
    return string;
};
List_indicators.innerHTML = generateList(bank.arrayOfIndicators("PER", WORLDBANK));
const listCountries = document.getElementById("paises");
const printCountries = (countries) => {
    let pais = '';
    for (let i = 0; i < countries.length; i++) {
        pais += `<input type="radio" class="pais ${countries[i]} " name="countrySelect" value='${countries[i]}'/><label>${countries[i]}</label>`;
    }
    return pais;
};

listCountries.innerHTML = printCountries(bank.getUniqueCountry(WORLDBANK));

const generateYears = (obj) => {
    let arrayYears = Object.keys(obj);
    let optionYears = 0;
    for (let i = arrayYears[0]; i <= arrayYears[arrayYears.length - 1]; i++) {
        optionYears += `<option class="years" value='${i % 1960}'>${i}</option>`;
    }
    return optionYears;
};

const selectYearsFrom = document.getElementById("Age-1");
selectYearsFrom.innerHTML = generateYears(bank.objectOfdata("PER", "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", WORLDBANK));
const selectYearsTwo = document.getElementById("Age-2");
selectYearsTwo.innerHTML = generateYears(bank.objectOfdata("PER", "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", WORLDBANK));

const genera_tabla = (idIndicator, idFrom, idTo, idShow, idCountry) => {
    let indicatorSelected = document.getElementById(idIndicator).value;
    let nameCountry = bank.paisSelected(idCountry);
    let showData = bank.objectOfdata(nameCountry, indicatorSelected, WORLDBANK);
    let arrayData = Object.keys(showData);                       //los años en un arrayh
    let valores = bank.arrValues(idCountry, idIndicator);       //valores por año
    let From = parseInt(document.getElementById(idFrom).value);
    let To= parseInt(document.getElementById(idTo).value);
    const box = document.getElementById(idShow);
    box.innerHTML = `<tr><caption>${nameCountry} : ${indicatorSelected}</caption></tr><tr><th>Año</th><th>Dato</th></tr>`;
    for (let i = From; i <=To; i++) {
        box.innerHTML += `<tr><td> ${arrayData[i]}</td><td>${valores[i]}</td><tr>`;
    }
};
const generateTable = document.getElementById("filter");
generateTable.addEventListener("click", function () {
    return genera_tabla("List", "Age-1", "Age-2", "dta_ages", "countrySelect");
});

const generateStatics = (idtable, idCountry, idIndicator, idFrom, idTo) => {
    const tableOfStatics = document.getElementById(idtable);
    let nameCountry = bank.paisSelected(idCountry);
    let indicatorSelected = document.getElementById(idIndicator).value;
    let años = bank.intervalYears(idFrom, idTo,nameCountry,indicatorSelected,WORLDBANK);
    let arr = [];
    let objeto = bank.objectOfdata(nameCountry, indicatorSelected, WORLDBANK);
    tableOfStatics.innerHTML = `<tr><caption>${nameCountry} : ${indicatorSelected}</caption></tr><tr><th>Media</th><th>Mediana(Me)</th><th>Varianza</th><th>Error o desv. Estandar</th><th>Mínimo</th><th>Máximo</th></tr>`;
    for (let i = 0; i < años.length; i++) {
        arr.push(objeto[años[i]]);
    }

    let newArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== "") {
            newArr.push(arr[j])
        }
    }
    let suma = 0;
    let sum2=0;
    let prom=0;
    newArr.forEach(function(element){
        suma+=element; 
        prom = suma / newArr.length;
        sum2+=Math.pow((element-prom),2);
      })
 
    let varianza= Math.pow(sum2/newArr.length,1/2)
    let error=Math.pow(varianza,1/2);
    let mediana = newArr[parseInt(newArr.length / 2)];
    let max = Math.max(...newArr);
    let min=Math.min(...newArr);
    
    tableOfStatics.innerHTML += `<tr><td>${bank.roundTwo(prom)}</td><td>${bank.roundTwo(mediana)}</td><td>${bank.roundTwo(varianza)}</td><td>${bank.roundTwo(error)}</td><td>${bank.roundTwo(min)}</td><td>${bank.roundTwo(max)}</td><tr>`;
};

const mostrarStatics = document.getElementById('SeeStatics');
mostrarStatics.addEventListener("click", function () {
    return generateStatics("staticsTable", "countrySelect", "List", "Age-1", "Age-2");
});

const limpiarFormulario = () => {
    document.getElementById("form1").reset();
};
const clearForm = document.getElementById('borrar');
clearForm.addEventListener("click", limpiarFormulario);