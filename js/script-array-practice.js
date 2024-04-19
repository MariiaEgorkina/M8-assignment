//STEP 1

let favoriteMovies = ["Forrest Gump", "Titanic", "A Beautiful Mind", "Interstellar", "The Truman Show"];
console.log(favoriteMovies[1]);

//STEP 2

let movies = new Array(5);
movies[0] = "Forrest Gump";
movies[1] = "Titanic";
movies[2] = "A Beautiful Mind";
movies[3] = "Interstellar";
movies[4] = "The Truman Show";
console.log(movies[0]);

//STEP 3

let movies = new Array(5);
movies[0] = "Forrest Gump";
movies[1] = "Titanic";
movies[2] = "A Beautiful Mind";
movies[3] = "Interstellar";
movies[4] = "The Truman Show";
movies.splice(2, 0, "Inception");
console.log(movies.length);

//STEP 4

let moviesLiteral = ["Forrest Gump", "Titanic", "A Beautiful Mind", "Interstellar", "The Truman Show"];
delete moviesLiteral[0];
console.log(moviesLiteral);

//STEP 5

let favoriteMovies = ["Forrest Gump", "Titanic", "A Beautiful Mind", "Interstellar", "The Truman Show", "Inception", "The Matrix"];
for (let movie in favoriteMovies) {
    console.log(favoriteMovies[movie]);
}

//STEP 6

let favoriteMovies = ["Forrest Gump", "Titanic", "A Beautiful Mind", "Interstellar", "The Truman Show", "Inception", "The Matrix"];
for (let movie of favoriteMovies) {
    console.log(movie);
}

//STEP 7

let favoriteMovies = ["Forrest Gump", "Titanic", "A Beautiful Mind", "Interstellar", "The Truman Show", "Inception", "The Matrix"];
for (let movie of favoriteMovies.sort()) {
    console.log(movie);
}

//STEP 8

let favoriteMovies = ["Forrest Gump", "Titanic", "A Beautiful Mind", "Interstellar", "The Truman Show", "Inception", "The Matrix"];
let leastFavMovies = ["Poseidon", "Dark Waters", "Airheads"];
    console.log("Movies I like:\n");
        for (let movie of favoriteMovies) {
    console.log(movie);
}
    console.log("\nMovies I regret watching:\n");
        for (let movie of leastFavMovies) {
    console.log(movie);
}

//STEP 9

let favoriteMovies = ["Forrest Gump", "Titanic", "A Beautiful Mind", "Interstellar", "The Truman Show", "Inception", "The Matrix"];
let leastFavMovies = ["Poseidon", "Dark Waters", "Airheads"];
    console.log("Movies I like:\n");
        for (let movie of favoriteMovies) {
    console.log(movie);
}
    console.log("\nMovies I regret watching:\n");
        for (let movie of leastFavMovies) {
    console.log(movie);
}
let mergedMovies = favoriteMovies.concat(leastFavMovies);
console.log(mergedMovies.reverse());

//STEP 10

let favoriteMovies = ["Forrest Gump", "Titanic", "A Beautiful Mind", "Interstellar", "The Truman Show", "Inception", "The Matrix"];
let leastFavMovies = ["Poseidon", "Dark Waters", "Airheads"];
    console.log("Movies I like:\n");
        for (let movie of favoriteMovies) {
    console.log(movie);
}
    console.log("\nMovies I regret watching:\n");
        for (let movie of leastFavMovies) {
    console.log(movie);
}
let mergedMovies = favoriteMovies.concat(leastFavMovies);
console.log(mergedMovies.slice(0, 1)[0]);


//STEP 11

let favoriteMovies = ["Forrest Gump", "Titanic", "A Beautiful Mind", "Interstellar", "The Truman Show", "Inception", "The Matrix"];
let leastFavMovies = ["Poseidon", "Dark Waters", "Airheads"];
    console.log("Movies I like:\n");
        for (let movie of favoriteMovies) {
    console.log(movie);
}
    console.log("\nMovies I regret watching:\n");
        for (let movie of leastFavMovies) {
    console.log(movie);
}
let mergedMovies = favoriteMovies.concat(leastFavMovies);
console.log(mergedMovies[0]);

//STEP 12



//STEP 13

let movies = [["Forrest Gump", 1], ["Titanic", 2], ["A Beautiful Mind", 3], ["Interstellar", 4], ["The Truman Show", 5]];
let movieNames = movies.filter(item => typeof item[0] === 'string').map(item => item[0]);
console.log(movieNames);

//STEP 14

let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
let showEmployee = function(employees) {
    console.log("Employees:\n");
    for (let employee of employees) {
        console.log(employee);
    }
};
showEmployee(employees);

//STEP 15


//STEP 16

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//STEP 17

function getMaxNumber(arr) {
    return Math.max(...arr);
}
console.log(getMaxNumber([3, 7, 2, 9, 1]));