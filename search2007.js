// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Irreplaceable 	Beyoncé",
"Umbrella 	Rihanna featuring Jay-Z",
"The Sweet Escape 	Gwen Stefani featuring Akon",
"Big Girls Don't Cry 	Fergie",
"Buy U a Drank (Shawty Snappin') 	T-Pain featuring Yung Joc",
"Before He Cheats 	Carrie Underwood",
"Hey There Delilah 	Plain White T's",
"I Wanna Love You 	Akon featuring Snoop Dogg",
"Say It Right 	Nelly Furtado",
"Glamorous 	Fergie featuring Ludacris",
"Don't Matter 	Akon",
"Girlfriend 	Avril Lavigne",
"Makes Me Wonder 	Maroon 5",
"Party Like a Rockstar 	Shop Boyz",
"Smack That 	Akon featuring Eminem",
"This Is Why I'm Hot 	Mims",
"It's Not Over 	Daughtry",
"The Way I Are 	Timbaland featuring Keri Hilson",
"Fergalicious 	Fergie featuring will.i.am",
"Crank That (Soulja Boy) 	Soulja Boy Tell 'Em",
"Give It to Me 	Timbaland featuring Nelly Furtado and Justin Timberlake",
"What Goes Around... Comes Around 	Justin Timberlake",
"Cupid's Chokehold 	Gym Class Heroes featuring Patrick Stump",
"How to Save a Life 	The Fray",
"Home 	Daughtry",
"My Love 	Justin Timberlake featuring T.I.",
"Stronger 	Kanye West",
"We Fly High 	Jim Jones",
"U + Ur Hand 	Pink",
"Walk It Out 	Unk",
"Beautiful Girls 	Sean Kingston",
"This Ain't a Scene, It's an Arms Race 	Fall Out Boy",
"Bartender 	T-Pain featuring Akon",
"Pop, Lock & Drop It 	Huey",
"Runaway Love 	Ludacris featuring Mary J. Blige",
"Rockstar 	Nickelback",
"Thnks fr th Mmrs 	Fall Out Boy",
"What I've Done 	Linkin Park",
"Summer Love 	Justin Timberlake",
"You 	Lloyd featuring Lil Wayne",
"Wait for You 	Elliott Yamin",
"Last Night 	Diddy featuring Keyshia Cole",
"Make It Rain 	Fat Joe featuring Lil Wayne",
"Make Me Better 	Fabolous featuring Ne-Yo",
"Ice Box 	Omarion featuring Timbaland",
"Lips of an Angel 	Hinder",
"Waiting on the World to Change 	John Mayer",
"Lost Without U 	Robin Thicke",
"I'm a Flirt 	R. Kelly featuring T.I. and T-Pain",
"If Everyone Cared 	Nickelback",
"Get It Shawty 	Lloyd",
"Face Down 	The Red Jumpsuit Apparatus",
"The Way I Live 	Baby Boy da Prince",
"Shortie Like Mine 	Bow Wow featuring Chris Brown and Johntá Austin",
"It Ends Tonight 	The All-American Rejects",
"A Bay Bay 	Hurricane Chris",
"Because of You 	Ne-Yo",
"I Tried 	Bone Thugs-n-Harmony featuring Akon",
"Welcome to the Black Parade 	My Chemical Romance",
"Shawty 	Plies featuring T-Pain",
"Chasing Cars 	Snow Patrol",
"Beautiful Liar 	Beyoncé featuring Shakira",
"SexyBack 	Justin Timberlake",
"Keep Holding On 	Avril Lavigne",
"Let It Go 	Keyshia Cole featuring Missy Elliott and Lil' Kim",
"Apologize 	Timbaland featuring OneRepublic",
"Bubbly 	Colbie Caillat",
"Like a Boy 	Ciara",
"Who Knew 	Pink",
"Never Again 	Kelly Clarkson",
"Promise 	Ciara",
"Bed 	J. Holiday",
"Throw Some D's 	Rich Boy featuring Polow da Don",
"Rehab 	Amy Winehouse",
"Big Shit Poppin' (Do It) 	T.I.",
"No One 	Alicia Keys",
"The Great Escape 	Boys Like Girls",
"2 Step 	Unk",
"Walk Away (Remember Me) 	Paula DeAnda featuring The D.E.Y.",
"Go Getta 	Young Jeezy featuring R. Kelly",
"Here (In Your Arms) 	Hellogoodbye",
"On the Hotline 	Pretty Ricky",
"Wind It Up 	Gwen Stefani",
"Cyclone 	Baby Bash featuring T-Pain",
"Break It Off 	Rihanna featuring Sean Paul",
"First Time 	Lifehouse",
"Ayo Technology 	50 Cent featuring Justin Timberlake and Timbaland",
"Outta My System 	Bow Wow featuring T-Pain and Johntá Austin",
"Teardrops on My Guitar 	Taylor Swift",
"Shut Up and Drive 	Rihanna",
"Snow (Hey Oh) 	Red Hot Chili Peppers",
"Money Maker 	Ludacris featuring Pharrell",
"Kiss Kiss 	Chris Brown featuring T-Pain",
"Far Away 	Nickelback",
"Rock Yo Hips 	Crime Mob and Lil' Scrappy",
"LoveStoned 	Justin Timberlake",
"Better than Me 	Hinder",
"Paralyzer 	Finger Eleven",
"That's That 	Snoop Dogg featuring R. Kelly",
"Same Girl 	R. Kelly featuring Usher",
"Unut Beni	Bengü",
"Vay Anam Vay	Tarkan",
"Sözümü Tutamadım	Tan",
"Evlerinin Önü Boyalı Direk	Öykü & Berk",
"Belki Bir Gün Özlersin	Emre Aydın",
"Nasip Değilmiş	Özcan Deniz",
"Gönlünü Gün Edeni	Mustafa Sandal",
"Ayıp Olmaz Mı?	Mor Ve Ötesi",
"Ebruli	Yaşar",
"Kırk Yıl	Kara",

 

    ];

var names = [

"Irreplaceable ",
"Umbrella ",
"The Sweet Escape ",
"Big Girls Don't Cry ",
"Buy U a Drank (Shawty Snappin') ",
"Before He Cheats ",
"Hey There Delilah ",
"I Wanna Love You ",
"Say It Right ",
"Glamorous ",
"Don't Matter ",
"Girlfriend ",
"Makes Me Wonder ",
"Party Like a Rockstar ",
"Smack That ",
"This Is Why I'm Hot ",
"It's Not Over ",
"The Way I Are ",
"Fergalicious ",
"Crank That (Soulja Boy) ",
"Give It to Me ",
"What Goes Around... Comes Around ",
"Cupid's Chokehold ",
"How to Save a Life ",
"Home ",
"My Love ",
"Stronger ",
"We Fly High ",
"U + Ur Hand ",
"Walk It Out ",
"Beautiful Girls ",
"This Ain't a Scene, It's an Arms Race ",
"Bartender ",
"Pop, Lock & Drop It ",
"Runaway Love ",
"Rockstar ",
"Thnks fr th Mmrs ",
"What I've Done ",
"Summer Love ",
"You ",
"Wait for You ",
"Last Night ",
"Make It Rain ",
"Make Me Better ",
"Ice Box ",
"Lips of an Angel ",
"Waiting on the World to Change ",
"Lost Without U ",
"I'm a Flirt ",
"If Everyone Cared ",
"Get It Shawty ",
"Face Down ",
"The Way I Live ",
"Shortie Like Mine ",
"It Ends Tonight ",
"A Bay Bay ",
"Because of You ",
"I Tried ",
"Welcome to the Black Parade ",
"Shawty ",
"Chasing Cars ",
"Beautiful Liar ",
"SexyBack ",
"Keep Holding On ",
"Let It Go ",
"Apologize ",
"Bubbly ",
"Like a Boy ",
"Who Knew ",
"Never Again ",
"Promise ",
"Bed ",
"Throw Some D's ",
"Rehab ",
"Big Shit Poppin' (Do It) ",
"No One ",
"The Great Escape ",
"2 Step ",
"Walk Away (Remember Me) ",
"Go Getta ",
"Here (In Your Arms) ",
"On the Hotline ",
"Wind It Up ",
"Cyclone ",
"Break It Off ",
"First Time ",
"Ayo Technology ",
"Outta My System ",
"Teardrops on My Guitar ",
"Shut Up and Drive ",
"Snow (Hey Oh) ",
"Money Maker ",
"Kiss Kiss ",
"Far Away ",
"Rock Yo Hips ",
"LoveStoned ",
"Better than Me ",
"Paralyzer ",
"That's That ",
"Same Girl ",
"Unut Beni",
"Vay Anam Vay",
"Sözümü Tutamadım",
"Evlerinin Önü Boyalı Direk",
"Belki Bir Gün Özlersin",
"Nasip Değilmiş",
"Gönlünü Gün Edeni",
"Ayıp Olmaz Mı?",
"Ebruli",
"Kırk Yıl",




 ];

 var artist = [

"Beyoncé",
"Rihanna featuring Jay-Z",
"Gwen Stefani featuring Akon",
"Fergie",
"T-Pain featuring Yung Joc",
"Carrie Underwood",
"Plain White T's",
"Akon featuring Snoop Dogg",
"Nelly Furtado",
"Fergie featuring Ludacris",
"Akon",
"Avril Lavigne",
"Maroon 5",
"Shop Boyz",
"Akon featuring Eminem",
"Mims",
"Daughtry",
"Timbaland featuring Keri Hilson",
"Fergie featuring will.i.am",
"Soulja Boy Tell 'Em",
"Timbaland featuring Nelly Furtado and Justin Timberlake",
"Justin Timberlake",
"Gym Class Heroes featuring Patrick Stump",
"The Fray",
"Daughtry",
"Justin Timberlake featuring T.I.",
"Kanye West",
"Jim Jones",
"Pink",
"Unk",
"Sean Kingston",
"Fall Out Boy",
"T-Pain featuring Akon",
"Huey",
"Ludacris featuring Mary J. Blige",
"Nickelback",
"Fall Out Boy",
"Linkin Park",
"Justin Timberlake",
"Lloyd featuring Lil Wayne",
"Elliott Yamin",
"Diddy featuring Keyshia Cole",
"Fat Joe featuring Lil Wayne",
"Fabolous featuring Ne-Yo",
"Omarion featuring Timbaland",
"Hinder",
"John Mayer",
"Robin Thicke",
"R. Kelly featuring T.I. and T-Pain",
"Nickelback",
"Lloyd",
"The Red Jumpsuit Apparatus",
"Baby Boy da Prince",
"Bow Wow featuring Chris Brown and Johntá Austin",
"The All-American Rejects",
"Hurricane Chris",
"Ne-Yo",
"Bone Thugs-n-Harmony featuring Akon",
"My Chemical Romance",
"Plies featuring T-Pain",
"Snow Patrol",
"Beyoncé featuring Shakira",
"Justin Timberlake",
"Avril Lavigne",
"Keyshia Cole featuring Missy Elliott and Lil' Kim",
"Timbaland featuring OneRepublic",
"Colbie Caillat",
"Ciara",
"Pink",
"Kelly Clarkson",
"Ciara",
"J. Holiday",
"Rich Boy featuring Polow da Don",
"Amy Winehouse",
"T.I.",
"Alicia Keys",
"Boys Like Girls",
"Unk",
"Paula DeAnda featuring The D.E.Y.",
"Young Jeezy featuring R. Kelly",
"Hellogoodbye",
"Pretty Ricky",
"Gwen Stefani",
"Baby Bash featuring T-Pain",
"Rihanna featuring Sean Paul",
"Lifehouse",
"50 Cent featuring Justin Timberlake and Timbaland",
"Bow Wow featuring T-Pain and Johntá Austin",
"Taylor Swift",
"Rihanna",
"Red Hot Chili Peppers",
"Ludacris featuring Pharrell",
"Chris Brown featuring T-Pain",
"Nickelback",
"Crime Mob and Lil' Scrappy",
"Justin Timberlake",
"Hinder",
"Finger Eleven",
"Snoop Dogg featuring R. Kelly",
"R. Kelly featuring Usher",
"Bengü",
"Tarkan",
"Tan",
"Öykü & Berk",
"Emre Aydın",
"Özcan Deniz",
"Mustafa Sandal",
"Mor Ve Ötesi",
"Yaşar",
"Kara",




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
