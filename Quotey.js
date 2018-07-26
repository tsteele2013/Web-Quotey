$(document).ready(function () {
  getQuote();
  $('#tweet-quote').on('click', function() {
      openURL('https://twitter.com/intent/tweet?hashtags=Quotey&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  });
});
var currentQuote = " ";
var currentAuthor = " ";
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
// My API (GET https://andruxnet-random-famous-quotes.p.mashape.com/)
function getQuote() {
  var colors = ['#6124f0', '#6cce46', '#ce4c46', '#1b81bb', '#ba0306'];
  var color = Math.floor(Math.random() * colors.length);

  jQuery.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
    type: "GET",
    data: {
      "cat": "movies",
    },
    headers: {
      "X-Mashape-Key": "Dfb72avbP1mshDb1heHDhWbWTmXmp1G2Q01jsnhOgZXVfMKh68",
    },
  })
  .done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
  })
  .always(function(data) {
    console.log(data[0]);
    var r = data[0];
    currentQuote = r.quote;
    currentAuthor = r.author;
    $(".quote-text").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#text').text(r.quote);
      $('#text').css({color: colors[color]})
      $('body').css({backgroundColor: colors[color]})
      $('#tweet-quote').css({backgroundColor: colors[color]})
      $('#new-quote').css({backgroundColor: colors[color]})
      $('#qMarks1').css({color: colors[color]})
      $('#qMarks2').css({color: colors[color]})
    });
    $(".quote-author").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#author').text(r.author);
      $('#author').css({color: colors[color]})
    });
  })
};
