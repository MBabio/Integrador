console.log("hola")

function calcularTotal() {
    let cantidad=document.getElementById("cantidad").value
    // ver si para la consola tengo que poner comillas para mostrar el valor
    console.log("Dentro de la función")
    console.log(cantidad)
    let eleccion=document.getElementById("categoria").value
    let total=0
    console.log(eleccion)
    switch (eleccion) {
        case '1':
            console.log("Estudiante")
            total=200*0.2*cantidad
            break;
        case '2':
            console.log("Trainee")
            total=200*0.5*cantidad
            break;
        case '3':
            total=200*0.85*cantidad
            console.log("Junior")
            break;
    }

    document.getElementById("calculo").innerHTML=total
}

function ocultar() {
    var x = document.getElementById("nuevoDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }    
}