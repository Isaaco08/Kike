function calcularEdad() {
    var hoy = new Date();
    var cumpleanos = document.getElementById('fecha').valueAsDate;
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
}

function mostrarEdad(){
    var edad = calcularEdad();
    document.getElementById("edadInput").value = edad;
}