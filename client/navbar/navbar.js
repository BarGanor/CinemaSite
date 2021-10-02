class Navbar {

    constructor(container, navbarContainer,userObj) {
        this.container = container;
        this.userObj = userObj;
        this.navbarContainer = navbarContainer

    }

    render() {
        this.navbarContainer.innerHTML = '';
        const navbar = document.createElement('nav');
        navbar.className = "navbar navbar-expand navbar-dark navbar-custom-bg";
        navbar.id = 'navbarSupportedContent';

        const navbarList = document.createElement('ul');
        navbarList.className = 'navbar-nav mr-auto';

        navbar.appendChild(navbarList);

        const tabs = [new NavbarItem('Home Page', '/homepage',()=>this.setChosenPage('/homepage')),
                    new NavbarItem('New Movies', '/new-movies', ()=> this.setChosenPage('/new-movies')),
                    ];

        tabs.forEach((tab)=> {
            navbarList.appendChild(tab.render());
        })


        if (this.userObj == null) {
            this.renderGuestNavbar(navbarList);
        }

        else if (this.userObj instanceof User){
            this.renderUser(navbarList);
        }


        this.navbarContainer.appendChild(navbar);

    }

    setChosenPage(url){
        this.container.innerHTML =''

        if (url === '/login'){
            const loginPage = new Login(this.container)
            loginPage.render();
        }

        else if (url==='/homepage'){
            this.container.innerHTML =''
            const homePage = new Home(this.container);
            homePage.render();

        }

        else if (url==='/new-movies'){
            this.container.innerHTML =''
            const newMoviesPage = new NewMovies(this.container);
            newMoviesPage.render();
        }

        else if (url==='/about'){
            this.container.innerHTML =''
            const aboutPage = new About(this.container);
            aboutPage.render();
        }

    }

    renderGuestNavbar(list) {
        const loginNav = new NavbarItem('Login', '/login',()=> this.setChosenPage('/login'));
        list.appendChild(loginNav.render());
    }

    renderUser(list) {
        const forUser = new NavbarDropdownItem(String(this.userObj.name) +'\'s orders', '#', ['Order History', 'Coupons'])
        list.appendChild(forUser.render());
    }


}