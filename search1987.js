// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Walk Like An Egyptian 	The Bangles",
"Alone 	Heart",
"Shake You Down 	Gregory Abbott",
"I Wanna Dance With Somebody (Who Loves Me) 	Whitney Houston",
"Nothing's Gonna Stop Us Now 	Starship",
"C'est La Vie 	Robbie Nevil",
"Here I Go Again 	Whitesnake",
"The Way It Is 	Bruce Hornsby and the Range",
"Shakedown 	Bob Seger",
"Livin' on a Prayer 	Bon Jovi",
"La Bamba 	Los Lobos",
"Everybody Have Fun Tonight 	Wang Chung",
"Don't Dream It's Over 	Crowded House",
"Always 	Atlantic Starr",
"With or Without You 	U2",
"Looking for a New Love 	Jody Watley",
"Head to Toe 	Lisa Lisa and Cult Jam",
"I Think We're Alone Now 	Tiffany",
"Mony Mony 	Billy Idol",
"At This Moment 	Billy Vera and the Beaters",
"The Lady in Red 	Chris de Burgh",
"Didn't We Almost Have It All 	Whitney Houston",
"I Still Haven't Found What I'm Looking For 	U2",
"I Want Your Sex 	George Michael",
"Notorious 	Duran Duran",
"Only in My Dreams 	Debbie Gibson",
"(I've Had) The Time of My Life 	Bill Medley and Jennifer Warnes",
"The Next Time I Fall 	Peter Cetera and Amy Grant",
"Lean on Me 	Club Nouveau",
"Open Your Heart 	Madonna",
"Lost in Emotion 	Lisa Lisa and Cult Jam",
"(I Just) Died In Your Arms 	Cutting Crew",
"Heart and Soul 	T'Pau",
"You Keep Me Hangin' On 	Kim Wilde",
"Keep Your Hands to Yourself 	Georgia Satellites",
"I Knew You Were Waiting (For Me) 	Aretha Franklin and George Michael",
"Control 	Janet Jackson",
"U Got the Look 	Prince",
"Somewhere Out There 	Linda Ronstadt and James Ingram",
"Land of Confusion 	Genesis",
"Jacob's Ladder 	Huey Lewis and the News",
"Who's That Girl 	Madonna",
"You Got It All 	The Jets",
"Touch Me (I Want Your Body) 	Samantha Fox",
"I Just Can't Stop Loving You 	Michael Jackson with Siedah Garrett",
"Causing a Commotion 	Madonna",
"In Too Deep 	Genesis",
"Let's Wait Awhile 	Janet Jackson",
"Hip to Be Square 	Huey Lewis and the News",
"Will You Still Love Me? 	Chicago",
"Little Lies 	Fleetwood Mac",
"Luka 	Suzanne Vega",
"I Heard A Rumour 	Bananarama",
"Don't Mean Nothing 	Richard Marx",
"Songbird 	Kenny G",
"Carrie 	Europe",
"Don't Disturb This Groove 	The System",
"La Isla Bonita 	Madonna",
"Bad 	Michael Jackson",
"Sign o' the Times 	Prince",
"Change of Heart 	Cyndi Lauper",
"Come Go with Me 	Exposé",
"Can't We Try 	Dan Hill featuring Vonda Shepard",
"To Be a Lover 	Billy Idol",
"Mandolin Rain 	Bruce Hornsby and the Range",
"Breakout 	Swing Out Sister",
"Stand by Me 	Ben E. King",
"Tonight, Tonight, Tonight 	Genesis",
"Someday 	Glass Tiger",
"When Smokey Sings 	ABC",
"Casanova 	LeVert",
"Rhythm Is Gonna Get You 	Gloria Estefan and Miami Sound Machine",
"Rock Steady 	The Whispers",
"Wanted Dead or Alive 	Bon Jovi",
"Big Time 	Peter Gabriel",
"The Finer Things 	Steve Winwood",
"Let Me Be the One 	Exposé",
"Is This Love 	Survivor",
"Diamonds 	Herb Alpert",
"Point of No Return 	Exposé",
"Big Love 	Fleetwood Mac",
"Midnight Blue 	Lou Gramm",
"Something So Strong 	Crowded House",
"Heat of the Night 	Bryan Adams",
"Nothing's Gonna Change My Love for You 	Glenn Medeiros",
"Brilliant Disguise 	Bruce Springsteen",
"Just to See Her 	Smokey Robinson",
"Who Will You Run To 	Heart",
"Respect Yourself 	Bruce Willis",
"Cross My Broken Heart 	The Jets",
"Victory 	Kool & the Gang",
"Don't Get Me Wrong 	The Pretenders",
"Doing It All for My Baby 	Huey Lewis and the News",
"Right on Track 	Breakfast Club",
"Ballerina Girl 	Lionel Richie",
"Meet Me Half Way 	Kenny Loggins",
"I've Been in Love Before 	Cutting Crew",
"(You Gotta) Fight for Your Right (To Party!) 	Beastie Boys",
"Funkytown 	Pseudo Echo",
"Love You Down 	Ready for the World",
"Ceviz Ağacı	Cem Karaca",
"Düriye	Barış Manço",
"Süper Babaanne	Barış Manço",
"Kol Düğmeleri	Barış Manço",
"Dut Ağacı	Ezginin Günlüğü",
"Ne Olur	Hümeyra",
"Vurulmuşum 	Esin Afşar",
"Kara Yazı	Edip Akbayram",
"Bilmem	Erkin Koray",
"Gönül Defteri	Ferdi Özbeğen",
"Çeçen Kızı	Ayşe Mine",
"Yağdır Mevlam Su	Emel Sayın",
"Hasret Pınarı	Gülden Karaböcek",
"Yeniden	Aşkın Nur Yengi",
"Yürüyorum Dikenlerin Üstünde	Selda Bağcan",
"Şarkım Sevgi Üstüne	Seyyal Taner",
"Paydos	Grup Denk",
"Güzel Şeyler Söyle	Aşkın Nur Yengi & Harun Kolçak",
"No Problem	Mazhar Fuat Özkan",
"Tasvir-i Şikayet	Grup Denk",
"İkinci Bahar	Özdemir Erdoğan",
"Seni Sevmek İbadet	Yeliz",
"Göç Yolları	Yeni Türkü",
"Yalnızlık Yolcusu	Ajda Pekkan",
"Ben Sen Olsaydım	Füsun Önal",
"Alışmak Sevmekten Zor	Ajda Pekkan",
"Yol Verin A Dostlar	Fatih Erkoç",
"Niyet Neydi Akibet Ne Oldu	Mazhar Fuat Özkan",
"Anlamazdın	Ayla Dikmen",
"Hayalimdeki Resim	Alpay",
"Hani 	Nükhet Duru",
"Dayanamıyorum	Zerrin Özer",

 

    ];

var names = [

"Walk Like An Egyptian ",
"Alone ",
"Shake You Down ",
"I Wanna Dance With Somebody (Who Loves Me) ",
"Nothing's Gonna Stop Us Now ",
"C'est La Vie ",
"Here I Go Again ",
"The Way It Is ",
"Shakedown ",
"Livin' on a Prayer ",
"La Bamba ",
"Everybody Have Fun Tonight ",
"Don't Dream It's Over ",
"Always ",
"With or Without You ",
"Looking for a New Love ",
"Head to Toe ",
"I Think We're Alone Now ",
"Mony Mony ",
"At This Moment ",
"The Lady in Red ",
"Didn't We Almost Have It All ",
"I Still Haven't Found What I'm Looking For ",
"I Want Your Sex ",
"Notorious ",
"Only in My Dreams ",
"(I've Had) The Time of My Life ",
"The Next Time I Fall ",
"Lean on Me ",
"Open Your Heart ",
"Lost in Emotion ",
"(I Just) Died In Your Arms ",
"Heart and Soul ",
"You Keep Me Hangin' On ",
"Keep Your Hands to Yourself ",
"I Knew You Were Waiting (For Me) ",
"Control ",
"U Got the Look ",
"Somewhere Out There ",
"Land of Confusion ",
"Jacob's Ladder ",
"Who's That Girl ",
"You Got It All ",
"Touch Me (I Want Your Body) ",
"I Just Can't Stop Loving You ",
"Causing a Commotion ",
"In Too Deep ",
"Let's Wait Awhile ",
"Hip to Be Square ",
"Will You Still Love Me? ",
"Little Lies ",
"Luka ",
"I Heard A Rumour ",
"Don't Mean Nothing ",
"Songbird ",
"Carrie ",
"Don't Disturb This Groove ",
"La Isla Bonita ",
"Bad ",
"Sign o' the Times ",
"Change of Heart ",
"Come Go with Me ",
"Can't We Try ",
"To Be a Lover ",
"Mandolin Rain ",
"Breakout ",
"Stand by Me ",
"Tonight, Tonight, Tonight ",
"Someday ",
"When Smokey Sings ",
"Casanova ",
"Rhythm Is Gonna Get You ",
"Rock Steady ",
"Wanted Dead or Alive ",
"Big Time ",
"The Finer Things ",
"Let Me Be the One ",
"Is This Love ",
"Diamonds ",
"Point of No Return ",
"Big Love ",
"Midnight Blue ",
"Something So Strong ",
"Heat of the Night ",
"Nothing's Gonna Change My Love for You ",
"Brilliant Disguise ",
"Just to See Her ",
"Who Will You Run To ",
"Respect Yourself ",
"Cross My Broken Heart ",
"Victory ",
"Don't Get Me Wrong ",
"Doing It All for My Baby ",
"Right on Track ",
"Ballerina Girl ",
"Meet Me Half Way ",
"I've Been in Love Before ",
"(You Gotta) Fight for Your Right (To Party!) ",
"Funkytown ",
"Love You Down ",
"Ceviz Ağacı",
"Düriye",
"Süper Babaanne",
"Kol Düğmeleri",
"Dut Ağacı",
"Ne Olur",
"Vurulmuşum ",
"Kara Yazı",
"Bilmem",
"Gönül Defteri",
"Çeçen Kızı",
"Yağdır Mevlam Su",
"Hasret Pınarı",
"Yeniden",
"Yürüyorum Dikenlerin Üstünde",
"Şarkım Sevgi Üstüne",
"Paydos",
"Güzel Şeyler Söyle",
"No Problem",
"Tasvir-i Şikayet",
"İkinci Bahar",
"Seni Sevmek İbadet",
"Göç Yolları",
"Yalnızlık Yolcusu",
"Ben Sen Olsaydım",
"Alışmak Sevmekten Zor",
"Yol Verin A Dostlar",
"Niyet Neydi Akibet Ne Oldu",
"Anlamazdın",
"Hayalimdeki Resim",
"Hani ",
"Dayanamıyorum",




 ];

 var artist = [

"The Bangles",
"Heart",
"Gregory Abbott",
"Whitney Houston",
"Starship",
"Robbie Nevil",
"Whitesnake",
"Bruce Hornsby and the Range",
"Bob Seger",
"Bon Jovi",
"Los Lobos",
"Wang Chung",
"Crowded House",
"Atlantic Starr",
"U2",
"Jody Watley",
"Lisa Lisa and Cult Jam",
"Tiffany",
"Billy Idol",
"Billy Vera and the Beaters",
"Chris de Burgh",
"Whitney Houston",
"U2",
"George Michael",
"Duran Duran",
"Debbie Gibson",
"Bill Medley and Jennifer Warnes",
"Peter Cetera and Amy Grant",
"Club Nouveau",
"Madonna",
"Lisa Lisa and Cult Jam",
"Cutting Crew",
"T'Pau",
"Kim Wilde",
"Georgia Satellites",
"Aretha Franklin and George Michael",
"Janet Jackson",
"Prince",
"Linda Ronstadt and James Ingram",
"Genesis",
"Huey Lewis and the News",
"Madonna",
"The Jets",
"Samantha Fox",
"Michael Jackson with Siedah Garrett",
"Madonna",
"Genesis",
"Janet Jackson",
"Huey Lewis and the News",
"Chicago",
"Fleetwood Mac",
"Suzanne Vega",
"Bananarama",
"Richard Marx",
"Kenny G",
"Europe",
"The System",
"Madonna",
"Michael Jackson",
"Prince",
"Cyndi Lauper",
"Exposé",
"Dan Hill featuring Vonda Shepard",
"Billy Idol",
"Bruce Hornsby and the Range",
"Swing Out Sister",
"Ben E. King",
"Genesis",
"Glass Tiger",
"ABC",
"LeVert",
"Gloria Estefan and Miami Sound Machine",
"The Whispers",
"Bon Jovi",
"Peter Gabriel",
"Steve Winwood",
"Exposé",
"Survivor",
"Herb Alpert",
"Exposé",
"Fleetwood Mac",
"Lou Gramm",
"Crowded House",
"Bryan Adams",
"Glenn Medeiros",
"Bruce Springsteen",
"Smokey Robinson",
"Heart",
"Bruce Willis",
"The Jets",
"Kool & the Gang",
"The Pretenders",
"Huey Lewis and the News",
"Breakfast Club",
"Lionel Richie",
"Kenny Loggins",
"Cutting Crew",
"Beastie Boys",
"Pseudo Echo",
"Ready for the World",
"Cem Karaca",
"Barış Manço",
"Barış Manço",
"Barış Manço",
"Ezginin Günlüğü",
"Hümeyra",
"Esin Afşar",
"Edip Akbayram",
"Erkin Koray",
"Ferdi Özbeğen",
"Ayşe Mine",
"Emel Sayın",
"Gülden Karaböcek",
"Aşkın Nur Yengi",
"Selda Bağcan",
"Seyyal Taner",
"Grup Denk",
"Aşkın Nur Yengi & Harun Kolçak",
"Mazhar Fuat Özkan",
"Grup Denk",
"Özdemir Erdoğan",
"Yeliz",
"Yeni Türkü",
"Ajda Pekkan",
"Füsun Önal",
"Ajda Pekkan",
"Fatih Erkoç",
"Mazhar Fuat Özkan",
"Ayla Dikmen",
"Alpay",
"Nükhet Duru",
"Zerrin Özer",




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
