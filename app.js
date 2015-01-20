"use strict";
$( document ).ready(function() {


  $('.container').on('click', '.fa-play', function() {
    var id = $(this).data('id')
    document.getElementById(id).play()
    $('.fa').removeClass('fa-stop').addClass('fa-play');
    $(this).removeClass('fa-play').addClass('fa-stop');
    var title = $(this).data('title')
    $('.headZ').html("Now Playing: " + title )
  });

  $('.container').on('click', '.fa-stop', function() {
    var id = $(this).data('id')
    document.getElementById(id).pause()
    $(this).removeClass('fa-stop').addClass('fa-play');
    $('.headZ').html("Select a song!")
  });

  $.getJSON('data.json', function(tracks) {
    var $tracksTemplate = $('#tracksTemplate').html();
    var newHTML = Mustache.to_html($tracksTemplate, tracks);
    $('.player').html(newHTML);
  });

  $.getJSON('data.json', function(id) {
    var $headerTemplate = $('#headerTemplate').html();
    var newHTML = Mustache.to_html($headerTemplate, id);
    $('.header').html(newHTML);
  });





    // $(this).children("audio").trigger('play');
    // $(this).children("audio").trigger('pause');












  //
  // document.body.onload = addElement;
  //
  // function addElement () {
  //   // create a new div element
  //   // and give it some content
  //   var newDiv = document.createElement("div");
  //   var newContent = document.createTextNode("Hi there and greetings!");
  //   newDiv.appendChild(newContent); //add the text node to the newly created div.
  //
  //   // add the newly created element and its content into the DOM
  //   var currentDiv = document.getElementById("header");
  //   document.body.insertBefore(newDiv, currentDiv);
  // }



      // WILL PAUSE A JAM
    // document.getElementById('jam').pause();


});
