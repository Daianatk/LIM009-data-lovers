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
const filter=()=>{
    let indicatorSelected =document.getElementById('List').value;
    let writeTitle=document.getElementById("demo")
    writeTitle.innerHTML = "You selected: " + indicatorSelected;
    return indicatorSelected;
    //console.log(indicatorSelected);
};
/*const showSection=document.getElementById("dta_ages");
let showData=Funciones.arrayOfdata("MEX",filter());
showSection.innerHTML=showData;*/
