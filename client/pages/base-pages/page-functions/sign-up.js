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
        const birthdate = this.birthdateInput;
        const submitBtn = this.submitBtn;


        cardForm.addEventListener('submit',(e)=>{
            e.preventDefault();

            if (this.validPassword() && this.validateEmail()){
                this.postData('/newUser', {username:userName.firstChild.value, email:email.firstChild.value, password:password.firstChild.value}).then(this.successCallback);
            }

            else if(!this.validPassword()){
                document.getElementById('confirm_password').setCustomValidity("Passwords Don't Match")
            }

            else if(!this.validateEmail()){
                document.getElementById('email_input').setCustomValidity("Email must be of format: example@site.com")
            }



            // const validPassword = this.validPassword();
            // const validEmail = this.validateEmail();
            //
            //
            // if (validPassword && validEmail){
            //     this.container.innerHTML = '';
            //     const loginPage = new Login(this.container);
            //     loginPage.render();
            // }

            // else{
            //     console.log(userName);
            //     this.postData('/newUser', {username:userName.firstChild.value, email:email.firstChild.value, password:password.firstChild.value}).then(this.successCallback);
            //
            // }
        })

        cardForm.appendChild(userName);
        cardForm.appendChild(password);
        cardForm.appendChild(confirmPassword);
        cardForm.appendChild(email);
        cardForm.appendChild(birthdate);
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

    get birthdateInput(){
        const inputItem = document.createElement('div');
        inputItem.className = 'input-group form-group';

        const inputField = document.createElement('input');
        inputField.className = 'form-control';

        inputField.type = 'text';
        inputField.placeholder = 'Enter Birthdate . Example: 1996-08-18';

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
        return password.value === confirmPassword.value;
    }


    get submitBtn(){
        const btnDiv = document.createElement('div');
        const submitBtn = document.createElement('input');
        submitBtn.type = 'submit';

        btnDiv.className = 'form-group';
        submitBtn.className= 'btn float-right login_btn';
        submitBtn.value = 'Sign Up';

        btnDiv.appendChild(submitBtn);

        return btnDiv;
    }

    // Example POST method implementation:
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

        if (result.affectedRows === 1){
            const home = new Home(this.container);
            home.render();
        }

        else{
            console.log(result)
            document.getElementById('email_input').setCustomValidity("An account with this E-mail already exists")
        }


    }
}