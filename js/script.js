let correctMessage = false;
const answer = 'YES'; 
const warning = alert('Warning!! You can use only one "YES" and one "NO".');
const message = prompt('Would you like to go out on a date with me?');

const main = document.querySelector('main');

if ( message.toUpperCase() === answer ) {
  correctAnswer = true;
  alert('Ye ye ye.... We are going out!');
} else if ( message !== answer ) {
  let answerMore = prompt('Are you lying to me?');
  if ( answerMore.toUpperCase() === answer ) {
    correctAnswer = true;
    alert('Ye ye ye.... We are going out!');
  }else if ( answerMore !== answer ) {
    alert('Rember...! You can use only one "NO".');
    let answerMore = prompt('Are you lying to me?');
    if ( answerMore.toUpperCase() === answer ){
      correctAnswer = true;
      alert('Ye ye ye.... We are going out!');
    } 
  } 
} 

if (correctAnswer){
  let dateTime = prompt('Enter your available day and time.');
  
  if (dateTime === ''){
    alert('You must enter your available date and time.');
    let dateTime = prompt('Enter your available date and time.');

    main.innerHTML = `
    <h2>Your available date and time for our date is on ${dateTime}.</h2>
    `;
  } else {
    main.innerHTML = `
    <h2>Your available date and time for our date is on ${dateTime}.</h2>
    `;
  }
}
