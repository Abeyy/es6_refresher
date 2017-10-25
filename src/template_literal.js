function capitalizer(stringy) {
	return stringy.toUpperCase();
}

var name = 'Abey';

var template = `<h1> Hello, ${name} </h1>
				<p> ${capitalizer("this paragraph is all caps")} </p>`;

document.getElementById('template').innerHTML = template;