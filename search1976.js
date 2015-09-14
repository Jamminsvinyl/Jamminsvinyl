// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Silly Love Songs 	Wings",
"Don't Go Breaking My Heart 	Elton John & Kiki Dee",
"Disco Lady 	Johnnie Taylor",
"December, 1963 (Oh, What a Night) 	The Four Seasons",
"Play That Funky Music 	Wild Cherry",
"Kiss and Say Goodbye 	The Manhattans",
"Love Machine 	The Miracles",
"50 Ways to Leave Your Lover 	Paul Simon",
"Love Is Alive 	Gary Wright",
"A Fifth of Beethoven 	Walter Murphy & The Big Apple Band",
"Sara Smile 	Hall & Oates",
"Afternoon Delight 	Starland Vocal Band",
"I Write the Songs 	Barry Manilow",
"Fly, Robin, Fly 	Silver Convention",
"Love Hangover 	Diana Ross",
"Get Closer 	Seals and Crofts",
"More, More, More 	Andrea True Connection",
"Bohemian Rhapsody 	Queen",
"Misty Blue 	Dorothy Moore",
"Boogie Fever 	The Sylvers",
"I'd Really Love to See You Tonight 	England Dan & John Ford Coley",
"You Sexy Thing 	Hot Chocolate",
"Love Hurts 	Nazareth",
" Get Up and Boogie 	Silver Convention",
"Take It to the Limit 	Eagles",
"(Shake, Shake, Shake) Shake Your Booty 	KC and the Sunshine Band",
"Sweet Love 	Commodores",
"Right Back Where We Started From 	Maxine Nightingale",
"Theme from S.W.A.T. 	Rhythm Heritage",
"Love Rollercoaster 	Ohio Players",
"You Should Be Dancing 	Bee Gees",
"You'll Never Find Another Love Like Mine 	Lou Rawls",
"Golden Years 	David Bowie",
"Moonlight Feels Right 	Starbuck",
"Only Sixteen 	Dr. Hook",
"Let Your Love Flow 	The Bellamy Brothers",
"Dream Weaver 	Gary Wright",
"Turn the Beat Around 	Vicki Sue Robinson",
"Lonely Night (Angel Face) 	Captain & Tennille",
"All by Myself 	Eric Carmen",
"Love to Love You Baby 	Donna Summer",
"Deep Purple 	Donny & Marie Osmond",
"Theme from Mahogany (Do You Know Where You're Going To) 	Diana Ross",
"Sweet Thing 	Rufus",
"That's the Way (I Like It) 	KC and the Sunshine Band",
"A Little Bit More 	Dr. Hook",
"Shannon 	Henry Gross",
"If You Leave Me Now 	Chicago",
"Lowdown 	Boz Scaggs",
"Show Me the Way (live) 	Peter Frampton",
"Dream On 	Aerosmith",
"I Love Music 	The O'Jays",
"Say You Love Me 	Fleetwood Mac",
"Times of Your Life 	Paul Anka",
"Devil Woman 	Cliff Richard",
"Fooled Around and Fell in Love 	Elvin Bishop",
"Convoy 	C. W. McCall",
"Welcome Back 	John Sebastian",
"Sing a Song 	Earth, Wind & Fire",
"Heaven Must Be Missing an Angel 	Tavares",
"I'll Be Good to You 	The Brothers Johnson",
"Rock and Roll Music 	The Beach Boys",
"Shop Around 	Captain & Tennille",
"Saturday Night 	Bay City Rollers",
"Island Girl 	Elton John",
"Let's Do It Again 	The Staple Singers",
"Let 'Em In 	Wings",
"Baby Face 	Wing and a Prayer Fife and Drum Corps",
"This Masquerade 	George Benson",
"Evil Woman 	Electric Light Orchestra",
"Wham Bam 	Silver",
"I'm Easy 	Keith Carradine",
"Wake Up Everybody 	Harold Melvin & the Blue Notes",
"Summer 	War",
"Let Her In 	John Travolta",
"Fox on the Run 	Sweet",
"Rhiannon 	Fleetwood Mac",
"Got to Get You into My Life 	The Beatles",
"Fanny (Be Tender with My Love) 	Bee Gees",
"Getaway 	Earth, Wind & Fire",
"She's Gone 	Hall & Oates",
"Still the One 	Orleans",
"You're My Best Friend 	Queen",
"With Your Love 	Jefferson Starship",
"Slow Ride 	Foghat",
"Who'd She Coo? 	Ohio Players",
"The Boys Are Back in Town 	Thin Lizzy",
"Walk Away from Love 	David Ruffin",
"Baby, I Love Your Way (live) 	Peter Frampton",
"Young Hearts Run Free 	Candi Staton",
"Breaking Up Is Hard to Do 	Neil Sedaka",
"Money Honey 	Bay City Rollers",
"Give Up the Funk (Tear the Roof off the Sucker) 	Parliament",
"Junk Food Junkie 	Larry Groce",
"Tryin' to Get the Feeling Again 	Barry Manilow",
"Rock and Roll All Nite (live) 	Kiss",
"Disco Duck 	Rick Dees & His Cast of Idiots",
"Take the Money and Run 	Steve Miller Band",
"Squeeze Box 	The Who",
"Country Boy (You Got Your Feet in L.A.) 	Glen Campbell",
"24 Saat	Rıza Silahlıpoda Ritm 68",
"İşte Öyle Bir şey	Erol Evgin",
"Bu Ne Dünya	Yeliz",
"Mehmet Emmi	Edip Akbayram Dostlar",
"Rüzgar Gibi Geçtin	Gökben",
"Kan ve Gül	İskender Doğan",
"Esmerim	Beyaz Kelebekler",
"Deli Gibi Sevdim	Neşe Karaböcek",
"Zalim Zalim	Edip Akbayram  Dostlar",
"Öğretmenin Aşkı	Özdemir Erdoğan",
"Bu Engeller Arasında	Aydın Tansel",
"Hepsi Bizim	İskender Doğan",
"Of Aman Aman	Nilüfer",
"Ağlamak Ayıp Değil	Melike Demirağ",
"Hayret	Sibel Egemen",
"Dostlara Merhaba	Ersen Dadaşlar",
"Aynalar	Salim Dündar",
"Haftaya	Mine Kürkçüoğlu",
"Aşkın Gözü Kör mü?	Rana Alagöz",
"Tımbıllı	Erkin Koray",
"Hangisi	Serpil Barlas",
"Çatla Patla	Füsun Önal",
"Zalim	Ersen  Dadaşlar",
"Hayırdır İnşallah 	Uğur Akdora",
"Gerisi Vız Gelir	Nükhet Duru",
"Allı Turnam	Erol Pekcan Orkestrası",
"Çingene	Lale Belkıs",
"Çaresizim	Funda",
"Darağacı	Fikret Kızılok",

 

    ];

var names = [

"Silly Love Songs ",
"Don't Go Breaking My Heart ",
"Disco Lady ",
"December, 1963 (Oh, What a Night) ",
"Play That Funky Music ",
"Kiss and Say Goodbye ",
"Love Machine ",
"50 Ways to Leave Your Lover ",
"Love Is Alive ",
"A Fifth of Beethoven ",
"Sara Smile ",
"Afternoon Delight ",
"I Write the Songs ",
"Fly, Robin, Fly ",
"Love Hangover ",
"Get Closer ",
"More, More, More ",
"Bohemian Rhapsody ",
"Misty Blue ",
"Boogie Fever ",
"I'd Really Love to See You Tonight ",
"You Sexy Thing ",
"Love Hurts ",
" Get Up and Boogie ",
"Take It to the Limit ",
"(Shake, Shake, Shake) Shake Your Booty ",
"Sweet Love ",
"Right Back Where We Started From ",
"Theme from S.W.A.T. ",
"Love Rollercoaster ",
"You Should Be Dancing ",
"You'll Never Find Another Love Like Mine ",
"Golden Years ",
"Moonlight Feels Right ",
"Only Sixteen ",
"Let Your Love Flow ",
"Dream Weaver ",
"Turn the Beat Around ",
"Lonely Night (Angel Face) ",
"All by Myself ",
"Love to Love You Baby ",
"Deep Purple ",
"Theme from Mahogany (Do You Know Where You're Going To) ",
"Sweet Thing ",
"That's the Way (I Like It) ",
"A Little Bit More ",
"Shannon ",
"If You Leave Me Now ",
"Lowdown ",
"Show Me the Way (live) ",
"Dream On ",
"I Love Music ",
"Say You Love Me ",
"Times of Your Life ",
"Devil Woman ",
"Fooled Around and Fell in Love ",
"Convoy ",
"Welcome Back ",
"Sing a Song ",
"Heaven Must Be Missing an Angel ",
"I'll Be Good to You ",
"Rock and Roll Music ",
"Shop Around ",
"Saturday Night ",
"Island Girl ",
"Let's Do It Again ",
"Let 'Em In ",
"Baby Face ",
"This Masquerade ",
"Evil Woman ",
"Wham Bam ",
"I'm Easy ",
"Wake Up Everybody ",
"Summer ",
"Let Her In ",
"Fox on the Run ",
"Rhiannon ",
"Got to Get You into My Life ",
"Fanny (Be Tender with My Love) ",
"Getaway ",
"She's Gone ",
"Still the One ",
"You're My Best Friend ",
"With Your Love ",
"Slow Ride ",
"Who'd She Coo? ",
"The Boys Are Back in Town ",
"Walk Away from Love ",
"Baby, I Love Your Way (live) ",
"Young Hearts Run Free ",
"Breaking Up Is Hard to Do ",
"Money Honey ",
"Give Up the Funk (Tear the Roof off the Sucker) ",
"Junk Food Junkie ",
"Tryin' to Get the Feeling Again ",
"Rock and Roll All Nite (live) ",
"Disco Duck ",
"Take the Money and Run ",
"Squeeze Box ",
"Country Boy (You Got Your Feet in L.A.) ",
"24 Saat",
"İşte Öyle Bir şey",
"Bu Ne Dünya",
"Mehmet Emmi",
"Rüzgar Gibi Geçtin",
"Kan ve Gül",
"Esmerim",
"Deli Gibi Sevdim",
"Zalim Zalim",
"Öğretmenin Aşkı",
"Bu Engeller Arasında",
"Hepsi Bizim",
"Of Aman Aman",
"Ağlamak Ayıp Değil",
"Hayret",
"Dostlara Merhaba",
"Aynalar",
"Haftaya",
"Aşkın Gözü Kör mü?",
"Tımbıllı",
"Hangisi",
"Çatla Patla",
"Zalim",
"Hayırdır İnşallah ",
"Gerisi Vız Gelir",
"Allı Turnam",
"Çingene",
"Çaresizim",
"Darağacı",




 ];

 var artist = [

"Wings",
"Elton John & Kiki Dee",
"Johnnie Taylor",
"The Four Seasons",
"Wild Cherry",
"The Manhattans",
"The Miracles",
"Paul Simon",
"Gary Wright",
"Walter Murphy & The Big Apple Band",
"Hall & Oates",
"Starland Vocal Band",
"Barry Manilow",
"Silver Convention",
"Diana Ross",
"Seals and Crofts",
"Andrea True Connection",
"Queen",
"Dorothy Moore",
"The Sylvers",
"England Dan & John Ford Coley",
"Hot Chocolate",
"Nazareth",
"Silver Convention",
"Eagles",
"KC and the Sunshine Band",
"Commodores",
"Maxine Nightingale",
"Rhythm Heritage",
"Ohio Players",
"Bee Gees",
"Lou Rawls",
"David Bowie",
"Starbuck",
"Dr. Hook",
"The Bellamy Brothers",
"Gary Wright",
"Vicki Sue Robinson",
"Captain & Tennille",
"Eric Carmen",
"Donna Summer",
"Donny & Marie Osmond",
"Diana Ross",
"Rufus",
"KC and the Sunshine Band",
"Dr. Hook",
"Henry Gross",
"Chicago",
"Boz Scaggs",
"Peter Frampton",
"Aerosmith",
"The O'Jays",
"Fleetwood Mac",
"Paul Anka",
"Cliff Richard",
"Elvin Bishop",
"C. W. McCall",
"John Sebastian",
"Earth, Wind & Fire",
"Tavares",
"The Brothers Johnson",
"The Beach Boys",
"Captain & Tennille",
"Bay City Rollers",
"Elton John",
"The Staple Singers",
"Wings",
"Wing and a Prayer Fife and Drum Corps",
"George Benson",
"Electric Light Orchestra",
"Silver",
"Keith Carradine",
"Harold Melvin & the Blue Notes",
"War",
"John Travolta",
"Sweet",
"Fleetwood Mac",
"The Beatles",
"Bee Gees",
"Earth, Wind & Fire",
"Hall & Oates",
"Orleans",
"Queen",
"Jefferson Starship",
"Foghat",
"Ohio Players",
"Thin Lizzy",
"David Ruffin",
"Peter Frampton",
"Candi Staton",
"Neil Sedaka",
"Bay City Rollers",
"Parliament",
"Larry Groce",
"Barry Manilow",
"Kiss",
"Rick Dees & His Cast of Idiots",
"Steve Miller Band",
"The Who",
"Glen Campbell",
"Rıza Silahlıpoda Ritm 68",
"Erol Evgin",
"Yeliz",
"Edip Akbayram Dostlar",
"Gökben",
"İskender Doğan",
"Beyaz Kelebekler",
"Neşe Karaböcek",
"Edip Akbayram  Dostlar",
"Özdemir Erdoğan",
"Aydın Tansel",
"İskender Doğan",
"Nilüfer",
"Melike Demirağ",
"Sibel Egemen",
"Ersen Dadaşlar",
"Salim Dündar",
"Mine Kürkçüoğlu",
"Rana Alagöz",
"Erkin Koray",
"Serpil Barlas",
"Füsun Önal",
"Ersen  Dadaşlar",
"Uğur Akdora",
"Nükhet Duru",
"Erol Pekcan Orkestrası",
"Lale Belkıs",
"Funda",
"Fikret Kızılok",




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
