var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

var newPerson = new person();
newPerson.firstName = 'Jun';
newPerson.lastName = 'Zheng';