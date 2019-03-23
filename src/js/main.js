const List_indicators = document.getElementById("List");
const generateList = (arreglo) => {
    let string = `<option disabled selected>--Seleccione un indicador--</option>`;
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
        pais += `<input type="checkbox"  class="pais" name="countrySelect" value='${countries[i]}'/> ${countries[i]}`;
    }
    return pais;
};

listCountries.innerHTML = printCountries(bank.getUniqueCountry(WORLDBANK));

const generateYears = (obj) => {
    let arrayYears = Object.keys(obj);
    let optionYears = 0;
    for (let i = arrayYears[0]; i <= arrayYears[arrayYears.length - 1]; i++) {
        optionYears += `<option value='${i % 1960}'>${i}</option>`;
    }
    return optionYears;
};

const selectYearsFrom = document.getElementById("Age-1");
selectYearsFrom.innerHTML = generateYears(bank.objectOfdata("PER", "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", WORLDBANK));
const selectYearsTwo = document.getElementById("Age-2");
selectYearsTwo.innerHTML = generateYears(bank.objectOfdata("PER", "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", WORLDBANK));

const genera_tabla = (idIndicator,idFrom,idTo,idShow,idCountry,idTitle) => {
    let indicatorSelected = document.getElementById(idIndicator).value;
    const writeTitle = document.getElementById(idTitle);
    writeTitle.innerHTML = '"' + indicatorSelected + '"';
    
    let yearsFrom = document.getElementById(idFrom).value;
    let yearsTo = document.getElementById(idTo).value;
   let nameCountry=bank.paisSelected(idCountry);
    let showData=bank.objectOfdata(nameCountry, indicatorSelected, WORLDBANK);
    let arrayData = Object.keys(showData);
    let valores = [];
    for (let i = 0; i < arrayData.length; i++) {
        valores.push(showData[arrayData[i]]);
    }
    let box = document.getElementById(idShow);
    box.innerHTML = `<span class="titleTable"> ${nameCountry}</span>`;

    for (let i = yearsFrom; i <= yearsTo; i++) {
        box.innerHTML += `<p> ${arrayData[i]}  :  ${valores[i]}</p>`;
    }
};
const generateTable = document.getElementById("filter");
generateTable.addEventListener("click", function(){
return genera_tabla("List","Age-1","Age-2","dta_ages","countrySelect","demo");
});

const limpiarFormulario = () => {
    document.getElementById("form1").reset();
};
const clearForm = document.getElementById('borrar');
clearForm.addEventListener("click", limpiarFormulario);