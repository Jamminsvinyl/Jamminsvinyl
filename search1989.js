// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Look Away 	Chicago",
"My Prerogative 	Bobby Brown",
"Every Rose Has Its Thorn 	Poison",
"Straight Up 	Paula Abdul",
"Miss You Much 	Janet Jackson",
"Cold Hearted 	Paula Abdul",
"Wind Beneath My Wings 	Bette Midler",
"Girl You Know It's True 	Milli Vanilli",
"Baby, I Love Your Way/Freebird Medley 	Will to Power",
"Giving You the Best That I Got 	Anita Baker",
"Right Here Waiting 	Richard Marx",
"Waiting For a Star to Fall 	Boy Meets Girl",
"Lost in Your Eyes 	Debbie Gibson",
"Don't Wanna Lose You 	Gloria Estefan",
"Heaven 	Warrant",
"Girl I'm Gonna Miss You 	Milli Vanilli",
"The Look 	Roxette",
"She Drives Me Crazy 	Fine Young Cannibals",
"On Our Own 	Bobby Brown",
"Two Hearts 	Phil Collins",
"Blame It on the Rain 	Milli Vanilli",
"Listen to Your Heart 	Roxette",
"I'll Be There for You 	Bon Jovi",
"If You Don't Know Me by Now 	Simply Red",
"Like a Prayer 	Madonna",
"I'll Be Loving You (Forever) 	New Kids on the Block",
"How Can I Fall? 	Breathe",
"Baby Don't Forget My Number 	Milli Vanilli",
"Toy Soldiers 	Martika",
"Forever Your Girl 	Paula Abdul",
"The Living Years 	Mike + The Mechanics",
"Eternal Flame 	The Bangles",
"Wild Thing 	Tone Lōc",
"When I See You Smile 	Bad English",
"If I Could Turn Back Time 	Cher",
"Buffalo Stance 	Neneh Cherry",
"When I'm with You 	Sheriff",
"Don't Rush Me 	Taylor Dayne",
"Born to Be My Baby 	Bon Jovi",
"Good Thing 	Fine Young Cannibals",
"The Lover in Me 	Sheena Easton",
"Bust a Move 	Young MC",
"Once Bitten, Twice Shy 	Great White",
"Batdance 	Prince",
"Rock On 	Michael Damian",
"Real Love 	Jody Watley",
"Love Shack 	The B-52's",
"Every Little Step 	Bobby Brown",
"Hangin' Tough 	New Kids on the Block",
"My Heart Can't Tell You No 	Rod Stewart",
"So Alive 	Love and Rockets",
"You Got It (The Right Stuff) 	New Kids on the Block",
"Armageddon It 	Def Leppard",
"Satisfied 	Richard Marx",
"Express Yourself 	Madonna",
"I Like It 	Dino",
"Soldier of Love 	Donny Osmond",
"Sowing the Seeds of Love 	Tears for Fears",
"Cherish 	Madonna",
"When the Children Cry 	White Lion",
"18 and Life 	Skid Row",
"I Don't Want Your Love 	Duran Duran",
"Second Chance 	38 Special",
"The Way You Love Me 	Karyn White",
"Funky Cold Medina 	Tone Lōc",
"In Your Room 	The Bangles",
"Miss You Like Crazy 	Natalie Cole",
"Lovesong 	The Cure",
"Secret Rendezvous 	Karyn White",
"Angel Eyes 	The Jeff Healey Band",
"Patience 	Guns N' Roses",
"Walk on Water 	Eddie Money",
"Cover Girl 	New Kids on the Block",
"Welcome to the Jungle 	Guns N' Roses",
"Shower Me With Your Love 	Surface",
"Stand 	R.E.M.",
"Close My Eyes Forever 	Lita Ford and Ozzy Osbourne",
"All This Time 	Tiffany",
"After All 	Cher and Peter Cetera",
"Roni 	Bobby Brown",
"Love in an Elevator 	Aerosmith",
"Lay Your Hands on Me 	Bon Jovi",
"The Promise 	When in Rome",
"What I Am 	Edie Brickell & New Bohemians",
"I Remember Holding You 	Boys Club",
"Paradise City 	Guns N' Roses",
"I Wanna Have Some Fun 	Samantha Fox",
"She Wants to Dance with Me 	Rick Astley",
"Dreamin' 	Vanessa Williams",
"It's No Crime 	Babyface",
"Poison 	Alice Cooper",
"This Time I Know It's for Real 	Donna Summer",
"Smooth Criminal 	Michael Jackson",
"Heaven Help Me 	Deon Estus",
"Rock Wit'cha 	Bobby Brown",
"Thinking of You 	Sa-Fire",
"What You Don't Know 	Exposé",
"Surrender To Me 	Ann Wilson and Robin Zander",
"The End of the Innocence 	Don Henley",
"Keep on Movin' 	Soul II Soul",
"Gemiler Döner Geriye	İlhan irem",
"Bana Bana	Grup Pan",
"Ve Melankoli	Kayahan Demet",
"Hasret	Sertab Erener",
"Hep Sıfır	Rüya Ersavcı",
"Fora Fora	Neco",
"Ayrılık 	Edip Akbayram",
"Öyle Bakma	Fatih Erkoç",
"Nanay	Seyyal Taner",
"Yol Aldım Sevdalardan	Grup Gündoğarken",
"Bir Efsane	Hakan Peker",
"Şinanay	Sezen Aksu",
"Sende Başını Alıp Gitme	Nil Burak",
"Olmalı Olacak İstiyorum	Kayahan  ",
"Esmer Günler	Kayahan",
"Artık Hiç Ağlama	Aşkın Nur Yengi",
"Geceler	Sinan Özen",
"Anlatamam ki 	Gül Erda",
"Hatıralar Silinir mi	Gülden Karaböcek",
"Güllerin İçinden	Mazhar Fuat Özkan",
"Gerçek Aşk	Grup Denk",
"Anam Ağlıyor	Ersen",
"İstanbulda Olmak	Melike Demirağ",
"Olmaz Deme	Atilla Atasoy",
"Resmine Bakıyorum	Erol Büyükburç",
"Yemen Elleri	Özdemir Erdoğan",
"Japon Balıkçısı Ölüdeniz	Ezginin Günlüğü",
"Ayrılmam 	Aşkın Nur Yengi",
"Susma	Aşkın Nur Yengi",
"Hay yam yam	Erkin Koray",
"Sana bana yeter	Ajda Pekkan",
"Bir Yaşam 	Nükhet Duru",
"Güle Güle Oğlum	Barış Manço",
"Domates Biber Patlıcan	Barış Manço",

 

    ];

var names = [

"Look Away ",
"My Prerogative ",
"Every Rose Has Its Thorn ",
"Straight Up ",
"Miss You Much ",
"Cold Hearted ",
"Wind Beneath My Wings ",
"Girl You Know It's True ",
"Baby, I Love Your Way/Freebird Medley ",
"Giving You the Best That I Got ",
"Right Here Waiting ",
"Waiting For a Star to Fall ",
"Lost in Your Eyes ",
"Don't Wanna Lose You ",
"Heaven ",
"Girl I'm Gonna Miss You ",
"The Look ",
"She Drives Me Crazy ",
"On Our Own ",
"Two Hearts ",
"Blame It on the Rain ",
"Listen to Your Heart ",
"I'll Be There for You ",
"If You Don't Know Me by Now ",
"Like a Prayer ",
"I'll Be Loving You (Forever) ",
"How Can I Fall? ",
"Baby Don't Forget My Number ",
"Toy Soldiers ",
"Forever Your Girl ",
"The Living Years ",
"Eternal Flame ",
"Wild Thing ",
"When I See You Smile ",
"If I Could Turn Back Time ",
"Buffalo Stance ",
"When I'm with You ",
"Don't Rush Me ",
"Born to Be My Baby ",
"Good Thing ",
"The Lover in Me ",
"Bust a Move ",
"Once Bitten, Twice Shy ",
"Batdance ",
"Rock On ",
"Real Love ",
"Love Shack ",
"Every Little Step ",
"Hangin' Tough ",
"My Heart Can't Tell You No ",
"So Alive ",
"You Got It (The Right Stuff) ",
"Armageddon It ",
"Satisfied ",
"Express Yourself ",
"I Like It ",
"Soldier of Love ",
"Sowing the Seeds of Love ",
"Cherish ",
"When the Children Cry ",
"18 and Life ",
"I Don't Want Your Love ",
"Second Chance ",
"The Way You Love Me ",
"Funky Cold Medina ",
"In Your Room ",
"Miss You Like Crazy ",
"Lovesong ",
"Secret Rendezvous ",
"Angel Eyes ",
"Patience ",
"Walk on Water ",
"Cover Girl ",
"Welcome to the Jungle ",
"Shower Me With Your Love ",
"Stand ",
"Close My Eyes Forever ",
"All This Time ",
"After All ",
"Roni ",
"Love in an Elevator ",
"Lay Your Hands on Me ",
"The Promise ",
"What I Am ",
"I Remember Holding You ",
"Paradise City ",
"I Wanna Have Some Fun ",
"She Wants to Dance with Me ",
"Dreamin' ",
"It's No Crime ",
"Poison ",
"This Time I Know It's for Real ",
"Smooth Criminal ",
"Heaven Help Me ",
"Rock Wit'cha ",
"Thinking of You ",
"What You Don't Know ",
"Surrender To Me ",
"The End of the Innocence ",
"Keep on Movin' ",
"Gemiler Döner Geriye",
"Bana Bana",
"Ve Melankoli",
"Hasret",
"Hep Sıfır",
"Fora Fora",
"Ayrılık ",
"Öyle Bakma",
"Nanay",
"Yol Aldım Sevdalardan",
"Bir Efsane",
"Şinanay",
"Sende Başını Alıp Gitme",
"Olmalı Olacak İstiyorum",
"Esmer Günler",
"Artık Hiç Ağlama",
"Geceler",
"Anlatamam ki ",
"Hatıralar Silinir mi",
"Güllerin İçinden",
"Gerçek Aşk",
"Anam Ağlıyor",
"İstanbulda Olmak",
"Olmaz Deme",
"Resmine Bakıyorum",
"Yemen Elleri",
"Japon Balıkçısı Ölüdeniz",
"Ayrılmam ",
"Susma",
"Hay yam yam",
"Sana bana yeter",
"Bir Yaşam ",
"Güle Güle Oğlum",
"Domates Biber Patlıcan",




 ];

 var artist = [

"Chicago",
"Bobby Brown",
"Poison",
"Paula Abdul",
"Janet Jackson",
"Paula Abdul",
"Bette Midler",
"Milli Vanilli",
"Will to Power",
"Anita Baker",
"Richard Marx",
"Boy Meets Girl",
"Debbie Gibson",
"Gloria Estefan",
"Warrant",
"Milli Vanilli",
"Roxette",
"Fine Young Cannibals",
"Bobby Brown",
"Phil Collins",
"Milli Vanilli",
"Roxette",
"Bon Jovi",
"Simply Red",
"Madonna",
"New Kids on the Block",
"Breathe",
"Milli Vanilli",
"Martika",
"Paula Abdul",
"Mike + The Mechanics",
"The Bangles",
"Tone Lōc",
"Bad English",
"Cher",
"Neneh Cherry",
"Sheriff",
"Taylor Dayne",
"Bon Jovi",
"Fine Young Cannibals",
"Sheena Easton",
"Young MC",
"Great White",
"Prince",
"Michael Damian",
"Jody Watley",
"The B-52's",
"Bobby Brown",
"New Kids on the Block",
"Rod Stewart",
"Love and Rockets",
"New Kids on the Block",
"Def Leppard",
"Richard Marx",
"Madonna",
"Dino",
"Donny Osmond",
"Tears for Fears",
"Madonna",
"White Lion",
"Skid Row",
"Duran Duran",
"38 Special",
"Karyn White",
"Tone Lōc",
"The Bangles",
"Natalie Cole",
"The Cure",
"Karyn White",
"The Jeff Healey Band",
"Guns N' Roses",
"Eddie Money",
"New Kids on the Block",
"Guns N' Roses",
"Surface",
"R.E.M.",
"Lita Ford and Ozzy Osbourne",
"Tiffany",
"Cher and Peter Cetera",
"Bobby Brown",
"Aerosmith",
"Bon Jovi",
"When in Rome",
"Edie Brickell & New Bohemians",
"Boys Club",
"Guns N' Roses",
"Samantha Fox",
"Rick Astley",
"Vanessa Williams",
"Babyface",
"Alice Cooper",
"Donna Summer",
"Michael Jackson",
"Deon Estus",
"Bobby Brown",
"Sa-Fire",
"Exposé",
"Ann Wilson and Robin Zander",
"Don Henley",
"Soul II Soul",
"İlhan irem",
"Grup Pan",
"Kayahan Demet",
"Sertab Erener",
"Rüya Ersavcı",
"Neco",
"Edip Akbayram",
"Fatih Erkoç",
"Seyyal Taner",
"Grup Gündoğarken",
"Hakan Peker",
"Sezen Aksu",
"Nil Burak",
"Kayahan  ",
"Kayahan",
"Aşkın Nur Yengi",
"Sinan Özen",
"Gül Erda",
"Gülden Karaböcek",
"Mazhar Fuat Özkan",
"Grup Denk",
"Ersen",
"Melike Demirağ",
"Atilla Atasoy",
"Erol Büyükburç",
"Özdemir Erdoğan",
"Ezginin Günlüğü",
"Aşkın Nur Yengi",
"Aşkın Nur Yengi",
"Erkin Koray",
"Ajda Pekkan",
"Nükhet Duru",
"Barış Manço",
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
