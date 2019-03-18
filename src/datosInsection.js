function datosInsection() {
    let indicatorSelected2 = document.getElementById('List').value;
    const showSection = document.getElementById("dta_ages");
    let showData = Funciones.arrayOfdata(paisSelected(), indicatorSelected2);
    showSection.innerHTML = showData;
}
