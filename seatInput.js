const body = document.querySelector('body');

setHomePage();

function setHomePage(){
    const mainContainer = document.createElement('div');
    mainContainer.id= 'mainContainer';
    body.appendChild(mainContainer);

    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'homePageContainer';
    mainContainer.appendChild(homePageContainer)

    const homeMainP = document.createElement('p');
    homeMainP.textContent = 'Welcome!';

    const loadExisting = document.createElement('button');
    loadExisting.textContent = 'Load Existing Event';

    const createNew = document.createElement('button');
    createNew.textContent = 'Create New Event'
    createNew.addEventListener('click', ev => {
        createNewEvent(mainContainer);
    })

    homePageContainer.appendChild(homeMainP);
    homePageContainer.appendChild(loadExisting);
    homePageContainer.appendChild(createNew);
}

function createNewEvent(mainContainer){
    mainContainer.innerHTML = '';

    const eventDataDiv = getEventData();


    mainContainer.appendChild(eventDataDiv)

}

function setSeatListener(){
    const container = document.querySelector('.container');

    // Seat select event
    container.addEventListener('click', e => {
        if (
            e.target.classList.contains('seat') &&
            !e.target.classList.contains('occupied')
        ) {
            e.target.classList.toggle('selected');

            updateSelectedSeatsCount();
        }
    });
}

function getShowCase() {
    const showCase = document.createElement('ul');
    showCase.className = 'showcase';

    const elemOne = document.createElement('li');
    const seat = document.createElement('div');
    const seatSmall = document.createElement('small');

    seatSmall.textContent = 'N/A'
    seat.className = 'seat';
    elemOne.appendChild(seat);
    elemOne.appendChild(seatSmall);

    const elemTwo = document.createElement('li');
    const seatSelected = document.createElement('div')
    const seatSelectSmall = document.createElement('small');

    seatSelectSmall.textContent = 'Selected'
    seatSelected.className = 'seat selected show';
    elemTwo.appendChild(seatSelected);
    elemTwo.appendChild(seatSelectSmall);

    const elemThree = document.createElement('li');
    const seatOccupied = document.createElement('div')
    const seatOccupiedSmall = document.createElement('small');

    seatOccupiedSmall.textContent = 'Occupied';
    seatOccupied.className = 'seat occupied';
    elemThree.appendChild(seatOccupied);
    elemThree.appendChild(seatOccupiedSmall);

    showCase.appendChild(elemOne);
    showCase.appendChild(elemTwo);
    showCase.appendChild(elemThree);

    return showCase
}

function setEventDisplay(numOfRows,seatsInRowDiv, eventName){
    const mainContainer = document.getElementById('mainContainer');

    const showCaseDiv = getShowCase();
    mainContainer.appendChild(showCaseDiv);

    writeRows(numOfRows,seatsInRowDiv);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save Event';
    saveBtn.addEventListener('click', ev => {
        saveEvent(eventName, mainContainer);
    })
    body.appendChild(saveBtn);
}


function saveEvent(eventName, mainContainer){
    const seatsSelected = document.getElementsByClassName('selected');
    const numOfSeats = seatsSelected.length;

    while (numOfSeats) {

        if (!seatsSelected[0].className.includes('show')){
            seatsSelected[0].className = 'seat occupied';
        }

    }

}


function writeRows(numOfRows, rowInputDiv){
    const container = document.createElement('div');
    container.className = 'container';

    const screen = document.createElement('div');
    screen.className = 'screen';
    container.appendChild(screen);

    for (let i = 0; i < numOfRows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        getSeatsInRow = document.getElementById('row' + String(i));

        let rowNumLabel = document.createElement('label');
        rowNumLabel.className = 'RowLabel';
        rowNumLabel.textContent = 'Row ' + String(i);
        rowDiv.appendChild(rowNumLabel);

        for (let j = 0; j < getSeatsInRow.value; j++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = String(j);
            rowDiv.appendChild(seat);
        }
        container.appendChild(rowDiv);
    }
    rowInputDiv.remove()
    body.appendChild(container)
    setSeatListener();
}


function getSeatsInRow(numOfRows, eventDataDiv, eventName){
    const mainContainer = document.getElementById('mainContainer');

    eventDataDiv.remove();

    const seatsInRowDiv = document.createElement('div');

    for (let i = 0; i < numOfRows; i++) {
        let rowDiv = document.createElement('div')

        let rowLabel = document.createElement('label')
        rowLabel.textContent = 'Number of seats in row' + String(i+1) +': ';
        
        let rowInput = document.createElement('input');
        rowInput.id= 'row'+String(i);

        rowDiv.appendChild(rowLabel)
        rowDiv.appendChild(rowInput)
        seatsInRowDiv.appendChild(rowDiv);
    }
    const submitSeatsInRow = document.createElement('button')
    submitSeatsInRow.textContent = 'Submit';
    submitSeatsInRow.addEventListener('click', ev => {

        setEventDisplay(numOfRows,seatsInRowDiv, eventName);
    })

    seatsInRowDiv.appendChild(submitSeatsInRow)
    mainContainer.appendChild(seatsInRowDiv)


}

function getEventData(){

    const eventDataDiv = document.createElement('div');
    eventDataDiv.id = 'eventdata';

    const eventNameDiv = document.createElement('div');
    eventNameDiv.className = 'eventname';

    const eventNameLabel = document.createElement('label');
    eventNameLabel.textContent = 'Enter Event Name: ';

    const eventNameInput = document.createElement('input');

    const rowInputDiv = document.createElement('div');
    rowInputDiv.id = 'rowInput';

    let inputRowLabel = document.createElement('label');
    inputRowLabel.textContent = 'Enter number of rows: ';

    const inputRowField = getInputField('text', '', 'numofrows');

    const submitRowsBtn = document.createElement('button');
    submitRowsBtn.textContent = 'Submit';
    submitRowsBtn.addEventListener('click', e => {
        getSeatsInRow(Number(inputRowField.value), eventDataDiv, eventNameInput.value);
    })

    eventNameDiv.appendChild(eventNameLabel);
    eventNameDiv.appendChild(eventNameInput);

    rowInputDiv.appendChild(inputRowLabel);
    rowInputDiv.appendChild(inputRowField);

    eventDataDiv.appendChild(eventNameDiv);
    eventDataDiv.appendChild(rowInputDiv);
    eventDataDiv.appendChild(submitRowsBtn);


    return eventDataDiv
}


function getInputField(type, placeholder, id){
    const myInputField = document.createElement('input') // Create field

    // Set Attributes
    myInputField.type= type;
    myInputField.placeholder = placeholder;
    myInputField.id= id;

    return myInputField;
}

