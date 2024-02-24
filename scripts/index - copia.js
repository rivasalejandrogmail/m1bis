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
/*
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

*/
//convertir los ojetos a cards actividad 2

function displayCards(Activity) {
  let activities = repository.getAllActivities();
  allActivities.innerHTML = "";

  activities.map((activity) => {
    const { id, title, description, imgUrl } = activity;//2 destructuring
    //Elementos
    const h3 = document.createElement('h3')
    h3.textContent = title;
    const p = document.createElemente('p')
    p.textContent = description;
    const img = documente.createElement("img");
    img.src = imgUrl;
    
    //Div o contenedor

    const card = document.createElement('div');
    
    card.className = 'card'
    card.id = id

    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(img);

    return card;

  });
}
//ACTIVIDAD 03

function buildActivities(){
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML= "";//OJO PROBAR

  const activities = repository.getAllActivities();

  const HTMLActivities = allActivities.map((activity) => 
  buildActivities(activity));
  
  HTMLActivities.forEach((activityHTML) =>
  cardsContainer.appendChild(activityHTML)
);
  
}





//FIN DE ACT 3

//ACT 4

 function handleClickSubmit(){
  //extraigo elementos del dom
  const title = document.getElementById("inputName");
  const description = document.getElementById("inputDescription");
  const imgUrl = document.getElementById("inputimgUrl");
  //extraigo elementos del input
  const titleValue = title.value;
  const descriptionValue = description.value;
  const imgUrlValue = imgUrl.value;
  //validation
  if(!titleValue.trim() || !descriptionValue.trim() || !imgUrlValue()){
    alert("Llena los espacios");
    return;
  }

//creando instancia
repository.createActivity(titleValue, descriptionValue, imgUrlValue);


buildActivities();
//vaciar Inputs

title.value="";
descriptionValue="";
imgUrlValue="";

const buttonSubmit = document.getElementById("submitButton");

buttonSubmit.addEventListener("click", handleClickSubmit)



 }



 // Función para eliminar la card
function deleteCard(id) {
  repository.deleteActivity(id);
  displayCards();  
  
}


