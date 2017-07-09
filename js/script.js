//Object Definition
function Quote(quote, source, citation, year, id, category) {
    this.quote = quote;
    this.source = source;
    this.citation = citation;
    this.year = year;
    this.id = id;
    this.category = category;
}
//Global Variables
let quotes = [
    new Quote("Don\'t cry because it\'s over, smile because it happened.", "Dr. Suess", null, null, 0, "Inspiration"),
    
    new Quote("Do not take life too seriously. You will never get out of it alive.", "Elbert Hubbard", "Life", "1942", 1, "Funny"),
    
    new Quote("I am not a member of any organized political party. I am a democrat.", "Will Rogers", null, null, 2, "Politics"),
    
    new Quote("Always remember that you are absolutely unique. Just like everyone else.", "Margaret Mead", "Unknown", null, 3, "Funny"),
    
    new Quote("Laugh and the world laughs with you, snore an you sleep alone.", "Anthony Burgess", "Every Night", "1992", 4, "Funny"),
    
    new Quote("I can resist everything except temptation.", "Oscar Wilde", null, null, 5, "Funny")
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
    //Build the quote HTML
    let quoteString = '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source; 
        
    //Optional Citation
    if(randomQuote.citation) {
        quoteString += '<span class="citation">'+ randomQuote.citation + '</span>';
    };
    
    //Optional Year
    if(randomQuote.year) {
        quoteString += '<span class="year">'+ randomQuote.year + '</span>';
    };
    
    quoteString += '</p>';
    quoteString += '<p class="category">' + randomQuote.category + '</p>';
    
    document.getElementById('quote-box').innerHTML = quoteString;
    
    //Set background to a random color
    document.getElementsByTagName('body')[0].style.backgroundColor = getRandomColor();
    
    console.log(randomQuote.category);
}
    
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
