
class Home extends BasePage{
    constructor(container) {
        super(container);
        this.container = container;
    }

    render() {
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

    async getCities(url){
        const city_list = []
        const response =  await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response=>response.json()).then(data =>data.forEach((datum)=>{
            city_list.push(datum.city);
        })); // parses JSON response into native JavaScript objects
        console.log(city_list)
        return city_list;
    }


    get cardBody(){
        const cardBody = super.cardBody;
        const select_options = this.getCities('/cities')
        const cardForm = document.createElement('form');
        const citySelect = super.getSelect(['Jerusalem', 'Modiin', 'Natanya', 'Ramat-Gan', 'Tel Aviv']);
        const dateSelector =super.getSelect(this.nextWeek);
        const hourSelect = super.getSelect(['10:00', '14:30']);
        const submitBtn = this.submitBtn;

        submitBtn.addEventListener('click', ()=>{
            const showPresentation = new ShowPresentation(this.container);
            showPresentation.render();
        })

        cardForm.action = '/todo';
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
        return ['18/08/21', '19/08/21', '20/08/21'];
    }
}





