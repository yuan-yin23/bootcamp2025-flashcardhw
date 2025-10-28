const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    if(showingTerm){
        let flashcard = document.getElementById("flashcard")
        flashcard.innerText = `${flashcards[currentIndex].term}`
    }
    else{
        let flashcard = document.getElementById("flashcard")
        flashcard.innerText = `${flashcards[currentIndex].definition}`
    }
}

// The rest of the code you will write is apart of event listeners

// if user clicks on card, display definition
document.getElementById("flashcard").addEventListener("click", function(){
    if(showingTerm == true){
        showingTerm = false
    }
    else{
        showingTerm = true
    }
    displayCard()
})

// if user clicks on "Next"
document.getElementById("next-btn").addEventListener("click", function(){
    currentIndex = (currentIndex + 1) % flashcards.length
    showingTerm = true
    displayCard()
})

// if user clicks on "Previous"
document.getElementById("prev-btn").addEventListener("click", function(){
    if(currentIndex == 0){
        currentIndex = flashcards.length - 1
    }
    else{
        currentIndex = (currentIndex - 1) % flashcards.length
    }
    showingTerm = true
    displayCard()
})

// if user clicks on "Add Card"
document.getElementById("add-card-btn").addEventListener("click", function(){
    let newTerm = document.getElementById("new-term")
    let newDef = document.getElementById("new-definition")
    let newCard = {term: newTerm.value, definition: newDef.value}
    newTerm.value = ""
    newDef.value = ""
    flashcards.push(newCard)
    
    displayCard()
})


// This line will display the card when the page is refreshed
window.onload = displayCard;
