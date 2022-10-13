let numbers = prompt(`Nechta film korgansiz`),
    movies,
    moviesNumber;
if (!isNaN(numbers) && typeof +numbers == "number" && numbers !== 0) {
    let infoMovies = {
        count: numbers,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    }
    for (let i = 0; i < numbers; i++) {
        movies = prompt(`kinolani nomi?`);
        moviesNumber = prompt(`baxolang?`);
        infoMovies.movies[movies] = moviesNumber;
    }
    console.log(infoMovies)
}