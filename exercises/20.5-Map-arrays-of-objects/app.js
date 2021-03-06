let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){

	let hoy = new Date()
	let fechaNacimiento = new Date(person)
	let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
	let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
	if (
	  diferenciaMeses < 0 ||
	  (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
	) {
	  edad--
	}
	return edad
};

console.log(people.map(simplifier));