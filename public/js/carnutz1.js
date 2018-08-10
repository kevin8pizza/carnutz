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
  $("#ytThumbnails").empty();
  $("#carDB").empty();

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
    "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +
    year +
    " " +
    make +
    " " +
    model;
  "&key=" + youTube;

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

  // Information from car_db
  $.ajax({
    type: "GET"
  });
}
