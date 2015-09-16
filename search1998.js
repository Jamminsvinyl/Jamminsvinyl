// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Too Close 	Next",
"The Boy Is Mine 	Brandy and Monica",
"You're Still the One 	Shania Twain",
"Truly Madly Deeply 	Savage Garden",
"How Do I Live 	LeAnn Rimes",
"Together Again 	Janet",
"All My Life 	K-Ci & JoJo",
"Candle in the Wind 1997 	Elton John",
"Nice and Slow 	Usher",
"I Don't Want to Wait 	Paula Cole",
"How's It Going to Be 	Third Eye Blind",
"No, No, No 	Destiny's Child",
"My Heart Will Go On 	Celine Dion",
"Gettin' Jiggy wit It 	Will Smith",
"You Make Me Wanna 	Usher",
"My Way 	Usher",
"My All 	Mariah Carey",
"The First Night 	Monica",
"Been Around the World 	Puff Daddy featuring The Notorious B.I.G. and Mase",
"Adia 	Sarah McLachlan",
"Crush 	Jennifer Paige",
"Everybody (Backstreet's Back) 	Backstreet Boys",
"I Don't Want to Miss a Thing 	Aerosmith",
"Body Bumpin' (Yippie-Yi-Yo) 	Public Announcement",
"This Kiss 	Faith Hill",
"I Don't Ever Want to See You Again 	Uncle Sam",
"Let's Ride 	Montell Jordan featuring Master P and Silkk the Shocker",
"Sex and Candy 	Marcy Playground",
"Show Me Love 	Robyn",
"A Song for Mama 	Boyz II Men",
"What You Want 	Mase featuring Total",
"Frozen 	Madonna",
"Gone till November 	Wyclef Jean",
"My Body 	LSG",
"Tubthumping 	Chumbawamba",
"Deja Vu (Uptown Baby) 	Lord Tariq and Peter Gunz",
"I Want You Back 	'N Sync",
"When the Lights Go Out 	Five",
"They Don't Know 	Jon B.",
"Make 'Em Say Uhh! 	Master P featuring Fiend, Silkk the Shocker, Mia X and Mystikal",
"Make It Hot 	Nicole featuring Missy Elliott and Mocha",
"Never Ever 	All Saints",
"I Get Lonely 	Janet Jackson featuring Blackstreet",
"Feel So Good 	Mase featuring Kelly Price",
"Say It 	Voices of Theory",
"Kiss the Rain 	Billie Myers",
"Come with Me 	Puff Daddy featuring Jimmy Page",
"Romeo and Juliet 	Sylk-E. Fyne featuring Chill",
"It's All About Me 	Mýa and Sisqo",
"I Will Come to You 	Hanson",
"One Week 	Barenaked Ladies",
"Swing My Way 	K. P. & Envyi",
"The Arms of the One Who Loves You 	Xscape",
"My Love is the SHHH! 	Somethin' for the People",
"Daydreamin' 	Tatyana Ali",
"We're Not Making Love No More 	Dru Hill",
"Semi-Charmed Life 	Third Eye Blind",
"I Do 	Lisa Loeb",
"Lookin' at Me 	Mase featuring Puff Daddy",
"Looking Through Your Eyes 	LeAnn Rimes",
"Lately 	Divine",
"Quit Playing Games (With My Heart) 	Backstreet Boys",
"I Still Love You 	Next",
"Time After Time 	INOJ",
"Are You Jimmy Ray? 	Jimmy Ray",
"Cruel Summer 	Ace of Base",
"I Got the Hook Up 	Master P featuring Sons of Funk",
"Victory 	Puff Daddy featuring The Notorious B.I.G. and Busta Rhymes",
"Too Much 	Spice Girls",
"Ghetto Supastar (That Is What You Are) 	Pras Michel featuring Ol' Dirty Bastard and Mýa",
"How Deep Is Your Love 	Dru Hill featuring Redman",
"Friend of Mine 	Kelly Price featuring R. Kelly and Ron Isley",
"Turn It Up (Remix)/Fire It Up 	Busta Rhymes",
"I'll Be 	Edwin McCain",
"Ray of Light 	Madonna",
"All for You 	Sister Hazel",
"Touch It 	Monifah",
"Money, Power & Respect 	The LOX featuring DMX and Lil' Kim",
"Bitter Sweet Symphony 	The Verve",
"Dangerous 	Busta Rhymes",
"Spice Up Your Life 	Spice Girls",
"Because of You 	98 Degrees",
"The Mummers' Dance 	Loreena McKennitt",
"All Cried Out 	Allure featuring 112",
"Still Not a Player 	Big Pun featuring Joe",
"The One I Gave My Heart To 	Aaliyah",
"Foolish Games / You Were Meant for Me 	Jewel",
"Love You Down 	INOJ",
"Do for Love 	2Pac featuring Eric Williams",
"Raise the Roof 	Luke featuring No Good But So Good",
"Heaven 	Nu Flavor",
"The Party Continues 	Jermaine Dupri featuring Da Brat and Usher",
"Sock It 2 Me 	Missy Elliott featuring Da Brat",
"Butta Love 	Next",
"A Rose Is Still a Rose 	Aretha Franklin",
"4 Seasons of Loneliness 	Boyz II Men",
"Father 	LL Cool J",
"Thinkin' Bout It 	Gerald Levert",
"Nobody's Supposed to Be Here 	Deborah Cox",
"Westside 	TQ",
"Ben Kızın Değil Miydim	Bendeniz",
"Rüzgar	Grup Gündoğarken",
"Mavi Duvar	Haramiler",
"Sevemem	Hüner Coşkuner Erol Büyükburç",
"Bu Şehirde	Çelik",
"Sürünüyorum	Harika Avcı",
"Daşların Kadını	Kıraç",
"İmkansız Aşk	Levent Yüksel",
"Sen Allahın Bir Lutfusun	Ebru Gündeş",
"Bunun Adına Yürek Derler	Doğuş",
"Ayrılık	Haluk Levent",
"Elveda 	Metin Arolat",
"Çoban Yıldızı	Özcan Deniz",
"Yalanmış	Ömür Göksel",
"Sende Vur	Burcu Güneş",
"Bahar	Özlem Tekin",
"Çok Ayıp	Sibel Alaş",
"Mihriban	Şükriye Tutkun",
"Hayat Buysa Ben Yokum Bu Yolda	Sibel Tüzün",
"Ah Bir Joker	Mirkelam",
"Yok Diyemem	Sinan Özen",
"Tutuklu	Sezen Aksu",
"Adı Bende Saklı	Sezen Aksu",
"Zeynep	Erkan Oğur",
"Kardelen	Teoman",
"Belalım Benim	Emrah",
"Affetmem	Rafet El Roman",
"Leyla	Rafet El Roman",
"Tempo 	Tuğçe San",
"Tanrım	Rober Hatemo",
"Bekar Gezelim	Grup Kent Ozanları",
"Yanarım	Zeynep",
"Normal	Bülent Ortaçgil",
"Bekletme	Pınar Aylin",
"Kandil	Ferdi Özbeğen",
"İstanbul Yedi tepe	Yeşim Salkım",
"Tatlı Kaçık	Yonca Evcimik",
"Salla Gitsin Dertlerini	Yıldız Tilbe",
"Sebepsiz Fırtına	Yaşar",
"Holigan	Athena",
"Onlar Yanlış Biliyor	Candan Erçetin",
"Bir Vurgun Bu Sevda	Demet Sağıroğlu",
"Başıma Bela Mısın	Bora Öztoprak",
"Cilveloy	Destan",

 

    ];

var names = [

"Too Close ",
"The Boy Is Mine ",
"You're Still the One ",
"Truly Madly Deeply ",
"How Do I Live ",
"Together Again ",
"All My Life ",
"Candle in the Wind 1997 ",
"Nice and Slow ",
"I Don't Want to Wait ",
"How's It Going to Be ",
"No, No, No ",
"My Heart Will Go On ",
"Gettin' Jiggy wit It ",
"You Make Me Wanna ",
"My Way ",
"My All ",
"The First Night ",
"Been Around the World ",
"Adia ",
"Crush ",
"Everybody (Backstreet's Back) ",
"I Don't Want to Miss a Thing ",
"Body Bumpin' (Yippie-Yi-Yo) ",
"This Kiss ",
"I Don't Ever Want to See You Again ",
"Let's Ride ",
"Sex and Candy ",
"Show Me Love ",
"A Song for Mama ",
"What You Want ",
"Frozen ",
"Gone till November ",
"My Body ",
"Tubthumping ",
"Deja Vu (Uptown Baby) ",
"I Want You Back ",
"When the Lights Go Out ",
"They Don't Know ",
"Make 'Em Say Uhh! ",
"Make It Hot ",
"Never Ever ",
"I Get Lonely ",
"Feel So Good ",
"Say It ",
"Kiss the Rain ",
"Come with Me ",
"Romeo and Juliet ",
"It's All About Me ",
"I Will Come to You ",
"One Week ",
"Swing My Way ",
"The Arms of the One Who Loves You ",
"My Love is the SHHH! ",
"Daydreamin' ",
"We're Not Making Love No More ",
"Semi-Charmed Life ",
"I Do ",
"Lookin' at Me ",
"Looking Through Your Eyes ",
"Lately ",
"Quit Playing Games (With My Heart) ",
"I Still Love You ",
"Time After Time ",
"Are You Jimmy Ray? ",
"Cruel Summer ",
"I Got the Hook Up ",
"Victory ",
"Too Much ",
"Ghetto Supastar (That Is What You Are) ",
"How Deep Is Your Love ",
"Friend of Mine ",
"Turn It Up (Remix)/Fire It Up ",
"I'll Be ",
"Ray of Light ",
"All for You ",
"Touch It ",
"Money, Power & Respect ",
"Bitter Sweet Symphony ",
"Dangerous ",
"Spice Up Your Life ",
"Because of You ",
"The Mummers' Dance ",
"All Cried Out ",
"Still Not a Player ",
"The One I Gave My Heart To ",
"Foolish Games / You Were Meant for Me ",
"Love You Down ",
"Do for Love ",
"Raise the Roof ",
"Heaven ",
"The Party Continues ",
"Sock It 2 Me ",
"Butta Love ",
"A Rose Is Still a Rose ",
"4 Seasons of Loneliness ",
"Father ",
"Thinkin' Bout It ",
"Nobody's Supposed to Be Here ",
"Westside ",
"Ben Kızın Değil Miydim",
"Rüzgar",
"Mavi Duvar",
"Sevemem",
"Bu Şehirde",
"Sürünüyorum",
"Daşların Kadını",
"İmkansız Aşk",
"Sen Allahın Bir Lutfusun",
"Bunun Adına Yürek Derler",
"Ayrılık",
"Elveda ",
"Çoban Yıldızı",
"Yalanmış",
"Sende Vur",
"Bahar",
"Çok Ayıp",
"Mihriban",
"Hayat Buysa Ben Yokum Bu Yolda",
"Ah Bir Joker",
"Yok Diyemem",
"Tutuklu",
"Adı Bende Saklı",
"Zeynep",
"Kardelen",
"Belalım Benim",
"Affetmem",
"Leyla",
"Tempo ",
"Tanrım",
"Bekar Gezelim",
"Yanarım",
"Normal",
"Bekletme",
"Kandil",
"İstanbul Yedi tepe",
"Tatlı Kaçık",
"Salla Gitsin Dertlerini",
"Sebepsiz Fırtına",
"Holigan",
"Onlar Yanlış Biliyor",
"Bir Vurgun Bu Sevda",
"Başıma Bela Mısın",
"Cilveloy",




 ];

 var artist = [

"Next",
"Brandy and Monica",
"Shania Twain",
"Savage Garden",
"LeAnn Rimes",
"Janet",
"K-Ci & JoJo",
"Elton John",
"Usher",
"Paula Cole",
"Third Eye Blind",
"Destiny's Child",
"Celine Dion",
"Will Smith",
"Usher",
"Usher",
"Mariah Carey",
"Monica",
"Puff Daddy featuring The Notorious B.I.G. and Mase",
"Sarah McLachlan",
"Jennifer Paige",
"Backstreet Boys",
"Aerosmith",
"Public Announcement",
"Faith Hill",
"Uncle Sam",
"Montell Jordan featuring Master P and Silkk the Shocker",
"Marcy Playground",
"Robyn",
"Boyz II Men",
"Mase featuring Total",
"Madonna",
"Wyclef Jean",
"LSG",
"Chumbawamba",
"Lord Tariq and Peter Gunz",
"'N Sync",
"Five",
"Jon B.",
"Master P featuring Fiend, Silkk the Shocker, Mia X and Mystikal",
"Nicole featuring Missy Elliott and Mocha",
"All Saints",
"Janet Jackson featuring Blackstreet",
"Mase featuring Kelly Price",
"Voices of Theory",
"Billie Myers",
"Puff Daddy featuring Jimmy Page",
"Sylk-E. Fyne featuring Chill",
"Mýa and Sisqo",
"Hanson",
"Barenaked Ladies",
"K. P. & Envyi",
"Xscape",
"Somethin' for the People",
"Tatyana Ali",
"Dru Hill",
"Third Eye Blind",
"Lisa Loeb",
"Mase featuring Puff Daddy",
"LeAnn Rimes",
"Divine",
"Backstreet Boys",
"Next",
"INOJ",
"Jimmy Ray",
"Ace of Base",
"Master P featuring Sons of Funk",
"Puff Daddy featuring The Notorious B.I.G. and Busta Rhymes",
"Spice Girls",
"Pras Michel featuring Ol' Dirty Bastard and Mýa",
"Dru Hill featuring Redman",
"Kelly Price featuring R. Kelly and Ron Isley",
"Busta Rhymes",
"Edwin McCain",
"Madonna",
"Sister Hazel",
"Monifah",
"The LOX featuring DMX and Lil' Kim",
"The Verve",
"Busta Rhymes",
"Spice Girls",
"98 Degrees",
"Loreena McKennitt",
"Allure featuring 112",
"Big Pun featuring Joe",
"Aaliyah",
"Jewel",
"INOJ",
"2Pac featuring Eric Williams",
"Luke featuring No Good But So Good",
"Nu Flavor",
"Jermaine Dupri featuring Da Brat and Usher",
"Missy Elliott featuring Da Brat",
"Next",
"Aretha Franklin",
"Boyz II Men",
"LL Cool J",
"Gerald Levert",
"Deborah Cox",
"TQ",
"Bendeniz",
"Grup Gündoğarken",
"Haramiler",
"Hüner Coşkuner Erol Büyükburç",
"Çelik",
"Harika Avcı",
"Kıraç",
"Levent Yüksel",
"Ebru Gündeş",
"Doğuş",
"Haluk Levent",
"Metin Arolat",
"Özcan Deniz",
"Ömür Göksel",
"Burcu Güneş",
"Özlem Tekin",
"Sibel Alaş",
"Şükriye Tutkun",
"Sibel Tüzün",
"Mirkelam",
"Sinan Özen",
"Sezen Aksu",
"Sezen Aksu",
"Erkan Oğur",
"Teoman",
"Emrah",
"Rafet El Roman",
"Rafet El Roman",
"Tuğçe San",
"Rober Hatemo",
"Grup Kent Ozanları",
"Zeynep",
"Bülent Ortaçgil",
"Pınar Aylin",
"Ferdi Özbeğen",
"Yeşim Salkım",
"Yonca Evcimik",
"Yıldız Tilbe",
"Yaşar",
"Athena",
"Candan Erçetin",
"Demet Sağıroğlu",
"Bora Öztoprak",
"Destan",




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
