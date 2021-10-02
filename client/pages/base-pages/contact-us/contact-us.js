class ContactUs {
    constructor() {
        this.container = document.getElementById('container');
    }

    render(){
        this.container.innerHTML = '';
        this.container.appendChild(this.sectionHeading);
        this.container.appendChild(this.sectionDescription);
    }

    get sectionHeading(){
        const header = document.createElement('h2');
        header.className = "h1-responsive font-weight-bold text-center my-4";
        header.textContent = 'Contact us';
        return header;
    }

    get sectionDescription(){
        const par = document.createElement('p');
        par.className = 'text-center w-responsive mx-auto mb-5';
        par.textContent = 'Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within\n' +
            'a matter of hours to help you.'
        return par;
    }

    get row(){
        const row = document.createElement('div');
        row.className = 'row';

        const form = this.form;
    }

    get formData(){
        return {
            'grid-rows': [
                {'grid-columns': [{'name': 'name', 'text': 'Your Name'}, {'name': 'email', 'text': 'Your Email'}]}
                ,{'grid-columns': [{'name': 'subject', 'text': 'Subject'}]},
                {'grid-columns': [{'name': 'message', 'text': 'Your Message'}]}]
        };
    }

    get form(){
        const form = document.createElement('form');
        form.id = 'contact-form';
        form.name= 'contact-form';
        form.action = '/todo';

        form.appendChild()




        return form;
    }

    getGridRow(){
        const row = document.createElement('div');
        row.className = 'row';

        this.formData['grid-columns'].forEach((column)=>{
            row.appendChild(this.getGridColumn(column))
        })

        return row;
    }

    getGridColumn(data){
        const columnContainer = document.createElement('div');
        columnContainer.className = 'col-md-6';

        const columnData = document.createElement('div');
        columnData.className = 'md-form mb-0';

        const input = document.createElement('input');
        input.type ='text';
        input.id = data.name;
        input.name = data.name;
        input.class = 'form-control';

        const inputLabel = document.createElement('label');
        inputLabel.for= data.name;
        inputLabel.textContent = data.text;

        return columnContainer;
    }

}