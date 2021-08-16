const container = document.getElementById('container');
let hall;
const body =document.querySelector('body');
const settingApplied = (rows, seats, name, form) => {
    form.remove();
    hall = new Hall(container,rows, seats, name);
    hall.render();

}

const navbarOnSubmit = (navbarItem)=>{
        if (navbarItem.url === '/homepage'){

        }

        else if(navbarItem.url ==='/new-movies'){


        }


        else if (navbarItem.url === '/login'){
            container.innerHTML ='';
            const loginPage = new LoginPage();
            loginPage.render();
        }

}


const startApp = (container) => {
    const navbarContainer = document.createElement('div');
    navbarContainer.className= 'navbar-container';

    body.insertBefore(navbarContainer, body.firstChild);

    const navbar = new Navbar(navbarContainer, null);
    navbar.render();
}



startApp(container)
// const settings = new HallSettings(container, settingApplied)
// settings.render();

