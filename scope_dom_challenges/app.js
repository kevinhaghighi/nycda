// constants
const rightButton = $('.right');
const noImRightButton = $('.no-right');
const hoverButton = $('.hover');
const keypress = $('.keypress');
const password = $('.password');
const submitButton = $('.submit-button');
const username = $('.username');
const passText = $('.passCheck');

// functions
function addText(string){
    const textPara = $('.right-text');
    textPara.html(string);
}
function containsNumber(str) {
    let numberInString = /\d/.test(str);
    return numberInString;
}
function checkUsernameAndPassword () {
    function ifDidNotPass() {
      alert('incorrect');
      passText.html('');
    }
    if(password.val() === '12345678'){
        if(containsNumber(username.val())) {
            passText.html('passed check');
        }
        else {
            ifDidNotPass();
        }
    }
    else {
        ifDidNotPass();
    }
}
//no, I'm right button vs right button
rightButton.on('click', function(){
    addText('I\'m right');
})
noImRightButton.on('click', function(){
    addText('No, I\'m right!');
})

//hover
hoverButton.on('mouseover', function(){
    alert('Hey, I told you not to hover over me!');
})

//keypress
$(document).keypress(function(e){
    keypress.html(e.key);
})

//password check
submitButton.on('click', function(){
  checkUsernameAndPassword();
})
  