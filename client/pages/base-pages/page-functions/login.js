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

        const emailInput = this.emailInput;
        const passwordInput = this.passwordInput;
        const rememberMeBox = this.checkBox;
        const submitBtn = this.submitBtn;
        const cardFooter = this.cardFooter;

        cardForm.addEventListener('submit', (e)=>{
            e.preventDefault()
            this.postData('/validation', {email:emailInput.firstChild.value, password:passwordInput.firstChild.value}).then(this.successCallback)
        });

        cardForm.appendChild(emailInput);
        cardForm.appendChild(passwordInput);
        cardForm.appendChild(rememberMeBox);
        cardForm.appendChild(submitBtn);
        cardForm.appendChild(cardFooter);

        cardBody.appendChild(cardForm);

        return cardBody;
    }

    get emailInput(){
        const inputItem = document.createElement('div');
        inputItem.className = 'input-group form-group';

        const inputField = document.createElement('input');
        inputField.className = 'form-control';
        inputField.name = 'email';
        inputField.type = 'email';
        inputField.placeholder = 'Email';

        inputItem.appendChild(inputField);

        return inputItem;
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
        if (result.length===1) {
            const user = new User(result[0])

            const navbar = new Navbar(document.getElementById('container'), document.querySelector('header'), user);
            navbar.render();

            const homePage = new Home();
            homePage.render();

        }

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


        return footerDiv;
    }
}

