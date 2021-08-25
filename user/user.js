class User {
    constructor(searchData) {
        this.searchData = searchData;
    }

    getUserData(){
        if (this.validate()){
            return this.getUserInfo();
        }
    }

    getUserInfo(){
        return {name: this.searchData['name']};

    }

    validate(){
        return true
    }
}