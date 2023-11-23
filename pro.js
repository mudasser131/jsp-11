const btn = document.getElementById("btn");


function createElementOnClick() {
    // Create a new paragraph element
    var paragraph = document.createElement("h2");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore)+1;
// Set the text content of the paragraph
    paragraph.textContent = "The couple's love percentage is = " + lovescore+"%";

    // Append the paragraph to the body or another desired container

   var container = document.getElementById("container")
    container.appendChild(paragraph);
}
btn.addEventListener("click", createElementOnClick)