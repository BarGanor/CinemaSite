
class FooterColumn{
    constructor(data) {
        this.data = data;
    }

    render(row){
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-3 item';

        const header = document.createElement('h3');
        header.textContent = this.data['header'];

        const list = document.createElement('ul');

        this.data.listItems.forEach((listItemData)=>{
            const listItem = document.createElement('li');
            listItem.className = 'link-list-item';
            listItem.textContent = listItemData.text;


            const link = document.createElement('a');
            link.href = listItemData.url;

            listItem.appendChild(link);
            list.appendChild(listItem);
        })


        col.appendChild(header);
        col.appendChild(list);

        row.appendChild(col);
    }

}