$(document).ready(function() {
  $(".searchTitle").on("submit", function(event) { // .on starts program by enter or click
    event.preventDefault();
    var searchTerm = $("#titleInput").val(); // entered string
     // gets data from API in xml format
    var url = "https://www.goodreads.com/book/title.xml?key=bPHcIc1YFvxx6SJCCkJA&title=";
    searchTerm = searchTerm.split(' ').join('+');
    url += searchTerm;
    $.get("http://query.yahooapis.com/v1/public/yql", {
      q: "select * from xml where url=\""+url+"\"",
      format: "json"
      },
      function(data){
        console.log(data);
        if(data.query.results.error === "Page not found") {
          $('#resultsContainer').html("Sorry, no books with such title have been found");
		    }
        else {
        // console.log(data);
          var book = data.query.results.GoodreadsResponse.book.reviews_widget; //gets reviews data from resieved request. Data id an HTML code
        // console.log(book);
          $('#resultsContainer').html(book);
        } //puts recieved data into HTML container
    });
  });
});
