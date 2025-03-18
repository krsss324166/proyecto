function agregarCalificacion() {
    let nombre = document.getElementById("nombre").value;
    let materia = document.getElementById("materia").value;
    let calificacion = document.getElementById("calificacion").value;

    if (nombre.trim() !== "" && materia.trim() !== "" && calificacion.trim() !== "") {
        let tabla = document.getElementById("miTabla"); 
        let nuevaFila = tabla.insertRow(); 

        let celda1 = nuevaFila.insertCell(0);
        let celda2 = nuevaFila.insertCell(1);
        let celda3 = nuevaFila.insertCell(2);

        celda1.textContent = nombre;
        celda2.textContent = materia;
        celda3.textContent = calificacion;

        document.getElementById("calificacionForm").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

