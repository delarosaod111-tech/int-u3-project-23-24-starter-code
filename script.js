// Declare variables below to save the different divs of your story.









// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

let optionOneBtn = document.querySelector('.option-one');
let optionTwoBtn = document.querySelector('.option-two');
let optionThreeBtn = document.querySelector('.option-three')
let optionFourBtn = document.querySelector('.option-four')
let optionFiveBtn = document.querySelector('.option-five')
let optionSixBtn = document.querySelector('.option-six')

let continueBtnScreen = document.querySelector('.continue-button-screen')
let continueBtnScreen2 = document.querySelector('.continue-button-screen2')
let optionOneScreen = document.querySelector('.option-one-screen');
let optionTwoScreen = document.querySelector('.option-two-screen')
let optionEnd = document.querySelector('.option-one-end')
let optionEnd2 = document.querySelector('.option-two-end')
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
});
optionFourBtn.addEventListener('click', function(){
    optionTwoScreen.style.display = 'none';
    continueBtnScreen2.style.display='block';
});
optionFiveBtn.addEventListener('click', function(){
    optionEnd.style.display= 'block';
    continueBtnScreen.style.display ='none';
});
optionSixBtn.addEventListener('click', function(){
    optionEnd2.style.display = 'block';
    continueBtnScreen2.style.display = 'none';



})









// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });