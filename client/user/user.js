class User {
    constructor(user_data) {
        this.data = user_data;
    }

    get name(){
        return this.data.name;
    }

    get email(){
        return this.data.email;
    }

    get birthdate(){
        return this.data.birthdate;
    }
}