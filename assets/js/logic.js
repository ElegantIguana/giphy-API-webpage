$("button").on("click", function() {

//Creates an array of items for the query
var reactions = ["excited", "mad", "angry", "joy", "surprised", "wow", "sad", "depressed", "gloomy", "confused", "whatever", "love", "thank you", "thanks", "crying", "cry", "k", "popcorn", "flirting", "flirty", "celebration", "bored", "dance"];
//Made this line to check if this file was linked
console.log(reactions);

//stores the value of the buttons in a container
var reaction = $(this).attr("data-reaction");
//uses the value of the buttons as a search term
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        reaction + "&api_key=dc6zaTOxFJmzC&limit=10";


$.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
        	var results = response.data;

        	for (var i = 0; i < results.length; i++) {
        		var gifDiv = $("<div class='item'>");

        		var rating = results[i].rating;

        		var p = $("<p>").text("Rating: " + rating);

        		var reactionImage = $("<img>");
        		reactionImage.attr("src", results[i].images.fixed_height.url);

        		gifDiv.prepend(p);
        		gifDiv.prepend(reactionImage);

        		$("#gifs-appear-here").prepend(gifDiv);
           	}



        });
    });