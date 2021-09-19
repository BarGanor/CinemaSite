class SignUp extends BasePage{
    constructor(container) {
        super(container);
    }
    render() {
        window.location.hash = '#sign-up';
        const card = this.card;
        this.container.appendChild(card);
    }

    get card(){
        const card = super.card;
        card.firstChild.appendChild(this.headerDiv);
        card.firstChild.appendChild(this.cardBody);

        return card;
    }

    get cardBody(){
        const cardBody = super.cardBody;
        const cardForm = document.createElement('form');

        const userName = this.userNameInput;
        const password = this.passwordInput;

        const confirmPassword = this.passwordInput;
        this.configPasswordInput(confirmPassword);

        const email = this.emailInput;
        const submitBtn = this.submitBtn;


        cardForm.action = 'http://localhost:8080/newUser';
        cardForm.method = 'POST';

        cardForm.appendChild(userName);
        cardForm.appendChild(password);
        cardForm.appendChild(confirmPassword);
        cardForm.appendChild(email);
        cardForm.appendChild(submitBtn);

        cardBody.appendChild(cardForm);


        return cardBody;
    }

    get headerDiv(){
        const headerDiv = document.createElement('div');
        headerDiv.className = 'card-header';

        const headerText = document.createElement('h3');
        headerText.textContent = 'Sign Up';

        headerDiv.appendChild(headerText);
        return headerDiv;
    }

    get userNameInput(){
        const inputItem = document.createElement('div');
        inputItem.className = 'input-group form-group';

        const inputField = document.createElement('input');
        inputField.className = 'form-control';

        inputField.type = 'text';
        inputField.placeholder = 'Enter User Name';

        inputItem.appendChild(inputField);

        return inputItem;
    }

    get passwordInput(){
        const inputItem = document.createElement('div');
        inputItem.className = 'input-group form-group';

        const inputField = document.createElement('input');
        inputField.className = 'form-control';

        inputField.type = 'password';
        inputField.placeholder = 'Enter Password';
        inputField.id= 'password'

        inputItem.appendChild(inputField);

        return inputItem;
    }

    configPasswordInput(inputDiv){
        let inputField = inputDiv.firstChild;

        inputField.type = 'password';
        inputField.placeholder = 'Confirm Password';
        inputField.id= 'confirm_password'

    }

    get emailInput(){
        const inputItem = document.createElement('div');
        inputItem.className = 'input-group form-group';

        const inputField = document.createElement('input');
        inputField.className = 'form-control';

        inputField.type = 'email';
        inputField.placeholder = 'E-mail';
        inputField.id = 'email_input'

        inputItem.appendChild(inputField);

        return inputItem;
    }

    validateEmail() {
        let email = document.getElementById('email_input').value;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validPassword() {
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirm_password');
        console.log(password.value, confirmPassword.value);
        return password.value === confirmPassword.value;
    }


    get submitBtn(){
        const btnDiv = document.createElement('div');
        const submitBtn = document.createElement('input');
        submitBtn.type = 'submit';

        btnDiv.className = 'form-group';
        submitBtn.className= 'btn float-right login_btn';
        submitBtn.value = 'Sign Up';

        submitBtn.addEventListener('click', ()=>{
            const validPassword = this.validPassword();
            const validEmail = this.validateEmail();

            if (validPassword && validEmail){
                this.container.innerHTML = '';
                const loginPage = new Login(this.container);
                loginPage.render();
            }
            else if(!validPassword){
                document.getElementById('confirm_password').setCustomValidity("Passwords Don't Match")
            }

            else if(!validEmail){
                document.getElementById('email_input').setCustomValidity("Email must be of format: example@site.com")
            }

        })

        btnDiv.appendChild(submitBtn);

        return btnDiv;
    }
}