/**
 * Name: Ana Carcelen Martinez
	File: main.js
	Date: 21, November, 2023
	This file has all the variables and functions needed to run the silly story generator
    We will declare variables, functions, and if statements.
 */

//Initial variables and functions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//Strings

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."; 
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas" ];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

//Event Listener

randomize.addEventListener('click', result);

function result() {

    // Add new variable newStory to modify original text
    let newStory = storyText;  

    //Random values from arrays insertx, inserty, insertz
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    //Replace 3 place holders
    newStory = newStory.replaceAll(":insertx:",xItem);
    newStory = newStory.replaceAll(":inserty:",yItem);
    newStory = newStory.replaceAll(":insertz:",zItem);



  if(customName.value !== '') {
    const name = customName.value;
    //Replace 'Bob' with custom name from input
    newStory = newStory.replaceAll('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    //Update weight
    const weight =  `${Math.round(300*0.0714286)} stone`;
    //Update temperature 
    const temperature =  `${Math.round((94-32)*(5/9))} centigrade`;
    //Replace values
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);

  }
  // update textContent property = newStory
  story.textContent = newStory;
  story.style.visibility = 'visible';
}