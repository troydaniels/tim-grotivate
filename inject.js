var timImage = chrome.extension.getURL('timLarge.png');
var timEl = document.querySelector('.tim-grotivate');
var timQuotes = new Array();
var updateFreq = 600000; //Time between quote updates, in miliseconds
var timeVisible = 10000; //Time that tim is visible, in miliseconds
var subreddit = "aww"; //Name of subreddit to query
var numberQuotes = 5;

//Ensure we're only requesting new titles with updateFreq frequency
var curTime = new Date().getTime();
if(curTime - localStorage.getItem("quotesUpdated") > updateFreq){
    updateQuotes();
    localStorage["quotesUpdated"] = curTime;
}

if (timEl == null) {
    //Try and include Tim on page
    var div = document.createElement('div');
    div.className = 'tim-grotivate';
    div.innerHTML = '<div class="tim-image"><img id="timImage" src='+timImage+' height="100" width="100" /></div>'
    div.innerHTML += '<div class="tim-quote" id="quote">'+getInspiration()+'</div>';
    document.body.appendChild(div);

    //Does he live?
    var tim = document.querySelector('.tim-grotivate');
    tim.onerror = function() {
        alert("No Tim Gro-tivation available");
    };

} else {
    //Tim is already here. Show div and change quote.
    document.querySelector('div.tim-grotivate').style.display = 'inline';
    document.getElementById('quote').innerHTML = getInspiration();
}

//Hide him after a bit
setTimeout(function(){ document.querySelector('div.tim-grotivate').style.display = 'none';
; }, timeVisible);

//Returns a random string of Tim-spiration
function getInspiration(){
   timQuotes = JSON.parse(localStorage["timQuotes"]);
   var quote = "Tim says: ";
   quote += timQuotes[Math.floor(Math.random()*timQuotes.length)];
   return quote;
}

//Get latest post titles, and store in localStorage
function updateQuotes(){
    alert("Updating quotes");
    reddit.hot(subreddit).limit(numberQuotes).fetch(function(res) {
        // res contains JSON parsed response from Reddit
        //Get all post titles from JSON
        for(var i=0; i<res.data.children.length; i++){
            timQuotes.push(res.data.children[i].data.title);
        }    
        localStorage["timQuotes"] = JSON.stringify(timQuotes);
    });
}
