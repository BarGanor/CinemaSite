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
    constructor(navbarMenuDisplay, url, options) {
        this.navbarMenuDisplay = navbarMenuDisplay;
        this.url = url;
        this.options = options;
    }

    render(){
    //     const item = document.createElement('li');
    //     item.className = 'nav-item';
    //     item.id = 'my-orders-btn'
    //
    //     const link = document.createElement('a');
    //     link.className = 'nav-link';
    //     link.text = this.navbarTxt;
    //
    //
    //     link.addEventListener('click', ()=>{
    //         this.onSubmit(this.url)
    //     })
    //
    //
    //     item.appendChild(link);
    //
    //     return item;
    // }

        const item = document.createElement('div');
        item.className = 'nav-item dropdown';

        const link = document.createElement('button');
        link.className = 'btn btn-secondary dropdown-toggle';
        link.textContent = this.navbarMenuDisplay;
        link.id = 'dropdownMenuButton';
        link.setAttribute('data-toggle', 'dropdown');

        item.appendChild(link)
        item.appendChild(this.dropdownOptions);

        return item;
    }

    get dropdownOptions(){
        const menu = document.createElement('div');
        menu.className = 'dropdown-menu';
        menu.setAttribute('aria-labelledby', 'navbarDropdown')

        this.options.forEach((option)=>{
            const menuItem = document.createElement('a');
            menuItem.className = 'dropdown-item';
            menuItem.href = '#';
            menuItem.text = option;

            menu.appendChild(menuItem);
        })

        const divider = document.createElement('div');
        divider.className = 'dropdown-divider';

        const logoutItem = document.createElement('a');
        logoutItem.className = 'dropdown-item';
        logoutItem.href = '#';
        logoutItem.text = 'logout';

        menu.appendChild(divider);
        menu.appendChild(logoutItem);

        return menu;
    }

    get logoutItem(){
        const divider = document.createElement('div');
        divider.className = 'dropdown-divider';

        const logoutItem = document.createElement('a');
        logoutItem.className = 'dropdown-item';
        logoutItem.text = 'logout';

        return logoutItem
    }


}


