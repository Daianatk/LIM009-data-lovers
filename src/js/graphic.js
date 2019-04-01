
const toGraph = (id) => {
    const ctx = document.getElementById(id);
    new Chart(ctx, {
        type: "line",
        data: {
            labels: DATABANK.intervalYears("Age-1", "Age-2", DATABANK.filterData(DATABANK.paisSelected("countrySelect"), document.getElementById("List").value, WORLDBANK,"data")),
            datasets: [{
                label: document.getElementById("List").value,
                data: DATABANK.arrValues(DATABANK.filterData(DATABANK.paisSelected("countrySelect"), document.getElementById("List").value, WORLDBANK,"data"), DATABANK.intervalYears("Age-1", "Age-2", DATABANK.filterData(DATABANK.paisSelected("countrySelect"), document.getElementById("List").value, WORLDBANK,"data"))),
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