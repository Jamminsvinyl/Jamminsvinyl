// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Y.M.C.A	The Village People",
"Night Fever	Bee Gees",
"Dancing Queen	ABBA",
"I’m So Excited	The Pointer Sisters",
"We Are Family	Sister Sledge",
"The Hustle	Van McCoy",
"I Will Survive	Gloria Gaynor",
"Thank You (Falettin Me Be Mice Elf Agin)	Sly & The Family Stone",
"Into The Groove	Madonna",
"Brick House	Commodores",
"The Twist	Chubby Checker",
"Stayin’ Alive	Bee Gees",
"Respect	Aretha Franklin",
"Get Down Tonight	KC & The Sunshine Band",
"Boogie Oogie Oogie	Taste of Honey",
"You Make Me Feel (Mighty Real)	Sylvester",
"Good Times	Chic",
"Don’t Stop ‘Till You Get Enough	Michael Jackson",
"Dancing In The Street	Martha & the Vandellas",
"Billie Jean	Michael Jackson",
"Never Can Say Goodbye	Gloria Gaynor",
"Love’s Theme	Love Unlimited Orchestra",
"You Should Be Dancing	The Bee Gees",
"That’s the Way (I Like It)	KC & The Sunshine Band",
"Lady Marmalade	La Belle",
"Rock The Boat	The Hues Corporation",
"You Spin Me ‘Round (Like A Record)	Dead Or Alive",
"Le Freak	Chic",
"Gettin’ Jiggy Wit It	Will Smith",
"Celebration	Kool & The Gang",
"Let the Music Play	Shannon",
"He’s The Greatest Dancer	Sister Sledge",
"Best Of My Love	The Emotions",
"Shame	Evelyn Champagne King",
"Upside Down	Diana Ross",
"Dance To The Music	Sly & The Family Stone",
"Heart Of Glass	Blondie",
"And The Beat Goes On	The Whispers",
"Love Train	The O’Jays",
"Ain’t No Stoppin’ Us Now	McFadden & Whitehead",
"U Can’t Touch This	MC Hammer",
"ABC	The Jackson 5",
"Macarena (Bayside Boys Mix)	Los Del Rio",
"More, More, More	Andrea True Connection",
"I Want To Dance With Somebody	Whitney Houston",
"Got To Give It Up	Marvin Gaye",
"Sledgehammer	Peter Gabriel",
"TSOP (The Sound Of Philadelphia)	MSFB & The Three Degrees",
"Last Dance	Donna Summer",
"Bad Girl / Hot Stuff	Donna Summer",
"Keep On Truckin’	Eddie Kendricks",
"Cherchez La Femme	Dr Buzzard’s Original Savanah Band",
"All Night Long (All Night)	Lionel Richie",
"La Bamba	Richie Valens",
"(Shake, Shake, Shake) Shake Your Booty	KC & The Sunshine Band",
"Gonna Make You Sweat	C&C Music Factory",
"I’m Your Boogie Man	KC & The Sunshine Band",
"What’d I Say	Ray Charles",
"Don’t Leave Me This Way	Thelma Houston",
"Can’t Get Enough Of Your Love, Babe	Barry White",
"If I Can’t Have You	Yvonne Elliman",
"Jump (For My Love)	The Pointer Sisters",
"Love To Love You	Donna Summer",
"Funkytown	Lipps Inc",
"1999	Prince",
"Do Ya Think I’m Sexy	Rod Stewart",
"Tear The Roof Off The Sucker (Give Up The Funk)	Parliament",
"Mustang Sally	Wilson Pickett",
"Shotgun	Junior Walker & The All Stars",
"Shake Your Groove Thing	Peaches & Herb",
"Flashdance (What A Feeling…)	Irene Cara",
"Get Up (I Feel Like Sex Machine)	James Brown",
"Fly Robin Fly	Silver Convention",
"Take Your Time (Do it Right)	The SOS Band",
"Land of 1,000 Dances	Wilson Pickett",
"Believe	Cher",
"Dance, Dance, Dance (Yowza, Yowza, Yowza)	Chic",
"Straight Up	Paula Abdul",
"Turn The Beat Around	Vicki Sue Robinson",
"I’m Every Woman	Chaka Khan",
"I Feel Love	Donna Summer",
"Sexual Healing	Marvin Gaye",
"Bad Girls	Donna Summer",
"Dancing Machine	The Jackson 5",
"December, 1963 (Oh What A Night)	The Four Seasons",
"Disco Inferno	The Trammps",
"Boogie Shoes	KC & The Sunshine Band",
"Get Dancin’	Disco Tex & His Sex O Lettes",
"I Wanna Be Your Lover	Prince",
"Macho Man	The Village People",

 

    ];

var names = [

"Y.M.C.A",
"Night Fever",
"Dancing Queen",
"I’m So Excited",
"We Are Family",
"The Hustle",
"I Will Survive",
"Thank You (Falettin Me Be Mice Elf Agin)",
"Into The Groove",
"Brick House",
"The Twist",
"Stayin’ Alive",
"Respect",
"Get Down Tonight",
"Boogie Oogie Oogie",
"You Make Me Feel (Mighty Real)",
"Good Times",
"Don’t Stop ‘Till You Get Enough",
"Dancing In The Street",
"Billie Jean",
"Never Can Say Goodbye",
"Love’s Theme",
"You Should Be Dancing",
"That’s the Way (I Like It)",
"Lady Marmalade",
"Rock The Boat",
"You Spin Me ‘Round (Like A Record)",
"Le Freak",
"Gettin’ Jiggy Wit It",
"Celebration",
"Let the Music Play",
"He’s The Greatest Dancer",
"Best Of My Love",
"Shame",
"Upside Down",
"Dance To The Music",
"Heart Of Glass",
"And The Beat Goes On",
"Love Train",
"Ain’t No Stoppin’ Us Now",
"U Can’t Touch This",
"ABC",
"Macarena (Bayside Boys Mix)",
"More, More, More",
"I Want To Dance With Somebody",
"Got To Give It Up",
"Sledgehammer",
"TSOP (The Sound Of Philadelphia)",
"Last Dance",
"Bad Girl / Hot Stuff",
"Keep On Truckin’",
"Cherchez La Femme",
"All Night Long (All Night)",
"La Bamba",
"(Shake, Shake, Shake) Shake Your Booty",
"Gonna Make You Sweat",
"I’m Your Boogie Man",
"What’d I Say",
"Don’t Leave Me This Way",
"Can’t Get Enough Of Your Love, Babe",
"If I Can’t Have You",
"Jump (For My Love)",
"Love To Love You",
"Funkytown",
"1999",
"Do Ya Think I’m Sexy",
"Tear The Roof Off The Sucker (Give Up The Funk)",
"Mustang Sally",
"Shotgun",
"Shake Your Groove Thing",
"Flashdance (What A Feeling…)",
"Get Up (I Feel Like Sex Machine)",
"Fly Robin Fly",
"Take Your Time (Do it Right)",
"Land of 1,000 Dances",
"Believe",
"Dance, Dance, Dance (Yowza, Yowza, Yowza)",
"Straight Up",
"Turn The Beat Around",
"I’m Every Woman",
"I Feel Love",
"Sexual Healing",
"Bad Girls",
"Dancing Machine",
"December, 1963 (Oh What A Night)",
"Disco Inferno",
"Boogie Shoes",
"Get Dancin’",
"I Wanna Be Your Lover",
"Macho Man",




 ];

 var artist = [

"The Village People",
"Bee Gees",
"ABBA",
"The Pointer Sisters",
"Sister Sledge",
"Van McCoy",
"Gloria Gaynor",
"Sly & The Family Stone",
"Madonna",
"Commodores",
"Chubby Checker",
"Bee Gees",
"Aretha Franklin",
"KC & The Sunshine Band",
"Taste of Honey",
"Sylvester",
"Chic",
"Michael Jackson",
"Martha & the Vandellas",
"Michael Jackson",
"Gloria Gaynor",
"Love Unlimited Orchestra",
"The Bee Gees",
"KC & The Sunshine Band",
"La Belle",
"The Hues Corporation",
"Dead Or Alive",
"Chic",
"Will Smith",
"Kool & The Gang",
"Shannon",
"Sister Sledge",
"The Emotions",
"Evelyn Champagne King",
"Diana Ross",
"Sly & The Family Stone",
"Blondie",
"The Whispers",
"The O’Jays",
"McFadden & Whitehead",
"MC Hammer",
"The Jackson 5",
"Los Del Rio",
"Andrea True Connection",
"Whitney Houston",
"Marvin Gaye",
"Peter Gabriel",
"MSFB & The Three Degrees",
"Donna Summer",
"Donna Summer",
"Eddie Kendricks",
"Dr Buzzard’s Original Savanah Band",
"Lionel Richie",
"Richie Valens",
"KC & The Sunshine Band",
"C&C Music Factory",
"KC & The Sunshine Band",
"Ray Charles",
"Thelma Houston",
"Barry White",
"Yvonne Elliman",
"The Pointer Sisters",
"Donna Summer",
"Lipps Inc",
"Prince",
"Rod Stewart",
"Parliament",
"Wilson Pickett",
"Junior Walker & The All Stars",
"Peaches & Herb",
"Irene Cara",
"James Brown",
"Silver Convention",
"The SOS Band",
"Wilson Pickett",
"Cher",
"Chic",
"Paula Abdul",
"Vicki Sue Robinson",
"Chaka Khan",
"Donna Summer",
"Marvin Gaye",
"Donna Summer",
"The Jackson 5",
"The Four Seasons",
"The Trammps",
"KC & The Sunshine Band",
"Disco Tex & His Sex O Lettes",
"Prince",
"The Village People",




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
