// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Stairway to Heaven   	Led Zeppelin",
"Hey Jude	Beatles",
"All Along the Watchtower	Hendrix, Jimi",
"Satisfaction	Rolling Stones",
"Like A Rolling Stone	Dylan, Bob",
"Another Brick In The Wall	Pink Floyd",
"Won't Get Fooled Again	Who",
"Hotel California	Eagles",
"Layla	Derek And The Dominos",
"Sweet Home Alabama	Lynyrd Skynyrd",
"Bohemian Rhapsody	Queen",
"Riders on the Storm	Doors",
"Rock and Roll	Led Zeppelin",
"Barracuda	Heart",
"La Grange	ZZ Top",
"Dream On	Aerosmith",
"You Really Got Me	Van Halen",
"More Than a Feeling	Boston",
"Sultans of Swing	Dire Straits",
"You Shook Me All Night Long	AC/DC",
"Kashmir	Led Zeppelin",
"Lola	Kinks",
"Carry on Wayward Son 	Kansas",
"Tiny Dancer	John, Elton",
"Locomotive Breath	Jethro Tull",
"I Still Haven't Found	U2",
"Magic Carpet Ride	Steppenwolf",
"Free Bird	Lynyrd Skynyrd",
"Purple Haze	Hendrix, Jimi",
"Tom Sawyer	Rush",
"Let It Be	Beatles",
"Baba O'Riley	Who",
"The Joker	Miller, Steve",
"Roxanne	Police",
"Time	Pink Floyd",
"It's A Long Way to the Top	AC/DC",
"Whole Lotta Love	Led Zeppelin",
"The Chain	Fleetwood Mac",
"I've Seen All Good People	Yes",
"For What It's Worth	Buffalo Springfield",
"Black Magic Woman	Santana",
"Nights in White Satin	Moody Blues",
"While My Guitar Gently Weeps	Beatles",
"Gimme Shelter	Rolling Stones",
"Gold Dust Woman	Fleetwood Mac",
"Fortunate Son	CCR",
"American Pie	McLean, Don",
"Bad Company	Bad Company",
"Waitin' For The Bus/Jesus Just Left	ZZ Top",
"Over the Hills and Far Away	Led Zeppelin",
"Owner of a Lonely Heart	Yes",
"The Logical Song	Supertramp",
"A Day in the Life	Beatles",
"Sweet Emotion	Aerosmith",
"Down On The Corner	CCR",
"My Sweet Lord	Harrison, George",
"Knockin' on Heaven's Door	Dylan, Bob",
"Just What I Needed	Cars",
"Don't Fear the Reaper	Blue Oyster Cult",
"Behind Blue Eyes	Who",
"Do It Again	Steely Dan",
"Who Do You Love	Thorogood, George",
"From the Beginning	ELP",
"Already Gone	Eagles",
"Here Comes The Sun	Beatles",
"With Or Without You	U2",
"Life's Been Good	Walsh, Joe",
"Breakdown (Live Version)	Petty, Tom",
"Comfortably Numb	Pink Floyd",
"Ramble On	Led Zeppelin",
"I'd Love to Change the World	Ten Years After",
"Foreplay Longtime	Boston",
"Brown Eyed Girl	Morrison, Van",
"Back In Black	AC/DC",
"You Can't Always Get What You	Rolling Stones",
"Take It Easy	Eagles",
"Sgt. Pepper/With A Little Help	Beatles",
"We Will Rock You/We Are the	Queen",
"Dancing Days	Led Zeppelin",
"Turn the Page	Seger, Bob",
"All Right Now	Free",
"Black Water	Doobie Brothers",
"Oh Well	Fleetwood Mac",
"Me and Bobby McGee	Joplin, Janis",
"Rocket Man	John, Elton",
"Ohio	CSN&Y",
"You Really Got Me	Kinks",
"Bloody Well Right	Supertramp",
"Dirty Deeds	AC/DC",
"Aqualung	Jethro Tull",
"The Wind Cries Mary	Hendrix, Jimi",
"Burnin' for You	Blue Oyster Cult",
"Moving in Stereo/All Mixed Up	Cars",
"House of the Rising Sun	Animals",
"Bargain	Who",
"Maybe I'm Amazed	McCartney, Paul",
"Bennie & The Jets	John, Elton",
"Dust in the Wind	Kansas",
"Rock 'n Roll Hootchie Koo	Derringer, Rick",
"Crazy On You	Heart",

 

    ];

var names = [

"Stairway to Heaven   ",
"Hey Jude",
"All Along the Watchtower",
"Satisfaction",
"Like A Rolling Stone",
"Another Brick In The Wall",
"Won't Get Fooled Again",
"Hotel California",
"Layla",
"Sweet Home Alabama",
"Bohemian Rhapsody",
"Riders on the Storm",
"Rock and Roll",
"Barracuda",
"La Grange",
"Dream On",
"You Really Got Me",
"More Than a Feeling",
"Sultans of Swing",
"You Shook Me All Night Long",
"Kashmir",
"Lola",
"Carry on Wayward Son ",
"Tiny Dancer",
"Locomotive Breath",
"I Still Haven't Found",
"Magic Carpet Ride",
"Free Bird",
"Purple Haze",
"Tom Sawyer",
"Let It Be",
"Baba O'Riley",
"The Joker",
"Roxanne",
"Time",
"It's A Long Way to the Top",
"Whole Lotta Love",
"The Chain",
"I've Seen All Good People",
"For What It's Worth",
"Black Magic Woman",
"Nights in White Satin",
"While My Guitar Gently Weeps",
"Gimme Shelter",
"Gold Dust Woman",
"Fortunate Son",
"American Pie",
"Bad Company",
"Waitin' For The Bus/Jesus Just Left",
"Over the Hills and Far Away",
"Owner of a Lonely Heart",
"The Logical Song",
"A Day in the Life",
"Sweet Emotion",
"Down On The Corner",
"My Sweet Lord",
"Knockin' on Heaven's Door",
"Just What I Needed",
"Don't Fear the Reaper",
"Behind Blue Eyes",
"Do It Again",
"Who Do You Love",
"From the Beginning",
"Already Gone",
"Here Comes The Sun",
"With Or Without You",
"Life's Been Good",
"Breakdown (Live Version)",
"Comfortably Numb",
"Ramble On",
"I'd Love to Change the World",
"Foreplay Longtime",
"Brown Eyed Girl",
"Back In Black",
"You Can't Always Get What You",
"Take It Easy",
"Sgt. Pepper/With A Little Help",
"We Will Rock You/We Are the",
"Dancing Days",
"Turn the Page",
"All Right Now",
"Black Water",
"Oh Well",
"Me and Bobby McGee",
"Rocket Man",
"Ohio",
"You Really Got Me",
"Bloody Well Right",
"Dirty Deeds",
"Aqualung",
"The Wind Cries Mary",
"Burnin' for You",
"Moving in Stereo/All Mixed Up",
"House of the Rising Sun",
"Bargain",
"Maybe I'm Amazed",
"Bennie & The Jets",
"Dust in the Wind",
"Rock 'n Roll Hootchie Koo",
"Crazy On You",




 ];

 var artist = [

"Led Zeppelin",
"Beatles",
"Hendrix, Jimi",
"Rolling Stones",
"Dylan, Bob",
"Pink Floyd",
"Who",
"Eagles",
"Derek And The Dominos",
"Lynyrd Skynyrd",
"Queen",
"Doors",
"Led Zeppelin",
"Heart",
"ZZ Top",
"Aerosmith",
"Van Halen",
"Boston",
"Dire Straits",
"AC/DC",
"Led Zeppelin",
"Kinks",
"Kansas",
"John, Elton",
"Jethro Tull",
"U2",
"Steppenwolf",
"Lynyrd Skynyrd",
"Hendrix, Jimi",
"Rush",
"Beatles",
"Who",
"Miller, Steve",
"Police",
"Pink Floyd",
"AC/DC",
"Led Zeppelin",
"Fleetwood Mac",
"Yes",
"Buffalo Springfield",
"Santana",
"Moody Blues",
"Beatles",
"Rolling Stones",
"Fleetwood Mac",
"CCR",
"McLean, Don",
"Bad Company",
"ZZ Top",
"Led Zeppelin",
"Yes",
"Supertramp",
"Beatles",
"Aerosmith",
"CCR",
"Harrison, George",
"Dylan, Bob",
"Cars",
"Blue Oyster Cult",
"Who",
"Steely Dan",
"Thorogood, George",
"ELP",
"Eagles",
"Beatles",
"U2",
"Walsh, Joe",
"Petty, Tom",
"Pink Floyd",
"Led Zeppelin",
"Ten Years After",
"Boston",
"Morrison, Van",
"AC/DC",
"Rolling Stones",
"Eagles",
"Beatles",
"Queen",
"Led Zeppelin",
"Seger, Bob",
"Free",
"Doobie Brothers",
"Fleetwood Mac",
"Joplin, Janis",
"John, Elton",
"CSN&Y",
"Kinks",
"Supertramp",
"AC/DC",
"Jethro Tull",
"Hendrix, Jimi",
"Blue Oyster Cult",
"Cars",
"Animals",
"Who",
"McCartney, Paul",
"John, Elton",
"Kansas",
"Derringer, Rick",
"Heart",




];




// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCBzjxLmrI6-HCQbaKbyWkBQuplm2ESpCU');

 

 //    var arrayLength = songs.length;
	
	// for (var i = 0; i < arrayLength; i++) {
	// var raw = songs[i];
	// var clean = raw.replace(/\W/g, '');

 //    search(clean);
	// }


 //   search(	"Thrift Shop Macklemore and Ryan Lewis featuring Wanz");
 	  searchNext();
}


function search(query) {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 1
  

    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);

}

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
   var responseString = JSON.stringify(response, '', 2);
   //document.getElementById('response').innerHTML += responseString;
   var data = JSON.parse(responseString);

   var videoId = (data.items[0].id.videoId);
   var one = "&lt;div class=\"vid\" onclick=\"loadVideo($(this));\" data-id=\"";
   var two = "\"&gt;&lt;a href=\"https://www.youtube.com/watch?v=";
   var three = "\"&gt;&lt;/a&gt;&lt;div&gt;&lt;h3&gt;";
   var four = "&lt;br&gt;"
   var five	= "&lt;span&gt;"
   var six = "&lt;/span&gt;&lt;/h3&gt;&lt;/div&gt;&lt;/div&gt;\n";

   var linkElement = one + videoId + two + videoId + three  + names[indexPos-1] + four + five + artist[indexPos-1] + six  ;
   //alert(linkElement);
   document.getElementById('response').innerHTML += linkElement;
   searchNext();

}

function searchNext(){


    if (songs.length != indexPos){
    	search(songs[indexPos]);
		indexPos++;
    }else{
    	alert("SWAG");
    }


}
