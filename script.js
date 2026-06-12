// Declare variables below to save the different divs of your story.









// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

let optionOneBtn = document.querySelector('.option-one');
let optionTwoBtn = document.querySelector('.option-two');
let optionThreeBtn = document.querySelector('.option-three')
let optionFourBtn = document.querySelector('.option-four')

let continueBtnScreen = document.querySelector('.continue-button-screen')
let optionOneScreen = document.querySelector('.option-one-screen');
let optionTwoScreen = document.querySelector('.option-two-screen')
let opening = document.querySelector('.story-opening');
optionOneBtn.addEventListener('click', function(){

opening.style.display = 'none';
optionOneScreen.style.display = 'block';
    
optionOneBtn.style.display = 'none'
optionTwoBtn.style.display = 'none'

});
optionTwoBtn.addEventListener('click', function(){
    opening.style.display = 'none';
optionTwoScreen.style.display = 'block';
    
optionOneBtn.style.display = 'none'
optionTwoBtn.style.display = 'none'
});
optionThreeBtn.addEventListener('click',function(){
  optionOneScreen.style.display = 'none';
continueBtnScreen.style.display = 'block';
})
optionFourBtn.addEventListener('click', function(){
    optionTwoScreen.style.display = 'none';
    continueBtnScreen.style.display='block';
})








// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });