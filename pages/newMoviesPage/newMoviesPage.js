class NewMoviesPage {
    constructor(container) {
        this.container = container;
    }

    render(){
        const pageContainer = document.createElement('div');
        pageContainer.className = 'd-flex justify-content-center h-100'
        const pageDiv = document.createElement('div');
        pageDiv.className = 'card';
        pageContainer.appendChild(pageDiv);

        const headerDiv = this.getHeaderDiv();
        const formDiv = this.getFormDiv();

        pageDiv.appendChild(headerDiv);
        pageDiv.appendChild(formDiv);

        this.container.appendChild(pageContainer);

    }


    getHeaderDiv(){
        const headerDiv = document.createElement('div');
        headerDiv.className = 'card-header';

        const headerText = document.createElement('h3');
        headerText.textContent = 'Pick a Genre';
        headerDiv.appendChild(headerText);
        return headerDiv;
    }

    getFormDiv() {
        const formDiv = document.createElement('div');
        formDiv.className = 'card-body'

        const form = document.createElement('form');

        const genreSelect = this.getSelect(['Action', 'Comedy']);


        form.appendChild(genreSelect);

        formDiv.appendChild(form);

        return formDiv;
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