function appendYouTubeData(data) {
  var videos = data.items;
  for (i = 0; i < videos.length; i++) {
    //var imgTag = '<img src="' + videos[i].snippet.thumbnails.high.url + '">';
    var videoEmbed =
      '<iframe width="420" height="315" src="https://www.youtube.com/embed/' +
      videos[i].id.videoId +
      '"></iframe>';
    var titleDiv =
      '<div class="ytTitle row">' +
      videos[i].snippet.title +
      "<br>" +
      videoEmbed +
      "</div>";
    $("#ytThumbnails").append(titleDiv);
  }
}

function getData() {
<<<<<<< HEAD
  $("#ytThumbnails").empty();
  $("#wikiInfo").empty();
=======
    $("#ytThumbnails").empty();
    $("#carDB").empty();
>>>>>>> master

  var year = $("#year")
    .val()
    .trim();
  var make = $("#make")
    .val()
    .trim();
  var model = $("#model")
    .val()
    .trim();

  console.log("Year = " + year);
  console.log("Make = " + make);
  console.log("Model = " + model);

  //------youtube API------
  var youTube = apikeys.YOUTUBE;
  var googleSearchURL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
  year + " " + make + " " + model + "&key=" + youTube;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b546ee31e2669dce6815e7cdbba183c3618a8513
  $.ajax({
    type: "GET",
    url: googleSearchURL,
    dataType: "json",
    crossDomain: true,
    success: function(data) {
      appendYouTubeData(data);
    },
    error: function(request, status, error) {
      console.log("test error");
      console.log(googleSearchURL);
      alert(request + status + error);
    }
  });
<<<<<<< HEAD
=======
    //------youtube API------
    var youTube = apikeys.YOUTUBE;
    var googleSearchURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
        + year + ' ' + make + ' ' + model
        + '&key=' + youTube;
>>>>>>> master
=======
  //------youtube API------
  var youTube = apikeys.YOUTUBE;
    var googleSearchURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
        + year + ' ' + make + ' ' + model
        + '&key=' + youTube;
>>>>>>> b546ee31e2669dce6815e7cdbba183c3618a8513

<<<<<<< HEAD
  //------wikipedia API------
  $.ajax({
    type: "GET",
    url: "https://en.wikipedia.org/w/api.php?",
    data: {
      action: "query",
      format: "json",
      origin: "*",
      list: "search",
      srsearch: year + "%20" + make + "%20" + model
    },
    success: function(data) {
      appendwikiData(data);
    },
    error: function(request, status, error) {
      console.log("test error");
      //console.log(wikiSearchURL);
      alert(request + status + error);
    }
  });
}

function appendwikiData(data) {
  console.log(data);
  $("#wikiInfo").append("<div class='wikiData row>'" + data.infobox + "</div>");
}
=======
    $.ajax({
        type: 'GET',
        url: googleSearchURL,
        dataType: "json",
        crossDomain: true,
        success: function(data) {
            appendYouTubeData(data);
        },
        error: function(request, status, error) {
            console.log("test error");
            console.log(googleSearchURL);
            alert(request + status + error);
        }
    });

    // Information from car_db
    $.ajax( {
        type: 'GET',
    })
};
>>>>>>> master
