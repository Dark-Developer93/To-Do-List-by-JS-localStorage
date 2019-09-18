var enterButton = document.getElementById("enter"); //select the enter button
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
//var item = document.getElementsByTagName("li");
const button = document.querySelector(".button");
let itemsArray = localStorage.getItem('input') ? JSON.parse(localStorage.getItem('input')) : [];
console.log(itemsArray)

localStorage.setItem('input', JSON.stringify(itemsArray));
console.log(localStorage)
const data = JSON.parse(localStorage.getItem('input'));
console.log(data)

enterButton.onclick = function() {
	addListAfterClick();
}


input.addEventListener("keypress", addListAfterKeypress);

data.forEach(input => {
	createListElement(input, false);
});

button.addEventListener('click', function () {
	localStorage.clear();
	console.log(localStorage)
	while (ul.firstChild) {
	  ul.removeChild(ul.firstChild);
	}
	itemsArray = [];
  });

function getInputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement(text, isNew = true) {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(text)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul


	if (isNew) {
		console.log('new item',text)
		itemsArray.push(text);
		localStorage.setItem('input', JSON.stringify(itemsArray))
		console.log(localStorage.input)
	};


	input.value = ""; //Reset text input field

	

	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (getInputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement(input.value);
	}
}

function addListAfterKeypress(event) {
	if (getInputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement(input.value);
	} 
}




// // change the list to a string by json
// localStorage.setItem('listname', JSON.stringify(person));

// // Check browser support for local storage
// if (typeof(Storage) !== "undefined") {
// 	// Store
// 	localStorage.setItem("lastname", "Smith");
// 	// Retrieve
// 	document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//   } else {
// 	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//   }

// // change the string to a to the list by json
// JSON.parse(window.localStorage.getItem('listname'));