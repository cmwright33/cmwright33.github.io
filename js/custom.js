


$(document).ready(function(){


  $.ajax({
  url : "http://api.wunderground.com/api/eac3fd7e9d88b803/geolookup/conditions/q/NY/New_York.json",
  dataType : "jsonp",
  success : function(parsed_json) {

  var location = parsed_json['location']['city'];
  $('#w_location').html(location);
  var temp_f = parsed_json['current_observation']['temp_f'];
  $('#w_tempature').html(temp_f)
  var current_condition = parsed_json['current_observation']['icon_url'];
   $('#w_icon').attr("src" , current_condition);
  // alert("Current temperature in " + location + " is: " + temp_f + " current conditions are: "+ current_condition);
  }
  });


var pie = new d3pie("pieChart", {
  "header": {
    "title": {
      "fontSize": 34,
      "font": "courier"
    },
    "subtitle": {
      "color": "#999999",
      "fontSize": 10,
      "font": "courier"
    },
    "location": "pie-center",
    "titleSubtitlePadding": 10
  },
  "footer": {
    "color": "#999999",
    "fontSize": 10,
    "font": "open sans",
    "location": "bottom-left"
  },
  "size": {
    "canvasWidth": 590,
    "pieInnerRadius": "55%",
    "pieOuterRadius": "80%"
  },
  "data": {
    "sortOrder": "label-desc",
    "content": [
      {
        "label": "",
        "value": 5,
        "color": "#ccc8b2"
      },
      {
        "label": "",
        "value": 5,
        "color": "#c3ccb2"
      },
      {
        "label": "",
        "value": 5,
        "color": "#ccb2b2"
      },
      {
        "label": "",
        "value": 5,
        "color": "#b5ccb2"
      },
      {
        "label": "",
        "value": 5,
        "color": "#b2ccbb"
      },
      {
        "label": "",
        "value": 5,
        "color": "#b2ccc8"
      }
    ]
  },
  "labels": {
    "outer": {
      "format": "none",
      "pieDistance": 20
    },
    "inner": {
      "format": "none"
    },
    "mainLabel": {
      "fontSize": 11
    },
    "percentage": {
      "color": "#999999",
      "fontSize": 11,
      "decimalPlaces": 0
    },
    "value": {
      "color": "#cccc43",
      "fontSize": 11
    },
    "lines": {
      "enabled": true,
      "color": "#777777"
    }
  },
  "effects": {
    "pullOutSegmentOnClick": {
      "effect": "linear",
      "speed": 400,
      "size": 8
    }
  },
  "misc": {
    "colors": {
      "segmentStroke": "#000000"
    }
  },
  "callbacks": {}
});

});









