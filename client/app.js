const container = document.getElementById('container');
let hall;
const body =document.querySelector('body');

const settingApplied = (rows, seats, name, form) => {
    form.remove();
    hall = new Hall(container,rows, seats, name);
    hall.render();

}


const startApp = (container) => {
    const header = document.createElement('header');
    header.className= 'navbar-container';

    body.insertBefore(header, body.firstChild);


    const navbar = new Navbar(container,header, null );
    navbar.render();

    const homePage = new Home(container);
    homePage.render();

    const footer = new Footer(container);
    footer.render();
}



startApp(container)
// const settings = new HallSettings(container, settingApplied)
// settings.render();

