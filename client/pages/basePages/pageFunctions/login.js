class Login extends BasePage{
    constructor(container) {
        super(container);
    }

    render() {
        window.location.hash = '#sign-in';
        const card = this.card;
        this.container.appendChild(card);
    }

    get card(){
        const card = super.card;

        card.firstChild.appendChild(this.headerDiv);
        card.firstChild.appendChild(this.cardBody);

        return card;
    }

    get headerDiv(){
        const headerDiv = document.createElement('div');
        headerDiv.className = 'card-header';

        const headerText = document.createElement('h3');
        headerText.textContent = 'Sign In';

        headerDiv.appendChild(headerText);
        return headerDiv;
    }

    get cardBody() {
        const cardBody = super.cardBody;
        const cardForm = document.createElement('form');

        const userNameInput = this.userNameInput;
        const passwordInput = this.passwordInput;
        const rememberMeBox = this.checkBox;
        const submitBtn = this.submitBtn;
        const cardFooter = this.cardFooter;

        cardForm.on('submit', async (url='', data={customerName:'cinema-city'})=>{
            await fetch('/login', {method:'POST', headers:{'Content-Type' : 'application/json'},
            body:JSON.stringify(data)});
            return response.json();
        });


        cardForm.appendChild(userNameInput);
        cardForm.appendChild(passwordInput);
        cardForm.appendChild(rememberMeBox);
        cardForm.appendChild(submitBtn);
        cardForm.appendChild(cardFooter);

        cardBody.appendChild(cardForm);

        return cardBody;
    }

    get userNameInput(){
        const inputItem = document.createElement('div');
        inputItem.className = 'input-group form-group';

        const inputField = document.createElement('input');
        inputField.className = 'form-control';
        inputField.name = 'user-name';
        inputField.type = 'text';
        inputField.placeholder = 'User Name';

        inputItem.appendChild(inputField);

        return inputItem;
    }

    get passwordInput(){
        const inputItem = document.createElement('div');
        inputItem.className = 'input-group form-group';

        const inputField = document.createElement('input');
        inputField.className = 'form-control';
        inputField.name = 'password';
        inputField.type = 'password';
        inputField.placeholder = 'Password';

        inputItem.appendChild(inputField);

        return inputItem;
    }

    get checkBox(){
        const inputItem = document.createElement('div');
        inputItem.className = 'row align-items-center remember';
        inputItem.textContent = 'Remember me';

        const inputField = document.createElement('input');
        inputField.type = 'checkbox';


        inputItem.appendChild(inputField);

        return inputItem;
    }

    get submitBtn(){
        const btnDiv = document.createElement('div');
        const submitBtn = document.createElement('input');
        submitBtn.type = 'submit';

        btnDiv.className = 'form-group';
        submitBtn.className= 'btn float-right login_btn';
        submitBtn.value = 'Login';

        btnDiv.appendChild(submitBtn);

        return btnDiv;
    }

    get cardFooter (){
        const footerDiv = document.createElement('div');
        footerDiv.className= 'card-footer';

        const signUpDiv = document.createElement('div');
        signUpDiv.className = 'd-flex justify-content-center links';
        signUpDiv.textContent = 'Don\'t have an account?';

        signUpDiv.addEventListener('click', ()=>{
            this.container.innerHTML =''
            const signUpPage = new SignUp(this.container);
            signUpPage.render();
        })

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
}

