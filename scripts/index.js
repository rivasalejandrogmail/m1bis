/*
Implementar la clase Activity, la cual representará a las actividades que se crearán. 
Debe tener las propiedades: Id. Title. Description. imgUrl.
*/

class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}


/*
Implementar la clase Repository, la cual se encargará de crear, almacenar y manipular las 
actividades. La misma tendrá:

Propiedad activities => Un arreglo para almacenar las actividades.
*/

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0; // Inicializar el contador de ID
    }

    /*
    Método createActivity => Debe instanciar una actividad con los datos correspondientes y 
    almacenarla en su arreglo. El ID se autoincrementará.
    */

    createActivity(title, description, imgUrl) {
        this.id++;
        const newActivity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(newActivity);
    }

    /*
    Método getAllActivities => Debe retornar un arreglo con todas las actividades.
    */

    getAllActivities() {
        return this.activities;
    }

    /*
    EXTRA CREDIT. Método deleteActivity => Debe recibir un id y filtrar el arreglo para eliminar 
    la actividad correspondiente.
    */

    deleteActivity(id) {
        this.activities = this.activities.filter((item) => item.id !== id);
    }
    
}

/*
//Ejemplo de uso
const repository = new Repository();

repository.createActivity("Comer", "Hace bien si se realiza todos los días", "https://www.shutterstock.com/image-photo/barbeque-bbq-meat-cooking-on-600nw-2242104169.jpg");
repository.createActivity("Jugar", "Con los hijos es fundamental", "https://st.depositphotos.com/1037987/5069/i/450/depositphotos_50697379-stock-photo-family-playing-soccer-in-park.jpg");

console.log("Actividades antes de la eliminación:");
console.log(repository.getAllActivities());

// Eliminar la primera actividad (índice 0) y obtenerla
const deletedActivity = repository.deleteActivity(0);

console.log("Actividades después de la eliminación:");
console.log(repository.getAllActivities());

console.log("Actividad eliminada:");
console.log(deletedActivity);

console.log(repository.getAllActivities());
*/
///L3///


const repository = new Repository();

// seleccionar el input de titulo

const inputName = document.getElementById("inputName");

// seleccionar el input de descripcion

const inputDescription = document.getElementById("inputDescription");

// seleccionar el input del urlImg

const inputImg = document.getElementById("inputImg");

// seleccionar el boton

const addButton = document.getElementById("addButton");

// seleccionar el contenedor de las tarjetas

const allActivities = document.getElementById("allActivities");

//handler-->
// tomar el valor de los inputs

//validar inputs

// repository.createActivity

const handlerSubmit = () => {
   
    const title = inputName.value;
    const description = inputDescription.value;
    const imgUrl = inputImg.value;

    if (title && description && imgUrl) {
      repository.createActivity(title, description, imgUrl);
      displayCards();
    } else {
      alert("Existen campos vacíos")
    }
    

    inputName.value = "";
    inputDescription.value= "";
    inputImg.value = "";
}

addButton.addEventListener('click', handlerSubmit);


//convertir los ojetos a cards actividad 2

function displayCards(Activity) {
  let activities = repository.getAllActivities();
  allActivities.innerHTML = "";

  activities.map((activity) => {
    const { id, title, description, imgUrl } = activity;//2 destructuring
    const card = document.createElement("div");// 3 elementos para la tarjeta

    card.innerHTML = `
        <div class="activity">
        <img src=${imgUrl} alt="actividad"/>
        <h1>${title}</h1>
        <p>${description}</p>
        <button onclick="deleteCard(${id})" >Borrar</button>
        </div>
        `;
    // appendear todas las tarjetas al contenedor
    allActivities.appendChild(card);
  });
}

 
 // Función para eliminar la card
function deleteCard(id) {
  repository.deleteActivity(id);
  displayCards();  
  
}


