class Navbar {

    constructor(container, navbarContainer,userObj) {
        this.container = container;
        this.userObj = userObj;
        this.navbarContainer = navbarContainer

    }

    render() {
        const navbar = document.createElement('nav');
        navbar.className = "navbar navbar-expand navbar-dark navbar-custom-bg";

        const navbarList = document.createElement('ul');
        navbarList.className = 'navbar-nav mr-auto';

        navbar.appendChild(navbarList);

        const tabs = [new NavbarItem('Home Page', '/homepage',()=>this.setChosenPage('/homepage')),
                    new NavbarItem('New Movies', '/new-movies', ()=> this.setChosenPage('/new-movies'))];

        tabs.forEach((tab)=> {
            navbarList.appendChild(tab.render());
        })


        if (this.userObj == null) {
            this.renderGuestNavbar(navbarList);
        }

        else if (this.userObj === 'user'){
            this.renderUser(navbarList);
        }

        this.navbarContainer.appendChild(navbar);

    }

    setChosenPage(url){
        this.container.innerHTML =''

        if (url === '/login'){
            const loginPage = new MainPage(this.container, 'login');
            loginPage.render();
        }

        else if (url==='/homepage'){
            this.container.innerHTML =''
            const homePage = new MainPage(this.container, 'home-page');
            homePage.render();

        }

        else if (url==='/new-movies'){
            this.container.innerHTML =''
            const newMoviesPage = new MainPage(this.container, 'new-movies');
            newMoviesPage.render();
        }

    }

    renderGuestNavbar(list) {
        const loginNav = new NavbarItem('Login', '/login',()=> this.setChosenPage('/login'));
        list.appendChild(loginNav.render());
    }

    renderUser(list) {
        const forUser = new NavbarItem('For ' + String(this.userObj.name), '#', 'dropdown')
    }


}