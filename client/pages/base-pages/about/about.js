class About{
    constructor(container) {
        this.container =  document.getElementById('container');
    }

    render() {
       this.container.innerHTML =''
        const pageContainer = document.createElement('div');
        pageContainer.className = 'about-container';

        const ourTeam = document.createElement('h2');
        ourTeam.textContent = 'Our Team';
        ourTeam.id = 'our-team';

        pageContainer.appendChild(this.aboutSection);
        pageContainer.appendChild(this.getCardRowElem(this.employeesObj));

        this.container.appendChild(pageContainer);
    }

    get aboutSection(){
        const aboutDiv = document.createElement('div');
        aboutDiv.className = 'about-section';

        const aboutUsH1 = document.createElement('h1');
        aboutUsH1.textContent = 'About Us Page';

        const description1 = document.createElement('p');
        description1.textContent = 'We made this site to revolutionize the way we order cinema tickets.';

        const description2 = document.createElement('p');
        description2.textContent = 'Here, you can search and buy tickets for all cinemas! ';

        aboutDiv.appendChild(aboutUsH1);
        aboutDiv.appendChild(description1);
        aboutDiv.appendChild(description2);

        return aboutDiv;
    }

    get employeesObj(){
        const bar = new EmployeeDetails('https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg',
            'Bar Ganor', 'Founder','Born 1996, studying at BGU' , 'ganorbar@gmail.com')
        
        const employeesObj = [];
        for (let i = 0; i < 3; i++) {
            employeesObj.push(this.getCardColumnElem(bar));
        }
        return employeesObj;

    }


    getCardRowElem(employees){
        const row = document.createElement('div');
        row.className = 'about-card-row';
        employees.forEach((employee)=>{
            let columnElem = this.getCardColumnElem(employee);
            row.appendChild(columnElem);
        })

        return row;
    }

    getCardColumnElem(employee){
        const column = document.createElement('div');
        column.className = 'about-card-column';

        const card = document.createElement('div');
        card.className = 'about-card';

        const employeeImg = document.createElement('img');
        employeeImg.src = employee.img_url;
        employeeImg.alt = employee.name;
        employeeImg.className = 'employee-img';

        const detailsContainer = this.getDetailsContainer(employee);

        card.appendChild(employeeImg);
        card.appendChild(detailsContainer);

        column.appendChild(card);
        return column;

    }

    getDetailsContainer(employee){
        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'details-container';

        const employeeName = document.createElement('h2');
        employeeName.textContent = employee.name;

        const employeeTitle = document.createElement('p');
        employeeTitle.className = 'title';
        employeeTitle.textContent = employee.title;

        const employeeDescription = document.createElement('p');
        employeeDescription.textContent = employee.description;

        const employeeEmail = document.createElement('p');
        employeeEmail.textContent = employee.email;


        detailsContainer.appendChild(employeeName);
        detailsContainer.appendChild(employeeTitle);
        detailsContainer.appendChild(employeeDescription);
        detailsContainer.appendChild(employeeEmail);

        return detailsContainer;

    }
}

class EmployeeDetails {
    constructor(img_url, name, title, description, email) {
        this.img_url = img_url;
        this.name = name;
        this.title= title;
        this.description = description;
        this.email = email;
    }

}