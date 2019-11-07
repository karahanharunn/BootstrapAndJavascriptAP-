const githubForm = document.getElementById("github-form");
const githubInput = document.getElementById("githubname");
const githubClear = document.getElementById("clear-last-users");

const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();
eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    githubClear.addEventListener("click", clearAllSearched);

    window.addEventListener('DOMContentLoaded', getAllSearched);

}
function getData(e) {

    let username = githubInput.value.trim();
    if (username === "")
        alert("Lütfen isim giriniz");
    else {

        github.getUserAsync(username)
            .then(data => {
                if (data.user.message === "Not Found") {
                    ui.showError("Kullanıcı bulunamadı");
                } else {
                    ui.addSearchedUserToUI(username);
                    Storage.addSearchedUserToStorage(username);
                    ui.showInfo(data.user);
                    ui.showRepo(data.repo);
                }
            })
            .catch(err => console.log(err));
    }


    ui.clearInput();
    e.preventDefault();
}
function clearAllSearched() {
    if (confirm("Emin misiniz")) {
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}
function getAllSearched() {


    let users = Storage.getSearchedUsersFromStorage();

    let result = "";
    users.forEach(user => {
        result += ` <li class="list-group-item">${user}</li>`
    })
    console.log(result);
    lastUsers.innerHTML = result;
}