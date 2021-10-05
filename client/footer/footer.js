class Footer {
    constructor(container) {
        this.container = container;
    }

    render(){
        const footerDiv = document.createElement('div');
        footerDiv.className = 'footer-dark';

        const footer = document.createElement('footer');
        const footerContainer = document.createElement('div');
        footerContainer.className = 'footer-container';

        footerDiv.appendChild(footer);
        footer.appendChild(footerContainer);
        footerContainer.appendChild(this.footerRow);

        this.insertAfter(footerDiv, this.container);
    }


    get footerCols() {
        return [new FooterColumn({
            'header': 'Services',
            'listItems': [{'url': '#/contact-us', 'text': 'Contact'}]
        }),
            new FooterColumn({
                'header': 'About',
                'listItems': [{'url': '#about/team', 'text': 'Team'}]
            })];
    }

    get footerRow(){
        const row = document.createElement('div');
        row.className = 'footer-row';

        this.footerCols.forEach((footerCol)=>{
            footerCol.render(row);
        })

        return row;
    }

    insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }


}
