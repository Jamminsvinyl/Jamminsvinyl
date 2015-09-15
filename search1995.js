// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Gangsta's Paradise 	Coolio featuring L.V.",
"Waterfalls 	TLC",
"Creep 	TLC",
"Kiss from a Rose 	Seal",
"On Bended Knee 	Boyz II Men",
"Another Night 	Real McCoy",
"Fantasy 	Mariah Carey",
"Take a Bow 	Madonna",
"Don't Take It Personal (Just One of Dem Days) 	Monica",
"This Is How We Do It 	Montell Jordan",
"I Know 	Dionne Farris",
"Water Runs Dry 	Boyz II Men",
"Freak Like Me 	Adina Howard",
"Run-Around 	Blues Traveler",
"I Can Love You Like That 	All-4-One",
"Have You Ever Really Loved a Woman? 	Bryan Adams",
"Always 	Bon Jovi",
"Boombastic 	Shaggy",
"Total Eclipse of the Heart 	Nicki French",
"You Gotta Be 	Des'ree",
"You Are Not Alone 	Michael Jackson",
"Hold My Hand 	Hootie & the Blowfish",
"One More Chance 	The Notorious B.I.G.",
"Here Comes the Hotstepper 	Ini Kamoze",
"Candy Rain 	Soul for Real",
"Let Her Cry 	Hootie & the Blowfish",
"I Believe 	Blessid Union of Souls",
"Red Light Special 	TLC",
"Runaway 	Janet Jackson",
"Strong Enough 	Sheryl Crow",
"Colors of the Wind 	Vanessa Williams",
"Someone to Love 	Jon B.",
"Only Wanna Be with You 	Hootie & the Blowfish",
"If You Love Me 	Brownstone",
"In the House of Stone and Light 	Martin Page",
"I Got 5 on It 	Luniz",
"Baby 	Brandy",
"Run Away 	Real McCoy",
"As I Lay Me Down 	Sophie B. Hawkins",
"He's Mine 	Mokenstef",
"December 	Collective Soul",
"I'll Be There for You/You're All I Need to Get By 	Method Man featuring Mary J. Blige",
"Shy Guy 	Diana King",
"I'm the Only One 	Melissa Etheridge",
"Every Little Thing I Do 	Soul for Real",
"Before I Let You Go 	Blackstreet",
"Big Poppa 	The Notorious B.I.G.",
"Sukiyaki 	4 P.M.",
"I Wanna Be Down 	Brandy",
"I'll Make Love to You 	Boyz II Men",
"Dear Mama 	2Pac",
"Hold On 	Jamie Walters",
"Keep Their Heads Ringin' 	Dr. Dre",
"The Rhythm of the Night 	Corona",
"Roll to Me 	Del Amitri",
"Scream 	Michael Jackson and Janet Jackson",
"Freek'n You 	Jodeci",
"I Wish 	Skee-Lo",
"Believe 	Elton John",
"Carnival 	Natalie Merchant",
"You Don't Know How It Feels 	Tom Petty",
"Back for Good 	Take That",
"Tootsee Roll 	69 Boyz",
"You Want This 	Janet Jackson",
"Tell Me 	Groove Theory",
"Can't You See 	Total featuring The Notorious B.I.G.",
"All I Wanna Do 	Sheryl Crow",
"This Lil' Game We Play 	Subway featuring 702",
"Come and Get Your Love 	Real McCoy",
"This Ain't a Love Song 	Bon Jovi",
"Secret 	Madonna",
"Player's Anthem 	Junior M.A.F.I.A. featuring The Notorious B.I.G.",
"Feel Me Flow 	Naughty by Nature",
"Every Day of the Week 	Jade",
"The Sweetest Days 	Vanessa Williams",
"Short Dick Man 	20 Fingers featuring Gillette",
"Brokenhearted 	Brandy featuring Wanya Morris",
"No More I Love You's 	Annie Lennox",
"You Used to Love Me 	Faith Evans",
"Constantly 	Immature",
"Hold Me, Thrill Me, Kiss Me, Kill Me 	U2",
"100% Pure Love 	Crystal Waters",
"Ask of You 	Raphael Saadiq",
"Sugar Hill 	AZ",
"Good 	Better Than Ezra",
"Brown Sugar 	D'Angelo",
"Turn the Beat Around 	Gloria Estefan",
"'Til You Do Me Right 	After 7",
"1st of tha Month 	Bone Thugs-n-Harmony",
"Like the Way I Do 	Melissa Etheridge",
"I Live My Life for You 	FireHouse",
"Dream About You 	Stevie B",
"Cotton Eye Joe 	Rednex",
"Thank You 	Boyz II Men",
"I'll Stand by You 	The Pretenders",
"I Miss You 	N II U",
"Give It 2 You 	Da Brat",
"Best Friend 	Brandy",
"Misery 	Soul Asylum",
"Can't Stop Lovin' You 	Van Halen",
"Ah Memedim	Zeynep",
"Yanımda Kal	Harun Kolçak",
"Sev	Arzu Ece",
"Hasretim	İzel",
"Yakışıklım	İzel",
"Kara Gözlüm	Kerim Tekin",
"Bu Sahilde	Ebru Yaşar",
"Sevdalım	Hazal",
"Deliler Gibi	Pınar Aylin",
"Bir Evcilik Oyunu 	Hüner Coşkuner",
"Bana Bir Masal Anlat Baba	Yeni Türkü",
"Beni Hatırlarsın	Jale",
"Kara Haber	Özcan Deniz",
"Cansuyum	Nalan",
"Hercai	Çelik",
"Rebeka	Akın",
"Bal Böceği	Barış Manço",
"Vaz Geçtim	Yıldız Tilbe",
"Tutunamadım	Gökhan Kırdar",
"Aramızda Uçurumlar	Suat Suna",
"Aşk Olmalı 	Nazan Öncel",
"Dert Değil	Metin Arolat",
"Her Gece	Mirkelam",
"Hatıralar	Mirkelam",
"Sayenizde	Ercan Saatçı",
"Rakkas	Sezen Aksu",
"Çalıkuşu	Esin Engin",
"Fırtınalar	Ebru Gündeş",
"Sevdim Sevilmedim	Candan Erçetin",
"Hangi Aşk Adil Ki	Candan Erçetin",
"Deli Mavi	Yeşim Salkım",
"Derbeder	Soner Arıca",
"Gesi Bağları	Selda Bağcan",
"Adam	Sibel Alaş",
"Eller Aldatır	Deniz Arcak",
"Akdeniz Geceleri	Bora Öztoprak",
"Garibim	Ayna",
"Gönül Yareler İçinde	Bendeniz",
"Allahım Neydi Günahım	Kayahan",
"Mazeretim Var Asabiyim Ben	Mazhar Fuat Özkan MFÖ",
"Zalim	Levent Yüksel",
"Sonuna Kadar	Ferda Anıl Yarkın",
"Karaağaç	Levent Yüksel",
"Yaşandı Bitti	Burak Kut",

 

    ];

var names = [

"Gangsta's Paradise ",
"Waterfalls ",
"Creep ",
"Kiss from a Rose ",
"On Bended Knee ",
"Another Night ",
"Fantasy ",
"Take a Bow ",
"Don't Take It Personal (Just One of Dem Days) ",
"This Is How We Do It ",
"I Know ",
"Water Runs Dry ",
"Freak Like Me ",
"Run-Around ",
"I Can Love You Like That ",
"Have You Ever Really Loved a Woman? ",
"Always ",
"Boombastic ",
"Total Eclipse of the Heart ",
"You Gotta Be ",
"You Are Not Alone ",
"Hold My Hand ",
"One More Chance ",
"Here Comes the Hotstepper ",
"Candy Rain ",
"Let Her Cry ",
"I Believe ",
"Red Light Special ",
"Runaway ",
"Strong Enough ",
"Colors of the Wind ",
"Someone to Love ",
"Only Wanna Be with You ",
"If You Love Me ",
"In the House of Stone and Light ",
"I Got 5 on It ",
"Baby ",
"Run Away ",
"As I Lay Me Down ",
"He's Mine ",
"December ",
"I'll Be There for You/You're All I Need to Get By ",
"Shy Guy ",
"I'm the Only One ",
"Every Little Thing I Do ",
"Before I Let You Go ",
"Big Poppa ",
"Sukiyaki ",
"I Wanna Be Down ",
"I'll Make Love to You ",
"Dear Mama ",
"Hold On ",
"Keep Their Heads Ringin' ",
"The Rhythm of the Night ",
"Roll to Me ",
"Scream ",
"Freek'n You ",
"I Wish ",
"Believe ",
"Carnival ",
"You Don't Know How It Feels ",
"Back for Good ",
"Tootsee Roll ",
"You Want This ",
"Tell Me ",
"Can't You See ",
"All I Wanna Do ",
"This Lil' Game We Play ",
"Come and Get Your Love ",
"This Ain't a Love Song ",
"Secret ",
"Player's Anthem ",
"Feel Me Flow ",
"Every Day of the Week ",
"The Sweetest Days ",
"Short Dick Man ",
"Brokenhearted ",
"No More I Love You's ",
"You Used to Love Me ",
"Constantly ",
"Hold Me, Thrill Me, Kiss Me, Kill Me ",
"100% Pure Love ",
"Ask of You ",
"Sugar Hill ",
"Good ",
"Brown Sugar ",
"Turn the Beat Around ",
"'Til You Do Me Right ",
"1st of tha Month ",
"Like the Way I Do ",
"I Live My Life for You ",
"Dream About You ",
"Cotton Eye Joe ",
"Thank You ",
"I'll Stand by You ",
"I Miss You ",
"Give It 2 You ",
"Best Friend ",
"Misery ",
"Can't Stop Lovin' You ",
"Ah Memedim",
"Yanımda Kal",
"Sev",
"Hasretim",
"Yakışıklım",
"Kara Gözlüm",
"Bu Sahilde",
"Sevdalım",
"Deliler Gibi",
"Bir Evcilik Oyunu ",
"Bana Bir Masal Anlat Baba",
"Beni Hatırlarsın",
"Kara Haber",
"Cansuyum",
"Hercai",
"Rebeka",
"Bal Böceği",
"Vaz Geçtim",
"Tutunamadım",
"Aramızda Uçurumlar",
"Aşk Olmalı ",
"Dert Değil",
"Her Gece",
"Hatıralar",
"Sayenizde",
"Rakkas",
"Çalıkuşu",
"Fırtınalar",
"Sevdim Sevilmedim",
"Hangi Aşk Adil Ki",
"Deli Mavi",
"Derbeder",
"Gesi Bağları",
"Adam",
"Eller Aldatır",
"Akdeniz Geceleri",
"Garibim",
"Gönül Yareler İçinde",
"Allahım Neydi Günahım",
"Mazeretim Var Asabiyim Ben",
"Zalim",
"Sonuna Kadar",
"Karaağaç",
"Yaşandı Bitti",




 ];

 var artist = [

"Coolio featuring L.V.",
"TLC",
"TLC",
"Seal",
"Boyz II Men",
"Real McCoy",
"Mariah Carey",
"Madonna",
"Monica",
"Montell Jordan",
"Dionne Farris",
"Boyz II Men",
"Adina Howard",
"Blues Traveler",
"All-4-One",
"Bryan Adams",
"Bon Jovi",
"Shaggy",
"Nicki French",
"Des'ree",
"Michael Jackson",
"Hootie & the Blowfish",
"The Notorious B.I.G.",
"Ini Kamoze",
"Soul for Real",
"Hootie & the Blowfish",
"Blessid Union of Souls",
"TLC",
"Janet Jackson",
"Sheryl Crow",
"Vanessa Williams",
"Jon B.",
"Hootie & the Blowfish",
"Brownstone",
"Martin Page",
"Luniz",
"Brandy",
"Real McCoy",
"Sophie B. Hawkins",
"Mokenstef",
"Collective Soul",
"Method Man featuring Mary J. Blige",
"Diana King",
"Melissa Etheridge",
"Soul for Real",
"Blackstreet",
"The Notorious B.I.G.",
"4 P.M.",
"Brandy",
"Boyz II Men",
"2Pac",
"Jamie Walters",
"Dr. Dre",
"Corona",
"Del Amitri",
"Michael Jackson and Janet Jackson",
"Jodeci",
"Skee-Lo",
"Elton John",
"Natalie Merchant",
"Tom Petty",
"Take That",
"69 Boyz",
"Janet Jackson",
"Groove Theory",
"Total featuring The Notorious B.I.G.",
"Sheryl Crow",
"Subway featuring 702",
"Real McCoy",
"Bon Jovi",
"Madonna",
"Junior M.A.F.I.A. featuring The Notorious B.I.G.",
"Naughty by Nature",
"Jade",
"Vanessa Williams",
"20 Fingers featuring Gillette",
"Brandy featuring Wanya Morris",
"Annie Lennox",
"Faith Evans",
"Immature",
"U2",
"Crystal Waters",
"Raphael Saadiq",
"AZ",
"Better Than Ezra",
"D'Angelo",
"Gloria Estefan",
"After 7",
"Bone Thugs-n-Harmony",
"Melissa Etheridge",
"FireHouse",
"Stevie B",
"Rednex",
"Boyz II Men",
"The Pretenders",
"N II U",
"Da Brat",
"Brandy",
"Soul Asylum",
"Van Halen",
"Zeynep",
"Harun Kolçak",
"Arzu Ece",
"İzel",
"İzel",
"Kerim Tekin",
"Ebru Yaşar",
"Hazal",
"Pınar Aylin",
"Hüner Coşkuner",
"Yeni Türkü",
"Jale",
"Özcan Deniz",
"Nalan",
"Çelik",
"Akın",
"Barış Manço",
"Yıldız Tilbe",
"Gökhan Kırdar",
"Suat Suna",
"Nazan Öncel",
"Metin Arolat",
"Mirkelam",
"Mirkelam",
"Ercan Saatçı",
"Sezen Aksu",
"Esin Engin",
"Ebru Gündeş",
"Candan Erçetin",
"Candan Erçetin",
"Yeşim Salkım",
"Soner Arıca",
"Selda Bağcan",
"Sibel Alaş",
"Deniz Arcak",
"Bora Öztoprak",
"Ayna",
"Bendeniz",
"Kayahan",
"Mazhar Fuat Özkan MFÖ",
"Levent Yüksel",
"Ferda Anıl Yarkın",
"Levent Yüksel",
"Burak Kut",




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
