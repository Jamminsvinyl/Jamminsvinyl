// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"In da Club 	50 Cent",
"Ignition (Remix) 	R. Kelly",
"Get Busy 	Sean Paul",
"Crazy in Love 	Beyoncé featuring Jay-Z",
"When I'm Gone 	3 Doors Down",
"Unwell 	Matchbox Twenty",
"Right Thurr 	Chingy",
"Miss You 	Aaliyah",
"Picture 	Kid Rock featuring Sheryl Crow",
"Bring Me to Life 	Evanescence featuring Paul McCoy",
"Get Low 	Lil Jon & The East Side Boyz featuring Ying Yang Twins",
"Baby Boy 	Beyoncé featuring Sean Paul",
"Shake Ya Tailfeather 	Nelly, P. Diddy and Murphy Lee",
"21 Questions 	50 Cent featuring Nate Dogg",
"All I Have 	Jennifer Lopez featuring LL Cool J",
"Beautiful 	Christina Aguilera",
"I Know What You Want 	Busta Rhymes and Mariah Carey featuring Flipmode Squad",
"I'm with You 	Avril Lavigne",
"Drift Away 	Uncle Kracker featuring Dobie Gray",
"Magic Stick 	Lil' Kim featuring 50 Cent",
"P.I.M.P. 	50 Cent",
"Bump, Bump, Bump 	B2K and P. Diddy",
"Into You 	Fabolous featuring Tamia",
"Can't Let You Go 	Fabolous featuring Lil' Mo and Mike Shorey",
"Mesmerize 	Ja Rule featuring Ashanti",
"Where Is the Love? 	The Black Eyed Peas",
"The Game of Love 	Santana featuring Michelle Branch",
"Lose Yourself 	Eminem",
"Rock wit U (Awww Baby) 	Ashanti",
"Cry Me a River 	Justin Timberlake",
"How You Gonna Act Like That 	Tyrese",
"Rock Your Body 	Justin Timberlake",
"No Letting Go 	Wayne Wonder",
"Frontin' 	Pharrell featuring Jay-Z",
"Landslide 	Dixie Chicks",
"Work It 	Missy Elliott",
"'03 Bonnie & Clyde 	Jay-Z featuring Beyoncé",
"Don't Mess with My Man 	Nivea featuring Jagged Edge",
"So Gone 	Monica",
"Air Force Ones 	Nelly featuring St. Lunatics",
"Never Leave You (Uh Oooh, Uh Oooh) 	Lumidee",
"Beautiful 	Snoop Dogg featuring Pharrell and Charlie Wilson",
"Gossip Folks 	Missy Elliott featuring Ludacris",
"Miss Independent 	Kelly Clarkson",
"Calling All Angels 	Train",
"Damn! 	YoungBloodZ featuring Lil Jon",
"This Is the Night 	Clay Aiken",
"Your Body Is a Wonderland 	John Mayer",
"Headstrong 	Trapt",
"In Those Jeans 	Ginuwine",
"Stand Up 	Ludacris featuring Shawnna",
"The Remedy (I Won't Worry) 	Jason Mraz",
"Why Don't You & I 	Santana featuring Alex Band",
"Excuse Me Miss 	Jay-Z",
"Jenny from the Block 	Jennifer Lopez featuring Jadakiss and Styles P",
"Are You Happy Now? 	Michelle Branch",
"Forever and for Always 	Shania Twain",
"I Can 	Nas",
"Underneath It All 	No Doubt featuring Lady Saw",
"If You're Not the One 	Daniel Bedingfield",
"Thoia Thoing 	R. Kelly",
"Here Without You 	3 Doors Down",
"Wanksta 	50 Cent",
"My Love Is Like...Wo 	Mýa",
"It's Five O'Clock Somewhere 	Alan Jackson featuring Jimmy Buffett",
"Like Glue 	Sean Paul",
"Can't Hold Us Down 	Christina Aguilera featuring Lil' Kim",
"My Front Porch Looking In 	Lonestar",
"Angel 	Amanda Perez",
"She Hates Me 	Puddle of Mudd",
"Don't Wanna Try 	Frankie J",
"The Jump Off 	Lil' Kim featuring Mr. Cheeks",
"Intuition 	Jewel",
"Hell Yeah 	Ginuwine featuring Baby",
"Beer for My Horses 	Toby Keith featuring Willie Nelson",
"Holidae In 	Chingy featuring Ludacris and Snoop Dogg",
"Suga Suga 	Baby Bash featuring Frankie J",
"Love of My Life (An Ode to Hip-Hop) 	Erykah Badu featuring Common",
"Fighter 	Christina Aguilera",
"Thugz Mansion 	2Pac",
"Clocks 	Coldplay",
"Put That Woman First 	Jaheim",
"Rain on Me 	Ashanti",
"19 Somethin' 	Mark Wills",
"Can't Stop, Won't Stop 	Young Gunz",
"Red Dirt Road 	Brooks & Dunn",
"What Was I Thinkin' 	Dierks Bentley",
"Flying Without Wings 	Ruben Studdard",
"Sing for the Moment 	Eminem",
"Have You Forgotten? 	Darryl Worley",
"No Shoes, No Shirt, No Problems 	Kenny Chesney",
"Come Over 	Aaliyah",
"Sick of Being Lonely 	Field Mob",
"Step in the Name of Love 	R. Kelly",
"I Want You 	Thalía featuring Fat Joe",
"Like a Stone 	Audioslave",
"Don't Know Why 	Norah Jones",
"Superman 	Eminem",
"Real Good Man 	Tim McGraw",
"Say Yes 	Floetry",
"Farkındayım 	Sezen Aksu",
"Gidecek Yerim mi Var?	Emre Altuğ",
"Firar	Göksel",
"Mayın Tarlası	Şebnem Ferah",
"Sen İste	Ajda Pekkan",
"Çabuk Olalım Aşkım	Yıldız Tilbe",
"Şuna da Bak	Pamela Spence",
"Aşkım Aşkım	Kenan Doğulu",
"Gamsız Hayat (Remix)	Candan Erçetin",
"Sevda Yanığı	Funda Arar",
"Dudu	Tarkan",
"Osman Aga	Sefarad",
"Aklım Karıştı	Kenan Doğulu",
"Mayın Tarlası	Şebnem Ferah",
"Farkındayım	Sezen Aksu",
"Çabuk Olalım Aşkım	Yıldız Tilbe",
"Sana Sevgilim Ol mu Dedim	Nalan",
"Gamsız Hayat (Remix)	Candan Erçetin",
"Sen İste	Ajda Pekkan",
"Sevda Yanığı	Funda Arar",

 

    ];

var names = [

"In da Club ",
"Ignition (Remix) ",
"Get Busy ",
"Crazy in Love ",
"When I'm Gone ",
"Unwell ",
"Right Thurr ",
"Miss You ",
"Picture ",
"Bring Me to Life ",
"Get Low ",
"Baby Boy ",
"Shake Ya Tailfeather ",
"21 Questions ",
"All I Have ",
"Beautiful ",
"I Know What You Want ",
"I'm with You ",
"Drift Away ",
"Magic Stick ",
"P.I.M.P. ",
"Bump, Bump, Bump ",
"Into You ",
"Can't Let You Go ",
"Mesmerize ",
"Where Is the Love? ",
"The Game of Love ",
"Lose Yourself ",
"Rock wit U (Awww Baby) ",
"Cry Me a River ",
"How You Gonna Act Like That ",
"Rock Your Body ",
"No Letting Go ",
"Frontin' ",
"Landslide ",
"Work It ",
"'03 Bonnie & Clyde ",
"Don't Mess with My Man ",
"So Gone ",
"Air Force Ones ",
"Never Leave You (Uh Oooh, Uh Oooh) ",
"Beautiful ",
"Gossip Folks ",
"Miss Independent ",
"Calling All Angels ",
"Damn! ",
"This Is the Night ",
"Your Body Is a Wonderland ",
"Headstrong ",
"In Those Jeans ",
"Stand Up ",
"The Remedy (I Won't Worry) ",
"Why Don't You & I ",
"Excuse Me Miss ",
"Jenny from the Block ",
"Are You Happy Now? ",
"Forever and for Always ",
"I Can ",
"Underneath It All ",
"If You're Not the One ",
"Thoia Thoing ",
"Here Without You ",
"Wanksta ",
"My Love Is Like...Wo ",
"It's Five O'Clock Somewhere ",
"Like Glue ",
"Can't Hold Us Down ",
"My Front Porch Looking In ",
"Angel ",
"She Hates Me ",
"Don't Wanna Try ",
"The Jump Off ",
"Intuition ",
"Hell Yeah ",
"Beer for My Horses ",
"Holidae In ",
"Suga Suga ",
"Love of My Life (An Ode to Hip-Hop) ",
"Fighter ",
"Thugz Mansion ",
"Clocks ",
"Put That Woman First ",
"Rain on Me ",
"19 Somethin' ",
"Can't Stop, Won't Stop ",
"Red Dirt Road ",
"What Was I Thinkin' ",
"Flying Without Wings ",
"Sing for the Moment ",
"Have You Forgotten? ",
"No Shoes, No Shirt, No Problems ",
"Come Over ",
"Sick of Being Lonely ",
"Step in the Name of Love ",
"I Want You ",
"Like a Stone ",
"Don't Know Why ",
"Superman ",
"Real Good Man ",
"Say Yes ",
"Farkındayım ",
"Gidecek Yerim mi Var?",
"Firar",
"Mayın Tarlası",
"Sen İste",
"Çabuk Olalım Aşkım",
"Şuna da Bak",
"Aşkım Aşkım",
"Gamsız Hayat (Remix)",
"Sevda Yanığı",
"Dudu",
"Osman Aga",
"Aklım Karıştı",
"Mayın Tarlası",
"Farkındayım",
"Çabuk Olalım Aşkım",
"Sana Sevgilim Ol mu Dedim",
"Gamsız Hayat (Remix)",
"Sen İste",
"Sevda Yanığı",




 ];

 var artist = [

"50 Cent",
"R. Kelly",
"Sean Paul",
"Beyoncé featuring Jay-Z",
"3 Doors Down",
"Matchbox Twenty",
"Chingy",
"Aaliyah",
"Kid Rock featuring Sheryl Crow",
"Evanescence featuring Paul McCoy",
"Lil Jon & The East Side Boyz featuring Ying Yang Twins",
"Beyoncé featuring Sean Paul",
"Nelly, P. Diddy and Murphy Lee",
"50 Cent featuring Nate Dogg",
"Jennifer Lopez featuring LL Cool J",
"Christina Aguilera",
"Busta Rhymes and Mariah Carey featuring Flipmode Squad",
"Avril Lavigne",
"Uncle Kracker featuring Dobie Gray",
"Lil' Kim featuring 50 Cent",
"50 Cent",
"B2K and P. Diddy",
"Fabolous featuring Tamia",
"Fabolous featuring Lil' Mo and Mike Shorey",
"Ja Rule featuring Ashanti",
"The Black Eyed Peas",
"Santana featuring Michelle Branch",
"Eminem",
"Ashanti",
"Justin Timberlake",
"Tyrese",
"Justin Timberlake",
"Wayne Wonder",
"Pharrell featuring Jay-Z",
"Dixie Chicks",
"Missy Elliott",
"Jay-Z featuring Beyoncé",
"Nivea featuring Jagged Edge",
"Monica",
"Nelly featuring St. Lunatics",
"Lumidee",
"Snoop Dogg featuring Pharrell and Charlie Wilson",
"Missy Elliott featuring Ludacris",
"Kelly Clarkson",
"Train",
"YoungBloodZ featuring Lil Jon",
"Clay Aiken",
"John Mayer",
"Trapt",
"Ginuwine",
"Ludacris featuring Shawnna",
"Jason Mraz",
"Santana featuring Alex Band",
"Jay-Z",
"Jennifer Lopez featuring Jadakiss and Styles P",
"Michelle Branch",
"Shania Twain",
"Nas",
"No Doubt featuring Lady Saw",
"Daniel Bedingfield",
"R. Kelly",
"3 Doors Down",
"50 Cent",
"Mýa",
"Alan Jackson featuring Jimmy Buffett",
"Sean Paul",
"Christina Aguilera featuring Lil' Kim",
"Lonestar",
"Amanda Perez",
"Puddle of Mudd",
"Frankie J",
"Lil' Kim featuring Mr. Cheeks",
"Jewel",
"Ginuwine featuring Baby",
"Toby Keith featuring Willie Nelson",
"Chingy featuring Ludacris and Snoop Dogg",
"Baby Bash featuring Frankie J",
"Erykah Badu featuring Common",
"Christina Aguilera",
"2Pac",
"Coldplay",
"Jaheim",
"Ashanti",
"Mark Wills",
"Young Gunz",
"Brooks & Dunn",
"Dierks Bentley",
"Ruben Studdard",
"Eminem",
"Darryl Worley",
"Kenny Chesney",
"Aaliyah",
"Field Mob",
"R. Kelly",
"Thalía featuring Fat Joe",
"Audioslave",
"Norah Jones",
"Eminem",
"Tim McGraw",
"Floetry",
"Sezen Aksu",
"Emre Altuğ",
"Göksel",
"Şebnem Ferah",
"Ajda Pekkan",
"Yıldız Tilbe",
"Pamela Spence",
"Kenan Doğulu",
"Candan Erçetin",
"Funda Arar",
"Tarkan",
"Sefarad",
"Kenan Doğulu",
"Şebnem Ferah",
"Sezen Aksu",
"Yıldız Tilbe",
"Nalan",
"Candan Erçetin",
"Ajda Pekkan",
"Funda Arar",




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
