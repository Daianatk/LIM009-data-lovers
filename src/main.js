const List_indicators = document.getElementById("List");
const generateList = (arreglo) => {
    let string = `<option disabled selected>--Seleccione un indicador--</option>`;
    for (let x = 0; x < arreglo.length; x++) {
        string += `<option value="${arreglo[x]}">${arreglo[x]}</option>`
    }
    return string;
};
<<<<<<< HEAD
List_indicators.innerHTML = generateList(Funciones.arrayOfIndicators("PER", WORLDBANK));
=======
List_indicators.innerHTML = generateList(example.arrayOfIndicators("PER", WORLDBANK));
>>>>>>> a642074e0a8c205083ffb4a183359f9ad1b2cbf3

const listCountries = document.getElementById("paises");
const printCountries = (countries) => {
    let pais = '';
    for (let i = 0; i < countries.length; i++) {
        pais += `<input type="checkbox"  class="pais" name="countrySelect" value='${countries[i]}'/> ${countries[i]}`;
    }
    return pais;
}
<<<<<<< HEAD
listCountries.innerHTML = printCountries(Funciones.getUniqueCountry(WORLDBANK));
=======
listCountries.innerHTML = printCountries(example.getUniqueCountry(WORLDBANK));
>>>>>>> a642074e0a8c205083ffb4a183359f9ad1b2cbf3

const generateYears = (obj) => {
    let arrayYears = Object.keys(obj);
    let optionYears = 0;
    for (let i = arrayYears[0]; i <= arrayYears[arrayYears.length - 1]; i++) {
        optionYears += `<option value='${i % 1960}'>${i}</option>`;
    }
    return optionYears;
};
const selectYearsFrom = document.getElementById("Age-1");
<<<<<<< HEAD
selectYearsFrom.innerHTML = generateYears(Funciones.objectOfdata("PER", "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", WORLDBANK));
const selectYearsTwo = document.getElementById("Age-2");
selectYearsTwo.innerHTML = generateYears(Funciones.objectOfdata("PER", "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", WORLDBANK));
=======
selectYearsFrom.innerHTML = generateYears(example.objectOfdata("PER", "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", WORLDBANK));
const selectYearsTwo = document.getElementById("Age-2");
selectYearsTwo.innerHTML = generateYears(example.objectOfdata("PER", "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", WORLDBANK));

>>>>>>> a642074e0a8c205083ffb4a183359f9ad1b2cbf3

const filterName = () => {
    let indicatorSelected = document.getElementById('List').value;
    const writeTitle = document.getElementById("demo");
    writeTitle.innerHTML = '"' + indicatorSelected + '"';
};

const paisSelected = () => {
    const country = document.getElementsByName('countrySelect');
    let seleccion = "";
    for (let i = 0; i < country.length; i++) {
        if (country[i].checked == true) {
            seleccion = country[i].value;
            return seleccion;
        }
    }
};

<<<<<<< HEAD

const ArrayOfYearsValue = () => {
    let indicatorSelected2 = document.getElementById('List').value;
    let showData2 = Funciones.objectOfdata(paisSelected(), indicatorSelected2, WORLDBANK);
=======
const ArrayOfYearsValue = () => {
    let indicatorSelected2 = document.getElementById('List').value;
    let showData2 = example.objectOfdata(paisSelected(), indicatorSelected2, WORLDBANK);
>>>>>>> a642074e0a8c205083ffb4a183359f9ad1b2cbf3
    let arrayData2 = Object.keys(showData2);
    let valores = [];
    for (let i = 0; i < arrayData2.length; i++) {
        valores.push(showData2[arrayData2[i]]);
    }
    return valores;
};

<<<<<<< HEAD

const genera_tabla=()=> {
    let indicatorSelected = document.getElementById('List').value;
    let yearsFrom=document.getElementById("Age-1").value;
    let yearsTo=document.getElementById("Age-2").value;
    const body = document.getElementsByTagName("table")[0];
    const tabla = document.createElement("table");
    const tblSection = document.createElement("tsection");
    let getCountry = paisSelected();
    let getYears = Object.keys(Funciones.objectOfdata(paisSelected(), indicatorSelected, WORLDBANK));
    let getValue = ArrayOfYearsValue();
 
=======
const genera_tabla=()=> {
    let indicatorSelected = document.getElementById('List').value;
    const body = document.getElementsByTagName("table")[0];
    const tabla = document.createElement("table");
    const tblSection = document.createElement("tsection");
    let getYears = Object.keys(example.objectOfdata(paisSelected(), indicatorSelected, WORLDBANK));
    let getValue = ArrayOfYearsValue();
    let getCountry = paisSelected();

>>>>>>> a642074e0a8c205083ffb4a183359f9ad1b2cbf3
    for (let j = 0; j < 1; j++) {
        let Trheaders = document.createElement("tr");
        let headersTable = document.createElement("th");
        let textHeader = document.createTextNode(getCountry);
        Trheaders.appendChild(headersTable);
        tblSection.appendChild(Trheaders);
        headersTable.appendChild(textHeader);
    }

    for (let i = yearsFrom; i <= yearsTo; i++) {
        if (getValue[i] !== "") {
            let hilera = document.createElement("tr");
            for (let j = 0; j < 1; j++) {
                let celda = document.createElement("td");
                let textoCelda = document.createTextNode(getYears[i] + "  :  " + getValue[i]);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }
            tblSection.appendChild(hilera);
        }
    }
    tabla.appendChild(tblSection);
    body.appendChild(tabla);
};
<<<<<<< HEAD
const generateTable=document.getElementById("filter");
generateTable.addEventListener("click", genera_tabla);
=======

document.getElementById("filter").addEventListener("click", genera_tabla);
>>>>>>> a642074e0a8c205083ffb4a183359f9ad1b2cbf3

const limpiarFormulario=()=>{
    document.getElementById("form1").reset();
};

<<<<<<< HEAD
const clearForm = document.getElementById('borrar');
clearForm.addEventListener("click", limpiarFormulario);
=======
const clearForm = document.getElementById("borrar");
clearForm.addEventListener("click", limpiarFormulario);

>>>>>>> a642074e0a8c205083ffb4a183359f9ad1b2cbf3
