class Storage {

    static getSearchedUsersFromStorage() {
        //Storegadan kullanıcıları al
        let users;

        if (localStorage.getItem("searched") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('searched'));
        }
        return users;
    }
   
    static addSearchedUserToStorage(name) {


        let data = this.getSearchedUsersFromStorage();
        if (data.indexOf(name) === -1) {
            data.push(name);

        }
        localStorage.setItem("searched", JSON.stringify(data));
    }
    static clearAllSearchedUsersFromStorage() {
        localStorage.removeItem("searched");
    }

}
