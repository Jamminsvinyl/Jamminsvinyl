// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Macarena (Bayside Boys Mix) 	Los del Río",
"One Sweet Day 	Mariah Carey and Boyz II Men",
"Because You Loved Me 	Celine Dion",
"Nobody Knows 	The Tony Rich Project",
"Always Be My Baby 	Mariah Carey",
"Give Me One Reason 	Tracy Chapman",
"Tha Crossroads 	Bone Thugs-n-Harmony",
"I Love You Always Forever 	Donna Lewis",
"You're Makin' Me High / "Let It Flow" 	Toni Braxton",
"Twisted 	Keith Sweat",
"C'mon N' Ride It (The Train) 	Quad City DJ's",
"Missing 	Everything but the Girl",
"Ironic 	Alanis Morissette",
"Exhale (Shoop Shoop) 	Whitney Houston",
"Follow You Down / "Til I Hear It from You" 	Gin Blossoms",
"Sittin' Up in My Room 	Brandy",
"How Do U Want It / "California Love" 	2Pac featuring K-Ci & JoJo / featuring Dr. Dre",
"It's All Coming Back to Me Now 	Celine Dion",
"Change the World 	Eric Clapton",
"Hey Lover 	LL Cool J",
"Loungin 	LL Cool J",
"Insensitive 	Jann Arden",
"Be My Lover 	La Bouche",
"Name 	Goo Goo Dolls",
"Who Will Save Your Soul 	Jewel",
"Where Do You Go 	No Mercy",
"I Can't Sleep Baby (If I) 	R. Kelly",
"Counting Blue Cars 	Dishwalla",
"You Learn / "You Oughta Know" 	Alanis Morissette",
"One of Us 	Joan Osborne",
"Wonder 	Natalie Merchant",
"Not Gon' Cry 	Mary J. Blige",
"Gangsta's Paradise 	Coolio featuring L.V.",
"Only You 	112 featuring The Notorious B.I.G. and Mase",
"Down Low (Nobody Has to Know) 	R. Kelly featuring The Isley Brothers",
"You're the One 	SWV",
"Sweet Dreams 	La Bouche",
"Before You Walk Out of My Life / "Like This and Like That" 	Monica",
"Breakfast at Tiffany's 	Deep Blue Something",
"1, 2, 3, 4 (Sumpin' New) 	Coolio",
"The World I Know 	Collective Soul",
"No Diggity 	Blackstreet featuring Dr. Dre",
"Anything 	3T",
"1979	The Smashing Pumpkins",
"Diggin' on You 	TLC",
"Why I Love You So Much / "Ain't Nobody" 	Monica",
"Kissin' You 	Total",
"Count On Me 	Whitney Houston featuring CeCe Winans",
"Fantasy 	Mariah Carey",
"Time 	Hootie & the Blowfish",
"You'll See 	Madonna",
"Last Night 	Az Yet",
"Mouth 	Merril Bainbridge",
"The Earth, the Sun, the Rain 	Color Me Badd",
"All the Things (Your Man Won't Do) 	Joe",
"Wonderwall 	Oasis",
"Woo Hah!! Got You All in Check 	Busta Rhymes",
"Tell Me 	Groove Theory",
"Elevators (Me & You) 	Outkast",
"Hook 	Blues Traveler",
"Doin' It 	LL Cool J",
"Fastlove 	George Michael",
"Touch Me, Tease Me 	Case featuring Foxy Brown",
"Tonite's tha Night  	Kris Kross",
"Children 	Robert Miles",
"Theme from Mission: Impossible 	Adam Clayton and Larry Mullen",
"Closer to Free 	BoDeans",
"Just a Girl 	No Doubt",
"If Your Girl Only Knew 	Aaliyah",
"Lady 	D'Angelo",
"Key West Intermezzo (I Saw You First) 	John Mellencamp",
"Pony 	Ginuwine",
"Nobody 	Keith Sweat featuring Athena Cage",
"Old Man and Me (When I Get To Heaven) 	Hootie & the Blowfish",
"If It Makes You Happy 	Sheryl Crow",
"As I Lay Me Down 	Sophie B. Hawkins",
"Keep On, Keepin' On 	MC Lyte featuring Xscape",
"Jealousy 	Natalie Merchant",
"I Want to Come Over 	Melissa Etheridge",
"Who Do U Love 	Deborah Cox",
"Un-Break My Heart 	Toni Braxton",
"This Is Your Night 	Amber",
"You Remind Me of Something 	R. Kelly",
"Runaway 	Janet Jackson",
"Set U Free 	Planet Soul",
"Hit Me Off 	New Edition",
"No One Else 	Total",
"My Boo 	Ghost Town DJ's",
"Get Money 	Junior M.A.F.I.A. featuring The Notorious B.I.G.",
"That Girl 	Maxi Priest featuring Shaggy",
"Po Pimp 	Do or Die featuring Twista",
"Until It Sleeps 	Metallica",
"Hay 	Crucial Conflict",
"Beautiful Life 	Ace of Base",
"Back for Good 	Take That",
"I Got Id 	Pearl Jam",
"Soon as I Get Home 	Faith Evans",
"Macarena 	Los del Río",
"Only Wanna Be with You 	Hootie & the Blowfish",
"Don't Cry 	Seal",
"Divane	Yaşar",
"Bir Tanem 	Yaşar",
"Papatya	Teoman",
"İyisin	Zuhal Olcay",
"Hovarda	Emel Müftüoğlu",
"Beşinci Mevsim	Şebnem Paker",
"Güneşten Sıcak	Tuğçe San",
"Çalkala	Sezen Gürel",
"Sensiz Kaldım	Suat Suna",
"Esme Deli Rüzgar	Kubat",
"Kızancıklar	Grup Af",
"Edepsiz	Umay Umay",
"Seninle Olmak Var ya	Metin Özülkü",
"Herşeyden Çok	Kayahan",
"Artık Yeter	Grup Egoist",
"Firarım Ben	Sibel Alaş",
"Seni Yerler	Sezen Aksu",
"Yarası Saklım	Sezen Aksu",
"Aşk Herşeyi Affeder Mi	Özlem Tekin",
"Hicran	Ümit Sayın",
"Gönül Sarayım	Ümit Sayın",
"Özletme Beni	Ajda Pekkan",
"Kardelen	Fatih Erkoç",
"Yanarım	Zeynep",
"Hiç Bana Sordun Mu	Kenan Doğulu",
"Kağızman	Haluk Levent",
"Yüzleşme	Kargo",
"Gidenlerden	Mustafa Sandal",
"Bana Özel	Nazan Öncel",
"Tam ondört saat oldu	Ercan Saatçı",
"Uyku	Mor ve Ötesi",
"Dayan Yüreğim	Yıldız Tilbe",
"Be Adam	Gülşen",
"Aşk Belası	Gökhan Tepe",
"Beni Aldattın	Asya",
"Yaramaz	Gülben Ergen",
"Mor Dağlar	Erkan Oğur",
"Aşka Davet	Niran Ünsal",
"Komşu Kızı	Çelik",
"Yağmurlar	Şebnem Ferah",

 

    ];

var names = [

"Macarena (Bayside Boys Mix) ",
"One Sweet Day ",
"Because You Loved Me ",
"Nobody Knows ",
"Always Be My Baby ",
"Give Me One Reason ",
"Tha Crossroads ",
"I Love You Always Forever ",
"You're Makin' Me High / "Let It Flow" ",
"Twisted ",
"C'mon N' Ride It (The Train) ",
"Missing ",
"Ironic ",
"Exhale (Shoop Shoop) ",
"Follow You Down / "Til I Hear It from You" ",
"Sittin' Up in My Room ",
"How Do U Want It / "California Love" ",
"It's All Coming Back to Me Now ",
"Change the World ",
"Hey Lover ",
"Loungin ",
"Insensitive ",
"Be My Lover ",
"Name ",
"Who Will Save Your Soul ",
"Where Do You Go ",
"I Can't Sleep Baby (If I) ",
"Counting Blue Cars ",
"You Learn / "You Oughta Know" ",
"One of Us ",
"Wonder ",
"Not Gon' Cry ",
"Gangsta's Paradise ",
"Only You ",
"Down Low (Nobody Has to Know) ",
"You're the One ",
"Sweet Dreams ",
"Before You Walk Out of My Life / "Like This and Like That" ",
"Breakfast at Tiffany's ",
"1, 2, 3, 4 (Sumpin' New) ",
"The World I Know ",
"No Diggity ",
"Anything ",
"1979",
"Diggin' on You ",
"Why I Love You So Much / "Ain't Nobody" ",
"Kissin' You ",
"Count On Me ",
"Fantasy ",
"Time ",
"You'll See ",
"Last Night ",
"Mouth ",
"The Earth, the Sun, the Rain ",
"All the Things (Your Man Won't Do) ",
"Wonderwall ",
"Woo Hah!! Got You All in Check ",
"Tell Me ",
"Elevators (Me & You) ",
"Hook ",
"Doin' It ",
"Fastlove ",
"Touch Me, Tease Me ",
"Tonite's tha Night  ",
"Children ",
"Theme from Mission: Impossible ",
"Closer to Free ",
"Just a Girl ",
"If Your Girl Only Knew ",
"Lady ",
"Key West Intermezzo (I Saw You First) ",
"Pony ",
"Nobody ",
"Old Man and Me (When I Get To Heaven) ",
"If It Makes You Happy ",
"As I Lay Me Down ",
"Keep On, Keepin' On ",
"Jealousy ",
"I Want to Come Over ",
"Who Do U Love ",
"Un-Break My Heart ",
"This Is Your Night ",
"You Remind Me of Something ",
"Runaway ",
"Set U Free ",
"Hit Me Off ",
"No One Else ",
"My Boo ",
"Get Money ",
"That Girl ",
"Po Pimp ",
"Until It Sleeps ",
"Hay ",
"Beautiful Life ",
"Back for Good ",
"I Got Id ",
"Soon as I Get Home ",
"Macarena ",
"Only Wanna Be with You ",
"Don't Cry ",
"Divane",
"Bir Tanem ",
"Papatya",
"İyisin",
"Hovarda",
"Beşinci Mevsim",
"Güneşten Sıcak",
"Çalkala",
"Sensiz Kaldım",
"Esme Deli Rüzgar",
"Kızancıklar",
"Edepsiz",
"Seninle Olmak Var ya",
"Herşeyden Çok",
"Artık Yeter",
"Firarım Ben",
"Seni Yerler",
"Yarası Saklım",
"Aşk Herşeyi Affeder Mi",
"Hicran",
"Gönül Sarayım",
"Özletme Beni",
"Kardelen",
"Yanarım",
"Hiç Bana Sordun Mu",
"Kağızman",
"Yüzleşme",
"Gidenlerden",
"Bana Özel",
"Tam ondört saat oldu",
"Uyku",
"Dayan Yüreğim",
"Be Adam",
"Aşk Belası",
"Beni Aldattın",
"Yaramaz",
"Mor Dağlar",
"Aşka Davet",
"Komşu Kızı",
"Yağmurlar",




 ];

 var artist = [

"Los del Río",
"Mariah Carey and Boyz II Men",
"Celine Dion",
"The Tony Rich Project",
"Mariah Carey",
"Tracy Chapman",
"Bone Thugs-n-Harmony",
"Donna Lewis",
"Toni Braxton",
"Keith Sweat",
"Quad City DJ's",
"Everything but the Girl",
"Alanis Morissette",
"Whitney Houston",
"Gin Blossoms",
"Brandy",
"2Pac featuring K-Ci & JoJo / featuring Dr. Dre",
"Celine Dion",
"Eric Clapton",
"LL Cool J",
"LL Cool J",
"Jann Arden",
"La Bouche",
"Goo Goo Dolls",
"Jewel",
"No Mercy",
"R. Kelly",
"Dishwalla",
"Alanis Morissette",
"Joan Osborne",
"Natalie Merchant",
"Mary J. Blige",
"Coolio featuring L.V.",
"112 featuring The Notorious B.I.G. and Mase",
"R. Kelly featuring The Isley Brothers",
"SWV",
"La Bouche",
"Monica",
"Deep Blue Something",
"Coolio",
"Collective Soul",
"Blackstreet featuring Dr. Dre",
"3T",
"The Smashing Pumpkins",
"TLC",
"Monica",
"Total",
"Whitney Houston featuring CeCe Winans",
"Mariah Carey",
"Hootie & the Blowfish",
"Madonna",
"Az Yet",
"Merril Bainbridge",
"Color Me Badd",
"Joe",
"Oasis",
"Busta Rhymes",
"Groove Theory",
"Outkast",
"Blues Traveler",
"LL Cool J",
"George Michael",
"Case featuring Foxy Brown",
"Kris Kross",
"Robert Miles",
"Adam Clayton and Larry Mullen",
"BoDeans",
"No Doubt",
"Aaliyah",
"D'Angelo",
"John Mellencamp",
"Ginuwine",
"Keith Sweat featuring Athena Cage",
"Hootie & the Blowfish",
"Sheryl Crow",
"Sophie B. Hawkins",
"MC Lyte featuring Xscape",
"Natalie Merchant",
"Melissa Etheridge",
"Deborah Cox",
"Toni Braxton",
"Amber",
"R. Kelly",
"Janet Jackson",
"Planet Soul",
"New Edition",
"Total",
"Ghost Town DJ's",
"Junior M.A.F.I.A. featuring The Notorious B.I.G.",
"Maxi Priest featuring Shaggy",
"Do or Die featuring Twista",
"Metallica",
"Crucial Conflict",
"Ace of Base",
"Take That",
"Pearl Jam",
"Faith Evans",
"Los del Río",
"Hootie & the Blowfish",
"Seal",
"Yaşar",
"Yaşar",
"Teoman",
"Zuhal Olcay",
"Emel Müftüoğlu",
"Şebnem Paker",
"Tuğçe San",
"Sezen Gürel",
"Suat Suna",
"Kubat",
"Grup Af",
"Umay Umay",
"Metin Özülkü",
"Kayahan",
"Grup Egoist",
"Sibel Alaş",
"Sezen Aksu",
"Sezen Aksu",
"Özlem Tekin",
"Ümit Sayın",
"Ümit Sayın",
"Ajda Pekkan",
"Fatih Erkoç",
"Zeynep",
"Kenan Doğulu",
"Haluk Levent",
"Kargo",
"Mustafa Sandal",
"Nazan Öncel",
"Ercan Saatçı",
"Mor ve Ötesi",
"Yıldız Tilbe",
"Gülşen",
"Gökhan Tepe",
"Asya",
"Gülben Ergen",
"Erkan Oğur",
"Niran Ünsal",
"Çelik",
"Şebnem Ferah",




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
