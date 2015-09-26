var timURL = chrome.extension.getURL('timLarge.png');
var timEl = document.querySelector('.tim-grotivate');

if (timEl == null) {
    //Try and include Tim on page
    var div = document.createElement('div');
    div.className = 'tim-grotivate';
    div.innerHTML = '<div class="tim-image"><img id="timImage" src='+timURL+' /></div><div class="tim-quote" id="quote">'+getInspiration()+'</div>';
    document.body.appendChild(div);

    //Does he live?
    var tim = document.querySelector('.tim-grotivate');
    tim.onerror = function() {
        alert("No Tim Gro-tivation available");
    };
} else {
    //Tim is already here. Change quote.
    document.getElementById('quote').innerHTML = getInspiration();
}

function getInspiration(){
   var quote = "Tim says: ";
   quote += randomQuote();  
   return quote;
}

function randomQuote(){

   var quotes =[
                  "This is Gro-tivational!",
                  "Do you like me now?",
                  "Quote me, biatch!"
               ];

   //Return a random string
   return quotes[Math.floor(Math.random()*quotes.length)];
}
