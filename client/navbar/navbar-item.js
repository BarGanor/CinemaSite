class NavbarItem {
    constructor(navbarTxt, url, onSubmit) {
        this.navbarTxt = navbarTxt;
        this.url = url;
        this.onSubmit = onSubmit;
    }

    render(){
        const item = document.createElement('li');
        item.className = 'nav-item';

        const link = document.createElement('a');
        link.className = 'nav-link';
        link.text = this.navbarTxt;

        link.addEventListener('click', ()=>{
            this.onSubmit(this.url)
        })




        item.appendChild(link);

        return item;
    }
}

class UserNavbarItem {
    constructor(navbarMenuDisplay, url) {
        this.navbarMenuDisplay = navbarMenuDisplay;
        this.url = url;
    }

    render(){
        const item = document.createElement('li');
        item.className = 'nav-item user-navbar';
        item.id = this.navbarMenuDisplay + '-btn'

        const link = document.createElement('a');
        link.className = 'nav-link';
        link.text = this.navbarMenuDisplay;


        link.addEventListener('click', ()=>{
            this.navbarMenuDisplay(this.url)
        })

        item.appendChild(link);

        return item;
    }



}


