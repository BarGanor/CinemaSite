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

class NavbarDropdownItem {
    constructor(navbarTxt, url, options) {
        this.navbarTxt = navbarTxt;
        this.url = url;
        this.options = options;
    }

    render(){
        const item = document.createElement('li');
        item.className = 'nav-item';
        item.id = 'my-orders-btn'

        const link = document.createElement('a');
        link.className = 'nav-link';
        link.text = this.navbarTxt;


        link.addEventListener('click', ()=>{
            this.onSubmit(this.url)
        })


        item.appendChild(link);

        return item;
    }

    //     const item = document.createElement('li');
    //     item.className = 'nav-item dropdown';
    //
    //     const link = document.createElement('a');
    //     link.className = 'nav-link dropdown-toggle';
    //     link.href = '#';
    //     link.text = this.navbarTxt;
    //     link.id = 'navbarDropdown';
    //     link.role = 'button';
    //     link.setAttribute('role', 'button');
    //     link.setAttribute('data-toggle', 'dropdown');
    //     link.setAttribute('aria-haspopup', 'true');
    //     link.setAttribute('aria-expanded', 'false');
    //
    //     item.appendChild(link)
    //     item.appendChild(this.dropdownOptions);
    //
    //     return item;
    // }
    //
    // get dropdownOptions(){
    //     const menu = document.createElement('div');
    //     menu.className = 'dropdown-menu';
    //     menu.setAttribute('aria-labelledby', 'navbarDropdown')
    //
    //     this.options.forEach((option)=>{
    //         const menuItem = document.createElement('a');
    //         menuItem.className = 'dropdown-item';
    //         menuItem.href = '#';
    //         menuItem.text = option;
    //
    //         menu.appendChild(menuItem);
    //     })
    //
    //     const divider = document.createElement('div');
    //     divider.className = 'dropdown-divider';
    //
    //     const logoutItem = document.createElement('a');
    //     logoutItem.className = 'dropdown-item';
    //     logoutItem.text = 'logout';
    //
    //     menu.appendChild(divider);
    //     menu.appendChild(logoutItem);
    //
    //     return menu;
    // }
    //
    // get logoutItem(){
    //     const divider = document.createElement('div');
    //     divider.className = 'dropdown-divider';
    //
    //     const logoutItem = document.createElement('a');
    //     logoutItem.className = 'dropdown-item';
    //     logoutItem.text = 'logout';
    //
    //     return logoutItem
    // }


}


