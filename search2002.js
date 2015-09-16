// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"How You Remind Me 	Nickelback"
"Foolish 	Ashanti",
"Hot in Herre 	Nelly"
"Dilemma 	Nelly featuring Kelly Rowland"
"Wherever You Will Go 	The Calling"
"A Thousand Miles 	Vanessa Carlton"
"In the End 	Linkin Park"
"What's Luv? 	Fat Joe featuring Ashanti"
"U Got It Bad 	Usher"
"Blurry 	Puddle of Mudd"
"Complicated 	Avril Lavigne"
"Always on Time 	Ja Rule featuring Ashanti"
"Ain't It Funny 	Jennifer Lopez featuring Ja Rule"
"The Middle 	Jimmy Eat World"
"I Need a Girl (Part One) 	P. Diddy featuring Usher and Loon"
"U Don't Have to Call 	Usher"
"Family Affair 	Mary J. Blige"
"I Need a Girl (Part Two) 	P. Diddy featuring Ginuwine, Loon and Mario Winans"
"Gangsta Lovin' 	Eve featuring Alicia Keys"
"My Sacrifice 	Creed"
"Without Me 	Eminem"
"Hero 	Enrique Iglesias"
"All You Wanted 	Michelle Branch"
"Get the Party Started 	Pink"
"Hero 	Chad Kroeger featuring Josey Scott"
"Wasting My Time 	Default"
"One Last Breath 	Creed"
"Whenever, Wherever 	Shakira"
"I'm Gonna Be Alright 	Jennifer Lopez featuring Nas"
"Oh Boy 	Cam'ron featuring Juelz Santana"
"Heaven 	DJ Sammy featuring Yanou and Do"
"Hey Baby 	No Doubt featuring Bounty Killer"
"Girlfriend 	'N Sync featuring Nelly"
"Just a Friend 2002 	Mario"
"Soak Up the Sun 	Sheryl Crow"
"Don't Let Me Get Me 	Pink"
"Nothin' 	N.O.R.E."
"Oops (Oh My) 	Tweet featuring Missy Elliott"
"A Moment Like This 	Kelly Clarkson"
"Addictive 	Truth Hurts featuring Rakim"
"Happy 	Ashanti"
"No Such Thing 	John Mayer"
"Just Like a Pill 	Pink"
"Down 4 U 	Ja Rule featuring Ashanti, Charli Baltimore and Vita"
"Can't Get You Out of My Head 	Kylie Minogue"
"Superman (It's Not Easy) 	Five for Fighting"
"Cleanin' Out My Closet 	Eminem"
"Halfcrazy 	Musiq Soulchild"
"Lights, Camera, Action! 	Mr. Cheeks"
"Still Fly 	Big Tymers"
"A Woman's Worth 	Alicia Keys"
"7 Days 	Craig David"
"Hey Ma 	Cam'ron featuring Juelz Santana and Freekey Zekey"
"Work It 	Missy Elliott"
"Move Bitch 	Ludacris featuring Mystikal and I-20"
"Can't Fight the Moonlight 	LeAnn Rimes"
"Escape 	Enrique Iglesias"
"More than a Woman 	Aaliyah"
"Hella Good 	No Doubt"
"I Love You 	Faith Evans"
"Gotta Get thru This 	Daniel Bedingfield"
"Pass the Courvoisier, Part II 	Busta Rhymes featuring P. Diddy and Pharrell"
"Lose Yourself 	Eminem"
"Butterflies 	Michael Jackson"
"What About Us? 	Brandy"
"Underneath Your Clothes 	Shakira"
"Rainy Dayz 	Mary J. Blige featuring Ja Rule"
"Differences 	Ginuwine"
"If I Could Go! 	Angie Martinez featuring Lil' Mo and Sacario"
"The Whole World 	Outkast featuring Killer Mike"
"Underneath It All 	No Doubt featuring Lady Saw"
"Caramel 	City High featuring Eve"
"Luv U Better 	LL Cool J"
"Gimme the Light 	Sean Paul"
"Gone 	'N Sync"
"Livin' It Up 	Ja Rule featuring Case"
"Rollout (My Business) 	Ludacris"
"Here Is Gone 	Goo Goo Dolls"
"No More Drama 	Mary J. Blige"
"Days Go By 	Dirty Vegas"
"Baby 	Ashanti"
"The Good Stuff 	Kenny Chesney"
"We Thuggin' 	Fat Joe featuring R. Kelly"
"Good Morning Beautiful 	Steve Holy"
"Rock the Boat 	Aaliyah"
"Drive (For Daddy Gene) 	Alan Jackson",
"Standing Still 	Jewel"
"Anything 	Jaheim featuring Next"
"Full Moon 	Brandy"
"Uh Huh 	B2K"
"A New Day Has Come 	Celine Dion"
"Turn Off the Light 	Nelly Furtado"
"Living and Living Well 	George Strait"
"My List 	Toby Keith"
"Hands Clean 	Alanis Morissette"
"Sk8er Boi 	Avril Lavigne"
"Long Time Gone 	Dixie Chicks"
"Where Were You (When the World Stopped Turning) 	Alan Jackson"
"Like I Love You 	Justin Timberlake"
"I Do!! 	Toya"
"Gamsız Hayat	Candan Erçetin"
"Arapsaçı	Funda Arar"
"Arka Sokaklar	Gülben Ergen"
"Kabahat	Serdar Ortaç"
"Haberi Olsun	Yıldız Tilbe"
"XL	Nil Karaibrahimgil"
"Ne Oldu Can	Kayahan"
"Pazara Kadar	Mustafa Sandal"
"İhanet	Gülşen"
"Biz Oluruz Yolunda	Tarkan"
"Tutunamadım	Işın Karaca"
"Ben Böyleyim 	Candan Erçetin"

 

    ];

var names = [

"How You Remind Me ",
"Foolish ",
"Hot in Herre ",
"Dilemma ",
"Wherever You Will Go ",
"A Thousand Miles ",
"In the End ",
"What's Luv? ",
"U Got It Bad ",
"Blurry ",
"Complicated ",
"Always on Time ",
"Ain't It Funny ",
"The Middle ",
"I Need a Girl (Part One) ",
"U Don't Have to Call ",
"Family Affair ",
"I Need a Girl (Part Two) ",
"Gangsta Lovin' ",
"My Sacrifice ",
"Without Me ",
"Hero ",
"All You Wanted ",
"Get the Party Started ",
"Hero ",
"Wasting My Time ",
"One Last Breath ",
"Whenever, Wherever ",
"I'm Gonna Be Alright ",
"Oh Boy ",
"Heaven ",
"Hey Baby ",
"Girlfriend ",
"Just a Friend 2002 ",
"Soak Up the Sun ",
"Don't Let Me Get Me ",
"Nothin' ",
"Oops (Oh My) ",
"A Moment Like This ",
"Addictive ",
"Happy ",
"No Such Thing ",
"Just Like a Pill ",
"Down 4 U ",
"Can't Get You Out of My Head ",
"Superman (It's Not Easy) ",
"Cleanin' Out My Closet ",
"Halfcrazy ",
"Lights, Camera, Action! ",
"Still Fly ",
"A Woman's Worth ",
"7 Days ",
"Hey Ma ",
"Work It ",
"Move Bitch ",
"Can't Fight the Moonlight ",
"Escape ",
"More than a Woman ",
"Hella Good ",
"I Love You ",
"Gotta Get thru This ",
"Pass the Courvoisier, Part II ",
"Lose Yourself ",
"Butterflies ",
"What About Us? ",
"Underneath Your Clothes ",
"Rainy Dayz ",
"Differences ",
"If I Could Go! ",
"The Whole World ",
"Underneath It All ",
"Caramel ",
"Luv U Better ",
"Gimme the Light ",
"Gone ",
"Livin' It Up ",
"Rollout (My Business) ",
"Here Is Gone ",
"No More Drama ",
"Days Go By ",
"Baby ",
"The Good Stuff ",
"We Thuggin' ",
"Good Morning Beautiful ",
"Rock the Boat ",
"Drive (For Daddy Gene) ",
"Standing Still ",
"Anything ",
"Full Moon ",
"Uh Huh ",
"A New Day Has Come ",
"Turn Off the Light ",
"Living and Living Well ",
"My List ",
"Hands Clean ",
"Sk8er Boi ",
"Long Time Gone ",
"Where Were You (When the World Stopped Turning) ",
"Like I Love You ",
"I Do!! ",
"Gamsız Hayat",
"Arapsaçı",
"Arka Sokaklar",
"Kabahat",
"Haberi Olsun",
"XL",
"Ne Oldu Can",
"Pazara Kadar",
"İhanet",
"Biz Oluruz Yolunda",
"Tutunamadım",
"Ben Böyleyim ",




 ];

 var artist = [

"Nickelback",
"Ashanti",
"Nelly",
"Nelly featuring Kelly Rowland",
"The Calling",
"Vanessa Carlton",
"Linkin Park",
"Fat Joe featuring Ashanti",
"Usher",
"Puddle of Mudd",
"Avril Lavigne",
"Ja Rule featuring Ashanti",
"Jennifer Lopez featuring Ja Rule",
"Jimmy Eat World",
"P. Diddy featuring Usher and Loon",
"Usher",
"Mary J. Blige",
"P. Diddy featuring Ginuwine, Loon and Mario Winans",
"Eve featuring Alicia Keys",
"Creed",
"Eminem",
"Enrique Iglesias",
"Michelle Branch",
"Pink",
"Chad Kroeger featuring Josey Scott",
"Default",
"Creed",
"Shakira",
"Jennifer Lopez featuring Nas",
"Cam'ron featuring Juelz Santana",
"DJ Sammy featuring Yanou and Do",
"No Doubt featuring Bounty Killer",
"'N Sync featuring Nelly",
"Mario",
"Sheryl Crow",
"Pink",
"N.O.R.E.",
"Tweet featuring Missy Elliott",
"Kelly Clarkson",
"Truth Hurts featuring Rakim",
"Ashanti",
"John Mayer",
"Pink",
"Ja Rule featuring Ashanti, Charli Baltimore and Vita",
"Kylie Minogue",
"Five for Fighting",
"Eminem",
"Musiq Soulchild",
"Mr. Cheeks",
"Big Tymers",
"Alicia Keys",
"Craig David",
"Cam'ron featuring Juelz Santana and Freekey Zekey",
"Missy Elliott",
"Ludacris featuring Mystikal and I-20",
"LeAnn Rimes",
"Enrique Iglesias",
"Aaliyah",
"No Doubt",
"Faith Evans",
"Daniel Bedingfield",
"Busta Rhymes featuring P. Diddy and Pharrell",
"Eminem",
"Michael Jackson",
"Brandy",
"Shakira",
"Mary J. Blige featuring Ja Rule",
"Ginuwine",
"Angie Martinez featuring Lil' Mo and Sacario",
"Outkast featuring Killer Mike",
"No Doubt featuring Lady Saw",
"City High featuring Eve",
"LL Cool J",
"Sean Paul",
"'N Sync",
"Ja Rule featuring Case",
"Ludacris",
"Goo Goo Dolls",
"Mary J. Blige",
"Dirty Vegas",
"Ashanti",
"Kenny Chesney",
"Fat Joe featuring R. Kelly",
"Steve Holy",
"Aaliyah",
"Alan Jackson",
"Jewel",
"Jaheim featuring Next",
"Brandy",
"B2K",
"Celine Dion",
"Nelly Furtado",
"George Strait",
"Toby Keith",
"Alanis Morissette",
"Avril Lavigne",
"Dixie Chicks",
"Alan Jackson",
"Justin Timberlake",
"Toya",
"Candan Erçetin",
"Funda Arar",
"Gülben Ergen",
"Serdar Ortaç",
"Yıldız Tilbe",
"Nil Karaibrahimgil",
"Kayahan",
"Mustafa Sandal",
"Gülşen",
"Tarkan",
"Işın Karaca",
"Candan Erçetin",




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
