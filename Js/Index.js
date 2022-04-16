
let elementoInput = document.querySelector("#elemento");
let boton = document.querySelector("#btnSubmit");
let lista = document.querySelector("#lista");
let btnDlt = document.querySelector("#btnDelete");
let titulo = document.querySelector(".tituloLista");
let inputTitulo = document.querySelector("#input__titulo")
let btnTitulo = document.querySelector("#btnTitulo")

btnTitulo.addEventListener("click", agregarTitulo)
boton.addEventListener("click", agregar)
btnDlt.addEventListener("click", eliminar)

let tituloLista;
let tituloListaEnLs = localStorage.getItem("#tituloLista")

 
Swal.fire({
  title: 'Bienvenido/a al creador de tareas! <br><br> Paso 1: Escriba el titulo que desea ponerle a su lista. <br><br>Paso 2: Escriba las tareas que debe realizar. <br><br>Paso 3:Elimine las tareas una vez realizadas',
  width: 600,
  padding: '3em',
  color: '#716add',
  background: '#fff url(/images/trees.png)',
  backdrop: `
  rgba(0,0,123,0.4)
  `
})

if (tituloListaEnLs){
  tituloLista = tituloListaEnLs
}

function agregarTitulo(){
  if (inputTitulo.value == ""){
    Toastify({
      text: "Ingrese un Titulo", 
      duration: 1500
      }).showToast();
  } else {
    let armadoTitulo = document.createElement("h1")
 const tituloLista = inputTitulo.value
  armadoTitulo.innerText = tituloLista
  localStorage.setItem("tituloLista", tituloLista)
  titulo.append(tituloLista)
  Toastify({
    text: "Creado", 
    duration: 1500
    }).showToast();
  }  
}
function agregar(){
  if (elementoInput.value == ""){
    Toastify({
      text: "Ingrese un elemento", 
      duration: 1500
      }).showToast();
  } else {
      let tarea = document.createElement("li")
      const tareaAll = elementoInput.value
      tarea.innerText = tareaAll
      lista.append(tarea)
      localStorage.setItem("tareas", JSON.stringify(tareaAll))
      Toastify({
        text: "Agregado", 
        duration: 1500
        }).showToast();
    }
  }

function mostrar() {
  let listaGuardada = JSON.parse(localStorage.getItem("tareas"))
  if (listaGuardada !== null) {
    let tarea = document.createElement("li")
    tarea.innerText = listaGuardada
    lista.append(tarea)
  }
}
function mostrarTitulo(){
  let tituloguardado = localStorage.getItem("tituloLista")
  if (tituloguardado !== null) {
    let titular = document.createElement ("h1")
    titular.innerText = tituloguardado
    titulo.append(titular)
  }
}

function eliminar() {
  localStorage.removeItem("tareas")
  localStorage.removeItem("tituloLista")
  lista.innerHTML = " "
Toastify({
    text: "Eliminado",    
    duration: 1500    
    }).showToast();
}
mostrarTitulo ()
mostrar()

fetch('js/data.json')
.then((response) => response.json())
.then((json) => {
  for (let i = 0; i < 10; i++) {
    const element = json[i];
    const li = document.createElement("div")
    li.innerHTML = `<div class="instrucciones">
    <h3 style= "text-decoration: underline">Paso ${json[i].paso}:</h3>
    <h5 style= "margin: 0px">${json[i].tarea}</h5>
    </div>`;
    document.body.append(li)
  }
  console.log(json)
})
.catch((error) =>{
  console.log(error)
})