let graduateYear = prompt("did you think  i graduate in 2011?");
switch (graduateYear.toUpperCase()) {

  case 'YES':
  case 'Y':
    console.log('good guuss');
    alert('good guuss');
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

let jordanGirl = prompt("Am i from Jordan?");
switch (jordanGirl.toUpperCase()) {

  case 'YES':
  case 'Y':
    console.log('yup that\'s right');
    alert('yup that/s right');
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

let Travel = prompt("Do i love traveling?");
switch (Travel.toUpperCase()) {

  case 'YES':
  case 'Y':
    console.log('yaaaaaay');
    alert('yaaaaaay');
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

let univarsity = prompt("My university was SUST?");
switch (univarsity.toUpperCase()) {

  case 'YES':
  case 'Y':
    console.log('great ');
    alert('great');
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



for (let i = 0; i < 4; i++) {
  let manyYears = prompt("how many years expariane?")
  if (manyYears == 8) {
    alert('good job you guess it correct');
    break;

  }
}


