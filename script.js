const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '125a1d1741msh07b331c5ca1994dp1675cejsnd66baa5d2be3',
        'X-RapidAPI-Host': 'search-movies-and-tv-shows.p.rapidapi.com'
    }
};

let movieList = document.getElementById('movie-list');

fetch('https://search-movies-and-tv-shows.p.rapidapi.com/top250', options)
    .then(response => response.json())
    .then(response => {
        let movies = response.movies;
        let cardElement = '';
        console.log(movies[0]);
        movies.filter(movie => movie.rank < 13).map(movie => {
            cardElement = `
            <div class="col-2 mb-3">
                <div class="card" style="height: 35rem;">
                <img src="images/1.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${movie.rank}</h5>
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                    <p class="card-text">Rating: ${movie.Rating}</p>
                    <a href="#" class="btn btn-light btn-sm">Add to Wishlist</a>
                    </div>
                </div>
            </div>`
          movieList.innerHTML += cardElement;
        })

    })
    .catch(err => console.error(err));