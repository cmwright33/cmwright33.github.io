 $(function(){

    $('#my-title').hide().slideDown(1000);
    // This to load the hexs on delay
    var min = 1200, max = 1800;
    var delay = Math.floor(Math.random() * (max - min + 1) + min);

   // $('.hex').hide().delay(delay).fadeIn(500);
    // $('.hex').hide().fadeIn(3000);

    $('#project-1').hide().delay(500).fadeIn(850);
    $('#project-2').hide().delay(1000).fadeIn(1000);
    $('#project-3').hide().delay(1300).fadeIn(1000);
    $('#contact-me-linkdin').hide().delay(400).fadeIn(800);
    $('#contact-me-github').hide().delay(700).fadeIn(1000);
    $('#contact-me-twitter').hide().delay(900).fadeIn(1000);
    $('#empty-space-1').hide().delay(600).fadeIn(1000);
    $('#empty-space-2').hide().delay(800).fadeIn(1000);
    $('#contact').hide().delay(1200).fadeIn(1000);
    $('#me').hide().delay(900).fadeIn(1000);
    $('#resume').hide().delay(1100).fadeIn(1000);

    $('#header_container').hide().slideDown("slow");
    // $('#me').attr('background-image: url(images/me.jpg)');

    // $(".hex").mouseover(function(){
    //         $(this).toggleClass("hover");
    //     }).mouseout(function(){
    //         $(this).toggleClass("hover");
    // });

        // This is supposed to chagee the image on mouseover
    // $("#me").mouseover(function(){
    //   (this).css('background-image','url(images/44l.png)');
    // });

    // $.get('ajax.html', function(data){
    //       modal.open({content: data});
    //     });


        $('#project-1').on('click', function(){
          modal.open({content: "<div><h2>Bar-Mapper</h2><img src=\"images/rsz_bar-mapper.png\"/><p></p><button><a href=\"http://barmapper.herokuapp.com\">Heroku Link</a></button><button><a href=\"https://github.com/cmwright33/bar_yelper\">Github Link</a></button><h3><p>Ever wish you could find the best bars in a neigheborhood? Ever wish you could plan out a beer crawl</p><p>to the those bars? Well this is the app for you! Find top-rated bars in Manhatten</p><p> and Map out a pub route using BarMapper Today!</p></h3><h3><ul><li>Rails app</li><li> three models</li><li> Google Maps</li><li> Google Directions api</li><li> Yelp api</li><li> User login and valdidations</li></ul></h2></div>"});
        });

         $('#project-2').on('click', function(){
          modal.open({content: "<div><h2>The Perfect Pint</h2><img src=\"images/rsz_perfect_pint.png\"/><p></p><button><a href=\"http://barmapper.herokuapp.com\">Heroku Link</a></button><button><a href=\"https://github.com/cmwright33/bar_yelper\"> Github Link</a></button><h3><p>Find your favorite beer by flavor. Enter your search criteria into this Ruby powered seach <p></p>engine and find the beer of your dreams! Additionally search by beer name, brewery</p><p> and other criteria!</p></h3><h3><ul><li>Rails app</li><li>Three models</li><li>Search Powered by Flavor</li><li>Webscrapping by Nokogiri</li><li>Custom Rake Task</li><li>User login</li></ul></h3></div>"});
        });

          $('#project-3').on('click', function(){
          modal.open({content: "<div style=\"text-align: center\"><h2>name: TBD </h2><button><a href=\"http://this.herokuapp.com\">Heroku Link </a></button><img src=\"http://www.makeathumbnail.com/thumbnails/image194101.png\"/><button><a href=\"https://github.com/cmwright33/this_repo\">Github Link</a></button><h2>description: TBD </h2><h2>specs: TBD</h2></div>"});
        });

          // sort and highlight about page
          $('#resume').on('click', function(){
          modal.open({content: "<h1>Resume</h1><img src=\"images/rsz_resume.png\"/>"});
        });

          // sort and highlight the contact info
          $('#contact').on('click', function(){
          modal.open({content: " <h2>Phone: 401-787-6425</h2><h2> Email: cmwright33@gmail.com</h2><button>Email</butto>"});
        });



        $("#my-title").on('click', function() {
            // do fading 3 times
            for(i=0;i<3;i++) {
               $('#me').fadeTo('slow', 0.25).fadeTo('slow', 1.0);
                 $('#me').removeAttr('style');
               $('#me').attr("style", "background-image: url(images/me.jpg); display: block;");
                 $('#me').removeAttr('style');
               $('#me').attr("style", "background-image: url(images/44l.png); display: block;");
            }

          });

          // click on needs to be changed
          //sort and highlight the projects
          $("#cool-projects").on('click', function(e) {
            // do fading 3 times
            for(i=0;i<3;i++) {
              $('#project-1').fadeTo('slow', 0.5).fadeTo('slow', 1.0);
              $('#project-2').fadeTo('slow', 0.5).fadeTo('slow', 1.0);
              $('#project-3').fadeTo('slow', 0.5).fadeTo('slow', 1.0);
              $('#empty-space-1').fadeTo('slow', 0.25).fadeTo('slow', 1.0);
              $('#empty-space-2').fadeTo('slow', 0.25).fadeTo('slow', 1.0);
            }
          });

            $("#contact-me").on('click', function(e) {
            // do fading 3 times
            for(i=0;i<3;i++) {
              $('#contact-me-linkdin').fadeTo('slow', 0.25).fadeTo('slow', 1.0);
              $('#contact-me-github').fadeTo('slow', 0.25).fadeTo('slow', 1.0);
              $('#contact-me-twitter').fadeTo('slow', 0.25).fadeTo('slow', 1.0);
              $('#contact').fadeTo('slow', 0.25).fadeTo('slow', 1.0);
            }

          });

           // click on needs to be changed
          $("#about").on('click', function(e) {
            // do fading 3 times
            for(i=0;i<3;i++) {
              $('#me').fadeTo('slow', 0.25).fadeTo('slow', 1.0);
              $('#resume').fadeTo('slow', 0.25).fadeTo('slow', 1.0);
            }
          });


          // on click reveal that beautiful face and some text about me
             $('#me').on('click', function(){
          modal.open({content: "<img src=\"images/rsz_me.png\"/><h2>About Me</h2><p>Born and raised in Rhode Island, I am a New Englander through. I'm </p><p> not sure what to put here so I am going to write a bunch of </p><p>non-sense about stuff that I like to do when I am procrastinating.</p><p>I Like to watch tv for hours, I like to make elaborate meals that are </p><p>delicious but aren't at all asthetically pleasing</p>"});
        });
             // hiding all the hex text
          $('#background-text-1').hide();
          $('#background-text-2').hide();
          $('#background-text-3').hide();
          $('#background-text-4').hide();
          $('#background-text-5').hide();
          $('#background-text-6').hide();
          $('#background-text-7').hide();
          $('#background-text-8').hide();
          $('#background-text-9').hide();
          $('#background-text-10').hide();
          $('#background-text-11').hide();



        // 11 diffrent text ids linking each to the text that will be uncovered on hover
         $("#contact-me-linkdin").mouseover(function(){
           whiteOpacityExpandHex(this);
             $('#background-text-1').show();
        }).mouseout(function(){
            normalizeHex(this);
             $('#background-text-1').hide();
         });

         $("#project-2").mouseover(function(){
            opacityExpandHex(this);
             $('#background-text-2').show();
        }).mouseout(function(){
            normalizeHex(this);
             $('#background-text-2').hide();
         });

        $("#empty-space-1").mouseover(function(){
            opacityExpandHex(this);
             $('#background-text-3').show();
        }).mouseout(function(){
            normalizeHex(this);
             $('#background-text-3').hide();
        });


        $("#contact-me-github").mouseover(function(){
            $(this).css('opacity', 0.4);
             $('#background-text-4').show();
        }).mouseout(function(){
            normalizeHex(this);
             $('#background-text-4').hide();
        });

          $("#empty-space-2").mouseover(function(){
            opacityExpandHex(this);
             $('#background-text-5').show();
        }).mouseout(function(){
            normalizeHex(this);
             $('#background-text-5').hide();
        });


        $("#me").mouseover(function(){
            $(this).toggleClass("hover");
            $('#me').removeAttr('style');
            $('#me').attr("style", "background-image: url(images/me.jpg); display: block;");
             $('#background-text-6').show();
        }).mouseout(function(){
            $(this).toggleClass("hover");
            $('#me').removeAttr('style');
            $('#me').attr("style", "background-image: url(images/44l.png); display: block;");
             $('#background-text-6').hide();
        });


        $("#project-1").mouseover(function(){
            opacityExpandHex(this);
             $('#background-text-7').show();
        }).mouseout(function(){
           normalizeHex(this);
             $('#background-text-7').hide();
        });

        $("#resume").mouseover(function(){
            opacityExpandHex(this);
             $('#background-text-8').show();
        }).mouseout(function(){
            normalizeHex(this);
             $('#background-text-8').hide();
        });

        $("#contact").mouseover(function(){

             $('#background-text-9').show();
             opacityExpandHex(this);
        }).mouseout(function(){
             $('#background-text-9').hide();
             normalizeHex(this);
        });

        $("#contact-me-twitter").mouseover(function(){
             $('#background-text-10').show();
           whiteOpacityExpandHex(this);
        }).mouseout(function(){
             $('#background-text-10').hide();
             normalizeHex(this);
        });

        $("#project-3").mouseover(function(){
             $('#background-text-11').show();
            opacityExpandHex(this);
        }).mouseout(function(){
             normalizeHex(this);
             $('#background-text-11').hide();

        });


 });

    function opacityExpandHex(divName) {
     $(divName).css({

            'opacity': 0.4,
            'background-color': '#47454b',
            width: function( index, value ) {
              return parseFloat( value ) * 1.25;
            },
            height: function( index, value ) {
              return parseFloat( value ) * 1.25;
            },
      });
    }

    // function opacityExpandHex(divName) {
    //  $(divName).css({
    //         'opacity': 0.4,
    //         'background-color': '#47454b',
    //         'border-radius': "50% 50% 50% 50%" ,
    //   });
    //  $(" .corner-1").css({
    //         'width': '0px',
    //  });
    //   $(" .corner-2").css({
    //         'width': '0px',
    //  });
    // }

    function whiteOpacityExpandHex(divName) {
     $(divName).css({
            'opacity': 0.4,
            width: function( index, value ) {
              return parseFloat( value ) * 1.25;
            },
            height: function( index, value ) {
              return parseFloat( value ) * 1.25;
            }
      });
    }
  function normalizeHex(divName) {
     $(divName).css({'opacity': 1.0,
                    "width": "150px",
                    "height": "86px",
                    "border-radius": '0%',
                    });
     //  $(".corner-1").css({
     //        'width': '150px',
     // });
     //  $(".corner-2").css({
     //        'width': '150px',
     // });
   }
// height: 107.5px;
// width: 187.5px;

//Create a custom modal object


  var modal = (function(){
        var
        method = {},
        $overlay,
        $modal,
        $content,
        $close;

        // Center the modal in the viewport
        method.center = function () {
          var top, left;

          top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
          left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

          $modal.css({
            top:top + $(window).scrollTop(),
            left:left + $(window).scrollLeft()
          });
        };

        // Open the modal
        method.open = function (settings) {
          $content.empty().append(settings.content);

          $modal.css({
            width: settings.width || 'auto',
            height: settings.height || 'auto'
          });

          method.center();
          $(window).bind('resize.modal', method.center);
          $modal.show();
          $overlay.show();
        };

        // Close the modal
        method.close = function () {
          $modal.hide();
          $overlay.hide();
          $content.empty();
          $(window).unbind('resize.modal');
        };

        // Generate the HTML and add it to the document
        $overlay = $('<div id="overlay"></div>');
        $modal = $('<div id="modal"></div>');
        $content = $('<div id="content"></div>');
        $close = $('<a id="close" href="#">close</a>');

        $modal.hide();
        $overlay.hide();
        $modal.append($content, $close);

        $(document).ready(function(){
          $('body').append($overlay, $modal);
        });

        $close.click(function(e){
          e.preventDefault();
          method.close();
        });

        return method;
      }());










