// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Hanging by a Moment 	Lifehouse",
"Fallin' 	Alicia Keys",
"All for You 	Janet",
"Drops of Jupiter (Tell Me) 	Train",
"I'm Real 	Jennifer Lopez featuring Ja Rule",
"If You're Gone 	Matchbox Twenty",
"Let Me Blow Ya Mind 	Eve featuring Gwen Stefani",
"Thank You 	Dido",
"Again 	Lenny Kravitz",
"Independent Women 	Destiny's Child",
"Hit 'Em Up Style (Oops!) 	Blu Cantrell",
"It Wasn't Me 	Shaggy featuring Rikrok",
"Stutter 	Joe featuring Mystikal",
"It's Been Awhile 	Staind",
"U Remind Me 	Usher",
"Where the Party At 	Jagged Edge featuring Nelly",
"Angel 	Shaggy",
"Ride wit Me 	Nelly featuring City Spud",
"Follow Me 	Uncle Kracker",
"Peaches & Cream 	112",
"Drive 	Incubus",
"What Would You Do? 	City High",
"Survivor 	Destiny's Child",
"Lady Marmalade 	Christina Aguilera, Lil' Kim, Mýa and Pink",
"Ms. Jackson 	OutKast",
"Love Don't Cost a Thing 	Jennifer Lopez",
"The Way You Love Me 	Faith Hill",
"He Loves U Not 	Dream",
"Butterfly 	Crazy Town",
"Put It on Me 	Ja Rule featuring Lil' Mo and Vita",
"Family Affair 	Mary J. Blige",
"I Hope You Dance 	Lee Ann Womack",
"South Side 	Moby featuring Gwen Stefani",
"Don't Tell Me 	Madonna",
"Get Ur Freak On 	Missy Elliott",
"Crazy 	K-Ci & JoJo",
"Fill Me In 	Craig David",
"Someone to Call My Lover 	Janet",
"With Arms Wide Open 	Creed",
"Case of the Ex 	Mýa",
"All or Nothing 	O-Town",
"Bootylicious 	Destiny's Child",
"I'm like a Bird 	Nelly Furtado",
"Kryptonite 	3 Doors Down",
"Fiesta 	R. Kelly featuring Jay-Z",
"When It's Over 	Sugar Ray",
"Jaded 	Aerosmith",
"Promise 	Jagged Edge",
"Missing You 	Case",
"Differences 	Ginuwine",
"This I Promise You 	'N Sync",
"Izzo (H.O.V.A.) 	Jay-Z",
"Superwoman Pt. II 	Lil' Mo featuring Fabolous",
"Crazy for This Girl 	Evan and Jaron",
"Nobody Wants to Be Lonely 	Ricky Martin and Christina Aguilera",
"I Just Wanna Love U (Give It 2 Me) 	Jay-Z",
"One Minute Man 	Missy Elliott featuring Ludacris",
"Danger (Been So Long) 	Mystikal featuring Nivea",
"Only Time 	Enya",
"I Do!! 	Toya",
"Never Had a Dream Come True 	S Club 7",
"Stranger in My House 	Tamia",
"Irresistible 	Jessica Simpson",
"Heard It All Before 	Sunshine Anderson",
"The Space Between 	Dave Matthews Band",
"There You'll Be 	Faith Hill",
"Love 	Musiq Soulchild",
"It's Over Now 	112",
"No More (Baby I'ma Do Right) 	3LW",
"Turn Off the Light 	Nelly Furtado",
"Ain't Nothing 'bout You 	Brooks & Dunn",
"Play 	Jennifer Lopez",
"I'm Already There 	Lonestar",
"My Baby 	Lil' Romeo",
"Beautiful Day 	U2",
"Austin 	Blake Shelton",
"Southern Hospitality 	Ludacris",
"Grown Men Don't Cry 	Tim McGraw",
"Livin' It Up 	Ja Rule featuring Case",
"Loverboy 	Mariah Carey featuring Cameo",
"Contagious 	The Isley Brothers featuring R. Kelly and Chanté Moore",
"Who I Am 	Jessica Andrews",
"Music 	Erick Sermon featuring Marvin Gaye",
"I Wanna Be Bad 	Willa Ford",
"Don't Happen Twice 	Kenny Chesney",
"One More Day 	Diamond Rio",
"I Wish 	R. Kelly",
"It's a Great Day to Be Alive 	Travis Tritt",
"I'm a Thug 	Trick Daddy",
"Here's to the Night 	Eve 6",
"You Shouldn't Kiss Me Like This 	Toby Keith",
"Get Over Yourself 	Eden's Crush",
"Dance with Me 	Debelah Morgan",
"So Fresh So Clean 	Outkast",
"E.I. 	Nelly",
"Be Like That 	3 Doors Down",
"Most Girls 	Pink",
"Oochie Wally 	Nas and Bravehearts",
"Hero 	Enrique Iglesias",
"Hemorrhage (In My Hands) 	Fuel",
"Hüp 	Tarkan",
"Depresyondayım 	Göksel",
"Pamuk 	Kenan Doğulu",
"Acıtmıyor Sevdan 	Yaşar",
"Sensizim 	Ebru Gündeş",
"Sigara 	Şebnem Ferah",
"Anlatma 	Yonca Lodi",
"Tılsım 	Burcu Güneş",
"Macera 	Athena",
"Of Deli Gönül	Tarık",
"Kuzu Kuzu	Tarkan",
"Masal	Yaşar",
"Hanımeli	Rafet El Roman",
"Gönül Sayfam	Kayahan",
"Dönüş Yok Geri	Ege",
"Bebek 	İzel",

 

    ];

var names = [

"Hanging by a Moment ",
"Fallin' ",
"All for You ",
"Drops of Jupiter (Tell Me) ",
"I'm Real ",
"If You're Gone ",
"Let Me Blow Ya Mind ",
"Thank You ",
"Again ",
"Independent Women ",
"Hit 'Em Up Style (Oops!) ",
"It Wasn't Me ",
"Stutter ",
"It's Been Awhile ",
"U Remind Me ",
"Where the Party At ",
"Angel ",
"Ride wit Me ",
"Follow Me ",
"Peaches & Cream ",
"Drive ",
"What Would You Do? ",
"Survivor ",
"Lady Marmalade ",
"Ms. Jackson ",
"Love Don't Cost a Thing ",
"The Way You Love Me ",
"He Loves U Not ",
"Butterfly ",
"Put It on Me ",
"Family Affair ",
"I Hope You Dance ",
"South Side ",
"Don't Tell Me ",
"Get Ur Freak On ",
"Crazy ",
"Fill Me In ",
"Someone to Call My Lover ",
"With Arms Wide Open ",
"Case of the Ex ",
"All or Nothing ",
"Bootylicious ",
"I'm like a Bird ",
"Kryptonite ",
"Fiesta ",
"When It's Over ",
"Jaded ",
"Promise ",
"Missing You ",
"Differences ",
"This I Promise You ",
"Izzo (H.O.V.A.) ",
"Superwoman Pt. II ",
"Crazy for This Girl ",
"Nobody Wants to Be Lonely ",
"I Just Wanna Love U (Give It 2 Me) ",
"One Minute Man ",
"Danger (Been So Long) ",
"Only Time ",
"I Do!! ",
"Never Had a Dream Come True ",
"Stranger in My House ",
"Irresistible ",
"Heard It All Before ",
"The Space Between ",
"There You'll Be ",
"Love ",
"It's Over Now ",
"No More (Baby I'ma Do Right) ",
"Turn Off the Light ",
"Ain't Nothing 'bout You ",
"Play ",
"I'm Already There ",
"My Baby ",
"Beautiful Day ",
"Austin ",
"Southern Hospitality ",
"Grown Men Don't Cry ",
"Livin' It Up ",
"Loverboy ",
"Contagious ",
"Who I Am ",
"Music ",
"I Wanna Be Bad ",
"Don't Happen Twice ",
"One More Day ",
"I Wish ",
"It's a Great Day to Be Alive ",
"I'm a Thug ",
"Here's to the Night ",
"You Shouldn't Kiss Me Like This ",
"Get Over Yourself ",
"Dance with Me ",
"So Fresh So Clean ",
"E.I. ",
"Be Like That ",
"Most Girls ",
"Oochie Wally ",
"Hero ",
"Hemorrhage (In My Hands) ",
"Hüp ",
"Depresyondayım ",
"Pamuk ",
"Acıtmıyor Sevdan ",
"Sensizim ",
"Sigara ",
"Anlatma ",
"Tılsım ",
"Macera ",
"Of Deli Gönül",
"Kuzu Kuzu",
"Masal",
"Hanımeli",
"Gönül Sayfam",
"Dönüş Yok Geri",
"Bebek ",




 ];

 var artist = [

"Lifehouse",
"Alicia Keys",
"Janet",
"Train",
"Jennifer Lopez featuring Ja Rule",
"Matchbox Twenty",
"Eve featuring Gwen Stefani",
"Dido",
"Lenny Kravitz",
"Destiny's Child",
"Blu Cantrell",
"Shaggy featuring Rikrok",
"Joe featuring Mystikal",
"Staind",
"Usher",
"Jagged Edge featuring Nelly",
"Shaggy",
"Nelly featuring City Spud",
"Uncle Kracker",
"112",
"Incubus",
"City High",
"Destiny's Child",
"Christina Aguilera, Lil' Kim, Mýa and Pink",
"OutKast",
"Jennifer Lopez",
"Faith Hill",
"Dream",
"Crazy Town",
"Ja Rule featuring Lil' Mo and Vita",
"Mary J. Blige",
"Lee Ann Womack",
"Moby featuring Gwen Stefani",
"Madonna",
"Missy Elliott",
"K-Ci & JoJo",
"Craig David",
"Janet",
"Creed",
"Mýa",
"O-Town",
"Destiny's Child",
"Nelly Furtado",
"3 Doors Down",
"R. Kelly featuring Jay-Z",
"Sugar Ray",
"Aerosmith",
"Jagged Edge",
"Case",
"Ginuwine",
"'N Sync",
"Jay-Z",
"Lil' Mo featuring Fabolous",
"Evan and Jaron",
"Ricky Martin and Christina Aguilera",
"Jay-Z",
"Missy Elliott featuring Ludacris",
"Mystikal featuring Nivea",
"Enya",
"Toya",
"S Club 7",
"Tamia",
"Jessica Simpson",
"Sunshine Anderson",
"Dave Matthews Band",
"Faith Hill",
"Musiq Soulchild",
"112",
"3LW",
"Nelly Furtado",
"Brooks & Dunn",
"Jennifer Lopez",
"Lonestar",
"Lil' Romeo",
"U2",
"Blake Shelton",
"Ludacris",
"Tim McGraw",
"Ja Rule featuring Case",
"Mariah Carey featuring Cameo",
"The Isley Brothers featuring R. Kelly and Chanté Moore",
"Jessica Andrews",
"Erick Sermon featuring Marvin Gaye",
"Willa Ford",
"Kenny Chesney",
"Diamond Rio",
"R. Kelly",
"Travis Tritt",
"Trick Daddy",
"Eve 6",
"Toby Keith",
"Eden's Crush",
"Debelah Morgan",
"Outkast",
"Nelly",
"3 Doors Down",
"Pink",
"Nas and Bravehearts",
"Enrique Iglesias",
"Fuel",
"Tarkan",
"Göksel",
"Kenan Doğulu",
"Yaşar",
"Ebru Gündeş",
"Şebnem Ferah",
"Yonca Lodi",
"Burcu Güneş",
"Athena",
"Tarık",
"Tarkan",
"Yaşar",
"Rafet El Roman",
"Kayahan",
"Ege",
"İzel",




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
