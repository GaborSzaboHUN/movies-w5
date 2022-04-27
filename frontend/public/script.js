console.log(movies);

const moviesCardComponent = function (title, year, description) {
    return`
    <div class="movies-card">
        <div class="movie-title">${title}</div>
        <div class="movie-year">${year}</div>
        <div class="movie-description">${description}</div>
    </div>
    `
}

const movieId = `<h1>${movies.id}</h1>`;
movieId.toUpperCase;
console.log(movieId)

const loadEvent = function () {
    const rootElement = document.getElementById("root")
    
    rootElement.insertAdjacentHTML("beforeend", movieId)

    for (const movie of movies.cards) {
        rootElement.insertAdjacentHTML("beforeend", moviesCardComponent(movie.title, movie.sub, movie.text))
    }

}

window.addEventListener("load", loadEvent)