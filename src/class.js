"use strict"

class User{
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	static countUsers() {
		console.log('There are 50 users');
	}

	register() {
		console.log(this.username + ' is now registered');
	}
}

let bob = new User('bob', 'bob@email.com', '1234');
bob.register();
User.countUsers();

class Member extends User {
	constructor(username, email, password, memberPackage) {
		super(username, email, password);
		this.memberPackage = memberPackage;
	}

	getPackage() {
		console.log(this.username+' is subscribed to '+ this.memberPackage);
	}
}

let abey = new Member('abey','abey@email.com','121212', 'Amazon Prime');
abey.getPackage();
abey.register();