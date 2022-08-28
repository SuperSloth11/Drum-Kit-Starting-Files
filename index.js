document.addEventListener("keydown", makeSound);
document.addEventListener("click", handleClick);

function handleClick() {
	var numberOfButtons = document.querySelectorAll(".drum").length;
	for (var i = 0; i < numberOfButtons; ++i) {
		document.querySelectorAll(".drum")[i].addEventListener("click", makeSound);
	}
}

function makeSound(event) {
	switch (event.key) {
		case "a":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;

		case "s":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;

		case "d":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;

		case "f":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;

		case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;

		case "k":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;

		case "l":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;

		default:
			console.log(event.key);
			break;
	}
}

/*
function handleClick() {
	var buttonInnerHTML = this.innerHTML;

	switch (buttonInnerHTML) {
		case "a":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;

		case "s":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;

		case "d":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;

		case "f":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;

		case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;

		case "k":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;

		case "l":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;

		default:
			console.log(buttonInnerHTML);
			break;
  }} */
