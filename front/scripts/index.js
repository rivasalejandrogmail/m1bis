console.log(tempData);
//mapear el array para que nos cree tarjetas
//appendear para que nos meta en el contenedor

document.addEventListener("DOMContentLoaded", function () {
    // Array de datos se llama 'tempData'
    // modificar 'movies' según tu estructura de datos
    tempData.forEach(movie => {
        createCard(movie);
    });
});

function createCard(movie) {
    const cardsContainer = document.getElementById("cards-container");

    const card = document.createElement("div");
    card.classList.add("card");

    const titleLink = document.createElement("a");
    titleLink.href = movie.link; // Agrega la propiedad 'link' en tu objeto de datos
    titleLink.target = "_blank"; // Abre el enlace en una nueva pestaña

    const title = document.createElement("h2");
    title.textContent = movie.title;

    titleLink.appendChild(title);

    const year = document.createElement("h3");
    year.textContent = movie.year;

    const director = document.createElement("h3");
    director.textContent = movie.director;

    const duration = document.createElement("h3");
    duration.textContent = movie.duration;

    const genre = document.createElement("h3");
    genre.textContent = movie.genre;

    const rate = document.createElement("h3");
    rate.textContent = movie.rate;

    const poster = document.createElement("img");
    poster.src = movie.poster;
    poster.alt = movie.title;

    card.appendChild(titleLink);
    card.appendChild(year);
    card.appendChild(director);
    card.appendChild(duration);
    card.appendChild(genre);
    card.appendChild(rate);
    card.appendChild(poster);

    cardsContainer.appendChild(card);
}
