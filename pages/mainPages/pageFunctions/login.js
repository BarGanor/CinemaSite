const getLoginInputField = (inputType)=> {

    const inputItem = document.createElement('div');
    inputItem.className = 'input-group form-group';

    const inputField = document.createElement('input');
    inputField.className = 'form-control';

    if (inputType === 'username'){
        inputField.type = 'text';
        inputField.placeholder = 'User Name';
    }

    else if(inputType === 'password'){
        inputField.type = 'password';
        inputField.placeholder = 'Password';
    }
    inputItem.appendChild(inputField);

    return inputItem;
}

const getLoginCheckBox = ()=>{
    const inputItem = document.createElement('div');
    inputItem.className = 'row align-items-center remember';
    inputItem.textContent = 'Remember me';

    const inputField = document.createElement('input');
    inputField.type = 'checkbox';


    inputItem.appendChild(inputField);

    return inputItem;
}

const getLoginCardFooter = ()=>{
    const footerDiv = document.createElement('div');
    footerDiv.className= 'card-footer';

    const signUpDiv = document.createElement('div');
    signUpDiv.className = 'd-flex justify-content-center links';
    signUpDiv.textContent = 'Don\'t have an account?';

    const signUpLink = document.createElement('a');
    signUpLink.href = '#';
    signUpLink.text = 'Sign Up';
    signUpDiv.appendChild(signUpLink);
    footerDiv.appendChild(signUpDiv);

    const forgotPwDiv = document.createElement('div');
    forgotPwDiv.className = 'd-flex justify-content-center';

    const forgotPwLink = document.createElement('a');
    forgotPwLink.href = '#';
    forgotPwLink.text = 'Forgot your password?';

    forgotPwDiv.appendChild(forgotPwLink);
    footerDiv.appendChild(forgotPwDiv);

    return footerDiv;
}

const setLoginForm = (cardForm, pageType)=> {
    const userNameInput = getLoginInputField('username');
    const passwordInput = getLoginInputField('password');
    const rememberMeBox = getLoginCheckBox();
    const submitBtn = getSubmitBtn(pageType);
    const cardFooter = getLoginCardFooter();

    cardForm.appendChild(userNameInput);
    cardForm.appendChild(passwordInput);
    cardForm.appendChild(rememberMeBox);
    cardForm.appendChild(submitBtn);
    cardForm.appendChild(cardFooter);


}