class Navbar {

    constructor(container, userObj) {
        this.container = container;
        this.userObj = userObj;
    }

    setChosenPage(url){
        if (url === '/login'){
            const loginPage = new LoginPage(this.container);
            loginPage.render();
            console.log(url);

        }
        else{
        }
    }

    render() {
        const navbar = document.createElement('nav');
        navbar.className = "navbar navbar-expand navbar-dark navbar-custom-bg";

        const navbarList = document.createElement('ul');
        navbarList.className = 'navbar-nav mr-auto';

        navbar.appendChild(navbarList);

        const tabs = [new NavbarItem('Home Page', '/homepage',()=>this.setChosenPage('/homepage')),
                    new NavbarItem('New Movies', '/new-movies', ()=> this.setChosenPage('/new-movies'))];

        tabs.forEach(function (tab) {
            navbarList.appendChild(tab.render());
        })


        if (this.userObj == null) {
            this.renderGuestNavbar(navbarList);
        }

        else if (this.userObj === 'user'){
            this.renderUser(navbarList);
        }

        this.container.appendChild(navbar);

    }

    renderGuestNavbar(list) {
        const loginNav = new NavbarItem('Login', '/login',()=> this.onSubmit('/login'));
        list.appendChild(loginNav.render());
    }

    renderUser(list) {
        const forUser = new NavbarItem('For ' + String(this.userObj.name), '#', 'dropdown')
    }


}