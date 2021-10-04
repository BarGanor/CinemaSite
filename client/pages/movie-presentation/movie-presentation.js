class MoviePresentation {
    constructor(container, data) {
        this.container = container;
        this.data = data;
    }

    render(){
        const movieList =[];
        this.data.forEach((movie)=>{
            movieList.push(new MovieCard(this.container, movie.movie_id, movie.img_url, movie.title, movie.year + ', ' +movie.director, movie.genre, movie.description, movie.dt_start, movie.city, movie.cinema_name))
        })
        this.container.innerHTML = '';

        const pageContainer = document.createElement('div');
        pageContainer.className = 'movie-presentation';

        if (movieList.length > 0){
            movieList.forEach((movie)=>{
                movie.setMovieCard(this.container);
            })
        }
        else{
            const no_movies  = document.createElement('h1');
            no_movies.textContent = 'No Movies Found';

            pageContainer.appendChild(no_movies);
            this.container.appendChild(pageContainer);
        }
    }
}

class MovieCard{
    constructor(container,movie_id, srcLink, movieName, yearAndDirector,  genres, description, dt_start, city, cinema_name) {
        this.container = container;
        this.movieId = movie_id;
        this.srcLink = srcLink;
        this.movieName = movieName;
        this.yearAndDirector = yearAndDirector;
        this.genres = genres;
        this.description = description;
        this.dt_start = dt_start;
        this.city = city;
        this.cinema_name = cinema_name;
    }

    setMovieCard(){
        const movieCard = document.createElement('div');
        movieCard.className = 'movie_card';
        movieCard.id = 'bright';

        const infoSection = document.createElement('div');
        infoSection.className = 'info_section';

        const movieHeader = document.createElement('div');
        movieHeader.className = 'movie_header';

        const movieImg = document.createElement('img');
        movieImg.src = this.srcLink;

        const movieName = document.createElement('h1');
        movieName.textContent = this.movieName;

        const yearAndDirector = document.createElement('h4');
        yearAndDirector.textContent = this.yearAndDirector;

        const genres = document.createElement('p');
        genres.className = 'type';
        genres.textContent = this.genres;

        const movieDesc = document.createElement('div');
        movieDesc.className = 'movie_desc';

        const movieDescription = document.createElement('p');
        movieDescription.className = 'text';
        movieDescription.textContent = this.description;

        const orderBtn = this.orderBtn;
        orderBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            this.postData('/showHall', {'movie_id':this.movieId, 'dt_start':this.dt_start, 'city':this.city, 'cinema_name':this.cinema_name}).then(this.successCallback);
        })

        movieCard.appendChild(infoSection);
        movieCard.appendChild(orderBtn);
        infoSection.appendChild(movieHeader);
        infoSection.appendChild(movieDesc);
        movieHeader.appendChild(movieImg);
        movieHeader.appendChild(movieName);
        movieHeader.appendChild(yearAndDirector);
        movieHeader.appendChild(genres);


        movieDesc.appendChild(movieDescription);

        this.container.appendChild(movieCard);
    }

    get orderBtn(){
        const btnDiv = document.createElement('div');
        btnDiv.className = 'button-holder-central';
        const submitBtn = document.createElement('input');

        btnDiv.className = 'button-holder-central';
        submitBtn.type = 'submit';
        submitBtn.className = 'btn btn-primary';
        submitBtn.textContent = 'Order';

        btnDiv.appendChild(submitBtn);

        return btnDiv;
    }

    async postData(url, data) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        return response.json(); // parses JSON response into native JavaScript objects
    }
    successCallback(result) {
        const hall= new Hall((result))
        hall.render();

    }

}