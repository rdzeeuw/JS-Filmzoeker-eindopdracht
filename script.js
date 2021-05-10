
function addMoviesToDom(movies) {
    
    movies.forEach(function (movie) {
        //create elements
        const li = document.createElement('li');
        const a = document.createElement("a");
        const img = document.createElement("img");
        const ul = document.getElementById("movieList"); 

        //fill elements
        img.setAttribute("src", movie.Poster);
        img.setAttribute("alt", movie.Title);
        a.setAttribute("href", "http://imdb.com/movies/" + movie.imdbID) 

        //append element to parent
        a.appendChild(img); 
        li.appendChild(a);
        ul.appendChild(li); 
    });

 }

addMoviesToDom(movies);

//function to filter movies on title
const filterMovies = wordInMovieTitle => {
    const filtered = movies.filter(movie => movie.Title.includes(wordInMovieTitle));
    const myNode = document.getElementById("movieList");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
    addMoviesToDom(filtered);
}

//function to filter movies on year
const filterLatestMovies = () => {
    const newestMovies = movies.filter(movie => movie.Year >= "2014");
    const myNode = document.getElementById("movieList");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

    addMoviesToDom(newestMovies);
}


//switch statement - event listener/handler
const radioBtns = document.getElementsByName("film-filter");

radioBtns.forEach(btn => {
    addEventListener('change', handleOnChange)})
     
function handleOnChange(event) {

        const target = event.target;
        
        switch (target.id) {
            case 'all-filter':
                addMoviesToDom(movies);
                break;
            case 'newest-filter':
                filterLatestMovies();
                break;
            case 'avengers-filter':
                filterMovies("Avengers");
                break;
            case 'xmen-filter':
                filterMovies("X-" || "X2");
                break;
            case 'princess-filter':
                filterMovies("Princess");
            break;
            case 'batman-filter':
                filterMovies("Batman");
                break;
        }
    } 

handleOnChange();

