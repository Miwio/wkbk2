var user = {
    firstName: "Steve",
    lastName: "Tan",
    email: "steve.tan@gmail.com",
    phone: "93851853",
    telegram: "@steve.tan",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

function showProfile(){
    document.getElementById("profile").innerHTML = "Full Name: " +
    user.fullName() + `<br>` + "Email: " + user.email + `<br>` 
    + "Phone: " + user.phone + `<br>` + "Telegram: " + user.telegram; 
};