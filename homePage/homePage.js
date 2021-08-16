
class HomePage {
    constructor(container, userType) {
            this.container = container;
            this.userObj = userType

    }

    render(){
        const navbar = new Navbar(this.container, this.userObj)
        navbar.render();
    }



}
