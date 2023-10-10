var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var removeButton = document.createElement("button");
	removeButton.appendChild(document.createTextNode("Remove"))

	// append text to li
	li.appendChild(document.createTextNode(input.value + " "));

	// append remove button to life
	li.appendChild(removeButton);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", function(event) {
	if (event.target.tagName === "BUTTON") {
		ul.removeChild(event.target.parentElement);
	}

	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
});