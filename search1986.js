// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"That's What Friends are For 	Dionne and Friends (Dionne Warwick, Gladys Knight, Elton John and Stevie Wonder)",
"Say You, Say Me 	Lionel Richie",
"I Miss You 	Klymaxx",
"On My Own 	Patti LaBelle and Michael McDonald",
"Broken Wings 	Mr. Mister",
"How Will I Know 	Whitney Houston",
"Party All the Time 	Eddie Murphy",
"Burning Heart 	Survivor",
"Kyrie 	Mr. Mister",
"Addicted to Love 	Robert Palmer",
"Greatest Love of All 	Whitney Houston",
"Secret Lovers 	Atlantic Starr",
"Friends and Lovers 	Gloria Loring and Carl Anderson",
"Glory of Love 	Peter Cetera",
"West End Girls 	Pet Shop Boys",
"There'll Be Sad Songs (To Make You Cry) 	Billy Ocean",
"Alive and Kicking 	Simple Minds",
"Never 	Heart",
"Kiss 	Prince and The Revolution",
"Higher Love 	Steve Winwood",
"Stuck with You 	Huey Lewis and the News",
"Holding Back the Years 	Simply Red",
"Sledgehammer 	Peter Gabriel",
"Sara 	Starship",
"Human 	The Human League",
"I Can't Wait 	Nu Shooz",
"Take My Breath Away 	Berlin",
"Rock Me Amadeus 	Falco",
"Papa Don't Preach 	Madonna",
"You Give Love a Bad Name 	Bon Jovi",
"When the Going Gets Tough, the Tough Get Going 	Billy Ocean",
"When I Think of You 	Janet Jackson",
"These Dreams 	Heart",
"Don't Forget Me (When I'm Gone) 	Glass Tiger",
"Live to Tell 	Madonna",
"Mad About You 	Belinda Carlisle",
"Something About You 	Level 42",
"Venus 	Bananarama",
"Dancing on the Ceiling 	Lionel Richie",
"Conga 	Miami Sound Machine",
"True Colors 	Cyndi Lauper",
"Danger Zone 	Kenny Loggins",
"What Have You Done For Me Lately 	Janet Jackson",
"No One Is to Blame 	Howard Jones",
"Let's Go All the Way 	Sly Fox",
"I Didn't Mean to Turn You On 	Robert Palmer",
"Words Get in the Way 	Miami Sound Machine",
"Manic Monday 	The Bangles",
"Walk of Life 	Dire Straits",
"Amanda 	Boston",
"Two of Hearts 	Stacey Q",
"Crush on You 	The Jets",
"If You Leave 	Orchestral Manoeuvres in the Dark",
"Invisible Touch 	Genesis",
"The Sweetest Taboo 	Sade",
"What You Need 	INXS",
"Talk to Me 	Stevie Nicks",
"Nasty 	Janet Jackson",
"Take Me Home Tonight 	Eddie Money",
"We Don't Have to Take Our Clothes Off 	Jermaine Stewart",
"All Cried Out 	Lisa Lisa and Cult Jam",
"Your Love 	The Outfield",
"I'm Your Man 	Wham!",
"Perfect Way 	Scritti Politti",
"Living in America 	James Brown",
"R.O.C.K. in the U.S.A. 	John Cougar Mellencamp",
"Who's Johnny 	El DeBarge",
"Word Up! 	Cameo",
"Why Can't This Be Love 	Van Halen",
"Silent Running (On Dangerous Ground) 	Mike + The Mechanics",
"Typical Male 	Tina Turner",
"Small Town 	John Cougar Mellencamp",
"Tarzan Boy 	Baltimora",
"All I Need Is a Miracle 	Mike + The Mechanics",
"Sweet Freedom 	Michael McDonald",
"True Blue 	Madonna",
"Rumors 	Timex Social Club",
"Life in a Northern Town 	Dream Academy",
"Bad Boy 	Miami Sound Machine",
"Sleeping Bag 	ZZ Top",
"Tonight She Comes 	The Cars",
"Love Touch 	Rod Stewart",
"A Love Bizarre 	Sheila E.",
"Throwing It All Away 	Genesis",
"Baby Love 	Regina",
"Election Day 	Arcadia",
"Nikita 	Elton John",
"Take Me Home 	Phil Collins",
"Walk This Way 	Run–D.M.C.",
"Sweet Love 	Anita Baker",
"Your Wildest Dreams 	Moody Blues",
"Spies Like Us 	Paul McCartney",
"Object of My Desire 	Starpoint",
"Dreamtime 	Daryl Hall",
"Tender Love 	Force MDs",
"King for a Day 	Thompson Twins",
"Love Will Conquer All 	Lionel Richie",
"A Different Corner 	George Michael",
"I'll Be Over You 	Toto",
"Go Home 	Stevie Wonder",
"Hasret Bir Güldür	Jale",
"Maskeli Balo	Yeni Türkü",
"Görüntüler	İlhan İrem",
"Selam Olsun	Zülfü Livaneli",
"Erkekler Ağlamaz	Nilüfer",
"Hep Seni Arar	Sevingül Bahadır",
"Sevda	Ferdi Özbeğen",
"Telli Telli	Yeni Türkü",
"Böyle mi Esecekti	Samime Sanay",
"Ömrümü Vereceğim	Ünal Narçın",

 

    ];

var names = [

"That's What Friends are For ",
"Say You, Say Me ",
"I Miss You ",
"On My Own ",
"Broken Wings ",
"How Will I Know ",
"Party All the Time ",
"Burning Heart ",
"Kyrie ",
"Addicted to Love ",
"Greatest Love of All ",
"Secret Lovers ",
"Friends and Lovers ",
"Glory of Love ",
"West End Girls ",
"There'll Be Sad Songs (To Make You Cry) ",
"Alive and Kicking ",
"Never ",
"Kiss ",
"Higher Love ",
"Stuck with You ",
"Holding Back the Years ",
"Sledgehammer ",
"Sara ",
"Human ",
"I Can't Wait ",
"Take My Breath Away ",
"Rock Me Amadeus ",
"Papa Don't Preach ",
"You Give Love a Bad Name ",
"When the Going Gets Tough, the Tough Get Going ",
"When I Think of You ",
"These Dreams ",
"Don't Forget Me (When I'm Gone) ",
"Live to Tell ",
"Mad About You ",
"Something About You ",
"Venus ",
"Dancing on the Ceiling ",
"Conga ",
"True Colors ",
"Danger Zone ",
"What Have You Done For Me Lately ",
"No One Is to Blame ",
"Let's Go All the Way ",
"I Didn't Mean to Turn You On ",
"Words Get in the Way ",
"Manic Monday ",
"Walk of Life ",
"Amanda ",
"Two of Hearts ",
"Crush on You ",
"If You Leave ",
"Invisible Touch ",
"The Sweetest Taboo ",
"What You Need ",
"Talk to Me ",
"Nasty ",
"Take Me Home Tonight ",
"We Don't Have to Take Our Clothes Off ",
"All Cried Out ",
"Your Love ",
"I'm Your Man ",
"Perfect Way ",
"Living in America ",
"R.O.C.K. in the U.S.A. ",
"Who's Johnny ",
"Word Up! ",
"Why Can't This Be Love ",
"Silent Running (On Dangerous Ground) ",
"Typical Male ",
"Small Town ",
"Tarzan Boy ",
"All I Need Is a Miracle ",
"Sweet Freedom ",
"True Blue ",
"Rumors ",
"Life in a Northern Town ",
"Bad Boy ",
"Sleeping Bag ",
"Tonight She Comes ",
"Love Touch ",
"A Love Bizarre ",
"Throwing It All Away ",
"Baby Love ",
"Election Day ",
"Nikita ",
"Take Me Home ",
"Walk This Way ",
"Sweet Love ",
"Your Wildest Dreams ",
"Spies Like Us ",
"Object of My Desire ",
"Dreamtime ",
"Tender Love ",
"King for a Day ",
"Love Will Conquer All ",
"A Different Corner ",
"I'll Be Over You ",
"Go Home ",
"Hasret Bir Güldür",
"Maskeli Balo",
"Görüntüler",
"Selam Olsun",
"Erkekler Ağlamaz",
"Hep Seni Arar",
"Sevda",
"Telli Telli",
"Böyle mi Esecekti",
"Ömrümü Vereceğim",




 ];

 var artist = [

"Dionne and Friends (Dionne Warwick, Gladys Knight, Elton John and Stevie Wonder)",
"Lionel Richie",
"Klymaxx",
"Patti LaBelle and Michael McDonald",
"Mr. Mister",
"Whitney Houston",
"Eddie Murphy",
"Survivor",
"Mr. Mister",
"Robert Palmer",
"Whitney Houston",
"Atlantic Starr",
"Gloria Loring and Carl Anderson",
"Peter Cetera",
"Pet Shop Boys",
"Billy Ocean",
"Simple Minds",
"Heart",
"Prince and The Revolution",
"Steve Winwood",
"Huey Lewis and the News",
"Simply Red",
"Peter Gabriel",
"Starship",
"The Human League",
"Nu Shooz",
"Berlin",
"Falco",
"Madonna",
"Bon Jovi",
"Billy Ocean",
"Janet Jackson",
"Heart",
"Glass Tiger",
"Madonna",
"Belinda Carlisle",
"Level 42",
"Bananarama",
"Lionel Richie",
"Miami Sound Machine",
"Cyndi Lauper",
"Kenny Loggins",
"Janet Jackson",
"Howard Jones",
"Sly Fox",
"Robert Palmer",
"Miami Sound Machine",
"The Bangles",
"Dire Straits",
"Boston",
"Stacey Q",
"The Jets",
"Orchestral Manoeuvres in the Dark",
"Genesis",
"Sade",
"INXS",
"Stevie Nicks",
"Janet Jackson",
"Eddie Money",
"Jermaine Stewart",
"Lisa Lisa and Cult Jam",
"The Outfield",
"Wham!",
"Scritti Politti",
"James Brown",
"John Cougar Mellencamp",
"El DeBarge",
"Cameo",
"Van Halen",
"Mike + The Mechanics",
"Tina Turner",
"John Cougar Mellencamp",
"Baltimora",
"Mike + The Mechanics",
"Michael McDonald",
"Madonna",
"Timex Social Club",
"Dream Academy",
"Miami Sound Machine",
"ZZ Top",
"The Cars",
"Rod Stewart",
"Sheila E.",
"Genesis",
"Regina",
"Arcadia",
"Elton John",
"Phil Collins",
"Run–D.M.C.",
"Anita Baker",
"Moody Blues",
"Paul McCartney",
"Starpoint",
"Daryl Hall",
"Force MDs",
"Thompson Twins",
"Lionel Richie",
"George Michael",
"Toto",
"Stevie Wonder",
"Jale",
"Yeni Türkü",
"İlhan İrem",
"Zülfü Livaneli",
"Nilüfer",
"Sevingül Bahadır",
"Ferdi Özbeğen",
"Yeni Türkü",
"Samime Sanay",
"Ünal Narçın",




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
