// Define the keys for the keyboard
const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];
  
  // Get the keyboard container element
  const keyboardContainer = document.getElementById('keyBoard');
  
  // Loop through each row of keys
  keys.forEach(row => {
    // Create a div element for the row
    const rowElement = document.createElement('div');
    
    // Loop through each key in the row
    row.forEach(key => {
      // Create a button element for the key
      const keyElement = document.createElement('button');
      keyElement.setAttribute("id",key)
      
      // Set the text content of the button to the key character
      keyElement.textContent = key;
      
      // Add a click event listener to the button
      keyElement.addEventListener('click', () => {
        document.getElementById("userguss").value += key;
      });
      
      // Add the key button to the row
      rowElement.appendChild(keyElement);
    });
    
    // Add the row to the keyboard container
    keyboardContainer.appendChild(rowElement);
  });
  


// End of the keyboard

// counting the user mistakes
var mistakes = 0;

// function that return a random item from the array
function getRandomItem(){
    let Randomindex = Math.floor(Math.random() * fruits.length);
    return fruits[Randomindex];
}

let fruits = ["kiwi", "apple", "mango","carrot","brocoli","onion","ketchup", "banana", "apricot", "cherry", "figs", "jujube", "orange", "papaya", "plum"];
//getting a random item
var item = document.getElementById("guessed").value = getRandomItem();
const itemArr = Array.from(item)

//create a placeholder for the correct words

var placeholders = document.getElementById("correctLetters");
for(i in item){
    const LetterPlaceholder = document.createElement("div");
    LetterPlaceholder.setAttribute("class","col letter")
    placeholders.appendChild(LetterPlaceholder);
}
var collectionOfLetters = document.getElementsByClassName('letter')


// checking the user input
function checkGuess(){
    var userGuess = (document.getElementById("userguss").value).toLowerCase();

    var IsthereLetter = false;
    for(i in userGuess){
        for(j in itemArr){
            // I'm checking if the item includes that letter
            if(userGuess[i] === itemArr[j]){
                collectionOfLetters[j].innerText = userGuess[i];
                IsthereLetter = true;
            }
        }
        }
   
        document.getElementById("userguss").value = " ";

        if(IsthereLetter === false){
            mistakes ++;
            (document.getElementById('Hangman')).style.display = " block";
            (document.getElementById(`mistake-${mistakes}`)).style.display = " block";
        }
        var Guess = '';
        for( i in collectionOfLetters){
            if(collectionOfLetters[i].innerText !== undefined){
                Guess += collectionOfLetters[i].innerText;
            }
        }

        if(Guess.length == item.length){
            if(Guess === item){
                correctAnswer()
            }
            else{
                document.getElementById("guessed").type = "text"
                showLoserIcon()
            }
    }

        if(mistakes >= 5){
            document.getElementById('userguss').readOnly = true;
            document.getElementById("check").disabled = true;
            document.getElementById("guessed").type = "text";
        }

        disableLetters(userGuess)
    }

function disableLetters(disabledLetters){
    let disabledLettersArry =  Array.from(disabledLetters)

    let newArry = disabledLettersArry.filter(letter => { return letter.trim().length > 0 })

    newArry.forEach(button => document.getElementById(button).disabled = true )
}


function correctAnswer(){
    (document.getElementById('Hangman')).style.display = " none";
    document.getElementById("guessed").type = "text"
    showWinIcon();
}


function showWinIcon(){
    let image = document.getElementById("winner");
    image.style.display = " block";
}


function PlayAgain(){
    location.reload();
}