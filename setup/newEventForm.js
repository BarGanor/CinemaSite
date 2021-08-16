class NewEventForm {

    constructor(container, onSubmit) {
        this.container = container;
        this.onSubmit = onSubmit;
    }

    render(){

        const eventForm = document.createElement('form');
        eventForm.id = 'event-form';

        const eventNameDiv = document.createElement('div');
        eventNameDiv.className = 'form-group';

        const rowNumDiv = document.createElement('div');
        rowNumDiv.className = 'form-group';

        const maxSeatsDiv = document.createElement('div');
        maxSeatsDiv.className = 'form-group';


        const eventNameLabel = document.createElement('label');
        eventNameLabel.textContent = 'Enter Event Name: ';


        const eventNameInput = document.createElement('input');
        eventNameInput.id = 'eventInput';
        eventNameInput.className = 'form-control'

        const inputRowLabel = document.createElement('label');
        inputRowLabel.textContent = 'Enter number of rows: ';

        const rowInput = document.createElement('input');
        rowInput.id = 'rowInput';
        rowInput.className = 'form-control'

        const maxSeatsLabel = document.createElement('label');
        maxSeatsLabel.textContent = 'Enter max number of seats in a row: ';

        const seatsInput = document.createElement('input');
        seatsInput.id = 'seatInput';
        seatsInput.className = 'form-control'



        const submitRowsBtn = document.createElement('button');
        submitRowsBtn.textContent = 'Submit';
        submitRowsBtn.className = 'btn btn-primary btn-lg btn-block'
        eventForm.addEventListener('submit', e => {
            this.onSubmit(Number(rowInput.value),  Number(seatsInput.value), eventNameInput.value, eventForm);
        })

        eventNameDiv.appendChild(eventNameLabel);
        eventNameDiv.appendChild(eventNameInput);

        rowNumDiv.appendChild(inputRowLabel);
        rowNumDiv.appendChild(rowInput);

        maxSeatsDiv.appendChild(maxSeatsLabel);
        maxSeatsDiv.appendChild(seatsInput);

        eventForm.appendChild(eventNameDiv);
        eventForm.appendChild(rowNumDiv);
        eventForm.appendChild(maxSeatsDiv);
        eventForm.appendChild(submitRowsBtn);


        this.container.appendChild(eventForm);
    }

    getInputField(type, placeholder, id){
        const myInputField = document.createElement('input') // Create field

        // Set Attributes
        myInputField.type= type;
        myInputField.placeholder = placeholder;
        myInputField.id= id;

        return myInputField;
    }
}