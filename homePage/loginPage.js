class LoginPage {

    constructor(container) {
        this.container = container;
    }

    render(){
        const loginPageContainer = document.createElement('login-container');
        const card = this.getCard();
        loginPageContainer.appendChild(card);

        this.container.appendChild(loginPageContainer);

    }

    getCard(){
        const cardContainerDiv = document.createElement('div');
        cardContainerDiv.className = 'd-flex justify-content-center h-100'

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardContainerDiv.appendChild(cardDiv);

        const cardHeaderDiv = document.createElement('div');
        cardHeaderDiv.className = 'card-header';
        cardDiv.appendChild(cardHeaderDiv);

        const cardHeader = document.createElement('h3');
        cardHeader.textContent = 'Sign In';
        cardHeaderDiv.appendChild(cardHeader);

        const cardBodyDiv = this.getCardBody();
        cardDiv.appendChild(cardBodyDiv);

        const cardFooter = this.getCardFooter();
        cardDiv.appendChild(cardFooter);


        return cardContainerDiv;

    }

    getCardBody(){
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        const cardForm = document.createElement('form');
        cardBodyDiv.appendChild(cardForm);

        const userNameInput = this.getInputField('username');
        const passwordInput = this.getInputField('password');
        const rememberMeBox = this.getCheckBox();
        const submitBtn = this.getSubmitBtn();

        cardForm.appendChild(userNameInput);
        cardForm.appendChild(passwordInput);
        cardForm.appendChild(rememberMeBox);
        cardForm.appendChild(submitBtn);

        return cardBodyDiv;
    }

    getInputField(inputType) {

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

    getCardFooter(){
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

    getCheckBox(){
        const inputItem = document.createElement('div');
        inputItem.className = 'row align-items-center remember';
        inputItem.textContent = 'Remember me';

        const inputField = document.createElement('input');
        inputField.type = 'checkbox';


        inputItem.appendChild(inputField);

        return inputItem;
    }
    
    getSubmitBtn(){
        const btnDiv = document.createElement('div');
        btnDiv.className = 'form-group';

        const submitBtn = document.createElement('input');
        submitBtn.className= 'btn float-right login_btn';
        submitBtn.value = 'Login';
        submitBtn.type = 'submit';

        btnDiv.appendChild(submitBtn);

        return btnDiv;
    }
    



}