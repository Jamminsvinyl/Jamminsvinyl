// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Something About the Way You Look Tonight / Candle in the Wind 1997 	Elton John",
"Foolish Games / You Were Meant for Me 	Jewel",
"I'll Be Missing You 	Puff Daddy featuring Faith Evans and 112",
"Un-Break My Heart 	Toni Braxton",
"Can't Nobody Hold Me Down 	Puff Daddy featuring Mase",
"I Believe I Can Fly 	R. Kelly",
"Don't Let Go (Love) 	En Vogue",
"Return of the Mack 	Mark Morrison",
"How Do I Live 	LeAnn Rimes",
"Wannabe 	Spice Girls",
"Quit Playing Games (With My Heart) 	Backstreet Boys",
"MMMBop 	Hanson",
"For You I Will 	Monica",
"You Make Me Wanna... 	Usher",
"Bitch 	Meredith Brooks",
"Nobody 	Keith Sweat featuring Athena Cage",
"Semi-Charmed Life 	Third Eye Blind",
"Barely Breathing 	Duncan Sheik",
"Hard to Say I'm Sorry 	Az Yet featuring Peter Cetera",
"Mo Money Mo Problems 	The Notorious B.I.G. featuring Puff Daddy and Mase",
"The Freshmen 	The Verve Pipe",
"I Want You 	Savage Garden",
"No Diggity 	Blackstreet featuring Dr. Dre",
"I Belong to You (Every Time I See Your Face) 	Rome",
"Hypnotize 	The Notorious B.I.G.",
"Every Time I Close My Eyes 	Babyface",
"In My Bed 	Dru Hill",
"Say You'll Be There 	Spice Girls",
"Do You Know (What It Takes) 	Robyn",
"4 Seasons of Loneliness 	Boyz II Men",
"G.H.E.T.T.O.U.T. 	Changing Faces",
"Honey 	Mariah Carey",
"I Believe in You and Me 	Whitney Houston",
"Da' Dip 	Freak Nasty",
"2 Become 1 	Spice Girls",
"All for You 	Sister Hazel",
"Cupid 	112",
"Where Have All the Cowboys Gone? 	Paula Cole",
"Sunny Came Home 	Shawn Colvin",
"It's Your Love 	Tim McGraw and Faith Hill",
"Ooh Aah... Just a Little Bit 	Gina G",
"Mouth 	Merril Bainbridge",
"All Cried Out 	Allure featuring 112",
"I'm Still in Love with You 	New Edition",
"Invisible Man 	98 Degrees",
"Not Tonight 	Lil' Kim featuring Da Brat, Left Eye, Missy Elliott and Angie Martinez",
"Look into My Eyes 	Bone Thugs-n-Harmony",
"Get It Together 	702",
"All by Myself 	Celine Dion",
"It's All Coming Back to Me Now 	Celine Dion",
"My Love is the Shhh! 	Somethin' for the People",
"Where Do You Go 	No Mercy",
"I Finally Found Someone 	Barbra Streisand and Bryan Adams",
"I'll Be 	Foxy Brown featuring Jay-Z",
"If It Makes You Happy 	Sheryl Crow",
"Never Make a Promise 	Dru Hill",
"When You Love a Woman 	Journey",
"Up Jumps da Boogie 	Timbaland & Magoo featuring Missy Elliott and Aaliyah",
"I Don't Want To / I Love Me Some Him 	Toni Braxton",
"Everyday Is a Winding Road 	Sheryl Crow",
"Cold Rock a Party 	MC Lyte",
"Pony 	Ginuwine",
"Building a Mystery 	Sarah McLachlan",
"I Love You Always Forever 	Donna Lewis",
"Your Woman 	White Town",
"C U When U Get There 	Coolio featuring 40 Thevz",
"Change the World 	Eric Clapton",
"My Baby Daddy 	B-Rock and the Bizz",
"Tubthumping 	Chumbawamba",
"Gotham City 	R. Kelly",
"Last Night 	Az Yet",
"The Jock Jam 	Various artists",
"Big Daddy 	Heavy D",
"What About Us 	Total",
"Smile 	Scarface featuring 2Pac and Johnny P.",
"What's on Tonight 	Montell Jordan",
"Secret Garden 	Bruce Springsteen",
"The One I Gave My Heart To 	Aaliyah",
"Fly Like an Eagle 	Seal",
"No Time 	Lil' Kim featuring Puff Daddy",
"Naked Eye 	Luscious Jackson",
"Macarena (Bayside Boys Mix) 	Los del Río",
"On & On 	Erykah Badu",
"Don't Wanna Be a Player 	Joe",
"I Shot the Sheriff 	Warren G",
"You Should Be Mine (Don't Waste Your Time) 	Brian McKnight featuring Mase",
"Don't Cry for Me Argentina 	Madonna",
"Someone 	SWV and Puff Daddy",
"Go the Distance 	Michael Bolton",
"One More Time 	Real McCoy",
"Butta Love 	Next",
"Coco Jambo 	Mr. President",
"Twisted 	Keith Sweat",
"Barbie Girl 	Aqua",
"When You're Gone / Free to Decide 	The Cranberries",
"Let Me Clear My Throat 	DJ Kool",
"I Like It 	The Blackout All-Stars",
"You're Makin' Me High / Let It Flow 	Toni Braxton",
"You Must Love Me 	Madonna",
"Let It Go 	Ray J",
"Resimdeki Gözyaşları	Cem Karaca",
"Şairin Elinde	Kargo",
"Çapkın	Candan Erçetin",
"Yalan	Candan Erçetin",
"Yolcu	Ali Güven",
"Alem	Akın",
"Osman Abim	Hazal",
"Yabani 	Aşkın Nur Yengi",
"Sevgi Hırsızı	Burak Kut",
"Aman Be	Ayşen",
"Ayrılık Deme Bana	Çelik",
"Sebebim	Demet Akalın",
"Kop Gel Günahlarından	Deniz Seki",
"Sevildiğini Bil Yeter	Ege",
"Yalancı Bahar	Ebru Gündeş",
"Adı Sevda	Feridun Düzağaç",
"Sabır	Göksel",
"Canım Yanıyor	Hümeyra",
"Kızımız Olacaktı	İzel",
"Mavilim	Kayahan",
"Kar Beyaz	Kerim Tekin",
"Farzet 	Nalan",
"Yalan Mı	Özcan Deniz",
"Rafet El Roman	Affetmem",
"Esmer	Rober Hatemo",
"Sevdik Sevdalandık	Reyhan Karaca",
"Aslolan Aşktır	Sertab Erener",
"Şımarık	Tarkan",
"Ölürüm Sana	Tarkan",
"Unut Beni	Tarkan",
"Vazgeç Gönül	Zeynep Dizdar",
"Şimdi Hayallerdesin	Zerrin Özer",
"Allahın Varsa	Sezen Aksu",

 

    ];

var names = [

"Something About the Way You Look Tonight / Candle in the Wind 1997",
"Foolish Games / You Were Meant for Me",
"I'll Be Missing You ",
"Un-Break My Heart ",
"Can't Nobody Hold Me Down ",
"I Believe I Can Fly ",
"Don't Let Go (Love) ",
"Return of the Mack ",
"How Do I Live ",
"Wannabe ",
"Quit Playing Games (With My Heart) ",
"MMMBop ",
"For You I Will ",
"You Make Me Wanna... ",
"Bitch ",
"Nobody ",
"Semi-Charmed Life ",
"Barely Breathing ",
"Hard to Say I'm Sorry ",
"Mo Money Mo Problems ",
"The Freshmen ",
"I Want You ",
"No Diggity ",
"I Belong to You (Every Time I See Your Face) ",
"Hypnotize ",
"Every Time I Close My Eyes ",
"In My Bed ",
"Say You'll Be There ",
"Do You Know (What It Takes) ",
"4 Seasons of Loneliness ",
"G.H.E.T.T.O.U.T. ",
"Honey ",
"I Believe in You and Me ",
"Da' Dip ",
"2 Become 1 ",
"All for You ",
"Cupid ",
"Where Have All the Cowboys Gone? ",
"Sunny Came Home ",
"It's Your Love ",
"Ooh Aah... Just a Little Bit ",
"Mouth ",
"All Cried Out ",
"I'm Still in Love with You ",
"Invisible Man ",
"Not Tonight ",
"Look into My Eyes ",
"Get It Together ",
"All by Myself ",
"It's All Coming Back to Me Now ",
"My Love is the Shhh! ",
"Where Do You Go ",
"I Finally Found Someone ",
"I'll Be ",
"If It Makes You Happy ",
"Never Make a Promise ",
"When You Love a Woman ",
"Up Jumps da Boogie ",
"I Don't Want To / I Love Me Some Him",
"Everyday Is a Winding Road ",
"Cold Rock a Party ",
"Pony ",
"Building a Mystery ",
"I Love You Always Forever ",
"Your Woman ",
"C U When U Get There ",
"Change the World ",
"My Baby Daddy ",
"Tubthumping ",
"Gotham City ",
"Last Night ",
"The Jock Jam ",
"Big Daddy ",
"What About Us ",
"Smile ",
"What's on Tonight ",
"Secret Garden ",
"The One I Gave My Heart To ",
"Fly Like an Eagle ",
"No Time ",
"Naked Eye ",
"Macarena (Bayside Boys Mix) ",
"On & On ",
"Don't Wanna Be a Player ",
"I Shot the Sheriff ",
"You Should Be Mine (Don't Waste Your Time) ",
"Don't Cry for Me Argentina ",
"Someone ",
"Go the Distance ",
"One More Time ",
"Butta Love ",
"Coco Jambo ",
"Twisted ",
"Barbie Girl ",
"When You're Gone / Free to Decide",
"Let Me Clear My Throat ",
"I Like It ",
"You're Makin' Me High / Let It Flow",
"You Must Love Me ",
"Let It Go ",
"Resimdeki Gözyaşları",
"Şairin Elinde",
"Çapkın",
"Yalan",
"Yolcu",
"Alem",
"Osman Abim",
"Yabani ",
"Sevgi Hırsızı",
"Aman Be",
"Ayrılık Deme Bana",
"Sebebim",
"Kop Gel Günahlarından",
"Sevildiğini Bil Yeter",
"Yalancı Bahar",
"Adı Sevda",
"Sabır",
"Canım Yanıyor",
"Kızımız Olacaktı",
"Mavilim",
"Kar Beyaz",
"Farzet ",
"Yalan Mı",
"Rafet El Roman",
"Esmer",
"Sevdik Sevdalandık",
"Aslolan Aşktır",
"Şımarık",
"Ölürüm Sana",
"Unut Beni",
"Vazgeç Gönül",
"Şimdi Hayallerdesin",
"Allahın Varsa",




 ];

 var artist = [

"Elton John",
"Jewel",
"Puff Daddy featuring Faith Evans and 112",
"Toni Braxton",
"Puff Daddy featuring Mase",
"R. Kelly",
"En Vogue",
"Mark Morrison",
"LeAnn Rimes",
"Spice Girls",
"Backstreet Boys",
"Hanson",
"Monica",
"Usher",
"Meredith Brooks",
"Keith Sweat featuring Athena Cage",
"Third Eye Blind",
"Duncan Sheik",
"Az Yet featuring Peter Cetera",
"The Notorious B.I.G. featuring Puff Daddy and Mase",
"The Verve Pipe",
"Savage Garden",
"Blackstreet featuring Dr. Dre",
"Rome",
"The Notorious B.I.G.",
"Babyface",
"Dru Hill",
"Spice Girls",
"Robyn",
"Boyz II Men",
"Changing Faces",
"Mariah Carey",
"Whitney Houston",
"Freak Nasty",
"Spice Girls",
"Sister Hazel",
"112",
"Paula Cole",
"Shawn Colvin",
"Tim McGraw and Faith Hill",
"Gina G",
"Merril Bainbridge",
"Allure featuring 112",
"New Edition",
"98 Degrees",
"Lil' Kim featuring Da Brat, Left Eye, Missy Elliott and Angie Martinez",
"Bone Thugs-n-Harmony",
"702",
"Celine Dion",
"Celine Dion",
"Somethin' for the People",
"No Mercy",
"Barbra Streisand and Bryan Adams",
"Foxy Brown featuring Jay-Z",
"Sheryl Crow",
"Dru Hill",
"Journey",
"Timbaland & Magoo featuring Missy Elliott and Aaliyah",
"Toni Braxton",
"Sheryl Crow",
"MC Lyte",
"Ginuwine",
"Sarah McLachlan",
"Donna Lewis",
"White Town",
"Coolio featuring 40 Thevz",
"Eric Clapton",
"B-Rock and the Bizz",
"Chumbawamba",
"R. Kelly",
"Az Yet",
"Various artists",
"Heavy D",
"Total",
"Scarface featuring 2Pac and Johnny P.",
"Montell Jordan",
"Bruce Springsteen",
"Aaliyah",
"Seal",
"Lil' Kim featuring Puff Daddy",
"Luscious Jackson",
"Los del Río",
"Erykah Badu",
"Joe",
"Warren G",
"Brian McKnight featuring Mase",
"Madonna",
"SWV and Puff Daddy",
"Michael Bolton",
"Real McCoy",
"Next",
"Mr. President",
"Keith Sweat",
"Aqua",
"The Cranberries",
"DJ Kool",
"The Blackout All-Stars",
"Toni Braxton",
"Madonna",
"Ray J",
"Cem Karaca",
"Kargo",
"Candan Erçetin",
"Candan Erçetin",
"Ali Güven",
"Akın",
"Hazal",
"Aşkın Nur Yengi",
"Burak Kut",
"Ayşen",
"Çelik",
"Demet Akalın",
"Deniz Seki",
"Ege",
"Ebru Gündeş",
"Feridun Düzağaç",
"Göksel",
"Hümeyra",
"İzel",
"Kayahan",
"Kerim Tekin",
"Nalan",
"Özcan Deniz",
"Affetmem",
"Rober Hatemo",
"Reyhan Karaca",
"Sertab Erener",
"Tarkan",
"Tarkan",
"Tarkan",
"Zeynep Dizdar",
"Zerrin Özer",
"Sezen Aksu",




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
