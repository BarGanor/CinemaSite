const container = document.getElementById('container');
let hall;
const body =document.querySelector('body');
const settingApplied = (rows, seats, name, form) => {
    form.remove();
    hall = new Hall(container,rows, seats, name);
    hall.render();

}

const startApp = (container) => {
    const navbarContainer = document.createElement('div');
    navbarContainer.className= 'navbar-container';

    body.insertBefore(navbarContainer, body.firstChild);


    const navbar = new Navbar(container,navbarContainer, null, );
    navbar.render();

    const homePage = new MainPage(container, 'home-page');
    homePage.render();
}



startApp(container)
// const settings = new HallSettings(container, settingApplied)
// settings.render();

