class MainPage {
    constructor(container) {
        this.container = container;
    }

    render() {
        const card = this.card;
        this.container.appendChild(card);
    }

    onSubmit(pageType, searchData){
      if (pageType === 'login'){

          const user = new User(searchData);
          const newNavbar = new Navbar()
      }
    }


    get card() {
        const cardContainerDiv = document.createElement('div');
        const cardDiv = document.createElement('div');

        cardContainerDiv.className = 'd-flex justify-content-center h-100'
        cardDiv.className = 'card';

        cardContainerDiv.appendChild(cardDiv);

        return cardContainerDiv;

    }

    get cardBody() {
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';
        return cardBodyDiv;
    }

    getSelect(options) {
        const selectDiv = document.createElement('div');
        selectDiv.className = 'input-group form-group';

        const selectObj = document.createElement('select');
        selectObj.className = 'form-control';
        selectDiv.appendChild(selectObj);

        options.forEach((option) => {
            let optionObj = document.createElement('option');
            optionObj.text = option;
            selectObj.appendChild(optionObj);
        })
        return selectDiv;
    }

}