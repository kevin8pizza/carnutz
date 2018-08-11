function appendYouTubeData(data) {
    var videos = data.items;
    for (i = 0; i < videos.length; i++) {
        //var imgTag = '<img src="' + videos[i].snippet.thumbnails.high.url + '">';
        var videoEmbed = '<iframe width="420" height="315" src="https://www.youtube.com/embed/' + videos[i].id.videoId + '"></iframe>';
        var titleDiv = '<div class="ytTitle row">' + videos[i].snippet.title + '<br>' + videoEmbed + '</div>';
        $("#ytThumbnails").append(titleDiv);
    };
}

function getData() {
    $("#ytThumbnails").empty();
    $("#carDB").empty();


    var year = $("#year").val().trim();
    var make = $("#make").val().trim();
    var model = $("#model").val().trim();

    console.log("Year = " + year);
    console.log("Make = " + make);
    console.log("Model = " + model);

    //------youtube API------
    var youTube = "AIzaSyA_M9tQdbY37D6VC48CZKh7voByUwEZO-w"
    var googleSearchURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
        + year + ' ' + make + ' ' + model
        + '&key=' + youTube;

    $.ajax({
        type: 'GET',
        url: googleSearchURL,
        dataType: "json",
        crossDomain: true,
        success: function (data) {
            appendYouTubeData(data);
        },
        error: function (request, status, error) {
            console.log("test error");
            console.log(googleSearchURL);
            alert(request + status + error);
        }
    });

    // Information from car_db
    $.ajax({
        type: 'GET',
        datatype: "json",
        crossDomain: true,
    })
};

$(document).ready(function() {
    // 
    var makeInput = $("#car-name");
    var carContainer = $("#car-container");

    $(document).on("submit", "#car-form", handleCarrFormSubmit);
    

    function getCars(carData) {
        $.post("/api/cars", carData)
      }

    // Getting the car shhet
    getCars();
   
    // Function for creating a new list row for authors
    function createCarRow(carData) {
      console.log(carData);
      var newCar = $("#carDB");
      newCar.data("car", carData);
      newCar.append("<td>" + carData.id + "</td>");
      newCar.append("<td><a href='/blog?author_id=" + carData.id + "'>Go to Posts</a></td>");
      newCar.append("<td><a href='/cms?author_id=" + carData.id + "'>Create a Post</a></td>");
      return newCar;
    }
  
    // Function
    function getCars() {
      $.get("/api/cars", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createAuthorRow(data[i]));
        }
        renderAuthorList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of authors to the page
    function renderCarList(rows) {
      carList.children().not(":last").remove();
      authorContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        carList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  });