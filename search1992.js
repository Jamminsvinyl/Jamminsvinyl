// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"End of the Road 	Boyz II Men",
"Baby Got Back 	Sir Mix-a-Lot",
"Jump 	Kris Kross",
"Save the Best for Last 	Vanessa Williams",
"Baby-Baby-Baby 	TLC",
"Tears in Heaven 	Eric Clapton",
"My Lovin' (You're Never Gonna Get It) 	En Vogue",
"Under the Bridge 	Red Hot Chili Peppers",
"All 4 Love 	Color Me Badd",
"Just Another Day 	Jon Secada",
"I Love Your Smile 	Shanice",
"To Be with You 	Mr. Big",
"I'm Too Sexy 	Right Said Fred",
"Black or White 	Michael Jackson",
"Achy Breaky Heart 	Billy Ray Cyrus",
"I'll Be There 	Mariah Carey",
"November Rain 	Guns N' Roses",
"Life Is a Highway 	Tom Cochrane",
"Remember the Time 	Michael Jackson",
"Finally 	CeCe Peniston",
"This Used to Be My Playground 	Madonna",
"Sometimes Love Just Ain't Enough 	Patty Smyth",
"Can't Let Go 	Mariah Carey",
"Jump Around 	House of Pain",
"Diamonds and Pearls 	Prince and The New Power Generation",
"Don't Let the Sun Go Down on Me 	George Michael and Elton John",
"Masterpiece 	Atlantic Starr",
"If You Asked Me To 	Celine Dion",
"Giving Him Something He Can Feel 	En Vogue",
"Live and Learn 	Joe Public",
"Come and Talk to Me 	Jodeci",
"Smells Like Teen Spirit 	Nirvana",
"Humpin' Around 	Bobby Brown",
"Damn I Wish I Was Your Lover 	Sophie B. Hawkins",
"Tell Me What You Want Me to Do 	Tevin Campbell",
"Ain't 2 Proud 2 Beg 	TLC",
"It's So Hard to Say Goodbye to Yesterday 	Boyz II Men",
"Move This 	Technotronic featuring Ya Kid K",
"Bohemian Rhapsody 	Queen",
"Tennessee 	Arrested Development",
"The Best Things in Life Are Free 	Luther Vandross and Janet Jackson",
"Make It Happen 	Mariah Carey",
"The One 	Elton John",
"Set Adrift on Memory Bliss 	P.M. Dawn",
"Stay 	Shakespears Sister",
"2 Legit 2 Quit 	Hammer",
"Please Don't Go 	KWS",
"Breakin' My Heart (Pretty Brown Eyes) 	Mint Condition",
"Wishing on a Star 	The Cover Girls",
"She's Playing Hard to Get 	Hi-Five",
"I'd Die Without You 	P.M. Dawn",
"Good for Me 	Amy Grant",
"All I Want 	Toad the Wet Sprocket",
"When a Man Loves a Woman 	Michael Bolton",
"I Can't Dance 	Genesis",
"Hazard 	Richard Marx",
"Mysterious Ways 	U2",
"Too Funky 	George Michael",
"How Do You Talk to an Angel 	The Heights",
"One 	U2",
"Keep on Walkin' 	CeCe Peniston",
"Hold on My Heart 	Genesis",
"The Way I Feel About You 	Karyn White",
"Beauty and the Beast 	Celine Dion and Peabo Bryson",
"Warm It Up 	Kris Kross",
"In the Closet 	Michael Jackson",
"People Everyday 	Arrested Development",
"No Son of Mine 	Genesis",
"Wildside 	Marky Mark and the Funky Bunch",
"Do I Have to Say the Words? 	Bryan Adams",
"Friday I'm in Love 	The Cure",
"Everything About You 	Ugly Kid Joe",
"Blowing Kisses in the Wind 	Paula Abdul",
"Thought I'd Died and Gone to Heaven 	Bryan Adams",
"Rhythm Is a Dancer 	Snap!",
"Addams Groove 	Hammer",
"Missing You Now 	Michael Bolton",
"Back to the Hotel 	N2Deep",
"Everything Changes 	Kathy Troccoli",
"Have You Ever Needed Someone So Bad 	Def Leppard",
"Take This Heart 	Richard Marx",
"When I Look Into Your Eyes 	FireHouse",
"I Wanna Love You 	Jade",
"Uhh Ahh 	Boyz II Men",
"Real Love 	Mary J. Blige",
"Justified and Ancient 	The KLF",
"Slow Motion 	Color Me Badd",
"What About Your Friends 	TLC",
"Thinkin' Back 	Color Me Badd",
"Would I Lie to You? 	Charles & Eddie",
"That's What Love Is For 	Amy Grant",
"Keep Coming Back 	Richard Marx",
"Free Your Mind 	En Vogue",
"Keep It Comin' 	Keith Sweat",
"Just Take My Heart 	Mr. Big",
"I Will Remember You 	Amy Grant",
"We Got a Love Thang 	CeCe Peniston",
"Let's Get Rocked 	Def Leppard",
"They Want EFX 	Das EFX",
"I Can't Make You Love Me 	Bonnie Raitt",
"Yine bir gülnihal	Barış Manço",
"Sende Başını Alıp Gitme	Cem Karaca",
"Blossom	Okay Temiz",
"Şarkılar Seni Söyler	Sibel Egemen",
"Sensiz Yıllarda	Ajda Pekkan",
"Sensiz Bitmesin	Gülden Karaböcek",
"Korkuyorum	Özcan Deniz",
"Oynatmaya az kaldı	Fatih Erkoç",
"Ellerim Bomboş	Fatih Erkoç",
"Haberin var mı	Emel Sayın",
"Çektir Git	Mavi Sakal",
"Yaz bitti	Aylin Vatankoş",
"Daima	İlhan irem",
"Yedikule	Yeni Türkü",
"Aşk Yeniden	Yeni Türkü",
"Hadi Git	Aşkın Nur Yengi",
"Eller Havaya	İzel Ercan",
"Kavak Yelleri	Nilüfer",
"Yalnızlık Senfonisi 	Sertab Erener",
"Sen Türküler Söyle	Soner Arıca",
"Kıl Oldum	Tarkan",
"Vazgeçmem	Tarkan",
"Devlerin Aşkı	Seden Gürel",
"Beni Bağlamaz	Sibel Tüzün",
"Dibi dibi dah	Rana Selçuk Alagöz",
"Sevemem	Erol Büyükburç",
"Sakın Sanma	Füsun Önal",
"Gitme Kal Bu Şehirde	Nazan Öncel",
"Seni Bana Yazmışlar	Oya Bora",
"Dönmem Yolumdan	MFÖ",
"Tatlı Tatlı	Nil Burak",
"Faka Bastın	Emel Müftüoğlu",
"Ne Çok Sevmişim Seni 	Tanju Okan",
"Odalarda Işıksızım	Kayahan",
"Beni anlamadın ya	Kayahan",
"Hadi yine iyisin	Tayfun",

 

    ];

var names = [

"End of the Road ",
"Baby Got Back ",
"Jump ",
"Save the Best for Last ",
"Baby-Baby-Baby ",
"Tears in Heaven ",
"My Lovin' (You're Never Gonna Get It) ",
"Under the Bridge ",
"All 4 Love ",
"Just Another Day ",
"I Love Your Smile ",
"To Be with You ",
"I'm Too Sexy ",
"Black or White ",
"Achy Breaky Heart ",
"I'll Be There ",
"November Rain ",
"Life Is a Highway ",
"Remember the Time ",
"Finally ",
"This Used to Be My Playground ",
"Sometimes Love Just Ain't Enough ",
"Can't Let Go ",
"Jump Around ",
"Diamonds and Pearls ",
"Don't Let the Sun Go Down on Me ",
"Masterpiece ",
"If You Asked Me To ",
"Giving Him Something He Can Feel ",
"Live and Learn ",
"Come and Talk to Me ",
"Smells Like Teen Spirit ",
"Humpin' Around ",
"Damn I Wish I Was Your Lover ",
"Tell Me What You Want Me to Do ",
"Ain't 2 Proud 2 Beg ",
"It's So Hard to Say Goodbye to Yesterday ",
"Move This ",
"Bohemian Rhapsody ",
"Tennessee ",
"The Best Things in Life Are Free ",
"Make It Happen ",
"The One ",
"Set Adrift on Memory Bliss ",
"Stay ",
"2 Legit 2 Quit ",
"Please Don't Go ",
"Breakin' My Heart (Pretty Brown Eyes) ",
"Wishing on a Star ",
"She's Playing Hard to Get ",
"I'd Die Without You ",
"Good for Me ",
"All I Want ",
"When a Man Loves a Woman ",
"I Can't Dance ",
"Hazard ",
"Mysterious Ways ",
"Too Funky ",
"How Do You Talk to an Angel ",
"One ",
"Keep on Walkin' ",
"Hold on My Heart ",
"The Way I Feel About You ",
"Beauty and the Beast ",
"Warm It Up ",
"In the Closet ",
"People Everyday ",
"No Son of Mine ",
"Wildside ",
"Do I Have to Say the Words? ",
"Friday I'm in Love ",
"Everything About You ",
"Blowing Kisses in the Wind ",
"Thought I'd Died and Gone to Heaven ",
"Rhythm Is a Dancer ",
"Addams Groove ",
"Missing You Now ",
"Back to the Hotel ",
"Everything Changes ",
"Have You Ever Needed Someone So Bad ",
"Take This Heart ",
"When I Look Into Your Eyes ",
"I Wanna Love You ",
"Uhh Ahh ",
"Real Love ",
"Justified and Ancient ",
"Slow Motion ",
"What About Your Friends ",
"Thinkin' Back ",
"Would I Lie to You? ",
"That's What Love Is For ",
"Keep Coming Back ",
"Free Your Mind ",
"Keep It Comin' ",
"Just Take My Heart ",
"I Will Remember You ",
"We Got a Love Thang ",
"Let's Get Rocked ",
"They Want EFX ",
"I Can't Make You Love Me ",
"Yine bir gülnihal",
"Sende Başını Alıp Gitme",
"Blossom",
"Şarkılar Seni Söyler",
"Sensiz Yıllarda",
"Sensiz Bitmesin",
"Korkuyorum",
"Oynatmaya az kaldı",
"Ellerim Bomboş",
"Haberin var mı",
"Çektir Git",
"Yaz bitti",
"Daima",
"Yedikule",
"Aşk Yeniden",
"Hadi Git",
"Eller Havaya",
"Kavak Yelleri",
"Yalnızlık Senfonisi ",
"Sen Türküler Söyle",
"Kıl Oldum",
"Vazgeçmem",
"Devlerin Aşkı",
"Beni Bağlamaz",
"Dibi dibi dah",
"Sevemem",
"Sakın Sanma",
"Gitme Kal Bu Şehirde",
"Seni Bana Yazmışlar",
"Dönmem Yolumdan",
"Tatlı Tatlı",
"Faka Bastın",
"Ne Çok Sevmişim Seni ",
"Odalarda Işıksızım",
"Beni anlamadın ya",
"Hadi yine iyisin",




 ];

 var artist = [

"Boyz II Men",
"Sir Mix-a-Lot",
"Kris Kross",
"Vanessa Williams",
"TLC",
"Eric Clapton",
"En Vogue",
"Red Hot Chili Peppers",
"Color Me Badd",
"Jon Secada",
"Shanice",
"Mr. Big",
"Right Said Fred",
"Michael Jackson",
"Billy Ray Cyrus",
"Mariah Carey",
"Guns N' Roses",
"Tom Cochrane",
"Michael Jackson",
"CeCe Peniston",
"Madonna",
"Patty Smyth",
"Mariah Carey",
"House of Pain",
"Prince and The New Power Generation",
"George Michael and Elton John",
"Atlantic Starr",
"Celine Dion",
"En Vogue",
"Joe Public",
"Jodeci",
"Nirvana",
"Bobby Brown",
"Sophie B. Hawkins",
"Tevin Campbell",
"TLC",
"Boyz II Men",
"Technotronic featuring Ya Kid K",
"Queen",
"Arrested Development",
"Luther Vandross and Janet Jackson",
"Mariah Carey",
"Elton John",
"P.M. Dawn",
"Shakespears Sister",
"Hammer",
"KWS",
"Mint Condition",
"The Cover Girls",
"Hi-Five",
"P.M. Dawn",
"Amy Grant",
"Toad the Wet Sprocket",
"Michael Bolton",
"Genesis",
"Richard Marx",
"U2",
"George Michael",
"The Heights",
"U2",
"CeCe Peniston",
"Genesis",
"Karyn White",
"Celine Dion and Peabo Bryson",
"Kris Kross",
"Michael Jackson",
"Arrested Development",
"Genesis",
"Marky Mark and the Funky Bunch",
"Bryan Adams",
"The Cure",
"Ugly Kid Joe",
"Paula Abdul",
"Bryan Adams",
"Snap!",
"Hammer",
"Michael Bolton",
"N2Deep",
"Kathy Troccoli",
"Def Leppard",
"Richard Marx",
"FireHouse",
"Jade",
"Boyz II Men",
"Mary J. Blige",
"The KLF",
"Color Me Badd",
"TLC",
"Color Me Badd",
"Charles & Eddie",
"Amy Grant",
"Richard Marx",
"En Vogue",
"Keith Sweat",
"Mr. Big",
"Amy Grant",
"CeCe Peniston",
"Def Leppard",
"Das EFX",
"Bonnie Raitt",
"Barış Manço",
"Cem Karaca",
"Okay Temiz",
"Sibel Egemen",
"Ajda Pekkan",
"Gülden Karaböcek",
"Özcan Deniz",
"Fatih Erkoç",
"Fatih Erkoç",
"Emel Sayın",
"Mavi Sakal",
"Aylin Vatankoş",
"İlhan irem",
"Yeni Türkü",
"Yeni Türkü",
"Aşkın Nur Yengi",
"İzel Ercan",
"Nilüfer",
"Sertab Erener",
"Soner Arıca",
"Tarkan",
"Tarkan",
"Seden Gürel",
"Sibel Tüzün",
"Rana Selçuk Alagöz",
"Erol Büyükburç",
"Füsun Önal",
"Nazan Öncel",
"Oya Bora",
"MFÖ",
"Nil Burak",
"Emel Müftüoğlu",
"Tanju Okan",
"Kayahan",
"Kayahan",
"Tayfun",




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
