//event listener for all button elements
$("button").on("click", function() {

    //in this case, the "this" keyword refers to the button that was clicked
    var person = $(this).attr("startButton");

    //constructing a URL to search Giphy of the name of the person who 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";

    //performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    //after the data comes back from the API
      .then(function(response) {

        //storing an array of results in the results variable
        var results = response.data;

    //looping over every result item
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });