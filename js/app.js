
let score = 0
function q1() {



  let userName = prompt("Are you Hani?");

  switch (userName.toUpperCase()) {

    case 'YES':
    case 'Y':
      console.log('yaaaaay to me ');
      alert('yaaaaay to me');
      score++;
      break;
    case 'NO':
    case 'N':
      alert('sorry !!');
      console.log('sorry !!');
      break;
    default:
      alert('can you please tell e your name');
      console.log('can you please tell e your name');
      break;
  }
  console.log(userName);

  // let userName=prompt("whats your name?");
  let anotherUser = ("");
  if (userName || anotherUser) {
    alert('hello' + userName);
  }

}

q1();
function q2() {



  let graduateYear = prompt("did you think  i graduate in 2011?");
  switch (graduateYear.toUpperCase()) {

    case 'YES':
    case 'Y':
      console.log('good guuss');
      alert('good guuss');
      score++;
      break;
    case 'NO':
    case 'N':
      alert('you don\'t know me well');
      console.log('you don\'t know me well');
      break;
    default:
      alert('try again');
      console.log('try again');
      break;
  }
  console.log(graduateYear);
}
q2();
function q3() {


  let jordanGirl = prompt("Am i from Jordan?");
  switch (jordanGirl.toUpperCase()) {

    case 'YES':
    case 'Y':
      console.log('yup that\'s right');
      alert('yup that/s right');
      score++;
      break;
    case 'NO':
    case 'N':
      alert('don\'s say that');
      console.log('don\'s say that');
      break;
    default:
      alert('nupe');
      console.log('nupe');
      break;
  }
  console.log(jordanGirl);
}
q3();

function q4() {


  let Travel = prompt("Do i love traveling?");
  switch (Travel.toUpperCase()) {

    case 'YES':
    case 'Y':
      console.log('yaaaaaay');
      alert('yaaaaaay');
      score++;
      break;
    case 'NO':
    case 'N':
      alert('no , you are wrong');
      console.log('no , you are wrong');
      break;
    default:
      alert('guess again');
      console.log('guess again');
      break;
  }
  console.log(Travel);
}
q4();
function q5() {


  let univarsity = prompt("My university was SUST?");
  switch (univarsity.toUpperCase()) {

    case 'YES':
    case 'Y':
      console.log('great ');
      alert('great');
      score++;
      break;
    case 'NO':
    case 'N':
      alert('do not say that');
      console.log('do not say that');
      break;
    default:
      alert('guess what you are wrong');
      console.log('guess what you are wrong');
      break;
  }
  console.log(univarsity);

}
q5();
function q6() {

  for (let i = 0; i <= 4; i++) {
    let manyYears = prompt("how many years expariane?");
    if (manyYears == 8) {
      score++
      alert('good job you guess it correct');
      break;

    } else if (manyYears <= 8) {
      alert('too low');

    } else if (manyYears >= 8) {
      alert('too high');
    }

  }
  alert('right answer is' + 8);

}
q6();


let question = prompt("guess my top ten ");
for (let x = 0; x <= 6; x++) {

  let topTen = ['travling', 'sweming', 'reading'];

  for (let i = 0; i <= topTen.length; i++) {

    console.log(question);

    if (topTen[i] == question) {
      score++
      alert('good job');
      break;
    } else {

      question = prompt(' try again ')
    }
  }
}

alert('score is ' + score);

