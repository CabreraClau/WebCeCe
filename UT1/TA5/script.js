let addListButton = document.getElementById("addListButton");

addListButton.addEventListener("click", function() {
  

  let newList = document.createElement("div");
  newList.className = "Tarea";
  let modalId = "myModal" + Math.floor(Math.random() * 1000); // Generar un ID único para el modal

  let ListContent = `
  <label for="Tarea">Tarea:</label>
  <textarea id="tarea" name="tarea" rows="1" cols="10"></textarea>
          <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <form id="editarFormulario">
                <label for="nuevaDescripcion">Descripción:</label>
                <input type="text" id="nuevaDescripcion" name="nuevaDescripcion">
                
                <label for="nuevoAsignado">Asignado a:</label>
                <input type="text" id="nuevoAsignado" name="nuevoAsignado">
                
                <label for="nuevaFechaInicio">Fecha de inicio:</label>
                <input type="text" id="nuevaFechaInicio" name="nuevaFechaInicio">
                
                <label for="nuevaFechaFin">Fecha de fin:</label>
                <input type="text" id="nuevaFechaFin" name="nuevaFechaFin">

                <label for="estadoTarea">Estado de la tarea:</label>
                <input type="text" id="estadoTarea" name="estadoTarea">

                <label for="prioridad">prioridad:</label>
                <input type="text" id="prioridad" name="prioridad">
                
                <button type="submit">Guardar cambios</button>
              </form>
            </div>
          </div>
          <button class="myBtn openModalButton" data-modal-id="myModal">Open Modal</button>
          <button id="eliminarTareaButton" class="eliminarTareaButton">Eliminar tarea</button>
          

`;
  newList.innerHTML = ListContent;  

  let tarjetaDiv = document.querySelector(".tarea");
  tarjetaDiv.appendChild(newList);
  

});


let addListButton2 = document.getElementById("addListButton2");

addListButton2.addEventListener("click", function() {

  let newList = document.createElement("div");
  newList.className = "Tarea2";
  let modalId = "myModal" + Math.floor(Math.random() * 1000); // Generar un ID único para el modal

  let ListContent = `
  <label for="Tarea">Tarea:</label>
  <textarea id="tarea" name="tarea" rows="1" cols="10"></textarea>
          <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <form id="editarFormulario2">
                <label for="nuevaDescripcion">Descripción:</label>
                <input type="text" id="nuevaDescripcion" name="nuevaDescripcion">
                
                <label for="nuevoAsignado">Asignado a:</label>
                <input type="text" id="nuevoAsignado" name="nuevoAsignado">
                
                <label for="nuevaFechaInicio">Fecha de inicio:</label>
                <input type="text" id="nuevaFechaInicio" name="nuevaFechaInicio">
                
                <label for="nuevaFechaFin">Fecha de fin:</label>
                <input type="text" id="nuevaFechaFin" name="nuevaFechaFin">

                <label for="estadoTarea">Estado de la tarea:</label>
                <input type="text" id="estadoTarea" name="estadoTarea">

                <label for="prioridad">prioridad:</label>
                <input type="text" id="prioridad" name="prioridad">
                
                <button type="submit">Guardar cambios</button>
              </form>
            </div>
          </div>
          <button class="myBtn openModalButton" data-modal-id="myModal2">Open Modal</button>
          <button id="eliminarTareaButton" class="eliminarTareaButton">Eliminar tarea</button>

          `;
  newList.innerHTML = ListContent;  

  let tarjetaDiv = document.querySelector(".tarea2");
  tarjetaDiv.appendChild(newList);
  

});

let addListButton3 = document.getElementById("addListButton3");

addListButton3.addEventListener("click", function() {

  let newList = document.createElement("div");
  newList.className = "Tarea3";

  let ListContent = `
  <label for="Tarea">Tarea:</label>
  <textarea id="tarea" name="tarea" rows="1" cols="10"></textarea>
          <div id="myModal3" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <form id="editarFormulario3">
                <label for="nuevaDescripcion">Descripción:</label>
                <input type="text" id="nuevaDescripcion" name="nuevaDescripcion">
                
                <label for="nuevoAsignado">Asignado a:</label>
                <input type="text" id="nuevoAsignado" name="nuevoAsignado">
                
                <label for="nuevaFechaInicio">Fecha de inicio:</label>
                <input type="text" id="nuevaFechaInicio" name="nuevaFechaInicio">
                
                <label for="nuevaFechaFin">Fecha de fin:</label>
                <input type="text" id="nuevaFechaFin" name="nuevaFechaFin">

                <label for="estadoTarea">Estado de la tarea:</label>
                <input type="text" id="estadoTarea" name="estadoTarea">

                <label for="prioridad">prioridad:</label>
                <input type="text" id="prioridad" name="prioridad">
                
                <button type="submit">Guardar cambios</button>
              </form>
            </div>
          </div>
          <button class="myBtn openModalButton" data-modal-id="myModal3">Open Modal</button>
          <button id="eliminarTareaButton" class="eliminarTareaButton">Eliminar tarea</button>

`;
  newList.innerHTML = ListContent;  

  let tarjetaDiv = document.querySelector(".tarea3");
  tarjetaDiv.appendChild(newList);
  

});

document.getElementById("botonEditar").addEventListener("click", function() {
  var textoTarjeta = document.getElementById("textoTarjeta");
  var nuevoNombre = prompt("Ingrese el nuevo nombre para la tarjeta:", textoTarjeta.innerText);
  if (nuevoNombre !== null) {
      textoTarjeta.innerText = nuevoNombre;
  }
});


document.addEventListener("click", function(event) {
  if (event.target.classList.contains("eliminarTareaButton")) {
    event.target.parentElement.remove();
  }
});



document.addEventListener("click", function(event) {
  if (event.target.classList.contains("openModalButton")) {
    var modalId = event.target.dataset.modalId;
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
});

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("eliminarTareaButton")) {
    event.target.parentElement.remove();
  }
});

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("botonEditar")) {
    var textoTarjeta = event.target.closest(".tarea").querySelector(".textoTarjeta");
    var nuevoNombre = prompt("Ingrese el nuevo nombre para la tarjeta:", textoTarjeta.innerText);
    if (nuevoNombre !== null) {
        textoTarjeta.innerText = nuevoNombre;
    }
  }
});

// Get all modals
var modals = document.querySelectorAll(".modal");

// Get all close buttons
var closeButtons = document.querySelectorAll(".close");

// Add event listener to each close button to hide the corresponding modal
closeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var modal = this.closest(".modal");
    modal.style.display = "none";
  });
});

document.querySelector('.principal').addEventListener('click', function(event) {
  // Verificamos si el elemento clickeado es un botón "Open Modal"
  if (event.target.classList.contains('myBtn')) {
    // Obtenemos el ID del modal asociado al botón clickeado
    var modalId = event.target.dataset.modalId;
    // Mostramos el modal correspondiente
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
  }
});

async function enviarTareaAlServidor(tarea) {
  try {
    const response = await fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tarea)
    });

    if (!response.ok) {
      throw new Error('Error al enviar la tarea al servidor');
    }

    const data = await response.json();
    console.log('Tarea enviada exitosamente:', data);
  } catch (error) {
    console.error('Error al enviar la tarea al servidor:', error.message);
  }
}

  


// Llamar a la función para crear una nueva tarea cuando sea necesario, por ejemplo, en respuesta a un evento de clic en un botón





document.getElementById('editarFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); 
  

  const descripcion = document.getElementById('nuevaDescripcion').value;
  const asignadoA = document.getElementById('nuevoAsignado').value;
  const fechaInicio = document.getElementById('nuevaFechaInicio').value;
  const fechaFin = document.getElementById('nuevaFechaFin').value;

  const tarea = {
    descripcion: descripcion,
    asignadoA: asignadoA,
    fechaInicio: fechaInicio,
    fechaFin: fechaFin
  };

  enviarTareaAlServidor(tarea);
});

document.getElementById('editarFormulario2').addEventListener('submit', function(event) {
  event.preventDefault(); 
  

  const descripcion = document.getElementById('nuevaDescripcion').value;
  const asignadoA = document.getElementById('nuevoAsignado').value;
  const fechaInicio = document.getElementById('nuevaFechaInicio').value;
  const fechaFin = document.getElementById('nuevaFechaFin').value;

  const tarea = {
    descripcion: descripcion,
    asignadoA: asignadoA,
    fechaInicio: fechaInicio,
    fechaFin: fechaFin
  };

  enviarTareaAlServidor(tarea);
});

document.getElementById('editarFormulario3').addEventListener('submit', function(event) {
  event.preventDefault(); 
  

  const descripcion = document.getElementById('nuevaDescripcion').value;
  const asignadoA = document.getElementById('nuevoAsignado').value;
  const fechaInicio = document.getElementById('nuevaFechaInicio').value;
  const fechaFin = document.getElementById('nuevaFechaFin').value;

  const tarea = {
    descripcion: descripcion,
    asignadoA: asignadoA,
    fechaInicio: fechaInicio,
    fechaFin: fechaFin
  };

  enviarTareaAlServidor(tarea);
});

















