class Hall{

    constructor(data) {
        this.container = document.getElementById('container');
        this.data = data;
        this.rows = 7;
        this.seats = 7;
    }

    render(){
        this.container.innerHTML = '';
        this.setEventDisplay();
    }


    setEventDisplay(){
        const showCaseDiv = this.getShowCase();
        this.container.appendChild(showCaseDiv);
        this.writeRows(this.rows,this.seats);
        this.addToCart();

    }

    getShowCase() {
        const showCase = document.createElement('ul');
        showCase.className = 'showcase';

        const elemOne = document.createElement('li');
        const seat = document.createElement('div');
        const seatSmall = document.createElement('small');

        seatSmall.textContent = 'N/A'
        elemOne.className = 'showcase-na';
        elemOne.appendChild(seat);
        elemOne.appendChild(seatSmall);

        const elemTwo = document.createElement('li');
        const seatSelected = document.createElement('div')
        const seatSelectSmall = document.createElement('small');

        seatSelectSmall.textContent = 'Selected'
        elemTwo.className = 'showcase-selected';
        elemTwo.appendChild(seatSelected);
        elemTwo.appendChild(seatSelectSmall);

        const elemThree = document.createElement('li');
        const seatOccupied = document.createElement('div')
        const seatOccupiedSmall = document.createElement('small');

        seatOccupiedSmall.textContent = 'Occupied';
        elemThree.className = 'showcase-occupied';
        elemThree.appendChild(seatOccupied);
        elemThree.appendChild(seatOccupiedSmall);

        showCase.appendChild(elemOne);
        showCase.appendChild(elemTwo);
        showCase.appendChild(elemThree);

        return showCase
    }


    addToCart(){
        const addToCartContainer = document.createElement('div');
        addToCartContainer.className = 'add-to-cart-container';

        const addToCartDisplay = document.createElement('h1');
        addToCartDisplay.textContent = 'These seats will be reserved until you finish the order.';

        const addToCartBtn = document.createElement('input');
        addToCartBtn.type = 'submit';
        addToCartBtn.value = 'Add To Cart';

        addToCartBtn.addEventListener('click', (e)=>{
            const activeList = [];
            const activeSeats = document.getElementsByClassName('active');
            for (let item of activeSeats) {
                activeList.push(Number(item.id));
            }
            this.postData('/addToCart', {'activeList':activeList, show_id:this.data[0]['show_id']}).then(this.successCallback)
        })

        this.container.appendChild(addToCartContainer);
        addToCartContainer.appendChild(addToCartDisplay);
        addToCartContainer.appendChild(addToCartBtn);
    }


    async postData(url, data) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        return response.json(); // parses JSON response into native JavaScript objects
    }
    successCallback(result) {
        const cart = new Cart();
        cart.render(result.affectedRows);
    };

    writeRows(){
        const hallContainer = document.createElement('div');
        hallContainer.id = 'hall-container';
        const screen = document.createElement('div');
        screen.className = 'screen';

        console.log(this.data[49])
        const sides = ['left','right'];
        for (let i = 0; i < sides.length; i++) {
            const cinemaSeats = document.createElement('div');
            cinemaSeats.className = 'cinema-seats ' + sides[i];
            for (let k = 0; k < this.rows; k++) {

                const cinemaRow = document.createElement('div')
                cinemaRow.className = 'cinema-row row-' + String(k);

                for (let j = 0; j < this.seats; j++) {
                    const seat = document.createElement('div');
                    seat.className = 'seat ' + this.data[j*k*i].mode;
                    seat.id = String((j+1)*(k+1)*(i+1));
                    cinemaRow.appendChild(seat);
                }
                cinemaSeats.appendChild(cinemaRow);
            }
            hallContainer.appendChild(cinemaSeats);

        }
        this.container.appendChild(screen)
        this.container.appendChild(hallContainer);

        this.setSeatListener();
    }

    setSeatListener(){
        $('.cinema-seats .seat').on('click', function() {
            $(this).toggleClass('active');
        });
    }
}