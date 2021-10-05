class NewMovies extends BasePage{
    constructor(container) {
        super(container);
    }

    render() {
        window.location.hash = '#new-movies';
        const card = this.card;
        this.container.appendChild(card);
    }

    get card(){
        const card = super.card;

        card.firstChild.appendChild(this.headerDiv);
        card.firstChild.appendChild(this.cardBody);

        return card;
    }

    get headerDiv() {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'card-header';

        const headerText = document.createElement('h3');
        headerText.textContent = 'Pick A City';

        headerDiv.appendChild(headerText);
        return headerDiv;
    }

    get cardBody(){
        const cardBody = super.cardBody;
        const cardForm = document.createElement('form');

        const genreSelect = super.getSelect(['Romance', 'Biography', ' Crime', ' Drama', 'Drama', ' History', 'Adventure', ' Fantasy', ' Romance', 'History', ' War', 'Crime', ' Mystery', ' Horror', 'Western', 'Fantasy', 'Comedy', 'Horror', 'Family', ' Adventure', ' Family', 'Action', ' Sci-Fi', ' Comedy', ' Western', 'Mystery', ' Thriller', ' Sport', 'Sci-Fi', 'Animation', ' Musical', ' Action', ' Music', 'Thriller', ' Film-Noir', 'Musical', 'Music', ' Biography', 'War', 'Film-Noir', ' Animation', 'Sport', 'Adult', 'Documentary', ' Reality-TV', ' News']);
        genreSelect.firstChild.name = 'genre';

        const submitBtn = this.submitBtn;


        cardForm.addEventListener('submit', (e)=>{
            e.preventDefault()
            this.postData('/newMovies/'+genreSelect.firstChild.value).then(this.successCallback);
        });


        cardForm.appendChild(genreSelect);
        cardForm.appendChild(submitBtn);
        cardBody.appendChild(cardForm);

        return cardBody;
    }

    get submitBtn(){
        const btnDiv = document.createElement('div');
        const submitBtn = document.createElement('input');

        btnDiv.className = 'button-holder-central';
        submitBtn.type = 'submit';
        submitBtn.className = 'btn btn-primary';
        submitBtn.textContent = 'Submit'
        submitBtn.preventDefault;


        btnDiv.appendChild(submitBtn);

        return btnDiv;
    }

    successCallback(result) {
        const moviePresentation = new MoviePresentation(document.getElementById('container'), result, true)
        moviePresentation.render();
    }


    // Example POST method implementation:
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

}
