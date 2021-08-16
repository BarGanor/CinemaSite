const getSelect = (options)=> {
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

const getSubmitBtn = (pageType)=>{
    const btnDiv = document.createElement('div');
    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';


    if (pageType === 'login'){
        btnDiv.className = 'form-group';
        submitBtn.className= 'btn float-right login_btn';
        submitBtn.value = 'Login';
    }

    else if(pageType === 'new-movies'){
        btnDiv.className = 'button-holder-central';
        submitBtn.className = 'btn btn-primary';
        submitBtn.textContent = 'Submit'

    }

    else if(pageType==='home-page'){
        btnDiv.className = 'button-holder-central';
        submitBtn.className = 'btn btn-primary';
        submitBtn.textContent = 'Submit'
    }


    btnDiv.appendChild(submitBtn);

    return btnDiv;
}

