
const toGraph = () => {
    const ctx = document.getElementById("line-chart");

    let chartGraph = new Chart(ctx, {
        type: "line",
        data: {
            labels: bank.intervalYears("Age-1","Age-2"),
            datasets: [{
                label: document.getElementById("List").value,
                data: bank.arrValuesSelect(bank.intervalYears("Age-1","Age-2"),"countrySelect", "List"),
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
document.getElementById("SeeGraphic").addEventListener("click", toGraph)