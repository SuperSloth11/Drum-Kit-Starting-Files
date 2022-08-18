var numberOfButtons = document.querySelectorAll(".drum").length;

function handleClick() {
  alert("I got clicked.");
}

for (var i = 0; i < numberOfButtons; ++i) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
