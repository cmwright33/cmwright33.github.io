
var weather_url;
var parsedData;

$('.weather').hide();
$(document).ready(function(){


$('.whoops').on('animationend webkitAnimationEnd', loadWeatherReport);
  // resizeBoxes();

  // for(var i = 0; i < 8; i++){

  //   $('.main-container').append("<div class='bounceInUp'><img src='http://lorempixel.com/400/200/'></div>");
  //    // $('.main-container div').each(function(){
  //    //    $(this).css({'-webkit-animation-duration': randomIntFromInterval(1, 5) + 's;',  'animation-duration': randomIntFromInterval(1, 5) + 's;'});
  //    // });
  // }

// $( window ).resize(resizeBoxes);


// function resizeBoxes(){
//   var x = document.body.clientWidth/8;
//   var differnce =  Math.floor(x) - 150;
//   if(differnce > 0 ){
//     $('.main-container div').each(function(){ $(this).css({
//                                                           // 'margin-left': differnce,
//                                                           'height': Math.floor(x),
//                                                           'width': Math.floor(x)
//                                                           });
//     });

//   }



// }


function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


/*

var x = document.body.clientWidth/8
var differnce =  Math.floor(x) - 150;
if(differnce > 0 ){
  $('.main-container div').each(function(){ $(this).css('margin-left', differnce) })
}

*/


if(navigator.geolocation){

  navigator.geolocation.getCurrentPosition(function(position) {
    var local = position.coords.latitude + ',' +position.coords.longitude;
     weather_url = "http://api.wunderground.com/api/eac3fd7e9d88b803/geolookup/conditions/q/"+ local +".json";
     setTimeout(callWeather, 100);
  });

}else{
 weather_url = "http://api.wunderground.com/api/eac3fd7e9d88b803/geolookup/conditions/q/NY/New_York.json";
 setTimeout(callWeather, 100);
}

});



function callWeather(){
  $.ajax({
  url : weather_url,
  dataType : "jsonp",
  success : function(parsed_json) {

  var location = parsed_json['location']['city'];

  $('#w_location').html(location);
  var temp_f = parsed_json['current_observation']['temp_f'];

  $('#w_tempature').html(temp_f);
  var current_condition = parsed_json['current_observation']['icon_url'];
   $('#w_icon').attr("src" , current_condition);
  // alert("Current temperature in " + location + " is: " + temp_f + " current conditions are: "+ current_condition);
   setTimeout(loadWeatherReport, 100);
  }
  });

}


function loadWeatherReport(){
  setTimeout(function(){
      $('.weather').fadeIn(500);
      $('.spinner').fadeOut(500);
  }, 2000);

}
