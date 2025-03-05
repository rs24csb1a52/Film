let movieList = [];
let totalMovies = 0;

const displayMovies = () => {
    const movieListElement = document.getElementById("movielist");
    movieListElement.innerHTML = ""; 

    movieList.forEach((movie, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = movie;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeMovie(index));

        listItem.appendChild(removeButton);
        movieListElement.appendChild(listItem);
    });

    document.getElementById("totalMovies").textContent = movieList.length;
};

const addMovie = () => {
    const input = document.getElementById("addInp");
    const movieName = input.value.trim();

    if (movieName === "") {
        alert("Please enter a valid movie name.");
        return;
    }

    movieList.push(movieName); 
    input.value = ""; 
    displayMovies(); 
};


const removeMovie = (index) => {
    movieList.splice(index, 1); 
    displayMovies(); 
};

const resetList = () => {
    movieList = []; 
    displayMovies(); 
};

document.getElementById("addBtn").addEventListener("click", (e) => {
    e.preventDefault(); 
    addMovie();
});

document.getElementById("reset").addEventListener("click", (e) => {
    e.preventDefault(); 
    resetList();
});

displayMovies();
