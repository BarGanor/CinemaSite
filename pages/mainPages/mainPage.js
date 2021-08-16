class MainPage {
    constructor(container, pageType) {
        this.pageType = pageType;
        this.container = container;
    }

    render() {
        const card = this.getCard();
        this.container.appendChild(card);

    }

    getCard() {
        const cardContainerDiv = document.createElement('div');
        cardContainerDiv.className = 'd-flex justify-content-center h-100'

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardContainerDiv.appendChild(cardDiv);

        const cardHeaderDiv = this.getHeaderDiv();


        const cardHeader = this.getHeaderDiv();
        cardHeaderDiv.appendChild(cardHeader);

        const cardBodyDiv = this.getCardBody();
        cardDiv.appendChild(cardBodyDiv);

        return cardContainerDiv;

    }

    getHeaderDiv() {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'card-header';

        const headerText = document.createElement('h3');
        if (this.pageType === 'login') {
            headerText.textContent = 'Sign In'
        } else if (this.pageType === 'new-movies') {
            headerText.textContent = 'Pick a Genre';
        } else if (this.pageType === 'home-page') {
            setHomeHeader(headerText);
        }

        headerDiv.appendChild(headerText);
        return headerDiv;
    }

    getCardBody() {
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        const cardForm = document.createElement('form');
        if (this.pageType === 'login') {
            setLoginForm(cardForm, this.pageType);

        } else if (this.pageType === 'new-movies') {
            this.setNewMoviesFormDiv(cardForm);

        } else if (this.pageType === 'home-page') {
            setHomeForm(cardForm, this.pageType);

        }

        cardBodyDiv.appendChild(cardForm)
        return cardBodyDiv;
    }

    setNewMoviesFormDiv(cardForm) {
        const genreSelect = getSelect(['Action', 'Comedy']);
        const submitBtn = getSubmitBtn(this.pageType);
        cardForm.appendChild(genreSelect);
        cardForm.appendChild(submitBtn);
        submitBtn.addEventListener('click', ()=>{
            const moviePresentation = new MoviePresentation(this.container);
            moviePresentation.render();
        })
    }



}