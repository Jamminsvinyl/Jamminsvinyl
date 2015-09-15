// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Hold On 	Wilson Phillips",
"It Must Have Been Love 	Roxette",
"Nothing Compares 2 U 	Sinéad O'Connor",
"Poison 	Bell Biv DeVoe",
"Vogue 	Madonna",
"Vision of Love 	Mariah Carey",
"Another Day in Paradise 	Phil Collins",
"Hold On 	En Vogue",
"Cradle of Love 	Billy Idol",
"Blaze of Glory 	Jon Bon Jovi",
"Do Me! 	Bell Biv DeVoe",
"How Am I Supposed to Live Without You 	Michael Bolton",
"Pump Up the Jam 	Technotronic featuring Felly",
"Opposites Attract 	Paula Abdul and The Wild Pair",
"Escapade 	Janet Jackson",
"All I Wanna Do Is Make Love to You 	Heart",
"Close to You 	Maxi Priest",
"Black Velvet 	Alannah Myles",
"Release Me 	Wilson Phillips",
"Don't Know Much 	Linda Ronstadt and Aaron Neville",
"All Around the World 	Lisa Stansfield",
"I Wanna Be Rich 	Calloway",
"Rub You the Right Way 	Johnny Gill",
"She Ain't Worth It 	Glenn Medeiros and Bobby Brown",
"If Wishes Came True 	Sweet Sensation",
"The Power 	Snap!",
"(Can't Live Without Your) Love and Affection 	Nelson",
"Love Will Lead You Back 	Taylor Dayne",
"Don't Wanna Fall in Love 	Jane Child",
"Two to Make It Right 	Seduction",
"Sending All My Love 	Linear",
"Unskinny Bop 	Poison",
"Step by Step 	New Kids on the Block",
"Dangerous 	Roxette",
"We Didn't Start the Fire 	Billy Joel",
"I Don't Have the Heart 	James Ingram",
"Downtown Train 	Rod Stewart",
"Rhythm Nation 	Janet Jackson",
"I'll Be Your Everything 	Tommy Page",
"Roam 	The B-52s",
"Everything 	Jody Watley",
"Back to Life (However Do You Want Me) 	Soul II Soul featuring Caron Wheeler",
"Here and Now 	Luther Vandross",
"Alright 	Janet Jackson",
"Ice Ice Baby 	Vanilla Ice",
"Blame It on the Rain 	Milli Vanilli",
"Have You Seen Her 	MC Hammer",
"With Every Beat of My Heart 	Taylor Dayne",
"Come Back to Me 	Janet Jackson",
"No More Lies 	Michel'le",
"Praying for Time 	George Michael",
"How Can We Be Lovers 	Michael Bolton",
"Do You Remember 	Phil Collins",
"Ready or Not 	After 7",
"U Can't Touch This 	MC Hammer",
"I Wish It Would Rain Down 	Phil Collins",
"Just Between You and Me 	Lou Gramm",
"Something Happened on the Way to Heaven 	Phil Collins",
"Black Cat 	Janet Jackson",
"Can't Stop 	After 7",
"Janie's Got a Gun 	Aerosmith",
"The Humpty Dance 	Digital Underground",
"I'll Be Your Shelter 	Taylor Dayne",
"Free Fallin' 	Tom Petty",
"Giving You the Benefit 	Pebbles",
"Enjoy the Silence 	Depeche Mode",
"Love Song 	Tesla",
"Price of Love 	Bad English",
"Girls Nite Out 	Tyler Collins",
"King of Wishful Thinking 	Go West",
"What Kind of Man Would I Be? 	Chicago",
"I Remember You 	Skid Row",
"Get Up! (Before the Night Is Over) 	Technotronic featuring Ya Kid K",
"Here We Are 	Gloria Estefan",
"Epic 	Faith No More",
"Love Takes Time 	Mariah Carey",
"Just Like Jesse James 	Cher",
"Love Shack 	The B-52s",
"All or Nothing 	Milli Vanilli",
"Romeo 	Dino",
"Everybody Everybody 	Black Box",
"I Go to Extremes 	Billy Joel",
"Whip Appeal 	Babyface",
"Oh Girl 	Paul Young",
"C'mon and Get My Love 	D Mob featuring Cathy Dennis",
"(It's Just) The Way That You Love Me 	Paula Abdul",
"We Can't Go Wrong 	The Cover Girls",
"When I'm Back on My Feet Again 	Michael Bolton",
"Make You Sweat 	Keith Sweat",
"This One's for the Children 	New Kids on the Block",
"What It Takes 	Aerosmith",
"Forever 	Kiss",
"Jerk Out 	The Time",
"Just a Friend 	Biz Markie",
"Whole Wide World 	A'me Lorain",
"Without You 	Mötley Crüe",
"Swing the Mood 	Jive Bunny and the Mastermixers",
"Thieves in the Temple 	Prince",
"Mentirosa 	Mellow Man Ace",
"Tic-Tac-Toe 	Kyper",
"Yiyin Efendiler (Yağma Sofrası) 	Cem Karaca",
"İnsanoğlu	Doğan Canku",
"Sultani Yegah Sirto	Doğan Canku",
"Ali Desidero	MFÖ",
"Bile bile	Aşkın Nur Yengi",
"Beni Kategorize Etme	Bülent Ortaçgil",
"Karşılıksız Çek	Mirkelam",
"Sen Mühimsin 	Nilüfer",
"Yağmur Ağlıyor	Neşe Karaböcek",
"Gurbet	Hümeyra",
"Camdan cama	Hakan Peker",
"Adını Yollara Yazdım	Yeliz",
"Bu yaz	Zerrin Özer",
"Rotten Dogs	Pentagram",
"Bir Garip Yolcuyum	Ajda Pekkan",
"Kadehler	Özdemir Erdoğan",
"Bu kalp seni unutur mu	Fikret Kızılok",
"Gönül	Fikret Kızılok",
"Dokundurabilirsiniz	Grup Vitamin",
"Özledim	Zuhal Olcay",
"Mor menekşe	Kayahan",
"Aşk Oyunu	Gökben",
"Vira Vira	Yeni Türkü",
"Karlar Düşer	Emel Müftüoğlu",
"Hava Nasıl Oralarda	Edip Akbayram",
"Kar tanesi	Zerrin Özer",
"İlla ki	Erkin Koray",
"İşte hendek işte deve	Barış Manço",

 

    ];

var names = [

"Hold On ",
"It Must Have Been Love ",
"Nothing Compares 2 U ",
"Poison ",
"Vogue ",
"Vision of Love ",
"Another Day in Paradise ",
"Hold On ",
"Cradle of Love ",
"Blaze of Glory ",
"Do Me! ",
"How Am I Supposed to Live Without You ",
"Pump Up the Jam ",
"Opposites Attract ",
"Escapade ",
"All I Wanna Do Is Make Love to You ",
"Close to You ",
"Black Velvet ",
"Release Me ",
"Don't Know Much ",
"All Around the World ",
"I Wanna Be Rich ",
"Rub You the Right Way ",
"She Ain't Worth It ",
"If Wishes Came True ",
"The Power ",
"(Can't Live Without Your) Love and Affection ",
"Love Will Lead You Back ",
"Don't Wanna Fall in Love ",
"Two to Make It Right ",
"Sending All My Love ",
"Unskinny Bop ",
"Step by Step ",
"Dangerous ",
"We Didn't Start the Fire ",
"I Don't Have the Heart ",
"Downtown Train ",
"Rhythm Nation ",
"I'll Be Your Everything ",
"Roam ",
"Everything ",
"Back to Life (However Do You Want Me) ",
"Here and Now ",
"Alright ",
"Ice Ice Baby ",
"Blame It on the Rain ",
"Have You Seen Her ",
"With Every Beat of My Heart ",
"Come Back to Me ",
"No More Lies ",
"Praying for Time ",
"How Can We Be Lovers ",
"Do You Remember ",
"Ready or Not ",
"U Can't Touch This ",
"I Wish It Would Rain Down ",
"Just Between You and Me ",
"Something Happened on the Way to Heaven ",
"Black Cat ",
"Can't Stop ",
"Janie's Got a Gun ",
"The Humpty Dance ",
"I'll Be Your Shelter ",
"Free Fallin' ",
"Giving You the Benefit ",
"Enjoy the Silence ",
"Love Song ",
"Price of Love ",
"Girls Nite Out ",
"King of Wishful Thinking ",
"What Kind of Man Would I Be? ",
"I Remember You ",
"Get Up! (Before the Night Is Over) ",
"Here We Are ",
"Epic ",
"Love Takes Time ",
"Just Like Jesse James ",
"Love Shack ",
"All or Nothing ",
"Romeo ",
"Everybody Everybody ",
"I Go to Extremes ",
"Whip Appeal ",
"Oh Girl ",
"C'mon and Get My Love ",
"(It's Just) The Way That You Love Me ",
"We Can't Go Wrong ",
"When I'm Back on My Feet Again ",
"Make You Sweat ",
"This One's for the Children ",
"What It Takes ",
"Forever ",
"Jerk Out ",
"Just a Friend ",
"Whole Wide World ",
"Without You ",
"Swing the Mood ",
"Thieves in the Temple ",
"Mentirosa ",
"Tic-Tac-Toe ",
"Yiyin Efendiler (Yağma Sofrası) ",
"İnsanoğlu",
"Sultani Yegah Sirto",
"Ali Desidero",
"Bile bile",
"Beni Kategorize Etme",
"Karşılıksız Çek",
"Sen Mühimsin ",
"Yağmur Ağlıyor",
"Gurbet",
"Camdan cama",
"Adını Yollara Yazdım",
"Bu yaz",
"Rotten Dogs",
"Bir Garip Yolcuyum",
"Kadehler",
"Bu kalp seni unutur mu",
"Gönül",
"Dokundurabilirsiniz",
"Özledim",
"Mor menekşe",
"Aşk Oyunu",
"Vira Vira",
"Karlar Düşer",
"Hava Nasıl Oralarda",
"Kar tanesi",
"İlla ki",
"İşte hendek işte deve",




 ];

 var artist = [

"Wilson Phillips",
"Roxette",
"Sinéad O'Connor",
"Bell Biv DeVoe",
"Madonna",
"Mariah Carey",
"Phil Collins",
"En Vogue",
"Billy Idol",
"Jon Bon Jovi",
"Bell Biv DeVoe",
"Michael Bolton",
"Technotronic featuring Felly",
"Paula Abdul and The Wild Pair",
"Janet Jackson",
"Heart",
"Maxi Priest",
"Alannah Myles",
"Wilson Phillips",
"Linda Ronstadt and Aaron Neville",
"Lisa Stansfield",
"Calloway",
"Johnny Gill",
"Glenn Medeiros and Bobby Brown",
"Sweet Sensation",
"Snap!",
"Nelson",
"Taylor Dayne",
"Jane Child",
"Seduction",
"Linear",
"Poison",
"New Kids on the Block",
"Roxette",
"Billy Joel",
"James Ingram",
"Rod Stewart",
"Janet Jackson",
"Tommy Page",
"The B-52s",
"Jody Watley",
"Soul II Soul featuring Caron Wheeler",
"Luther Vandross",
"Janet Jackson",
"Vanilla Ice",
"Milli Vanilli",
"MC Hammer",
"Taylor Dayne",
"Janet Jackson",
"Michel'le",
"George Michael",
"Michael Bolton",
"Phil Collins",
"After 7",
"MC Hammer",
"Phil Collins",
"Lou Gramm",
"Phil Collins",
"Janet Jackson",
"After 7",
"Aerosmith",
"Digital Underground",
"Taylor Dayne",
"Tom Petty",
"Pebbles",
"Depeche Mode",
"Tesla",
"Bad English",
"Tyler Collins",
"Go West",
"Chicago",
"Skid Row",
"Technotronic featuring Ya Kid K",
"Gloria Estefan",
"Faith No More",
"Mariah Carey",
"Cher",
"The B-52s",
"Milli Vanilli",
"Dino",
"Black Box",
"Billy Joel",
"Babyface",
"Paul Young",
"D Mob featuring Cathy Dennis",
"Paula Abdul",
"The Cover Girls",
"Michael Bolton",
"Keith Sweat",
"New Kids on the Block",
"Aerosmith",
"Kiss",
"The Time",
"Biz Markie",
"A'me Lorain",
"Mötley Crüe",
"Jive Bunny and the Mastermixers",
"Prince",
"Mellow Man Ace",
"Kyper",
"Cem Karaca",
"Doğan Canku",
"Doğan Canku",
"MFÖ",
"Aşkın Nur Yengi",
"Bülent Ortaçgil",
"Mirkelam",
"Nilüfer",
"Neşe Karaböcek",
"Hümeyra",
"Hakan Peker",
"Yeliz",
"Zerrin Özer",
"Pentagram",
"Ajda Pekkan",
"Özdemir Erdoğan",
"Fikret Kızılok",
"Fikret Kızılok",
"Grup Vitamin",
"Zuhal Olcay",
"Kayahan",
"Gökben",
"Yeni Türkü",
"Emel Müftüoğlu",
"Edip Akbayram",
"Zerrin Özer",
"Erkin Koray",
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
