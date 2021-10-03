class MoviePresentation {
    constructor(container, data) {
        this.container = container;
        this.data = data;
    }

    render(){
        const movieList =[];
        console.log(this.data)
        this.data.forEach((movie)=>{
            movieList.push(new MovieCard(this.container, '', movie.title, movie.year + ', ' +movie.director, movie.genre, movie.description))
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

        const orderBtn = this.orderBtn;
        orderBtn.addEventListener('click', ()=>{
            const hall = new Hall(this.container, 7, 7);
            hall.render();
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
}