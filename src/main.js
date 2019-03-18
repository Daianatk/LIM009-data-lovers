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

function filter(){
    let indicatorSelected = document.getElementById('List').value;
    const writeTitle = document.getElementById("demo");
    writeTitle.innerHTML = "You selected: " + indicatorSelected;
};

/*const filterPais=()=>{
    let countrySelected=document.getElementsByName("pais.select").value;
    console.log(countrySelected);
}
const dtaShow = document.getElementById('filtrarX');
dtaShow.addEventListener("click", datosInsection);*/
function datosInsection(){
   let indicatorSelected2 = document.getElementById('List').value;
    const showSection = document.getElementById("dta_ages");
    let showData = Funciones.arrayOfdata("PER", indicatorSelected2);
    let arrayData = Object.keys(showData);
    let mostrar1="";


    for(let i = 0; i<arrayData.length; i++){
        let template = 
        `<h5> ${arrayData[i]} : ${showData[arrayData[i]]}</h5><br>`
        mostrar1+=template;
    }
    showSection.innerHTML = mostrar1;
    //mostrar.push(mostrar1);
   // showSection.innerHTML = mostrar1;
    //showValue.innerHTML = mostrar;
    /*return showData;*/
    console.log(typeof mostrar1);
};

const clearForm= document.getElementById('borrar');
clearForm.addEventListener("click", limpiarFormulario);

function limpiarFormulario() {
    document.getElementById("form1").reset();
}
