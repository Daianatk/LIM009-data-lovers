const ListIndicators = document.getElementById("List");
const generateList = (arreglo) => {
    let string = [];
    for (let x = 0; x < arreglo.length; x++) {
        string += `<option value=${arreglo[x]}>${arreglo[x]}</option>`
    };
    return string;
};
ListIndicators.innerHTML = generateList(Funciones.arrayOfIndicators("PER"));

const listCountries = document.getElementById("paises");
const printCountries = (countries) => {
    let pais = '';
    for (let i = 0; i < countries.length; i++) {
        pais += `<input type="radio"  class="pais" name="pais.select" value=${countries[i]}/> ${countries[i]}`;
    }
    return pais;
}
listCountries.innerHTML = printCountries(Funciones.getUniqueCountry(WORLDBANK));

/*const selectYearsFrom = document.getElementById("Age-1");
const generateYears = (obj) => {
    let arrayYears=Object.keys(obj);
    let optionYears = 0;
    for (let i = arrayYears[0]; i <= arrayYears.length; i++) {
        optionYears += `<option value=${i % 1960}>${i}</option>`;
    };
    return optionYears;
};
selectYearsFrom.innerHTML = generateYears(Funciones.arrayOfdata("PER",Funciones.arrayOfIndicators("PER")[0]));

const selectYearsTwo = document.getElementById("Age-2");
const generateYears2 = (años) => {
    let optionYears2 = 0;
    for (let j = años[0]; j <= años.length; j++) {
        optionYears2 += `<option value=${j % 1960}>${j}</option>`
    };
    return optionYears2;
};*/
//selectYearsTwo.innerHTML = generateYears2();
/* ListIndicators.addEventListener('change', (e)=>{
    return e.target.value
}); */


/*const selectElement = document.getElementById('countries');
const printCountries = (countries) => {
 let string = '';
  for(let i = 0; i<countries.length; i++){
      string += `<option value=${countries[i]}>${countries[i]}</option>`
  }
  return string
}
selectElement.innerHTML = printCountries(dataLover.getUniqueCountry(WORLDBANK));
selectElement.addEventListener('change', (e)=>{
    console.log(e.target.value)
})*/



/*
function filter() {
    let indicatorSelected = document.getElementById('List').value;
    const writeTitle = document.getElementById("demo");
    writeTitle.innerHTML = '"' + indicatorSelected + '"';
};

function ArrayOfYearsValue() {
    let indicatorSelected2 = document.getElementById('List').value;
    let showData2 = Funciones.arrayOfdata(Funciones.paisSelected(), indicatorSelected2);
    let arrayData2 = Object.keys(showData2);
    let valores = [];
   for(let n=0;n<Funciones.CounterOfYears();n++){
    valores.push(showData2[arrayData2[n+1960]]);
   }
   return valores
};

const clearForm = document.getElementById('borrar');
clearForm.addEventListener("click", limpiarFormulario);
function limpiarFormulario() {
    document.getElementById("form1").reset();
};
let inputFrom = parseInt(document.getElementById("Age-1").value);
let inputTo = parseInt(document.getElementById("Age-2").value);
let indicatorSelected = document.getElementById('List').value;
const clicFilter=document.getElementById("filtrarX");
clicFilter.addEventListener("click",genera_tabla);
const country = document.getElementsByName('pais.select');

function genera_tabla() {
    const body = document.getElementsByTagName("table")[0];
    const tabla = document.createElement("table");
    const tblHeader = document.createElement("theader");
    const tblSection = document.createElement("tsection");
    let getYears = Funciones.ArrayOfYears();
    let getValue = ArrayOfYearsValue();
    let getCountry = Funciones.paisSelected(country);

    for (let j = 0; j < 1; j++) {
        let Trheaders = document.createElement("tr");
        let headersTable = document.createElement("th");
        let textHeader = document.createTextNode(getCountry);
        Trheaders.appendChild(headersTable);
        tblSection.appendChild(Trheaders);
        headersTable.appendChild(textHeader);
    };

    for (let i = 0; i <= Funciones.CounterOfYears(); i++) {
       // if (getValue[i] !== "") {
            let hilera = document.createElement("tr");
            for (let j = 0; j < 1; j++) {
                let celda = document.createElement("td");
                let textoCelda = document.createTextNode(getYears[i] + "  :  " + getValue[i]);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }
            tblSection.appendChild(hilera);
        //}
    }
    tabla.appendChild(tblSection);
    tabla.appendChild(tblHeader);
    body.appendChild(tabla);
};*/