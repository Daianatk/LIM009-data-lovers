selectIndicators = document.getElementById("lista");
let arreglo = Funciones.arrayOfIndicators("PER");
for (let x = 0; x < arreglo.length; x++) {
    option=document.createElement("option");
    option.value=arreglo[x];
    option.text=arreglo[x];
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

/*const mostrar=document.getElementById("datos");
let abc=Funciones.arrayOfIndicators("PER");
mostrar.innerHTML=abc;

const showSection=document.getElementById("dta_ages");
let showData=Funciones.arrayOfdata("MEX","Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)");
showSection.innerHTML=showData;*/
