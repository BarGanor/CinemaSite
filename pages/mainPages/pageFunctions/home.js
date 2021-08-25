
const getNextWeek =()=>{
    return ['18/08/21', '19/08/21', '20/08/21'];
}

const setHomeHeader =(headerText)=>{
    headerText.textContent = 'Pick A City';
}

const setHomeForm = (cardForm, pageType)=> {

    const movieSelect = getSelect(['תל אביב', 'גבעתיים', 'באר שבע']);
    const dateSelector =getSelect(getNextWeek());
    const hourSelect = getSelect(['10:00', '14:30']);
    const submitBtn = getSubmitBtn(pageType);

    cardForm.appendChild(movieSelect);
    cardForm.appendChild(dateSelector);
    cardForm.appendChild(hourSelect);
    cardForm.appendChild(submitBtn);

    return cardForm;
}

