// See'N Say StoryMaker - Assignment 1 
// Natasha Bertrand - 200458345

// word buttons references
const whoBtn = document.querySelector("#btn-who");
const actBtn = document.querySelector("#btn-action");
const whereBtn = document.querySelector("#btn-where");
const objBtn = document.querySelector("#btn-object");
const endBtn = document.querySelector("#btn-ending");


// Other buttons references
const storyBtn = document.querySelector("#btn-story");
const randomBtn = document.querySelector("#btn-random");
const storyText = document.querySelector("#story-text");
const resetBtn = document.querySelector("#btn-reset");
const deleteBtn = document.querySelector("#btn-delete");

// Previous Stories
const storiesList = document.querySelector("#stories-list");
const savedStories = [];

// Word Arrays
const whoWords = ["A little bear", "A brave knight", "A tiny frog", "A sleepy wizard", "A curious fox", "A grumpy dragon", "A lost princess"];
const actWords = ["happily skipped", "quietly crept", "boldly marched", "suddenly tumbled", "nervously tiptoed", "joyfully danced", "slowly wandered"];
const whereWords = ["through the forest", "across a rainbow", "into a dark cave", "over the mountains", "beneath the ocean", "inside a giant castle", "along a winding river"];
const objWords   = ["carrying a lantern", "holding a treasure map", "wearing a giant hat", "dragging a sled", "clutching a magic wand", "balancing a stack of books", "hiding a shiny sword"];
const endWords   = ["found a hidden door", "discovered a golden key", "met a talking fox", "fell fast asleep", "stumbled upon a buried chest", "made a brand new friend", "lived happily ever after"];

// Index counters
let whoCount = {value: 0};
let actCount = {value: 0};
let whereCount = {value: 0};
let objCount = {value: 0};
let endCount = {value: 0};

// Arrays for the arrays
const countArrays = [whoCount, actCount, whereCount, objCount, endCount];
const buttonsArrays = [whoBtn, actBtn, whereBtn, objBtn, endBtn];
const wordArrays = [whoWords, actWords, whereWords, objWords, endWords];

// Cycle through array when corresponding button is pressed 
function cycleWords(array, counter, btn){
    counter.value++;
    if(counter.value >= array.length){
        counter.value = 0;
    }
    btn.textContent = array[counter.value];
}

// Word buttons event listener
whoBtn.addEventListener("click", function() { cycleWords(whoWords, whoCount, whoBtn); });
actBtn.addEventListener("click", function() { cycleWords(actWords, actCount, actBtn); });
whereBtn.addEventListener("click", function() { cycleWords(whereWords, whereCount, whereBtn); });
objBtn.addEventListener("click", function() { cycleWords(objWords, objCount, objBtn); });
endBtn.addEventListener("click", function() { cycleWords(endWords, endCount, endBtn); });

// Display the story when done
function storyTeller(){
    let story = `${whoBtn.textContent} ${actBtn.textContent} ${whereBtn.textContent} ${objBtn.textContent} and ${endBtn.textContent}.`;

    storyText.textContent = story;
}

// Event listener for story button
storyBtn.addEventListener("click", storyTeller);


// random function to create random story
function randomStory(){
    for (let i = 0; i < buttonsArrays.length; i++) {
        let randNum = Math.floor(Math.random() * wordArrays[i].length);
        countArrays[i].value = randNum;
        buttonsArrays[i].textContent = wordArrays[i][randNum];
    }
    storyTeller();
}

// Listener event for random story
randomBtn.addEventListener("click", randomStory);

//Reset Function
function resetStory(){
    // Save current story before resetting
    let currentStory = storyText.textContent;

    if(currentStory !== ""){
        // Only save if there is actually a story to save
        let p = document.createElement("p");
        p.textContent = currentStory;
        storiesList.appendChild(p);
    }

    for(let i = 0; i < buttonsArrays.length; i++){
        countArrays[i].value = 0;
        buttonsArrays[i].textContent = wordArrays[i][0];
    }
    storyText.textContent = "";
}

// Listener event for reset button
resetBtn.addEventListener("click", resetStory);

// Delete all previous stories
function deleteStories(){
    storiesList.innerHTML = "";
}

deleteBtn.addEventListener("click", deleteStories);