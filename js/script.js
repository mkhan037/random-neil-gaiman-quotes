// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuoteAndChangeBackgroundColor, false);

// Required:
// 1. Create a function named getRandomQuote that:
//    a. selects a random quote object from the quotes array
//    b. returns the randomly selected quote object
function getRandomQuote ( ) {
  var upperLimit = quotes.length;
  console.log("upperLimit", upperLimit);
  var randNum = Math.floor(Math.random() * upperLimit);
  console.log("randNum", randNum);
  return quotes[randNum];
}


// Required:
// 1. create a function that calls getRandomQuote & stores it in a new variable
// 2. construct a string containing the info within the object
//  a. add the quote and the source to the string
//  b. IF the object has a citation and/or year add that to the string
// 3. display the final HTML string on the screen with using this snippet:
//  document.getElementById('quote-box').innerHTML = message;
function printQuote() {
  var randQuote = getRandomQuote();
  console.log(randQuote);
  var message = '<p class="quote">' + randQuote.quote + '</p>';
  message += '<p class="source">' + randQuote.source;

  if (randQuote.citation && randQuote.year) {
    message += '<span class="citation"> ' + randQuote.citation + '</span>';
    message += '<span class="year"> ' + randQuote.year + '</span></p>';
  } else if (randQuote.citation) {
    message += '<span class="citation"> ' + randQuote.citation + '</span></p>';
  } else if (randQuote.year) {
    message += '<span class="year"> ' + randQuote.year + '</span></p>';
  }

  console.log(message);
  document.getElementById('quote-box').innerHTML = message;

}


// Change the background color (& button color) when a new quote is printed
function printQuoteAndChangeBackgroundColor() {
  printQuote();
  var newBackgroundColor = "rgb(" + Math.floor(Math.random() * 256 + 1) + ", " + Math.floor(Math.random() * 256 + 1) + ", " + Math.floor(Math.random() * 256 + 1) + ")";
  console.log(newBackgroundColor);
  document.body.style.backgroundColor = newBackgroundColor;
  document.getElementById("loadQuote").style.background = newBackgroundColor;

}

printQuoteAndChangeBackgroundColor();


// Refresh the quote after 60 seconds
 function refreshQuote() {
  var quoteRefresh = window.setInterval(printQuoteAndChangeBackgroundColor, 60000);
}

refreshQuote();
