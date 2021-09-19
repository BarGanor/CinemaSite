class App {
    constructor() {
        this.container = document.getElementById('container');

    }
    render(){
        window.location.hash = '#home'
        const body =document.querySelector('body');
        const header = document.createElement('header');
        header.className= 'navbar-container';

        body.insertBefore(header, body.firstChild);


        const navbar = new Navbar(this.container,header, null );
        navbar.render();

        const homePage = new Home(this.container);
        homePage.render();

        const footer = new Footer(this.container);
        footer.render();
    }
}
const app = new App();
app.render();


