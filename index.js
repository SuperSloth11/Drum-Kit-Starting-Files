var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; ++i) {
	//code for handling button click
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		makeSound(this.innerHTML);
	});
}

//code for handling keypress
document.addEventListener("keydown", function (event) {
	makeSound(event.key);
});

//code for adding sound by key
function makeSound(key) {
	switch (key) {
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
	}
}
