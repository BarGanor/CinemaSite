class HallSettings {

    constructor(container, settingApplied) {
        this.container = container;
        this.settingApplied = settingApplied;


    }

    render(mode = 'settings'){
        const loadOrNewContainer = document.createElement('div');
        this.container.appendChild(loadOrNewContainer);

        if (mode === 'settings'){
            const eventSettings = new EventSettings(loadOrNewContainer, (loadOrNewContainer)=>this.goToEventsFormPage(loadOrNewContainer));
            eventSettings.render();

        } else {
            const eventDataForm = new NewEventForm(loadOrNewContainer, (rows, cells, name, form)=> this.settingApplied(rows, cells, name, form));
            eventDataForm.render();


        }

    }

    goToEventsFormPage(loadOrNewContainer){
        loadOrNewContainer.remove();
        this.render('form')
    }



}