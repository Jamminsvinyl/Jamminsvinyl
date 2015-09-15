// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"(Everything I Do) I Do It for You 	Bryan Adams",
"I Wanna Sex You Up 	Color Me Badd",
"Gonna Make You Sweat (Everybody Dance Now) 	C+C Music Factory",
"Rush Rush 	Paula Abdul",
"One More Try 	Timmy T",
"Unbelievable 	EMF",
"More Than Words 	Extreme",
"I Like the Way (The Kissing Game) 	Hi-Five",
"The First Time 	Surface",
"Baby Baby 	Amy Grant",
"Motownphilly 	Boyz II Men",
"Because I Love You (The Postman Song) 	Stevie B",
"Someday 	Mariah Carey",
"High Enough 	Damn Yankees",
"From a Distance 	Bette Midler",
"All the Man That I Need 	Whitney Houston",
"Right Here, Right Now 	Jesus Jones",
"I Adore Mi Amor 	Color Me Badd",
"Love Will Never Do (Without You) 	Janet Jackson",
"Good Vibrations 	Marky Mark and the Funky Bunch featuring Loleatta Holloway",
"Justify My Love 	Madonna",
"Emotions 	Mariah Carey",
"Joyride 	Roxette",
"Romantic 	Karyn White",
"Hold You Tight 	Tara Kemp",
"I Don't Wanna Cry 	Mariah Carey",
"You're in Love 	Wilson Phillips",
"Every Heartbeat 	Amy Grant",
"Sensitivity 	Ralph Tresvant",
"Touch Me (All Night Long) 	Cathy Dennis",
"I've Been Thinking About You 	Londonbeat",
"Do Anything 	Natural Selection",
"Losing My Religion 	R.E.M.",
"Coming Out of the Dark 	Gloria Estefan",
"Here We Go 	C+C Music Factory",
"It Ain't Over 'til It's Over 	Lenny Kravitz",
"Where Does My Heart Beat Now 	Celine Dion",
"Summertime 	DJ Jazzy Jeff & The Fresh Prince",
"Wind of Change 	Scorpions",
"P.A.S.S.I.O.N. 	Rythm Syndicate",
"The Promise of a New Day 	Paula Abdul",
"I'm Your Baby Tonight 	Whitney Houston",
"Love of a Lifetime 	FireHouse",
"Fading Like a Flower (Every Time You Leave) 	Roxette",
"This House 	Tracie Spencer",
"Hole Hearted 	Extreme",
"Power of Love/Love Power 	Luther Vandross",
"Impulsive 	Wilson Phillips",
"Love Is a Wonderful Thing 	Michael Bolton",
"Rhythm of My Heart 	Rod Stewart",
"Things That Make You Go Hmmm... 	C+C Music Factory",
"I Touch Myself 	Divinyls",
"Tom's Diner 	DNA featuring Suzanne Vega",
"Iesha 	Another Bad Creation",
"Something to Talk About 	Bonnie Raitt",
"After the Rain 	Nelson",
"Play That Funky Music 	Vanilla Ice",
"Temptation 	Corina",
"Can't Stop This Thing We Started 	Bryan Adams",
"I Can't Wait Another Minute 	Hi-Five",
"3 a.m. Eternal 	The KLF",
"Time, Love and Tenderness 	Michael Bolton",
"Sadeness (Part I) 	Enigma",
"Around the Way Girl 	LL Cool J",
"I'll Be There 	The Escape Club",
"Cream 	Prince and The New Power Generation",
"Now That We Found Love 	Heavy D & the Boyz",
"Show Me the Way 	Styx",
"Love Takes Time 	Mariah Carey",
"Cry for Help 	Rick Astley",
"The Way You Do the Things You Do 	UB40",
"Here I Am (Come and Take Me) 	UB40",
"Signs 	Tesla",
"Too Many Walls 	Cathy Dennis",
"Crazy 	Seal",
"I'll Give All My Love to You 	Keith Sweat",
"Place in this World 	Michael W. Smith",
"Something to Believe In 	Poison",
"Wicked Game 	Chris Isaak",
"Get Here 	Oleta Adams",
"Round and Round 	Tevin Campbell",
"Silent Lucidity 	Queensrÿche",
"I'm Not In Love 	Will to Power",
"Piece of My Heart 	Tara Kemp",
"Real Real Real 	Jesus Jones",
"Just Another Dream 	Cathy Dennis",
"Everybody Plays the Fool 	Aaron Neville",
"Strike It Up 	Black Box",
"Rico Suave 	Gerardo",
"Disappear 	INXS",
"Groove Is in the Heart 	Deee-Lite",
"All This Time 	Sting",
"The One and Only 	Chesney Hawkes",
"O.P.P. 	Naughty by Nature",
"Freedom 90 	George Michael",
"I Saw Red 	Warrant",
"Miles Away 	Winger",
"Do You Want Me 	Salt-n-Pepa",
"The Motown Song 	Rod Stewart",
"Shiny Happy People 	R.E.M.",
"Kelebekler Özgürdür	Alpay",
"Menim Nazlı Yarim	Leman Sam",
"Oyuna Devam	Bülent Ortaçgil",
"Alladı Pulladı	Seyyal Taner",
"Adın Bahar Olsun	Atilla Atasoy",
"İki dakika	İzel Çeliköz",
"Kadınım	Tanju Okan",
"Abone 	Yonca Evcimik",
"Sevdan Olmasa	Erol Evgin",
"Hey Corç	Hakan Peker",
"Gir Kanıma	Harun Kolçak",
"Olmasa Mektubun	Yeni Türkü",
"Olamazdım Senle	Zerrin Özer",
"Hadi bakalım	Sezen Aksu",
"Herşeyi yak	Sezen Aksu",
"Seni Kimler Aldı	Sezen Aksu",
"Cezmi 	Grup Vitamin",
"Sarı saçlarından sen suçlusun	Kayahan",
"Sorma 	Ayşegül Aldinç",
"Dönmelisin	İzel Çelik Ercan",
"Dağlar Dağlar	Barış Manço",
"Sevda Değil	Aylin Livaneli",
"Halikarnas	Akrep Nalan",
"Bulut mu olsam	Akrep Nalan",
"Sen olmasan da	Neco",
"Eline gözüne dizine dursun	Ajda Pekkan",

 

    ];

var names = [

"(Everything I Do) I Do It for You ",
"I Wanna Sex You Up ",
"Gonna Make You Sweat (Everybody Dance Now) ",
"Rush Rush ",
"One More Try ",
"Unbelievable ",
"More Than Words ",
"I Like the Way (The Kissing Game) ",
"The First Time ",
"Baby Baby ",
"Motownphilly ",
"Because I Love You (The Postman Song) ",
"Someday ",
"High Enough ",
"From a Distance ",
"All the Man That I Need ",
"Right Here, Right Now ",
"I Adore Mi Amor ",
"Love Will Never Do (Without You) ",
"Good Vibrations ",
"Justify My Love ",
"Emotions ",
"Joyride ",
"Romantic ",
"Hold You Tight ",
"I Don't Wanna Cry ",
"You're in Love ",
"Every Heartbeat ",
"Sensitivity ",
"Touch Me (All Night Long) ",
"I've Been Thinking About You ",
"Do Anything ",
"Losing My Religion ",
"Coming Out of the Dark ",
"Here We Go ",
"It Ain't Over 'til It's Over ",
"Where Does My Heart Beat Now ",
"Summertime ",
"Wind of Change ",
"P.A.S.S.I.O.N. ",
"The Promise of a New Day ",
"I'm Your Baby Tonight ",
"Love of a Lifetime ",
"Fading Like a Flower (Every Time You Leave) ",
"This House ",
"Hole Hearted ",
"Power of Love/Love Power ",
"Impulsive ",
"Love Is a Wonderful Thing ",
"Rhythm of My Heart ",
"Things That Make You Go Hmmm... ",
"I Touch Myself ",
"Tom's Diner ",
"Iesha ",
"Something to Talk About ",
"After the Rain ",
"Play That Funky Music ",
"Temptation ",
"Can't Stop This Thing We Started ",
"I Can't Wait Another Minute ",
"3 a.m. Eternal ",
"Time, Love and Tenderness ",
"Sadeness (Part I) ",
"Around the Way Girl ",
"I'll Be There ",
"Cream ",
"Now That We Found Love ",
"Show Me the Way ",
"Love Takes Time ",
"Cry for Help ",
"The Way You Do the Things You Do ",
"Here I Am (Come and Take Me) ",
"Signs ",
"Too Many Walls ",
"Crazy ",
"I'll Give All My Love to You ",
"Place in this World ",
"Something to Believe In ",
"Wicked Game ",
"Get Here ",
"Round and Round ",
"Silent Lucidity ",
"I'm Not In Love ",
"Piece of My Heart ",
"Real Real Real ",
"Just Another Dream ",
"Everybody Plays the Fool ",
"Strike It Up ",
"Rico Suave ",
"Disappear ",
"Groove Is in the Heart ",
"All This Time ",
"The One and Only ",
"O.P.P. ",
"Freedom 90 ",
"I Saw Red ",
"Miles Away ",
"Do You Want Me ",
"The Motown Song ",
"Shiny Happy People ",
"Kelebekler Özgürdür",
"Menim Nazlı Yarim",
"Oyuna Devam",
"Alladı Pulladı",
"Adın Bahar Olsun",
"İki dakika",
"Kadınım",
"Abone ",
"Sevdan Olmasa",
"Hey Corç",
"Gir Kanıma",
"Olmasa Mektubun",
"Olamazdım Senle",
"Hadi bakalım",
"Herşeyi yak",
"Seni Kimler Aldı",
"Cezmi ",
"Sarı saçlarından sen suçlusun",
"Sorma ",
"Dönmelisin",
"Dağlar Dağlar",
"Sevda Değil",
"Halikarnas",
"Bulut mu olsam",
"Sen olmasan da",
"Eline gözüne dizine dursun",




 ];

 var artist = [

"Bryan Adams",
"Color Me Badd",
"C+C Music Factory",
"Paula Abdul",
"Timmy T",
"EMF",
"Extreme",
"Hi-Five",
"Surface",
"Amy Grant",
"Boyz II Men",
"Stevie B",
"Mariah Carey",
"Damn Yankees",
"Bette Midler",
"Whitney Houston",
"Jesus Jones",
"Color Me Badd",
"Janet Jackson",
"Marky Mark and the Funky Bunch featuring Loleatta Holloway",
"Madonna",
"Mariah Carey",
"Roxette",
"Karyn White",
"Tara Kemp",
"Mariah Carey",
"Wilson Phillips",
"Amy Grant",
"Ralph Tresvant",
"Cathy Dennis",
"Londonbeat",
"Natural Selection",
"R.E.M.",
"Gloria Estefan",
"C+C Music Factory",
"Lenny Kravitz",
"Celine Dion",
"DJ Jazzy Jeff & The Fresh Prince",
"Scorpions",
"Rythm Syndicate",
"Paula Abdul",
"Whitney Houston",
"FireHouse",
"Roxette",
"Tracie Spencer",
"Extreme",
"Luther Vandross",
"Wilson Phillips",
"Michael Bolton",
"Rod Stewart",
"C+C Music Factory",
"Divinyls",
"DNA featuring Suzanne Vega",
"Another Bad Creation",
"Bonnie Raitt",
"Nelson",
"Vanilla Ice",
"Corina",
"Bryan Adams",
"Hi-Five",
"The KLF",
"Michael Bolton",
"Enigma",
"LL Cool J",
"The Escape Club",
"Prince and The New Power Generation",
"Heavy D & the Boyz",
"Styx",
"Mariah Carey",
"Rick Astley",
"UB40",
"UB40",
"Tesla",
"Cathy Dennis",
"Seal",
"Keith Sweat",
"Michael W. Smith",
"Poison",
"Chris Isaak",
"Oleta Adams",
"Tevin Campbell",
"Queensrÿche",
"Will to Power",
"Tara Kemp",
"Jesus Jones",
"Cathy Dennis",
"Aaron Neville",
"Black Box",
"Gerardo",
"INXS",
"Deee-Lite",
"Sting",
"Chesney Hawkes",
"Naughty by Nature",
"George Michael",
"Warrant",
"Winger",
"Salt-n-Pepa",
"Rod Stewart",
"R.E.M.",
"Alpay",
"Leman Sam",
"Bülent Ortaçgil",
"Seyyal Taner",
"Atilla Atasoy",
"İzel Çeliköz",
"Tanju Okan",
"Yonca Evcimik",
"Erol Evgin",
"Hakan Peker",
"Harun Kolçak",
"Yeni Türkü",
"Zerrin Özer",
"Sezen Aksu",
"Sezen Aksu",
"Sezen Aksu",
"Grup Vitamin",
"Kayahan",
"Ayşegül Aldinç",
"İzel Çelik Ercan",
"Barış Manço",
"Aylin Livaneli",
"Akrep Nalan",
"Akrep Nalan",
"Neco",
"Ajda Pekkan",




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
