// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"The Sign 	Ace of Base",
"I Swear 	All-4-One",
"I'll Make Love to You 	Boyz II Men",
"The Power of Love 	Céline Dion",
"Hero 	Mariah Carey",
"Stay (I Missed You) 	Lisa Loeb and Nine Stories",
"Breathe Again 	Toni Braxton",
"All for Love 	Bryan Adams, Rod Stewart and Sting",
"All That She Wants 	Ace of Base",
"Don't Turn Around 	Ace of Base",
"Bump n' Grind 	R. Kelly",
"Again 	Janet Jackson",
"I'll Remember 	Madonna",
"Whatta Man 	Salt-n-Pepa and En Vogue",
"Wild Night 	John Mellencamp featuring Meshell Ndegeocello",
"Without You  Never Forget You 	Mariah Carey",
"You Mean the World to Me 	Toni Braxton",
"Can You Feel the Love Tonight 	Elton John",
"The Most Beautiful Girl in the World 	Prince",
"Fantastic Voyage 	Coolio",
"Baby, I Love Your Way 	Big Mountain",
"Regulate 	Warren G featuring Nate Dogg",
"If You Go 	Jon Secada",
"Back & Forth 	Aaliyah",
"Now and Forever 	Richard Marx",
"When Can I See You 	Babyface",
"Please Forgive Me 	Bryan Adams",
"So Much in Love 	All-4-One",
"Shoop 	Salt-n-Pepa",
"Any Time, Any Place 	Janet Jackson",
"Shine 	Collective Soul",
"Said I Loved You...But I Lied 	Michael Bolton",
"Return to Innocence 	Enigma",
"All I Wanna Do 	Sheryl Crow",
"Mmm Mmm Mmm Mmm 	Crash Test Dummies",
"Can We Talk 	Tevin Campbell",
"Funkdafied 	Da Brat",
"I'd Do Anything for Love (But I Won't Do That) 	Meat Loaf",
"Gangsta Lean 	DRS",
"Because the Night 	10,000 Maniacs",
"Cantaloop (Flip Fantasia) 	Us3",
"Whoomp! (There It Is) 	Tag Team",
"Come to My Window 	Melissa Etheridge",
"Stroke You Up 	Changing Faces",
"I'm Ready 	Tevin Campbell",
"100% Pure Love 	Crystal Waters",
"Anytime You Need a Friend 	Mariah Carey",
"Because of Love 	Janet Jackson",
"Linger 	The Cranberries",
"Loser 	Beck",
"Found Out About You 	Gin Blossoms",
"Gin and Juice 	Snoop Doggy Dogg",
"Never Lie 	Immature",
"Streets of Philadelphia 	Bruce Springsteen",
"Getto Jam 	Domino",
"Endless Love 	Luther Vandross and Mariah Carey",
"I Miss You 	Aaron Hall",
"Understanding 	Xscape",
"This D.J. 	Warren G",
"Cry for You 	Jodeci",
"Keep Ya Head Up 	2Pac",
"What's My Name? 	Snoop Doggy Dogg",
"Another Night 	Real McCoy",
"Your Body's Callin' 	R. Kelly",
"Tootsee Roll 	69 Boyz",
"I Can See Clearly Now 	Jimmy Cliff",
"Never Keeping Secrets 	Babyface",
"Crazy 	Aerosmith",
"Just Kickin' It 	Xscape",
"(At Your Best) You Are Love 	Aaliyah",
"Rock and Roll Dreams Come Through 	Meat Loaf",
"Amazing 	Aerosmith",
"Always 	Erasure",
"Groove Thang 	Zhané",
"Dreams 	Gabrielle",
"Mr. Vain 	Culture Beat",
"Mary Jane's Last Dance 	Tom Petty and the Heartbreakers",
"Anything 	SWV",
"Beautiful in My Eyes 	Joshua Kadison",
"Stay 	Eternal",
"Flava in Ya Ear 	Craig Mack",
"U.N.I.T.Y. 	Queen Latifah",
"Prayer for the Dying 	Seal",
"Secret 	Madonna",
"Here Comes the Hotstepper 	Ini Kamoze",
"Everyday 	Phil Collins",
"Don't Take the Girl 	Tim McGraw",
"Got Me Waiting 	Heavy D & the Boyz",
"December, 1963 (Oh, What a Night) 	The Four Seasons",
"Indian Outlaw 	Tim McGraw",
"Always 	Bon Jovi",
"I'm the Only One 	Melissa Etheridge",
"Back in the Day 	Ahmad",
"Love Sneakin' Up On You 	Bonnie Raitt",
"I'll Take You There 	General Public",
"Always in My Heart 	Tevin Campbell",
"What Is Love 	Haddaway",
"And Our Feelings 	Babyface",
"Bop Gun (One Nation) 	Ice Cube featuring George Clinton",
"I Wanna Be Down 	Brandy",
"Zehir Ettin	Deniz Arcak",
"Hiç keyfim yok	Yeşim Salkım",
"Hareket Vakti	Umay Umay",
"Lavinia 	Feridun Düzağaç",
"Düşler Sokağı	Ezginin Günlüğü",
"Ebabil	Ercan Saatçi Ufuk",
"Dut Ağacı	Barış Manço",
"Sevenler Ağlarmış	Haluk Levent",
"Sözüne Kanmam 	Suat Suna",
"Türküden Sevgiye	Grup Laçin",
"Sevdam Ağlıyor	Sertab Erener",
"Lal	Sertab Erener",
"Tutmayın Beni 	Nalan",
"Affet 	Nalan",
"Yerine Sevemem	Gökhan Kırdar",
"Sana Deliyim	Fatih Erkoç",
"Dön Bebeğim	Tarkan",
"Kış Güneşi	Tarkan",
"Unutmamalı	Tarkan",
"Karabiberim	Serdar Ortaç",
"Ateşteyim	Çelik",
"Meyhaneci	Çelik",
"Vefasız	Soner Arıca",
"Deli et beni	Emel Müftüoğlu",
"Delikanlım	Yıldız Tilbe",
"Sana değer	Yıldız Tilbe",
"İki Keklik	Erkan Oğur",
"Issızlığın Ortasında	Moğollar",
"8 15 Vapuru	Yonca Evcimik",
"Bu kız Beni görmeli	Mustafa Sandal",
"Beni Ağlatma	Mustafa Sandal",
"Tatlı Bela	Ebru Gündeş",
"Cevriye	Yeni Türkü",
"Benimle Oynama	Burak Kut",
"Bebeğim	Burak Kut",
"Vurulmuşum Sana	Asya",
"Dağların Arkasında Yar	Alpay",
"Kınalı Bebek	Demet",
"Hiç Ummazdım	Aşkın Nur Yengi",
"Son Perde 	Nilüfer",
"Sımsıkı Sıkı Sıkı	Kenan Doğulu",
"Sensiz Olmaz	Bülent Ortaçgil",
"Bekle Bizi Istanbul	Edip Akbayram",
"Saraylı	Oya Bora",

 

    ];

var names = [

"The Sign ",
"I Swear ",
"I'll Make Love to You ",
"The Power of Love ",
"Hero ",
"Stay (I Missed You) ",
"Breathe Again ",
"All for Love ",
"All That She Wants ",
"Don't Turn Around ",
"Bump n' Grind ",
"Again ",
"I'll Remember ",
"Whatta Man ",
"Wild Night ",
"Without You / Never Forget You ",
"You Mean the World to Me ",
"Can You Feel the Love Tonight ",
"The Most Beautiful Girl in the World ",
"Fantastic Voyage ",
"Baby, I Love Your Way ",
"Regulate ",
"If You Go ",
"Back & Forth ",
"Now and Forever ",
"When Can I See You ",
"Please Forgive Me ",
"So Much in Love ",
"Shoop ",
"Any Time, Any Place ",
"Shine ",
"Said I Loved You...But I Lied ",
"Return to Innocence ",
"All I Wanna Do ",
"Mmm Mmm Mmm Mmm ",
"Can We Talk ",
"Funkdafied ",
"I'd Do Anything for Love (But I Won't Do That) ",
"Gangsta Lean ",
"Because the Night ",
"Cantaloop (Flip Fantasia) ",
"Whoomp! (There It Is) ",
"Come to My Window ",
"Stroke You Up ",
"I'm Ready ",
"100% Pure Love ",
"Anytime You Need a Friend ",
"Because of Love ",
"Linger ",
"Loser ",
"Found Out About You ",
"Gin and Juice ",
"Never Lie ",
"Streets of Philadelphia ",
"Getto Jam ",
"Endless Love ",
"I Miss You ",
"Understanding ",
"This D.J. ",
"Cry for You ",
"Keep Ya Head Up ",
"What's My Name? ",
"Another Night ",
"Your Body's Callin' ",
"Tootsee Roll ",
"I Can See Clearly Now ",
"Never Keeping Secrets ",
"Crazy ",
"Just Kickin' It ",
"(At Your Best) You Are Love ",
"Rock and Roll Dreams Come Through ",
"Amazing ",
"Always ",
"Groove Thang ",
"Dreams ",
"Mr. Vain ",
"Mary Jane's Last Dance ",
"Anything ",
"Beautiful in My Eyes ",
"Stay ",
"Flava in Ya Ear ",
"U.N.I.T.Y. ",
"Prayer for the Dying ",
"Secret ",
"Here Comes the Hotstepper ",
"Everyday ",
"Don't Take the Girl ",
"Got Me Waiting ",
"December, 1963 (Oh, What a Night) ",
"Indian Outlaw ",
"Always ",
"I'm the Only One ",
"Back in the Day ",
"Love Sneakin' Up On You ",
"I'll Take You There ",
"Always in My Heart ",
"What Is Love ",
"And Our Feelings ",
"Bop Gun (One Nation) ",
"I Wanna Be Down ",
"Zehir Ettin",
"Hiç keyfim yok",
"Hareket Vakti",
"Lavinia ",
"Düşler Sokağı",
"Ebabil",
"Dut Ağacı",
"Sevenler Ağlarmış",
"Sözüne Kanmam ",
"Türküden Sevgiye",
"Sevdam Ağlıyor",
"Lal",
"Tutmayın Beni ",
"Affet ",
"Yerine Sevemem",
"Sana Deliyim",
"Dön Bebeğim",
"Kış Güneşi",
"Unutmamalı",
"Karabiberim",
"Ateşteyim",
"Meyhaneci",
"Vefasız",
"Deli et beni",
"Delikanlım",
"Sana değer",
"İki Keklik",
"Issızlığın Ortasında",
"8 15 Vapuru",
"Bu kız Beni görmeli",
"Beni Ağlatma",
"Tatlı Bela",
"Cevriye",
"Benimle Oynama",
"Bebeğim",
"Vurulmuşum Sana",
"Dağların Arkasında Yar",
"Kınalı Bebek",
"Hiç Ummazdım",
"Son Perde ",
"Sımsıkı Sıkı Sıkı",
"Sensiz Olmaz",
"Bekle Bizi Istanbul",
"Saraylı",




 ];

 var artist = [

"Ace of Base",
"All-4-One",
"Boyz II Men",
"Céline Dion",
"Mariah Carey",
"Lisa Loeb and Nine Stories",
"Toni Braxton",
"Bryan Adams, Rod Stewart and Sting",
"Ace of Base",
"Ace of Base",
"R. Kelly",
"Janet Jackson",
"Madonna",
"Salt-n-Pepa and En Vogue",
"John Mellencamp featuring Meshell Ndegeocello",
"Mariah Carey",
"Toni Braxton",
"Elton John",
"Prince",
"Coolio",
"Big Mountain",
"Warren G featuring Nate Dogg",
"Jon Secada",
"Aaliyah",
"Richard Marx",
"Babyface",
"Bryan Adams",
"All-4-One",
"Salt-n-Pepa",
"Janet Jackson",
"Collective Soul",
"Michael Bolton",
"Enigma",
"Sheryl Crow",
"Crash Test Dummies",
"Tevin Campbell",
"Da Brat",
"Meat Loaf",
"DRS",
"10,000 Maniacs",
"Us3",
"Tag Team",
"Melissa Etheridge",
"Changing Faces",
"Tevin Campbell",
"Crystal Waters",
"Mariah Carey",
"Janet Jackson",
"The Cranberries",
"Beck",
"Gin Blossoms",
"Snoop Doggy Dogg",
"Immature",
"Bruce Springsteen",
"Domino",
"Luther Vandross and Mariah Carey",
"Aaron Hall",
"Xscape",
"Warren G",
"Jodeci",
"2Pac",
"Snoop Doggy Dogg",
"Real McCoy",
"R. Kelly",
"69 Boyz",
"Jimmy Cliff",
"Babyface",
"Aerosmith",
"Xscape",
"Aaliyah",
"Meat Loaf",
"Aerosmith",
"Erasure",
"Zhané",
"Gabrielle",
"Culture Beat",
"Tom Petty and the Heartbreakers",
"SWV",
"Joshua Kadison",
"Eternal",
"Craig Mack",
"Queen Latifah",
"Seal",
"Madonna",
"Ini Kamoze",
"Phil Collins",
"Tim McGraw",
"Heavy D & the Boyz",
"The Four Seasons",
"Tim McGraw",
"Bon Jovi",
"Melissa Etheridge",
"Ahmad",
"Bonnie Raitt",
"General Public",
"Tevin Campbell",
"Haddaway",
"Babyface",
"Ice Cube featuring George Clinton",
"Brandy",
"Deniz Arcak",
"Yeşim Salkım",
"Umay Umay",
"Feridun Düzağaç",
"Ezginin Günlüğü",
"Ercan Saatçi Ufuk",
"Barış Manço",
"Haluk Levent",
"Suat Suna",
"Grup Laçin",
"Sertab Erener",
"Sertab Erener",
"Nalan",
"Nalan",
"Gökhan Kırdar",
"Fatih Erkoç",
"Tarkan",
"Tarkan",
"Tarkan",
"Serdar Ortaç",
"Çelik",
"Çelik",
"Soner Arıca",
"Emel Müftüoğlu",
"Yıldız Tilbe",
"Yıldız Tilbe",
"Erkan Oğur",
"Moğollar",
"Yonca Evcimik",
"Mustafa Sandal",
"Mustafa Sandal",
"Ebru Gündeş",
"Yeni Türkü",
"Burak Kut",
"Burak Kut",
"Asya",
"Alpay",
"Demet",
"Aşkın Nur Yengi",
"Nilüfer",
"Kenan Doğulu",
"Bülent Ortaçgil",
"Edip Akbayram",
"Oya Bora",




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
