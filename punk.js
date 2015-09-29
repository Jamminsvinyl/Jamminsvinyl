// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Blitzkrieg Bop	Ramones",
"Anarchy in the UK	Sex Pistols",
"Complete Control	The Clash",
"Kick Out the Jams	MC5",
"Holiday in Cambodia	Dead Kennedys",
"Waiting Room	Fugazi",
"London Calling	The Clash",
"Search and Destroy	The Stooges",
"God Save the Queen	Sex Pistols",
"Where Eagles Dare	The Misfits",
"I Wanna Be Sedated	Ramones",
"In the City	The Jam",
"Straight Edge	Minor Threat",
"Johnny Hit and Run Pauline	X",
"Celebrated Summer	Husker Du",
"White Man (in Hammersmith Palais)	The Clash",
"California Uber Alles	Dead Kennedys",
"See No Evil	Television",
"Bastards of Young	The Replacements",
"Gloria	Patti Smith",
"Radio Radio	Elvis Costello",
"Ever Fallen in Love	The Buzzcocks",
"Sonic Reducer	Dead Boys",
"Rise Above	Black Flag",
"Psycho Killer	Talking Heads",
"Viet Nam	Minutemen",
"12XU	Wire",
"Live Fast Die Young	Circle Jerks",
"I Wanna Be Your Dog	The Stooges",
"Roadrunner	The Modern Lovers",
"Orgasm Addict	The Buzzcocks",
"Last Caress	The Misfits",
"Smash it Up	The Damned",
"White Riot	The Clash",
"Pink Turns to Blue	Husker Du",
"Oh Bondage Up Yours	Ray Spex",
"Free Money	Patti Smith",
"Suggestion	Fugazi",
"Favorite Thing	The Replacements",
"Personality Crisis	New York Dolls",
"Blank Generation	Richard Hell and the Voidoids",
"X Offender	Blondie",
"Death or Glory	The Clash",
"In My Eyes	Minor Threat",
"Pay To Cum	Bad Brains",
"Nazi Punks Fuck Off	Dead Kennedys",
"Venus	Television",
"Motor City is Burning	MC5",
"Hybrid Moments	The Misfits",
"Banned in D.C.	Bad Brains",
"This Aint No Picnic	The Minutemen",
"Los Angeles	X",
"Pablo Picasso	The Modern Lovers",
"I Wanna Be Your Boyfriend	Ramones",
"TV Party	Black Flag",
"Don't Want to Know if You're Lonely	Husker Du",
"Chinese Rocks	Heartbreakers",
"Final Solution	Pere Ubu",
"Alternative Ulster	Stiff Little Fingers",
"Institutionalized	Suicidal Tendencies",
"New Rose	The Damned",
"Sheena is a Punk Rocker	Ramones",
"Mommy's Little Monster	Social Distortion",
"Unsatisfied	The Replacements",
"Repeater	Fugazi",
"Safe European Home	The Clash",
"You	Bad Religion",
"West Germany	Minutemen",
"Weekend	The Dictators",
"Doesn't Make it Alright	Stiff Little Fingers",
"Welcome to Paradise	Green Day",
"(I Want to be an) Angelpoise Lamp	The Soft Boys",
"Color Me Impressed	The Replacements",
"Angels With Dirty Faces	Sham 69",
"Rocket Reducer	MC5",
"Knowledge	Operation Ivy",
"I Against I	Bad Brains",
"Kill The Poor	Dead Kennedys",
"New Arayans	Reagan Youth",
"In Your Eyes	Circle Jerks",
"Give MeThe Cure	Fugazi",
"Clampdown	The Clash",
"Holiday In The Sun	The Sex Pistols",
"What Do I Get?	The Buzzcocks",
"Ruby SoHo	Rancid",
"Sailin On	Bad Brains",
"Pinhead	Ramones",
"Police Truck	Dead Kennedys",
"No Class	Reagan Youth",
"Fuck Armageddon... This Is Hell	Bad Religion",
"One Dead Cop	Leftover Crack",
"Corona	Minutemen",
"Pull My Strings	Dead Kennedys",
"Longview	Green Day",
"Linoleum	NOFX",
"Rock 'n' Roll High School	Ramones",
"Minor Threat	Minor Threat",
"American Jesus	Bad Religion",
"Chemical Warefare	Dead Kennedys",
"Unity	Operation Ivy",

 

    ];

var names = [

"Blitzkrieg Bop",
"Anarchy in the UK",
"Complete Control",
"Kick Out the Jams",
"Holiday in Cambodia",
"Waiting Room",
"London Calling",
"Search and Destroy",
"God Save the Queen",
"Where Eagles Dare",
"I Wanna Be Sedated",
"In the City",
"Straight Edge",
"Johnny Hit and Run Pauline",
"Celebrated Summer",
"White Man (in Hammersmith Palais)",
"California Uber Alles",
"See No Evil",
"Bastards of Young",
"Gloria",
"Radio Radio",
"Ever Fallen in Love",
"Sonic Reducer",
"Rise Above",
"Psycho Killer",
"Viet Nam",
"12XU",
"Live Fast Die Young",
"I Wanna Be Your Dog",
"Roadrunner",
"Orgasm Addict",
"Last Caress",
"Smash it Up",
"White Riot",
"Pink Turns to Blue",
"Oh Bondage Up Yours",
"Free Money",
"Suggestion",
"Favorite Thing",
"Personality Crisis",
"Blank Generation",
"X Offender",
"Death or Glory",
"In My Eyes",
"Pay To Cum",
"Nazi Punks Fuck Off",
"Venus",
"Motor City is Burning",
"Hybrid Moments",
"Banned in D.C.",
"This Aint No Picnic",
"Los Angeles",
"Pablo Picasso",
"I Wanna Be Your Boyfriend",
"TV Party",
"Don't Want to Know if You're Lonely",
"Chinese Rocks",
"Final Solution",
"Alternative Ulster",
"Institutionalized",
"New Rose",
"Sheena is a Punk Rocker",
"Mommy's Little Monster",
"Unsatisfied",
"Repeater",
"Safe European Home",
"You",
"West Germany",
"Weekend",
"Doesn't Make it Alright",
"Welcome to Paradise",
"(I Want to be an) Angelpoise Lamp",
"Color Me Impressed",
"Angels With Dirty Faces",
"Rocket Reducer",
"Knowledge",
"I Against I",
"Kill The Poor",
"New Arayans",
"In Your Eyes",
"Give MeThe Cure",
"Clampdown",
"Holiday In The Sun",
"What Do I Get?",
"Ruby SoHo",
"Sailin On",
"Pinhead",
"Police Truck",
"No Class",
"Fuck Armageddon... This Is Hell",
"One Dead Cop",
"Corona",
"Pull My Strings",
"Longview",
"Linoleum",
"Rock 'n' Roll High School",
"Minor Threat",
"American Jesus",
"Chemical Warefare",
"Unity",




 ];

 var artist = [

"Ramones",
"Sex Pistols",
"The Clash",
"MC5",
"Dead Kennedys",
"Fugazi",
"The Clash",
"The Stooges",
"Sex Pistols",
"The Misfits",
"Ramones",
"The Jam",
"Minor Threat",
"X",
"Husker Du",
"The Clash",
"Dead Kennedys",
"Television",
"The Replacements",
"Patti Smith",
"Elvis Costello",
"The Buzzcocks",
"Dead Boys",
"Black Flag",
"Talking Heads",
"Minutemen",
"Wire",
"Circle Jerks",
"The Stooges",
"The Modern Lovers",
"The Buzzcocks",
"The Misfits",
"The Damned",
"The Clash",
"Husker Du",
"Ray Spex",
"Patti Smith",
"Fugazi",
"The Replacements",
"New York Dolls",
"Richard Hell and the Voidoids",
"Blondie",
"The Clash",
"Minor Threat",
"Bad Brains",
"Dead Kennedys",
"Television",
"MC5",
"The Misfits",
"Bad Brains",
"The Minutemen",
"X",
"The Modern Lovers",
"Ramones",
"Black Flag",
"Husker Du",
"Heartbreakers",
"Pere Ubu",
"Stiff Little Fingers",
"Suicidal Tendencies",
"The Damned",
"Ramones",
"Social Distortion",
"The Replacements",
"Fugazi",
"The Clash",
"Bad Religion",
"Minutemen",
"The Dictators",
"Stiff Little Fingers",
"Green Day",
"The Soft Boys",
"The Replacements",
"Sham 69",
"MC5",
"Operation Ivy",
"Bad Brains",
"Dead Kennedys",
"Reagan Youth",
"Circle Jerks",
"Fugazi",
"The Clash",
"The Sex Pistols",
"The Buzzcocks",
"Rancid",
"Bad Brains",
"Ramones",
"Dead Kennedys",
"Reagan Youth",
"Bad Religion",
"Leftover Crack",
"Minutemen",
"Dead Kennedys",
"Green Day",
"NOFX",
"Ramones",
"Minor Threat",
"Bad Religion",
"Dead Kennedys",
"Operation Ivy",




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
