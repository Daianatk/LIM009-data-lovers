selectIndicators = document.getElementById("List");
let arreglo = Funciones.arrayOfIndicators("PER");
for (let x = 0; x < arreglo.length; x++) {
    option = document.createElement("option");
    option.value = arreglo[x];
    option.text = arreglo[x];
    selectIndicators.appendChild(option);
};
select = document.getElementById("Age-1");
for (let i = 1960; i <= 2016; i++) {
    option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
};
selectTwo = document.getElementById("Age-2");
for (let n = 1961; n <= 2017; n++) {
    option = document.createElement("option");
    option.value = n;
    option.text = n;
    selectTwo.appendChild(option);
};

function filter() {
    let indicatorSelected = document.getElementById('List').value;
    const writeTitle = document.getElementById("demo");
    writeTitle.innerHTML = '"' + indicatorSelected + '"';
};
function ArrayOfYears() {
    let indicatorSelected = document.getElementById('List').value;
    let showData = Funciones.arrayOfdata("PER", indicatorSelected);
    let arrayData = Object.keys(showData);
    let años = [];
    for (let i = 0; i < arrayData.length; i++) {
        años.push(arrayData[i]);
    }
    return años;
};
function ArrayOfYearsValue() {
    let indicatorSelected2 = document.getElementById('List').value;
    let showData2 = Funciones.arrayOfdata(Funciones.paisSelected(), indicatorSelected2);
    let arrayData2 = Object.keys(showData2);
    let valores = [];
    for (let i = 0; i < arrayData2.length; i++) {
        valores.push(showData2[arrayData2[i]]);
    }
    return valores;
};

const clearForm = document.getElementById('borrar');
clearForm.addEventListener("click", limpiarFormulario);

function limpiarFormulario() {
    document.getElementById("form1").reset();
};

function genera_tabla() {
    const body = document.getElementsByTagName("table")[0];
    const tabla = document.createElement("table");
    const tblHeader = document.createElement("theader");
    const tblSection = document.createElement("tsection");
    let getYears = ArrayOfYears();
    let getValue = ArrayOfYearsValue();
    let getCountry = Funciones.paisSelected();

    for (let j = 0; j < 1; j++) {
        let Trheaders = document.createElement("tr");
        let headersTable = document.createElement("th");
        let textHeader = document.createTextNode(getCountry);
        Trheaders.appendChild(headersTable);
        tblSection.appendChild(Trheaders);
        headersTable.appendChild(textHeader);
    }

    for (let i = 0; i < 58; i++) {
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
    };
    tabla.appendChild(tblSection);
    tabla.appendChild(tblHeader);
    body.appendChild(tabla);
};