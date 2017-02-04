$(document).ready(function() {

  //create refrences to common elements for efficiency
  var quoteBox = $(".quote-box");
  var newQuote = $("#new-quote");
  var tweetButton = $(".twitter-button");

  var grabQuote = function() {

    $.ajax({
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
      dataType: 'jsonp',
      cache: false,
      success: mycallback = function(x) {

        quoteBox.append(x[0].content);
        quoteBox.append("- " + x[0].title);

        //variables for tweet text.
        var paragraphs = $("p");
        var tweetText = paragraphs.text() + "- " + x[0].title;

        //set twitter href to include quote text;

        tweetButton.attr("href", "https://twitter.com/intent/tweet?text=" + tweetText);
      }

    });

  };

  grabQuote();

  newQuote.on("click", function(){

    quoteBox.empty();
    grabQuote();

  });

});
