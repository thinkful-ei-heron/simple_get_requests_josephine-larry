'use strict';

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayHtml(responseJson.message))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayHtml(JsonArr) {
  let  str = '';
  for (let i = 0; i < JsonArr.length; i++){
    str +=  `<img src="${JsonArr[i]}" alt="doggo"></img>`;
  }
  //replace the existing image with the new one
  $('#dog-images').html(str);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let num = $('input:text').val();
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