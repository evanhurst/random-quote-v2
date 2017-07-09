//Object Definition
function Quote(quote, source, citation, year, id) {
    this.quote = quote;
    this.source = source;
    this.citation = citation || "";
    this.year = year || "";
    this.id = id;
}
//Global Variables
let quotes = [
    new Quote("Don\'t cry because it\'s over, smile because it happened.", "Dr. Suess", 0),
    new Quote("Do not take life too seriously. You will never get out of it alive.", "Elbert Hubbard", "Life", "1942", 1),
    new Quote("I am not a member of any organized political party. I am a democrat.", "Will Rogers", 2),
    new Quote("Always remember that you are absolutely unique. Just like everyone else.", "Margaret Mead", "Unknown", 3),
    new Quote("Laugh and the world laughs with you, snore an you sleep alone.", "Anthony Burgess", "Every Night", "1992", 4),
    new Quote("I can resist everything except temptation.", "Oscar Wilde", 5)
];
let usedQuotes = [];


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//OR load a new quote every 10 seconds

setInterval(function() {
    printQuote();
}, 10000);


function getRandomQuote(){
    if (usedQuotes.length == 6) {
        usedQuotes = [];
    }
    let randomIndex = Math.floor(Math.random() * (quotes.length));
    while(usedQuotes.indexOf(randomIndex) != -1) {
        randomIndex = Math.floor(Math.random() * (quotes.length));
    }
    usedQuotes.push(randomIndex);
    console.log(usedQuotes);
    return quotes[randomIndex];
}

function printQuote() {
    let randomQuote = getRandomQuote();
    let quoteString =     '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source + '<span class="citation">'+ randomQuote.citation +'</span><span class="year">'+ randomQuote.year + '</span></p>';
    
    console.log(quoteString);
    
    document.getElementById('quote-box').innerHTML = quoteString;
    
    document.getElementsByTagName('body')[0].style.backgroundColor = getRandomColor();
}
    
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
