
class Home extends BasePage{
    constructor(container) {
        super(container);
        this.container = document.getElementById('container');
    }

    render() {

        this.container.innerHTML ='';
        window.location.hash = '#home';
        const card = this.card;
        this.container.appendChild(card);
    }

    get card() {
        const card =  super.card;

        card.firstChild.appendChild(this.headerDiv)
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
        const citySelect = super.getSelect(['Jerusalem', 'Modiin', 'Natanya', 'Ramat-Gan', 'Tel Aviv']);
        const dateSelector =super.getSelect(this.nextWeek);
        const hourSelect = super.getSelect(this.hours);
        const submitBtn = this.submitBtn;

        cardForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            this.postData('/newShows', {city:citySelect.firstChild.value, date:dateSelector.firstChild.value, time:hourSelect.firstChild.value}).then(this.successCallback);
        })

        cardForm.appendChild(citySelect);
        cardForm.appendChild(dateSelector);
        cardForm.appendChild(hourSelect);
        cardForm.appendChild(submitBtn);

        cardBody.appendChild(cardForm);
        return cardBody;
    }


    get submitBtn(){
        const btnDiv = document.createElement('div');
        btnDiv.className = 'button-holder-central';
        const submitBtn = document.createElement('input');

        btnDiv.className = 'button-holder-central';
        submitBtn.type = 'submit';
        submitBtn.className = 'btn btn-primary';
        submitBtn.textContent = 'Submit'

        btnDiv.appendChild(submitBtn);

        return btnDiv;
    }


    get nextWeek(){
        const date = new Date();
        const dates = [];
        for (let i = 0; i < 8; i++) {
            date.setDate(date.getDate() + i).toLocaleString();

            const dd = date.getDate();
            const mm = date.getMonth() + 1;
            const y = date.getFullYear();

            const someFormattedDate = '0'+dd + '/'+ mm + '/'+ y;

            dates.push(someFormattedDate)
        }
        return dates;
    }

    get hours(){
        return ['09:00:00',  '09:30:00', '10:00:00',  '10:30:00', '11:00:00', '11:15:00', '11:30:00', '11:45:00', '12:00:00', '12:15:00', '12:30:00', '12:45:00', '13:00:00', '13:15:00', '13:30:00', '13:45:00', '14:00:00', '14:15:00', '14:30:00', '14:45:00', '15:00:00', '15:15:00', '15:30:00', '15:45:00', '16:00:00', '16:15:00', '16:30:00', '16:45:00', '17:00:00', '17:15:00', '17:30:00', '17:45:00', '18:00:00', '18:15:00', '18:30:00', '18:45:00', '19:00:00', '19:15:00', '19:30:00', '19:45:00', '20:00:00', '20:15:00', '20:30:00', '20:45:00', '21:00:00']
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
        const moviePresentation = new MoviePresentation(document.getElementById('container'), result, false)
        moviePresentation.render();
    }

}





