// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"When Doves Cry 	Prince",
"What's Love Got to Do with It 	Tina Turner",
"Say Say Say 	Paul McCartney and Michael Jackson",
"Footloose 	Kenny Loggins",
"Against All Odds (Take a Look at Me Now) 	Phil Collins",
"Jump 	Van Halen",
"Hello 	Lionel Richie",
"Owner of a Lonely Heart 	Yes",
"Ghostbusters 	Ray Parker, Jr.",
"Karma Chameleon 	Culture Club",
"Missing You 	John Waite",
"All Night Long (All Night) 	Lionel Richie",
"Let's Hear It for the Boy 	Deniece Williams",
"Dancing in the Dark 	Bruce Springsteen",
"Girls Just Want To Have Fun 	Cyndi Lauper",
"The Reflex 	Duran Duran",
"Time After Time 	Cyndi Lauper",
"Jump (For My Love) 	Pointer Sisters",
"Talking in Your Sleep 	The Romantics",
"Self Control 	Laura Branigan",
"Let's Go Crazy 	Prince and The Revolution",
"Say It Isn't So 	Daryl Hall & John Oates",
"Hold Me Now 	Thompson Twins",
"Joanna 	Kool & The Gang",
"I Just Called to Say I Love You 	Stevie Wonder",
"Somebody's Watching Me 	Rockwell",
"Break My Stride 	Matthew Wilder",
"99 Luftballons 	Nena",
"I Can Dream About You 	Dan Hartman",
"The Glamorous Life 	Sheila E.",
"Oh Sherrie 	Steve Perry",
"Stuck on You 	Lionel Richie",
"I Guess That's Why They Call It the Blues 	Elton John",
"She Bop 	Cyndi Lauper",
"Borderline 	Madonna",
"Sunglasses at Night 	Corey Hart",
"Eyes Without a Face 	Billy Idol",
"Here Comes the Rain Again 	Eurythmics",
"Uptown Girl 	Billy Joel",
"Sister Christian 	Night Ranger",
"Drive 	The Cars",
"Twist of Fate 	Olivia Newton-John",
"Union of the Snake 	Duran Duran",
"The Heart of Rock & Roll 	Huey Lewis and the News",
"Hard Habit to Break 	Chicago",
"The Warrior 	Scandal",
"If Ever You're in My Arms Again 	Peabo Bryson",
"Automatic 	Pointer Sisters",
"Let the Music Play 	Shannon",
"To All the Girls I've Loved Before 	Julio Iglesias and Willie Nelson",
"Caribbean Queen 	Billy Ocean",
"That's All 	Genesis",
"Running with the Night 	Lionel Richie",
"Sad Songs (Say So Much) 	Elton John",
"I Want a New Drug 	Huey Lewis and the News",
"Islands in the Stream 	Kenny Rogers and Dolly Parton",
"Love Is a Battlefield 	Pat Benatar",
"Infatuation 	Rod Stewart",
"Almost Paradise 	Mike Reno and Ann Wilson",
"Legs 	ZZ Top",
"State of Shock 	The Jacksons",
"Love Somebody 	Rick Springfield",
"Miss Me Blind 	Culture Club",
"If This Is It 	Huey Lewis and the News",
"You Might Think 	The Cars",
"Lucky Star 	Madonna",
"Cover Me 	Bruce Springsteen",
"Cum on Feel the Noize 	Quiet Riot",
"Breakdance 	Irene Cara",
"Adult Education 	Daryl Hall & John Oates",
"They Don't Know 	Tracey Ullman",
"An Innocent Man 	Billy Joel",
"Cruel Summer 	Bananarama",
"Dance Hall Days 	Wang Chung",
"Give It Up 	KC & the Sunshine Band",
"I'm So Excited 	The Pointer Sisters",
"I Still Can't Get Over Loving You 	Ray Parker, Jr.",
"Thriller 	Michael Jackson",
"Holiday 	Madonna",
"Breakin'... There's No Stopping Us 	Ollie & Jerry",
"Nobody Told Me 	John Lennon",
"Church of the Poison Mind 	Culture Club",
"Think of Laura 	Christopher Cross",
"Time Will Reveal 	DeBarge",
"Wrapped Around Your Finger 	The Police",
"Pink Houses 	John Cougar Mellencamp",
"Round and Round 	Ratt",
"Head over Heels 	The Go-Go's",
"The Longest Time 	Billy Joel",
"Tonight 	Kool & the Gang",
"Got a Hold on Me 	Christine McVie",
"Dancing in the Sheets 	Shalamar",
"Undercover of the Night 	The Rolling Stones",
"On the Dark Side 	John Cafferty & The Beaver Brown Band",
"New Moon on Monday 	Duran Duran",
"Major Tom (Coming Home) 	Peter Schilling",
"Magic 	The Cars",
"When You Close Your Eyes 	Night Ranger",
"Rock Me Tonite 	Billy Squier",
"Yah Mo B There 	James Ingram and Michael McDonald",
"Ele Güne Karşı	M.F.Ö.",
"Ada	Zülfü Livaneli",
"Sen Ağlama	Sezen Aksu",
"Halil İbrahim Sofrası	Barış Manço",
"O şarkıyı Henüz Yazmadım	Neco",
"Kar Taneleri	Nilüfer",
"Herşey Yeni	Nükhet Duru",
"Anlatamıyorum	Banu",
"Varsa Söyle	Nilüfer",

 

    ];

var names = [

"When Doves Cry ",
"What's Love Got to Do with It ",
"Say Say Say ",
"Footloose ",
"Against All Odds (Take a Look at Me Now) ",
"Jump ",
"Hello ",
"Owner of a Lonely Heart ",
"Ghostbusters ",
"Karma Chameleon ",
"Missing You ",
"All Night Long (All Night) ",
"Let's Hear It for the Boy ",
"Dancing in the Dark ",
"Girls Just Want To Have Fun ",
"The Reflex ",
"Time After Time ",
"Jump (For My Love) ",
"Talking in Your Sleep ",
"Self Control ",
"Let's Go Crazy ",
"Say It Isn't So ",
"Hold Me Now ",
"Joanna ",
"I Just Called to Say I Love You ",
"Somebody's Watching Me ",
"Break My Stride ",
"99 Luftballons ",
"I Can Dream About You ",
"The Glamorous Life ",
"Oh Sherrie ",
"Stuck on You ",
"I Guess That's Why They Call It the Blues ",
"She Bop ",
"Borderline ",
"Sunglasses at Night ",
"Eyes Without a Face ",
"Here Comes the Rain Again ",
"Uptown Girl ",
"Sister Christian ",
"Drive ",
"Twist of Fate ",
"Union of the Snake ",
"The Heart of Rock & Roll ",
"Hard Habit to Break ",
"The Warrior ",
"If Ever You're in My Arms Again ",
"Automatic ",
"Let the Music Play ",
"To All the Girls I've Loved Before ",
"Caribbean Queen ",
"That's All ",
"Running with the Night ",
"Sad Songs (Say So Much) ",
"I Want a New Drug ",
"Islands in the Stream ",
"Love Is a Battlefield ",
"Infatuation ",
"Almost Paradise ",
"Legs ",
"State of Shock ",
"Love Somebody ",
"Miss Me Blind ",
"If This Is It ",
"You Might Think ",
"Lucky Star ",
"Cover Me ",
"Cum on Feel the Noize ",
"Breakdance ",
"Adult Education ",
"They Don't Know ",
"An Innocent Man ",
"Cruel Summer ",
"Dance Hall Days ",
"Give It Up ",
"I'm So Excited ",
"I Still Can't Get Over Loving You ",
"Thriller ",
"Holiday ",
"Breakin'... There's No Stopping Us ",
"Nobody Told Me ",
"Church of the Poison Mind ",
"Think of Laura ",
"Time Will Reveal ",
"Wrapped Around Your Finger ",
"Pink Houses ",
"Round and Round ",
"Head over Heels ",
"The Longest Time ",
"Tonight ",
"Got a Hold on Me ",
"Dancing in the Sheets ",
"Undercover of the Night ",
"On the Dark Side ",
"New Moon on Monday ",
"Major Tom (Coming Home) ",
"Magic ",
"When You Close Your Eyes ",
"Rock Me Tonite ",
"Yah Mo B There ",
"Ele Güne Karşı",
"Ada",
"Sen Ağlama",
"Halil İbrahim Sofrası",
"O şarkıyı Henüz Yazmadım",
"Kar Taneleri",
"Herşey Yeni",
"Anlatamıyorum",
"Varsa Söyle",




 ];

 var artist = [

"Prince",
"Tina Turner",
"Paul McCartney and Michael Jackson",
"Kenny Loggins",
"Phil Collins",
"Van Halen",
"Lionel Richie",
"Yes",
"Ray Parker, Jr.",
"Culture Club",
"John Waite",
"Lionel Richie",
"Deniece Williams",
"Bruce Springsteen",
"Cyndi Lauper",
"Duran Duran",
"Cyndi Lauper",
"Pointer Sisters",
"The Romantics",
"Laura Branigan",
"Prince and The Revolution",
"Daryl Hall & John Oates",
"Thompson Twins",
"Kool & The Gang",
"Stevie Wonder",
"Rockwell",
"Matthew Wilder",
"Nena",
"Dan Hartman",
"Sheila E.",
"Steve Perry",
"Lionel Richie",
"Elton John",
"Cyndi Lauper",
"Madonna",
"Corey Hart",
"Billy Idol",
"Eurythmics",
"Billy Joel",
"Night Ranger",
"The Cars",
"Olivia Newton-John",
"Duran Duran",
"Huey Lewis and the News",
"Chicago",
"Scandal",
"Peabo Bryson",
"Pointer Sisters",
"Shannon",
"Julio Iglesias and Willie Nelson",
"Billy Ocean",
"Genesis",
"Lionel Richie",
"Elton John",
"Huey Lewis and the News",
"Kenny Rogers and Dolly Parton",
"Pat Benatar",
"Rod Stewart",
"Mike Reno and Ann Wilson",
"ZZ Top",
"The Jacksons",
"Rick Springfield",
"Culture Club",
"Huey Lewis and the News",
"The Cars",
"Madonna",
"Bruce Springsteen",
"Quiet Riot",
"Irene Cara",
"Daryl Hall & John Oates",
"Tracey Ullman",
"Billy Joel",
"Bananarama",
"Wang Chung",
"KC & the Sunshine Band",
"The Pointer Sisters",
"Ray Parker, Jr.",
"Michael Jackson",
"Madonna",
"Ollie & Jerry",
"John Lennon",
"Culture Club",
"Christopher Cross",
"DeBarge",
"The Police",
"John Cougar Mellencamp",
"Ratt",
"The Go-Go's",
"Billy Joel",
"Kool & the Gang",
"Christine McVie",
"Shalamar",
"The Rolling Stones",
"John Cafferty & The Beaver Brown Band",
"Duran Duran",
"Peter Schilling",
"The Cars",
"Night Ranger",
"Billy Squier",
"James Ingram and Michael McDonald",
"M.F.Ö.",
"Zülfü Livaneli",
"Sezen Aksu",
"Barış Manço",
"Neco",
"Nilüfer",
"Nükhet Duru",
"Banu",
"Nilüfer",




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
