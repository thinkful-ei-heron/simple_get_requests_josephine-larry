'use strict';


//pass in num to fetch a 'num' amount of random pics
function getDogImage(num) {

  //sends a GET request to the url below
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)

    //translates response into json format
    .then(response => response.json())

    //responseJson is the reponse in json format
    //we want to call displayHtml and pass in the message property of the responseJson object
    //responseJson.message is an array of urls
    .then(responseJson => displayHtml(responseJson.message))

    //if there's an uncaught error somewhere above notify user error
    .catch(error => alert('Something went wrong. Try again later.'));
}

//this function updates the DOM, outputs to user
function displayHtml(JsonArr) {

  //declare empty string variable
  let  str = '';

  //use for loop to insert each url into an img tag to display in the html
  for (let i = 0; i < JsonArr.length; i++){
    str +=  `<img src="${JsonArr[i]}" alt="doggo"></img>`;
  }
  //insert html into dog-images section in index.html
  $('#dog-images').html(str);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //stores the input value in the variable num
    let num = $('input:text').val();

    //only wants input values between 1 and 50, only execute code if num is between 1 and 50
    if(num <= 0){
      alert ('error');
    } else if (num > 50) {
      alert ('error');
    } else getDogImage(num);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});