
const List_indicators = document.getElementById("List");
const generateList = (arreglo) => {
    let string = `<option disabled selected>----Seleccione un indicador----</option>`;
    for (let x = 0; x < arreglo.length; x++) {
        string += `<option value="${arreglo[x]}">${arreglo[x]}</option>`
    }
    return string;
};
List_indicators.innerHTML = generateList(DATABANK.arrayOfIndicators(WORLDBANK));
const listCountries = document.getElementById("paises");
const printCountries = (countries) => {
    let pais = '';
    for (let i = 0; i < countries.length; i++) {
        pais += `<input type="radio" class="pais ${countries[i]}" name="countrySelect" value='${countries[i]}'/><label>${countries[i]}</label>`;
    }
    return pais;
};

listCountries.innerHTML = printCountries(DATABANK.getUniqueCountry(WORLDBANK));

const generateYears = (obj) => {
    let arrayYears = Object.keys(obj);
    let optionYears = 0;
    for (let i = arrayYears[0]; i <= arrayYears[arrayYears.length - 1]; i++) {
        optionYears += `<option class="years" value='${i % 1960}'>${i}</option>`;
    }
    return optionYears;
};
let objectExample = DATABANK.filterData("MEX", "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", WORLDBANK,"data");
const selectYearsFrom = document.getElementById("Age-1");
selectYearsFrom.innerHTML = generateYears(objectExample);
const selectYearsTwo = document.getElementById("Age-2");
selectYearsTwo.innerHTML = generateYears(objectExample);

const genera_tabla = (idIndicator, idFrom, idTo, idShow, idCountry) => {
    let indicatorSelected = document.getElementById(idIndicator).value;
    let nameCountry = DATABANK.paisSelected(idCountry);
    let showData = DATABANK.filterData(nameCountry, indicatorSelected, WORLDBANK,"data");
    let arrAños = DATABANK.intervalYears(idFrom, idTo, showData);
    const box = document.getElementById(idShow);
    box.innerHTML = `<tr><caption>${nameCountry} : ${indicatorSelected}</caption></tr><tr><th>Año</th><th>Dato</th></tr>`;
    arrAños.forEach(function (element) {
        let convert = DATABANK.roundN(showData[element], 3)
        box.innerHTML += `<tr><td> ${element}</td><td>${convert}</td><tr>`;
    });
};

const generateTable = document.getElementById("filter");
generateTable.addEventListener("click", function () {
    document.getElementById("seccion-1").style.display="block";
    document.getElementById("seccion-2").style.display="none";
    document.getElementById("seccion-3").style.display="none";
    return genera_tabla("List", "Age-1", "Age-2", "tabla", "countrySelect");
});

const generateStatics = (idtable, idCountry, idIndicator, idFrom, idTo) => {
    const tableOfStatics = document.getElementById(idtable);
    let nameCountry = DATABANK.paisSelected(idCountry);
    let indicatorSelected = document.getElementById(idIndicator).value;
    let objeto = DATABANK.filterData(nameCountry, indicatorSelected, WORLDBANK,"data");
    let años = DATABANK.intervalYears(idFrom, idTo, objeto);
    let arr = [];
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
    let sum2 = 0;
    let prom = 0;
    newArr.forEach(function (element) {
        suma += element;
        prom = suma / newArr.length;
        sum2 += Math.pow((element - prom), 2);
    })

    let varianza = Math.pow(sum2 / newArr.length, 1 / 2)
    let error = Math.pow(varianza, 1 / 2);
    let mediana = newArr[parseInt(newArr.length / 2)];
    let max = Math.max(...newArr);
    let min = Math.min(...newArr);
    tableOfStatics.innerHTML += `<tr><td>${DATABANK.roundN(prom, 3)}</td><td>${DATABANK.roundN(mediana, 3)}</td><td>${DATABANK.roundN(varianza, 3)}</td><td>${DATABANK.roundN(error, 3)}</td><td>${DATABANK.roundN(min, 3)}</td><td>${DATABANK.roundN(max, 3)}</td><tr>`;
};

const mostrarStatics = document.getElementById('SeeStatics');
mostrarStatics.addEventListener("click", function () {
    document.getElementById("seccion-1").style.display="none";
    document.getElementById("seccion-2").style.display="none";
    document.getElementById("seccion-3").style.display="block";
    return generateStatics("staticsTable", "countrySelect", "List", "Age-1", "Age-2");
});

const limpiarFormulario = () => {
    location.reload();
};
const clearForm = document.getElementById('borrar');
clearForm.addEventListener("click", limpiarFormulario);