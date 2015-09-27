var timURL = chrome.extension.getURL('timLarge.png');
var timEl = document.querySelector('.tim-grotivate');

if (timEl == null) {
    //Try and include Tim on page
    var div = document.createElement('div');
    div.className = 'tim-grotivate';
    div.innerHTML = '<div class="tim-image"><img id="timImage" src='+timURL+' height="100" width="100" /></div>'
    div.innerHTML += '<div class="tim-quote" id="quote">'+getInspiration()+'</div>';
    document.body.appendChild(div);

    //Does he live?
    var tim = document.querySelector('.tim-grotivate');
    tim.onerror = function() {
        alert("No Tim Gro-tivation available");
    };
} else {
    //Tim is already here. Change quote.
    document.querySelector('div.tim-grotivate').style.display = 'inline';
    document.getElementById('quote').innerHTML = getInspiration();
}

setTimeout(function(){ document.querySelector('div.tim-grotivate').style.display = 'none';
; }, 5000);

function getInspiration(){
   var quote = "Tim says: ";
   quote += randomQuote();  
   return quote;
}

function randomQuote(){
   var quotes =[
                  "Do you like me now?",
                  "Quote me, biatch!"
               ];

   //Return a random string
   return quotes[Math.floor(Math.random()*quotes.length)];
}
