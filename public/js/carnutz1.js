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
    $("#wikiInfo").empty();


    var year = $("#year").val().trim();
    var make = $("#make").val().trim();
    var model = $("#model").val().trim();

    console.log("Year = " + year);
    console.log("Make = " + make);
    console.log("Model = " + model);

    //------youtube API------
<<<<<<< HEAD:carnutz1.js
    var youtubeKey = apiKeys.YOUTUBE;
    var googleSearchURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + year + ' ' + make + ' ' + model + '&key=' + youtubeKey;
=======
    var youTube = apikeys.YOUTUBE;
    var googleSearchURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
        + year + ' ' + make + ' ' + model
        + '&key=' + youTube;
>>>>>>> 60182d105a5bfe8c9f3a41e8e215c9be6e8e3247:public/js/carnutz1.js

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

//------wikipedia API------
$.ajax({
        type: 'GET',
        url: 'https://en.wikipedia.org/w/api.php?',
        data: {
            action: 'query',
            format: 'json',
            origin: '*',
            list: 'search',
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
};

function appendwikiData(data) {
    console.log(data);
    $("#wikiInfo").append("<div class='wikiData row>'" + data.infobox + "</div>");
};
