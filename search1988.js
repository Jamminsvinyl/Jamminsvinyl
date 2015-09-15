// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Faith 	George Michael",
"Need You Tonight 	INXS",
"Got My Mind Set on You 	George Harrison",
"Never Gonna Give You Up 	Rick Astley",
"Sweet Child o' Mine 	Guns N' Roses",
"So Emotional 	Whitney Houston",
"Heaven Is a Place on Earth 	Belinda Carlisle",
"Could've Been 	Tiffany",
"Hands to Heaven 	Breathe",
"Roll with It 	Steve Winwood",
"One More Try 	George Michael",
"Wishing Well 	Terence Trent D'Arby",
"Anything for You 	Gloria Estefan and Miami Sound Machine",
"The Flame 	Cheap Trick",
"Get Outta My Dreams, Get into My Car 	Billy Ocean",
"Seasons Change 	Exposé",
"Is This Love 	Whitesnake",
"Wild, Wild West 	The Escape Club",
"Pour Some Sugar on Me 	Def Leppard",
"I'll Always Love You 	Taylor Dayne",
"Man in the Mirror 	Michael Jackson",
"Shake Your Love 	Debbie Gibson",
"Simply Irresistible 	Robert Palmer",
"Hold On to the Nights 	Richard Marx",
"Hungry Eyes 	Eric Carmen",
"Shattered Dreams 	Johnny Hates Jazz",
"Father Figure 	George Michael",
"Naughty Girls (Need Love Too) 	Samantha Fox",
"A Groovy Kind of Love 	Phil Collins",
"Love Bites 	Def Leppard",
"Endless Summer Nights 	Richard Marx",
"Foolish Beat 	Debbie Gibson",
"Where Do Broken Hearts Go 	Whitney Houston",
"Angel 	Aerosmith",
"A Hazy Shade of Winter 	The Bangles",
"The Way You Make Me Feel 	Michael Jackson",
"Don't Worry, Be Happy 	Bobby McFerrin",
"Make Me Lose Control 	Eric Carmen",
"Red Red Wine 	UB40",
"She's Like the Wind 	Patrick Swayze featuring Wendy Fraser",
"Bad Medicine 	Bon Jovi",
"Kokomo 	The Beach Boys",
"I Don't Wanna Go on with You Like That 	Elton John",
"Together Forever 	Rick Astley",
"Monkey 	George Michael",
"Devil Inside 	INXS",
"Should've Known Better 	Richard Marx",
"I Don't Wanna Live Without Your Love 	Chicago",
"The Loco-Motion 	Kylie Minogue",
"What Have I Done to Deserve This? 	Pet Shop Boys with Dusty Springfield",
"Make It Real 	The Jets",
"What's On Your Mind (Pure Energy) 	Information Society",
"Tell It to My Heart 	Taylor Dayne",
"Out of the Blue 	Debbie Gibson",
"Don't You Want Me 	Jody Watley",
"Desire 	U2",
"I Get Weak 	Belinda Carlisle",
"Sign Your Name 	Terence Trent D'Arby",
"I Want to Be Your Man 	Roger Troutman",
"Girlfriend 	Pebbles",
"Dirty Diana 	Michael Jackson",
"Mercedes Boy 	Pebbles",
"Perfect World 	Huey Lewis and the News",
"New Sensation 	INXS",
"Catch Me (I'm Falling) 	Pretty Poison",
"If It Isn't Love 	New Edition",
"Rocket 2 U 	The Jets",
"One Good Woman 	Peter Cetera",
"Don't Be Cruel 	Cheap Trick",
"Candle in the Wind 	Elton John",
"Everything Your Heart Desires 	Daryl Hall & John Oates",
"Say You Will 	Foreigner",
"I Want Her 	Keith Sweat",
"Pink Cadillac 	Natalie Cole",
"Fast Car 	Tracy Chapman",
"Electric Blue 	Icehouse",
"The Valley Road 	Bruce Hornsby and the Range",
"Don't Be Cruel 	Bobby Brown",
"Always on My Mind 	Pet Shop Boys",
"Piano in the Dark 	Brenda Russell featuring Joe Esposito",
"When It's Love 	Van Halen",
"Don't Shed a Tear 	Paul Carrack",
"We'll Be Together 	Sting",
"I Hate Myself for Loving You 	Joan Jett and the Blackhearts",
"I Don't Want to Live Without You 	Foreigner",
"Nite and Day 	Al B. Sure!",
"Don't You Know What the Night Can Do? 	Steve Winwood",
"One Moment in Time 	Whitney Houston",
"Can't Stay Away from You 	Gloria Estefan and Miami Sound Machine",
"Kissing a Fool 	George Michael",
"Cherry Bomb 	John Cougar Mellencamp",
"I Still Believe 	Brenda K. Starr",
"I Found Someone 	Cher",
"Never Tear Us Apart 	INXS",
"Valerie 	Steve Winwood",
"Just Like Paradise 	David Lee Roth",
"Nothin' but a Good Time 	Poison",
"Wait 	White Lion",
"Prove Your Love 	Taylor Dayne",
"Sevda Kuşun Kanadında	Cem Karaca",
"Sufi (Hey Ya Hey) 	Mazhar-Fuat-Özkan (MFÖ)",
"Onikiden	Grup Denk",
"Sokak Kedisi	Kayahan",
"Resimler Resimler	Grup Gündoğarken",
"Zig Zag	Grup Tema",
"Diskotek	Grup Vizyon",
"Fazla Vaktim Yok	Grup 88",
"Bir Dolu Yaz	Aysun Kocatepe",
"Dilek Taşı	Gülden Karaböcek",
"Adaletin Bu mu Dünya	Selda Bağcan",
"Konuşamıyorum	ilhan irem",
"Özgürlük	Edip Akbayram",
"Esmer Günler	Nilüfer",
"Yaz Bulutları	Grup Gündoğarken",
"Polis Haydar	Ersen",
"Az Buçuk Sevgi	Nükhet Duru",
"Karasevda	Ayşegül Aldinç",
"Bir Çocuk Sevdim 	Sezen Aksu",
"Sarışınım	Sezen Aksu",
"Gözyaşımda Saklısın	Emel Sayın",
"Dünya Tatlısı	Zerrin Özer",
"Mutlu Olmak Varken	Ezginin Günlüğü",
"Portakal Çiçeği	Aşkın Nur Yengi",
"Sen Nerdesin	Timur Selçuk",
"İspanyol Meyhanesi	Timur Selçuk",
"Yeşilmişik	Yeni Türkü",
"Nane Limon Kabuğu	Barış Manço",

 

    ];

var names = [

"Faith ",
"Need You Tonight ",
"Got My Mind Set on You ",
"Never Gonna Give You Up ",
"Sweet Child o' Mine ",
"So Emotional ",
"Heaven Is a Place on Earth ",
"Could've Been ",
"Hands to Heaven ",
"Roll with It ",
"One More Try ",
"Wishing Well ",
"Anything for You ",
"The Flame ",
"Get Outta My Dreams, Get into My Car ",
"Seasons Change ",
"Is This Love ",
"Wild, Wild West ",
"Pour Some Sugar on Me ",
"I'll Always Love You ",
"Man in the Mirror ",
"Shake Your Love ",
"Simply Irresistible ",
"Hold On to the Nights ",
"Hungry Eyes ",
"Shattered Dreams ",
"Father Figure ",
"Naughty Girls (Need Love Too) ",
"A Groovy Kind of Love ",
"Love Bites ",
"Endless Summer Nights ",
"Foolish Beat ",
"Where Do Broken Hearts Go ",
"Angel ",
"A Hazy Shade of Winter ",
"The Way You Make Me Feel ",
"Don't Worry, Be Happy ",
"Make Me Lose Control ",
"Red Red Wine ",
"She's Like the Wind ",
"Bad Medicine ",
"Kokomo ",
"I Don't Wanna Go on with You Like That ",
"Together Forever ",
"Monkey ",
"Devil Inside ",
"Should've Known Better ",
"I Don't Wanna Live Without Your Love ",
"The Loco-Motion ",
"What Have I Done to Deserve This? ",
"Make It Real ",
"What's On Your Mind (Pure Energy) ",
"Tell It to My Heart ",
"Out of the Blue ",
"Don't You Want Me ",
"Desire ",
"I Get Weak ",
"Sign Your Name ",
"I Want to Be Your Man ",
"Girlfriend ",
"Dirty Diana ",
"Mercedes Boy ",
"Perfect World ",
"New Sensation ",
"Catch Me (I'm Falling) ",
"If It Isn't Love ",
"Rocket 2 U ",
"One Good Woman ",
"Don't Be Cruel ",
"Candle in the Wind ",
"Everything Your Heart Desires ",
"Say You Will ",
"I Want Her ",
"Pink Cadillac ",
"Fast Car ",
"Electric Blue ",
"The Valley Road ",
"Don't Be Cruel ",
"Always on My Mind ",
"Piano in the Dark ",
"When It's Love ",
"Don't Shed a Tear ",
"We'll Be Together ",
"I Hate Myself for Loving You ",
"I Don't Want to Live Without You ",
"Nite and Day ",
"Don't You Know What the Night Can Do? ",
"One Moment in Time ",
"Can't Stay Away from You ",
"Kissing a Fool ",
"Cherry Bomb ",
"I Still Believe ",
"I Found Someone ",
"Never Tear Us Apart ",
"Valerie ",
"Just Like Paradise ",
"Nothin' but a Good Time ",
"Wait ",
"Prove Your Love ",
"Sevda Kuşun Kanadında",
"Sufi (Hey Ya Hey) ",
"Onikiden",
"Sokak Kedisi",
"Resimler Resimler",
"Zig Zag",
"Diskotek",
"Fazla Vaktim Yok",
"Bir Dolu Yaz",
"Dilek Taşı",
"Adaletin Bu mu Dünya",
"Konuşamıyorum",
"Özgürlük",
"Esmer Günler",
"Yaz Bulutları",
"Polis Haydar",
"Az Buçuk Sevgi",
"Karasevda",
"Bir Çocuk Sevdim ",
"Sarışınım",
"Gözyaşımda Saklısın",
"Dünya Tatlısı",
"Mutlu Olmak Varken",
"Portakal Çiçeği",
"Sen Nerdesin",
"İspanyol Meyhanesi",
"Yeşilmişik",
"Nane Limon Kabuğu",




 ];

 var artist = [

"George Michael",
"INXS",
"George Harrison",
"Rick Astley",
"Guns N' Roses",
"Whitney Houston",
"Belinda Carlisle",
"Tiffany",
"Breathe",
"Steve Winwood",
"George Michael",
"Terence Trent D'Arby",
"Gloria Estefan and Miami Sound Machine",
"Cheap Trick",
"Billy Ocean",
"Exposé",
"Whitesnake",
"The Escape Club",
"Def Leppard",
"Taylor Dayne",
"Michael Jackson",
"Debbie Gibson",
"Robert Palmer",
"Richard Marx",
"Eric Carmen",
"Johnny Hates Jazz",
"George Michael",
"Samantha Fox",
"Phil Collins",
"Def Leppard",
"Richard Marx",
"Debbie Gibson",
"Whitney Houston",
"Aerosmith",
"The Bangles",
"Michael Jackson",
"Bobby McFerrin",
"Eric Carmen",
"UB40",
"Patrick Swayze featuring Wendy Fraser",
"Bon Jovi",
"The Beach Boys",
"Elton John",
"Rick Astley",
"George Michael",
"INXS",
"Richard Marx",
"Chicago",
"Kylie Minogue",
"Pet Shop Boys with Dusty Springfield",
"The Jets",
"Information Society",
"Taylor Dayne",
"Debbie Gibson",
"Jody Watley",
"U2",
"Belinda Carlisle",
"Terence Trent D'Arby",
"Roger Troutman",
"Pebbles",
"Michael Jackson",
"Pebbles",
"Huey Lewis and the News",
"INXS",
"Pretty Poison",
"New Edition",
"The Jets",
"Peter Cetera",
"Cheap Trick",
"Elton John",
"Daryl Hall & John Oates",
"Foreigner",
"Keith Sweat",
"Natalie Cole",
"Tracy Chapman",
"Icehouse",
"Bruce Hornsby and the Range",
"Bobby Brown",
"Pet Shop Boys",
"Brenda Russell featuring Joe Esposito",
"Van Halen",
"Paul Carrack",
"Sting",
"Joan Jett and the Blackhearts",
"Foreigner",
"Al B. Sure!",
"Steve Winwood",
"Whitney Houston",
"Gloria Estefan and Miami Sound Machine",
"George Michael",
"John Cougar Mellencamp",
"Brenda K. Starr",
"Cher",
"INXS",
"Steve Winwood",
"David Lee Roth",
"Poison",
"White Lion",
"Taylor Dayne",
"Cem Karaca",
"Mazhar-Fuat-Özkan (MFÖ)",
"Grup Denk",
"Kayahan",
"Grup Gündoğarken",
"Grup Tema",
"Grup Vizyon",
"Grup 88",
"Aysun Kocatepe",
"Gülden Karaböcek",
"Selda Bağcan",
"ilhan irem",
"Edip Akbayram",
"Nilüfer",
"Grup Gündoğarken",
"Ersen",
"Nükhet Duru",
"Ayşegül Aldinç",
"Sezen Aksu",
"Sezen Aksu",
"Emel Sayın",
"Zerrin Özer",
"Ezginin Günlüğü",
"Aşkın Nur Yengi",
"Timur Selçuk",
"Timur Selçuk",
"Yeni Türkü",
"Barış Manço",




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
