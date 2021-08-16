class EventSettings {

    constructor(container, onSubmit) {
        this.container = container;
        this.onSubmit = onSubmit;

    }

    render(){

        this.setSettingsParagraph(this.container);
        this.setSettingsBtn(this.container);
    }

    setSettingsParagraph(loadOrNewContainer) {

        const loadOrNewPar = document.createElement('h1');
        loadOrNewPar.textContent = 'Welcome!';
        loadOrNewPar.style.color = 'white';
        loadOrNewContainer.appendChild(loadOrNewPar);
    }

    setSettingsBtn(){
        const loadOrNewBtn = document.createElement('button');
        loadOrNewBtn.textContent = 'Create New Event';
        loadOrNewBtn.className = "btn btn-outline-danger"
        loadOrNewBtn.addEventListener('click', ev => {
            this.onSubmit(this.container);
        })
        this.container.appendChild(loadOrNewBtn);
    }
}