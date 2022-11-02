let randomNumber = Math.round(Math.random()*100);
let click = 0;                            // To keep a record for clicks on Check Me button

// Adding Event when check me button is clicked
document.body.querySelector("#check-me-btn").addEventListener("click", display_high_low);


// Function for storing the value entered by user, passing it to compare function & to update the click
function display_high_low(){
    
    click += 1;
    let inputGuess = document.body.querySelector("#input-box").value;

    // Function to compare the value entered by user & the random value
    compare(inputGuess, click);
    
}

// Adding Event when Restart button is clicked
document.body.querySelector("#reset-button").addEventListener("click", function(){
    window.location.reload();           // for reloading the window
});



function compare(inputGuess, click) {

    // This while loop would make sure that the 'p' tag is made only one time for the status(low or high)
    while(click == 1){
        let statusPara = document.createElement("p");                           // create element p
        document.querySelector("#status").appendChild(statusPara);              // appending it as the child of element with the id of 'status'
        break;
    }

    show_guessed_answers(inputGuess);


    let statusParaSelected = document.querySelector("#status p");

    if(inputGuess == randomNumber){
        
        statusParaSelected.innerHTML = "Awesome job, you got it!";
        statusParaSelected.classList.add("green");

    } 
    else if(inputGuess < randomNumber){

        statusParaSelected.innerHTML = "Your guess is too low!";
        statusParaSelected.classList.add("yellow");

    } 
    else if(inputGuess > randomNumber){

        statusParaSelected.innerHTML = "Your guess is too high!";
        statusParaSelected.classList.add("yellow");

    } 
    else{

        statusParaSelected.innerHTML = "Wrong Input!";
        statusParaSelected.classList.add("wrong");
        
    }
}


// Function to show the history of the guessed ansers
function show_guessed_answers(inputGuess){

    let guessedAnswers = document.createElement("p");
    document.querySelector("#guessed-answers").prepend(guessedAnswers);
    let text = document.createTextNode("You guessed " + inputGuess);
    guessedAnswers.appendChild(text);

}


