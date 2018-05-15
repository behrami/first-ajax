document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var button = document.querySelector("button");
  var button2 = document.querySelector("button.pingPong");
  var pTag = document.querySelector("p.pingPong");

  var button3 =  document.querySelector("button.count");
  var pTag2 = document.querySelector("p.count");

  button4 = document.querySelector("button.time");
  var pTag3 = document.querySelector("p.time");

  button5 = document.querySelector("button.car");
  var ulTag = document.querySelector("ul.car");

  button.addEventListener('click',function(){

      var request = $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'html'
      });

      request.done(function (responseData) {
        //Here in the callback, we have a variable called responseData
        //that holds the content of the server's response,
        //in this case, a simple string
      });
  });

  button2.addEventListener('click',function(){
    var request = $.ajax({
    url:'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'text'
    });

    request.done(function (responseData) {
      console.log(responseData);
      pTag.innerText = "Done";
    });

    request.fail(function () {
    //In this callback, everyone panic! Our request has failed!
    //Quickly, apologize to the user and try to fix it!
    pTag.innerText = "TriHard";
    });

    request.always(function () {
      //Well, I'm not really sure how that went, and I don't care
      //All I know is, it's over.
      console.log('Hey the request finished');
    });
});

button3.addEventListener('click', function(){
  var request = $.ajax({
  url:'http://first-ajax-api.herokuapp.com/count',
  method: 'GET',
  dataType: 'text'
  });

  request.done(function (responseData) {
    console.log(responseData);
    pTag2.innerText = responseData;
  });

  request.fail(function () {
  pTag.innerText = "TriHard7";
  });

  request.always(function () {
    console.log('Hey the request finished');
  });
});

button4.addEventListener('click', function(){
  var request = $.ajax({
  url:'http://first-ajax-api.herokuapp.com/time',
  method: 'GET',
  data: {timezone: 'Asia/Kolkata'},
  dataType: 'text'
  });

  request.done(function (responseData) {
    console.log(responseData);
    pTag3.innerText = responseData;
  });

  request.fail(function () {
  pTag3.innerText = "TriHard8";
  });

  request.always(function () {
    console.log('Hey the request finished');
  });
});

button5.addEventListener('click', function(){
  var request = $.ajax({
  url:'http://first-ajax-api.herokuapp.com/a_car',
  method: 'GET',
  dataType: 'html'
  });

  request.done(function (responseData) {
    console.log(responseData);
    ulTag.innerHTML += responseData;
  });

  request.fail(function () {
    ulTag.innerText = "TriHard9";
  });

  request.always(function () {
    console.log('Hey the request finished');
  });
});

});
