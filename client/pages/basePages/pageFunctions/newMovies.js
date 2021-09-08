class NewMovies extends BasePage{
    constructor(container) {
        super(container);
    }

    render() {
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

        const genreSelect = super.getSelect(['Action', 'Comedy']);
        const submitBtn = this.submitBtn;

        cardForm.action = '/todo';
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

        submitBtn.addEventListener('click', ()=>{
            const moviePresentation = new MoviePresentation(this.container);
            moviePresentation.render();
        })

        btnDiv.appendChild(submitBtn);

        return btnDiv;
    }
}
