// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"I Will Always Love You 	Whitney Houston",
"Whoomp! (There It Is) 	Tag Team",
"Can't Help Falling in Love 	UB40",
"That's the Way Love Goes 	Janet Jackson",
"Freak Me 	Silk",
"Weak 	SWV",
"If I Ever Fall in Love 	Shai",
"Dreamlover 	Mariah Carey",
"Rump Shaker 	Wreckx-n-Effect",
"Informer 	Snow",
"Nuthin' but a 'G' Thang 	Dr. Dre",
"In the Still of the Nite 	Boyz II Men",
"Don't Walk Away 	Jade",
"Knockin' da Boots 	H-Town",
"Lately 	Jodeci",
"Dazzey Duks 	Duice",
"Show Me Love 	Robin S.",
"A Whole New World 	Peabo Bryson and Regina Belle",
"If 	Janet Jackson",
"I'm So Into You 	SWV",
"Love Is 	Vanessa Williams and Brian McKnight",
"Runaway Train 	Soul Asylum",
"I'll Never Get Over You (Getting Over Me) 	Exposé",
"Ditty 	Paperboy",
"Rhythm Is a Dancer 	Snap!",
"The River of Dreams 	Billy Joel",
"I'm Gonna Be (500 Miles) 	The Proclaimers",
"Two Princes 	Spin Doctors",
"Right Here 	SWV",
"I Have Nothing 	Whitney Houston",
"Mr. Wendal 	Arrested Development",
"Have I Told You Lately 	Rod Stewart",
"Saving Forever for You 	Shanice",
"Ordinary World 	Duran Duran",
"If I Had No Loot 	Tony! Toni! Toné!",
"I'd Do Anything for Love (But I Won't Do That) 	Meat Loaf",
"Slam 	Onyx",
"Looking Through Patient Eyes 	P.M. Dawn",
"I'm Every Woman 	Whitney Houston",
"Baby I'm Yours 	Shai",
"Come Undone 	Duran Duran",
"I Don't Wanna Fight 	Tina Turner",
"I'd Die Without You 	P.M. Dawn",
"Whoot, There It Is 	95 South",
"Hip Hop Hooray 	Naughty by Nature",
"Another Sad Love Song 	Toni Braxton",
"Will You Be There 	Michael Jackson",
"Comforter 	Shai",
"Good Enough 	Bobby Brown",
"What's Up? 	4 Non Blondes",
"All That She Wants 	Ace of Base",
"7	Prince and The New Power Generation",
"Dre Day 	Dr. Dre featuring Snoop Doggy Dogg",
"One Last Cry 	Brian McKnight",
"Just Kickin' It 	Xscape",
"I Get Around 	2Pac",
"Bed of Roses 	Bon Jovi",
"Real Love 	Mary J. Blige",
"Here We Go Again! 	Portrait",
"Cryin' 	Aerosmith",
"Cat's in the Cradle 	Ugly Kid Joe",
"What About Your Friends 	TLC",
"I Got a Man 	Positive K",
"Hey Mr. D.J. 	Zhané",
"Insane in the Brain 	Cypress Hill",
"Deeper and Deeper 	Madonna",
"Rain 	Madonna",
"The Right Kind of Love 	Jeremy Jordan",
"Bad Boys 	Inner Circle",
"That's What Love Can Do 	Boy Krazy",
"Do You Believe in Us 	Jon Secada",
"Angel 	Jon Secada",
"Forever in Love 	Kenny G",
"Again 	Janet Jackson",
"Boom! Shake the Room 	DJ Jazzy Jeff & The Fresh Prince",
"When She Cries 	Restless Heart",
"Sweat (A La La La La Long) 	Inner Circle",
"It Was a Good Day 	Ice Cube",
"More and More 	Captain Hollywood Project",
"How Do You Talk to an Angel 	The Heights",
"Rebirth of Slick (Cool Like Dat) 	Digable Planets",
"What Is Love 	Haddaway",
"To Love Somebody 	Michael Bolton",
"Give It Up, Turn It Loose 	En Vogue",
"Alright 	Kris Kross",
"Check Yo Self 	Ice Cube featuring Das EFX",
"Fields of Gold 	Sting",
"O-o-h Child 	Dino",
"Faithful 	Go West",
"Reason to Believe 	Rod Stewart",
"Break It Down Again 	Tears for Fears",
"Nothin' My Love Can't Fix 	Joey Lawrence",
"Three Little Pigs 	Green Jellÿ",
"Livin' on the Edge 	Aerosmith",
"Hey Jealousy 	Gin Blossoms",
"If I Ever Lose My Faith in You 	Sting",
"Anniversary 	Tony! Toni! Toné!",
"One Woman 	Jade",
"Can't Get Enough of Your Love 	Taylor Dayne",
"Two Steps Behind 	Def Leppard",
"Akdeniz Akşamları	Haluk Levent",
"Kimdi	Tarkan",
"Efulim	Volkan Konak",
"Meleğim	Özcan Deniz",
"Sıramı bekliyorum	Aşkın Nur Yengi",
"Nerde	Deniz Arcak",
"Ay Karanlık	Edip Akbayram",
"Ankaradan Abim Geldi	Grup Gündoğarken",
"Esmer Yarim 	Burak Aydos",
"Sardunya	Ezginin Günlüğü",
"Veresiye Olmaz	Reyhan Karaca",
"Tanıma beni	Ferda Anıl Yarkın",
"Pıtı pıtı	Fatih Erkoç",
"Amma Velakin	Hakan Peker",
"Köylü Güzeli	Hakan Peker",
"Diyemedim	Zafer Peker",
"Bırak herşeyi	Zuhal Olcay",
"Ansızın çekip gittin	Suat Suna",
"Yeterki Onursuz Olmasın Aşk	Levent Yüksel",
"Tuana	Levent Yüksel",
"Son sigara	Yeşim Salkım",
"Keman Öğretmeni	Özdemir Erdoğan",
"Demir Attım	Ebru Gündeş",
"Tanrı misafiri	Ebru Gündeş",
"Saat 4 yoksun	Zülfü Livaneli",
"Kendine Gel	Yonca Evcimik",
"Ağlayayım mı	Bendeniz",
"Elimde değil	Bendeniz Harun Kolçak",
"Yaparım bilirsin	Kenan Doğulu",
"Sen yanımda olmayınca	Kargo",
"Alev alev	Ayşegül Aldinç",
"Sevdan Bir Ateş	Düş Sokağı Sakinleri",
"Kırk yıllık kani	Seyyal Taner",
"Sabahlar Uzak	Kayahan",
"Başkasını Tanımam	Ajda Pekkan",
"Elmanın Yarısı	Kayahan",

 

    ];

var names = [

"I Will Always Love You ",
"Whoomp! (There It Is) ",
"Can't Help Falling in Love ",
"That's the Way Love Goes ",
"Freak Me ",
"Weak ",
"If I Ever Fall in Love ",
"Dreamlover ",
"Rump Shaker ",
"Informer ",
"Nuthin' but a 'G' Thang ",
"In the Still of the Nite ",
"Don't Walk Away ",
"Knockin' da Boots ",
"Lately ",
"Dazzey Duks ",
"Show Me Love ",
"A Whole New World ",
"If ",
"I'm So Into You ",
"Love Is ",
"Runaway Train ",
"I'll Never Get Over You (Getting Over Me) ",
"Ditty ",
"Rhythm Is a Dancer ",
"The River of Dreams ",
"I'm Gonna Be (500 Miles) ",
"Two Princes ",
"Right Here ",
"I Have Nothing ",
"Mr. Wendal ",
"Have I Told You Lately ",
"Saving Forever for You ",
"Ordinary World ",
"If I Had No Loot ",
"I'd Do Anything for Love (But I Won't Do That) ",
"Slam ",
"Looking Through Patient Eyes ",
"I'm Every Woman ",
"Baby I'm Yours ",
"Come Undone ",
"I Don't Wanna Fight ",
"I'd Die Without You ",
"Whoot, There It Is ",
"Hip Hop Hooray ",
"Another Sad Love Song ",
"Will You Be There ",
"Comforter ",
"Good Enough ",
"What's Up? ",
"All That She Wants ",
"7",
"Dre Day ",
"One Last Cry ",
"Just Kickin' It ",
"I Get Around ",
"Bed of Roses ",
"Real Love ",
"Here We Go Again! ",
"Cryin' ",
"Cat's in the Cradle ",
"What About Your Friends ",
"I Got a Man ",
"Hey Mr. D.J. ",
"Insane in the Brain ",
"Deeper and Deeper ",
"Rain ",
"The Right Kind of Love ",
"Bad Boys ",
"That's What Love Can Do ",
"Do You Believe in Us ",
"Angel ",
"Forever in Love ",
"Again ",
"Boom! Shake the Room ",
"When She Cries ",
"Sweat (A La La La La Long) ",
"It Was a Good Day ",
"More and More ",
"How Do You Talk to an Angel ",
"Rebirth of Slick (Cool Like Dat) ",
"What Is Love ",
"To Love Somebody ",
"Give It Up, Turn It Loose ",
"Alright ",
"Check Yo Self ",
"Fields of Gold ",
"O-o-h Child ",
"Faithful ",
"Reason to Believe ",
"Break It Down Again ",
"Nothin' My Love Can't Fix ",
"Three Little Pigs ",
"Livin' on the Edge ",
"Hey Jealousy ",
"If I Ever Lose My Faith in You ",
"Anniversary ",
"One Woman ",
"Can't Get Enough of Your Love ",
"Two Steps Behind ",
"Akdeniz Akşamları",
"Kimdi",
"Efulim",
"Meleğim",
"Sıramı bekliyorum",
"Nerde",
"Ay Karanlık",
"Ankaradan Abim Geldi",
"Esmer Yarim ",
"Sardunya",
"Veresiye Olmaz",
"Tanıma beni",
"Pıtı pıtı",
"Amma Velakin",
"Köylü Güzeli",
"Diyemedim",
"Bırak herşeyi",
"Ansızın çekip gittin",
"Yeterki Onursuz Olmasın Aşk",
"Tuana",
"Son sigara",
"Keman Öğretmeni",
"Demir Attım",
"Tanrı misafiri",
"Saat 4 yoksun",
"Kendine Gel",
"Ağlayayım mı",
"Elimde değil",
"Yaparım bilirsin",
"Sen yanımda olmayınca",
"Alev alev",
"Sevdan Bir Ateş",
"Kırk yıllık kani",
"Sabahlar Uzak",
"Başkasını Tanımam",
"Elmanın Yarısı",




 ];

 var artist = [

"Whitney Houston",
"Tag Team",
"UB40",
"Janet Jackson",
"Silk",
"SWV",
"Shai",
"Mariah Carey",
"Wreckx-n-Effect",
"Snow",
"Dr. Dre",
"Boyz II Men",
"Jade",
"H-Town",
"Jodeci",
"Duice",
"Robin S.",
"Peabo Bryson and Regina Belle",
"Janet Jackson",
"SWV",
"Vanessa Williams and Brian McKnight",
"Soul Asylum",
"Exposé",
"Paperboy",
"Snap!",
"Billy Joel",
"The Proclaimers",
"Spin Doctors",
"SWV",
"Whitney Houston",
"Arrested Development",
"Rod Stewart",
"Shanice",
"Duran Duran",
"Tony! Toni! Toné!",
"Meat Loaf",
"Onyx",
"P.M. Dawn",
"Whitney Houston",
"Shai",
"Duran Duran",
"Tina Turner",
"P.M. Dawn",
"95 South",
"Naughty by Nature",
"Toni Braxton",
"Michael Jackson",
"Shai",
"Bobby Brown",
"4 Non Blondes",
"Ace of Base",
"Prince and The New Power Generation",
"Dr. Dre featuring Snoop Doggy Dogg",
"Brian McKnight",
"Xscape",
"2Pac",
"Bon Jovi",
"Mary J. Blige",
"Portrait",
"Aerosmith",
"Ugly Kid Joe",
"TLC",
"Positive K",
"Zhané",
"Cypress Hill",
"Madonna",
"Madonna",
"Jeremy Jordan",
"Inner Circle",
"Boy Krazy",
"Jon Secada",
"Jon Secada",
"Kenny G",
"Janet Jackson",
"DJ Jazzy Jeff & The Fresh Prince",
"Restless Heart",
"Inner Circle",
"Ice Cube",
"Captain Hollywood Project",
"The Heights",
"Digable Planets",
"Haddaway",
"Michael Bolton",
"En Vogue",
"Kris Kross",
"Ice Cube featuring Das EFX",
"Sting",
"Dino",
"Go West",
"Rod Stewart",
"Tears for Fears",
"Joey Lawrence",
"Green Jellÿ",
"Aerosmith",
"Gin Blossoms",
"Sting",
"Tony! Toni! Toné!",
"Jade",
"Taylor Dayne",
"Def Leppard",
"Haluk Levent",
"Tarkan",
"Volkan Konak",
"Özcan Deniz",
"Aşkın Nur Yengi",
"Deniz Arcak",
"Edip Akbayram",
"Grup Gündoğarken",
"Burak Aydos",
"Ezginin Günlüğü",
"Reyhan Karaca",
"Ferda Anıl Yarkın",
"Fatih Erkoç",
"Hakan Peker",
"Hakan Peker",
"Zafer Peker",
"Zuhal Olcay",
"Suat Suna",
"Levent Yüksel",
"Levent Yüksel",
"Yeşim Salkım",
"Özdemir Erdoğan",
"Ebru Gündeş",
"Ebru Gündeş",
"Zülfü Livaneli",
"Yonca Evcimik",
"Bendeniz",
"Bendeniz Harun Kolçak",
"Kenan Doğulu",
"Kargo",
"Ayşegül Aldinç",
"Düş Sokağı Sakinleri",
"Seyyal Taner",
"Kayahan",
"Ajda Pekkan",
"Kayahan",




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
