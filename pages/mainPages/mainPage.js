class MainPage {
    constructor(container, pageType) {
        this.pageType = pageType;
        this.container = container;
    }

    render() {
        const card = this.getCard();
        this.container.appendChild(card);

    }

    onSubmit(pageType, searchData){
      if (pageType === 'login'){

          const user = new User(searchData);
          const newNavbar = new Navbar()
      }
    }


    getCard() {
        const cardContainerDiv = document.createElement('div');
        cardContainerDiv.className = 'd-flex justify-content-center h-100'

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardContainerDiv.appendChild(cardDiv);

        const cardHeader = this.getHeaderDiv();
        cardDiv.appendChild(cardHeader);

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
            setNewMoviesFormDiv(cardForm, this.pageType);

        } else if (this.pageType === 'home-page') {
            setHomeForm(cardForm, this.pageType);

        }

        cardBodyDiv.appendChild(cardForm)
        return cardBodyDiv;
    }

}