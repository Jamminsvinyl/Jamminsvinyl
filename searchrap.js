// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"White Lines (Don't Do It)	Grandmaster Flash & The Furious Five",
"Walk This Way	Run DMC & Aerosmith",
"Rappers Delight	Sugar Hill Gang",
"Fight The Power	Public Enemy",
"Fight For Your Right	Beastie Boys",
"Gangsta's Paradise	Coolio",
"Planet Rock	Afrika Bambatta",
"The Message	Grandmaster Flash & The Furious Five",
"Killing Me Softly	The Fugees",
"Stan	Eminem",
"I'll Be Missing You	Puff Daddy",
"California Love	2Pac",
"Cop Killa	Ice T",
"The Rain (Supa Dupa Fly)	Missy Elliott",
"I Need Love	LL Cool J",
"Doo Wop (That Thing)	Lauryn Hill",
"Push It	Salt N Pepa",
"Mama Said Knock You Out	LL Cool J",
"Ms. Jackson	Outkast",
"Work It	Missy Elliott",
"Nuthin But A 'G' Thang. Dr. Dre	Snoop Dogg",
"People Everyday	Arrested Development",
"99 Problems	Jay Z",
"Crossroads	Bone Thugs N Harmony",
"Mo Money Mo Problems	Notorious B.I.G.",
"Summertime	DJ Jazzy Jeff & The Fresh Prince",
"Country Grammer	Nelly",
"Gin & Juice	Snoop Dogg & Dr. Dre",
"In Da Club	50 Cent",
"Stop The Violence Movement	Self Destruction",
"Hey Ya	Outkast",
"Everything Is Everything	Lauryn Hill",
"Mind's Playing Tricks On Me	Geto Boys",
"Looking For The Perfect Beat	Afrika Bambatta",
"No Sleep Till Brooklyn	Beastie Boys",
"Big Poppa	Notorious B.I.G.",
"Unity	Queen Latifah",
"It's Tricky	Run DMC",
"I used to love h.e.r.	Common",
"Gettin Jiggy Wit It	Will Smith",
"Excursion	A Tribe Called Quest",
"Black Steel In the Hour of Chaos	Public Enemy",
"Baby Got Back	Sir Mix A Lot",
"Real Love	Mary J. Blige",
"The Magic Number	De La Soul",
"Hard Knock Life	Jay Z",
"Straight Outta Compton	N.W.A.",
"Bridge is Over	Boogie Down Productions",
"On and On	Erykah Badu",
"The Way I Am	Eminem",
"Rock Box	Run DMC",
"New Jack Hustler	Ice T",
"One Minute Man	Missy Elliott",
"Me, Myself and I	De La Soul",
"We're All In The Same Gang	West Coast Rap All Stars",
"Hot In Herre	Nelly",
"My Adidas	Run DMC",
"Roxannes Revenge	Roxanne Shante",
"AmeriKKKa's Most Wanted	Ice Cube",
"Say No Go	De La Soul",
"Just A Friend	Biz Markie",
"One More Chance	Notorious B.I.G.",
"Funkee Ko Medina	Tone Loc",
"Rebel Without A Pause	Public Enemy",
"Love of My Life	Erykah Badu",
"Whatta Man	Salt N Pepa & En Vogue",
"I Know You Got Soul	Eric B. & Rakim",
"Creep	TLC",
"Childrens Story	Slick Rick",
"2 Legit 2 Quit	MC Hammer",
"Brown Skin Lady	Mos Def",
"Welcome to the Terrordome	Public Enemy",
"Dear Mama	2Pac",
"Woo Ha!! Got You All In Check	Busta Rhymes",
"Big Pimpin'	Jay Z",
"Bonita Applebum	A Tribe Called Quest",
"No More Drama	Mary J. Blige",
"Ready or Not	The Fugees",
"Jesus Walks	Kanye West",
"Love Is Blind	Eve",
"Lyte As A Rock	MC Lyte",
"Eye Know	De La Soul",
"Raw	Big Daddy Kane",
"It Was A Good Day	Ice Cube",
"Parents Just Don't Understand	DJ Jazzy Jeff & The Fresh Prince",
"Scenario	A Tribe Called Quest",
"To Beat Ya'll	Lady B",
"I'm Still Number One	Boogie Down Productions",
"Put Your Hands Where My Eyes Can See	Busta Rhymes",
"Bust A Move	Young MC",
"Don't Sweat The Technique	Eric B. & Rakim",
"Freaks Come Out At Night	Whodini",
"Wild Thing	Tone Loc",
"The Real Slim Shady	Eminem",
"How Ya Like Me Now	Kool Moe Dee",
"C.R.E.A.M.	Wu Tang Clan",
"Boyz N The Hood	Eazy E",
"Vapors	Biz Markie",
"The Humpty Dance	Digital Underground",
"Express Yourself	N.W.A.",


 

    ];

var names = [

"White Lines (Don't Do It)",
"Walk This Way",
"Rappers Delight",
"Fight The Power",
"Fight For Your Right",
"Gangsta's Paradise",
"Planet Rock",
"The Message",
"Killing Me Softly",
"Stan",
"I'll Be Missing You",
"California Love",
"Cop Killa",
"The Rain (Supa Dupa Fly)",
"I Need Love",
"Doo Wop (That Thing)",
"Push It",
"Mama Said Knock You Out",
"Ms. Jackson",
"Work It",
"Nuthin But A 'G' Thang. Dr. Dre",
"People Everyday",
"99 Problems",
"Crossroads",
"Mo Money Mo Problems",
"Summertime",
"Country Grammer",
"Gin & Juice",
"In Da Club",
"Stop The Violence Movement",
"Hey Ya",
"Everything Is Everything",
"Mind's Playing Tricks On Me",
"Looking For The Perfect Beat",
"No Sleep Till Brooklyn",
"Big Poppa",
"Unity",
"It's Tricky",
"I used to love h.e.r.",
"Gettin Jiggy Wit It",
"Excursion",
"Black Steel In the Hour of Chaos",
"Baby Got Back",
"Real Love",
"The Magic Number",
"Hard Knock Life",
"Straight Outta Compton",
"Bridge is Over",
"On and On",
"The Way I Am",
"Rock Box",
"New Jack Hustler",
"One Minute Man",
"Me, Myself and I",
"We're All In The Same Gang",
"Hot In Herre",
"My Adidas",
"Roxannes Revenge",
"AmeriKKKa's Most Wanted",
"Say No Go",
"Just A Friend",
"One More Chance",
"Funkee Ko Medina",
"Rebel Without A Pause",
"Love of My Life",
"Whatta Man",
"I Know You Got Soul",
"Creep",
"Childrens Story",
"2 Legit 2 Quit",
"Brown Skin Lady",
"Welcome to the Terrordome",
"Dear Mama",
"Woo Ha!! Got You All In Check",
"Big Pimpin'",
"Bonita Applebum",
"No More Drama",
"Ready or Not",
"Jesus Walks",
"Love Is Blind",
"Lyte As A Rock",
"Eye Know",
"Raw",
"It Was A Good Day",
"Parents Just Don't Understand",
"Scenario",
"To Beat Ya'll",
"I'm Still Number One",
"Put Your Hands Where My Eyes Can See",
"Bust A Move",
"Don't Sweat The Technique",
"Freaks Come Out At Night",
"Wild Thing",
"The Real Slim Shady",
"How Ya Like Me Now",
"C.R.E.A.M.",
"Boyz N The Hood",
"Vapors",
"The Humpty Dance",
"Express Yourself",




 ];

 var artist = [

"Grandmaster Flash & The Furious Five",
"Run DMC & Aerosmith",
"Sugar Hill Gang",
"Public Enemy",
"Beastie Boys",
"Coolio",
"Afrika Bambatta",
"Grandmaster Flash & The Furious Five",
"The Fugees",
"Eminem",
"Puff Daddy",
"2Pac",
"Ice T",
"Missy Elliott",
"LL Cool J",
"Lauryn Hill",
"Salt N Pepa",
"LL Cool J",
"Outkast",
"Missy Elliott",
"Snoop Dogg",
"Arrested Development",
"Jay Z",
"Bone Thugs N Harmony",
"Notorious B.I.G.",
"DJ Jazzy Jeff & The Fresh Prince",
"Nelly",
"Snoop Dogg & Dr. Dre",
"50 Cent",
"Self Destruction",
"Outkast",
"Lauryn Hill",
"Geto Boys",
"Afrika Bambatta",
"Beastie Boys",
"Notorious B.I.G.",
"Queen Latifah",
"Run DMC",
"Common",
"Will Smith",
"A Tribe Called Quest",
"Public Enemy",
"Sir Mix A Lot",
"Mary J. Blige",
"De La Soul",
"Jay Z",
"N.W.A.",
"Boogie Down Productions",
"Erykah Badu",
"Eminem",
"Run DMC",
"Ice T",
"Missy Elliott",
"De La Soul",
"West Coast Rap All Stars",
"Nelly",
"Run DMC",
"Roxanne Shante",
"Ice Cube",
"De La Soul",
"Biz Markie",
"Notorious B.I.G.",
"Tone Loc",
"Public Enemy",
"Erykah Badu",
"Salt N Pepa & En Vogue",
"Eric B. & Rakim",
"TLC",
"Slick Rick",
"MC Hammer",
"Mos Def",
"Public Enemy",
"2Pac",
"Busta Rhymes",
"Jay Z",
"A Tribe Called Quest",
"Mary J. Blige",
"The Fugees",
"Kanye West",
"Eve",
"MC Lyte",
"De La Soul",
"Big Daddy Kane",
"Ice Cube",
"DJ Jazzy Jeff & The Fresh Prince",
"A Tribe Called Quest",
"Lady B",
"Boogie Down Productions",
"Busta Rhymes",
"Young MC",
"Eric B. & Rakim",
"Whodini",
"Tone Loc",
"Eminem",
"Kool Moe Dee",
"Wu Tang Clan",
"Eazy E",
"Biz Markie",
"Digital Underground",
"N.W.A.",




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
