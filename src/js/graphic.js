const arrValues= (objSelect, yearsSelect) => {   //retorna los valores correspondientes al año y el indicador seleccionado por el usuario
    let valores = [];
    for (let i = 0; i < yearsSelect.length; i++) {
      valores.push(objSelect[yearsSelect[i]]);
    }
    return valores;
  };

const toGraph = (id) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
        type: "line",
        data: {
            labels: FunctionsAdd.intervalYears("Age-1", "Age-2", DATABANK.filterData(FunctionsAdd.paisSelected("countrySelect"), document.getElementById("List").value, WORLDBANK,"data")),
            datasets: [{
                label: document.getElementById("List").value,
                data: arrValues(DATABANK.filterData(FunctionsAdd.paisSelected("countrySelect"), document.getElementById("List").value, WORLDBANK,"data"), FunctionsAdd.intervalYears("Age-1", "Age-2", DATABANK.filterData(FunctionsAdd.paisSelected("countrySelect"), document.getElementById("List").value, WORLDBANK,"data"))),
                borderWidth: 1,
                borderColor: 'rgba(77,166,253,0.85)',
                backgroundColor: 'transparent',
            },
            ]
        },
        option: {
            title: {
                display: true,
                fontSize: 20,
                text: "GRÁFICOS LINEALES DE SERIES DE TIEMPO",
            },
            labels: {
                fontStyle: "bold",
            },
        },
    })
};
document.getElementById("SeeGraphic").addEventListener("click", function(){
    document.getElementById("seccion-1").style.display="none";
    document.getElementById("seccion-2").style.display="block";
    document.getElementById("seccion-3").style.display="none";
    return toGraph("line-chart");
});