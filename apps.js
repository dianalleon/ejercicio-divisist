//Dom
let materias = [];

let info = document.querySelector("#info");
info.style.padding = "30px";

let datos = document.querySelector("#table");
datos.style.display = "none";


var formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', function () {
  
    const materia = {
        nombre: document.getElementById('nombre').value,
        pp: document.querySelector("#pp").value,
        sp: document.querySelector("#sp").value,
        tp: document.querySelector("#tp").value,
        ex: document.querySelector("#ex").value
    }

    
    materias.push(materia);
    definitiva();
    let result = `
    <thead class="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Primer Previo</th>
              <th scope="col">Segundo Previo</th>
              <th scope="col">Tercer Previo</th>
              <th scope="col">Examen Final</th>
              <th scope="col">Definitiva</th>
            </tr>
    </thead>
    `

    materias.forEach((item) => {
        result += `
        <tr>
            <td id="1">${item.nombre}</td>
            <td id="2">${item.pp}</td>
            <td id="3">${item.sp}</td>
            <td id="4">${item.tp}</td>
            <td id="5">${item.ex}</td>
            <td id="6">${item.def}</td>
      </tr>`
    })

    let tab = document.querySelector("#tab");
    tab.innerHTML = result;
});

datos.style.display = "block";



function definitiva() {
    let result2 = materias.map((item) => {
        item.def = ((item.pp + item.sp + item.tp) / 3 * 0.7 + (item.ex * 0.3)).toFixed(2);
        return materias;
    });
    return result2;
}


