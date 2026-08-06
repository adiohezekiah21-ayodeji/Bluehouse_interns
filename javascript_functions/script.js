var person = {
	name:"Hezekiah",
	sayHi(){
		return `Hi, I'm ${this.name}`;
	}
};
alert(person.sayHi());