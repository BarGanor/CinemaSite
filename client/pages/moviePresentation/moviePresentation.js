class MoviePresentation {
    constructor(container) {
        this.container = container;
    }

    render(){
        this.container.innerHTML = '';

        const pageContainer = document.createElement('div');
        pageContainer.className = 'movie-presentation';

        const movieList = [new MovieCard(this.container, "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg", 'Bright', '2017, David Ayer', 'Action, Crime, Fantasy', 'description'),
                         new MovieCard(this.container, "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg", 'Tomb Raider', '2018, Roar Uthaug', 'Action, Fantasy', 'description')]
        movieList.forEach((movie)=>{
            movie.setMovieCard(this.container);
        })
    }
}

class MovieCard{
    constructor(container, srcLink, movieName, yearAndDirector,  genres, description) {
        this.container = container;
        this.srcLink = srcLink;
        this.movieName = movieName;
        this.yearAndDirector = yearAndDirector;
        this.genres = genres;
        this.description = description;
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

        movieCard.appendChild(infoSection);
        infoSection.appendChild(movieHeader);
        infoSection.appendChild(movieDesc);

        movieHeader.appendChild(movieImg);
        movieHeader.appendChild(movieName);
        movieHeader.appendChild(yearAndDirector);
        movieHeader.appendChild(genres);

        movieDesc.appendChild(movieDescription);

        this.container.appendChild(movieCard);
    }
}