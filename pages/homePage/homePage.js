
class HomePage {
    constructor(container) {
        this.container = container
    }

    render() {
        const pageContainerDiv = document.createElement('div');
        pageContainerDiv.className = 'd-flex justify-content-center h-100'

        const pageDiv = document.createElement('div');
        pageDiv.className = 'card';
        pageContainerDiv.appendChild(pageDiv);

        const headerDiv = this.getHeaderDiv();
        const formDiv = this.getFormDiv();

        pageDiv.appendChild(headerDiv);
        pageDiv.appendChild(formDiv);


        this.container.appendChild(pageContainerDiv);
    }


    getFormDiv() {
        const formDiv = document.createElement('div');
        formDiv.className = 'card-body'

        const form = document.createElement('form');

        const movieSelect = this.getSelect(['Harry Potter', 'Inception']);
        const dateSelector = this.getSelect(this.getNextWeek());
        const hourSelect = this.getSelect(['10:00', '14:30']);
        const submitBtn = this.getSubmitBtn();

        form.appendChild(movieSelect);
        form.appendChild(dateSelector);
        form.appendChild(hourSelect);
        form.appendChild(submitBtn);

        formDiv.appendChild(form);

        return formDiv;
    }

    getNextWeek(){
        return ['18/08/21', '19/08/21', '20/08/21'];
    }


    getHeaderDiv(){
        const headerDiv = document.createElement('div');
        headerDiv.className = 'card-header';

        const headerText = document.createElement('h3');
        headerText.textContent = 'Pick a Movie';
        headerDiv.appendChild(headerText);
        return headerDiv;
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

    getSubmitBtn(){
        const btnDiv = document.createElement('div');
        btnDiv.className = 'button-holder-central';

        const btn = document.createElement('button');
        btn.type = 'submit';
        btn.className = 'btn btn-primary';
        btn.textContent = 'Submit'

        btnDiv.appendChild(btn)
        return btnDiv

    }
}
