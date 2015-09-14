// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Love Will Keep Us Together 	Captain & Tennille",
"Rhinestone Cowboy 	Glen Campbell",
"Philadelphia Freedom 	Elton John",
"Before the Next Teardrop Falls 	Freddy Fender",
"My Eyes Adored You 	Frankie Valli",
"Shining Star 	Earth, Wind & Fire",
"Fame 	David Bowie",
"Laughter in the Rain 	Neil Sedaka",
"One of These Nights 	Eagles",
"Thank God I'm a Country Boy 	John Denver",
"Jive Talkin' 	Bee Gees",
"Best of My Love 	Eagles",
"Lovin' You 	Minnie Riperton",
"Kung Fu Fighting 	Carl Douglas",
"Black Water 	The Doobie Brothers",
"The Ballroom Blitz 	Sweet",
"(Hey Won't You Play) Another Somebody Done Somebody Wrong Song 	B.J. Thomas",
"He Don't Love You (Like I Love You) 	Tony Orlando and Dawn",
"At Seventeen 	Janis Ian",
"Pick Up the Pieces 	Average White Band",
"The Hustle 	Van McCoy & the Soul City Symphony",
"Lady Marmalade 	Labelle",
"Why Can't We Be Friends 	War",
"Love Won't Let Me Wait 	Major Harris",
"Boogie On Reggae Woman 	Stevie Wonder",
"Wasted Days and Wasted Nights 	Freddy Fender",
"Fight the Power 	The Isley Brothers",
"Angie Baby 	Helen Reddy",
"Jackie Blue 	Ozark Mountain Daredevils",
"Fire 	Ohio Players",
"Magic 	Pilot",
"Please Mr. Postman 	The Carpenters",
"Sister Golden Hair 	America",
"Lucy in the Sky with Diamonds 	Elton John",
"Mandy 	Barry Manilow",
"Have You Never Been Mellow 	Olivia Newton-John",
"Could It Be Magic 	Barry Manilow",
"Cat's in the Cradle 	Harry Chapin",
"Wildfire 	Michael Martin Murphey",
"I'm Not Lisa 	Jessi Colter",
"Listen to What the Man Said 	Wings",
"I'm Not in Love 	10cc",
"I Can Help 	Billy Swan",
"Fallin' in Love 	Hamilton, Joe Frank & Reynolds",
"Feelings 	Morris Albert",
"Chevy Van 	Sammy Johns",
"When Will I Be Loved 	Linda Ronstadt",
"You're the First, the Last, My Everything 	Barry White",
"Please Mr. Please 	Olivia Newton-John",
"You're No Good 	Linda Ronstadt",
"Dynomite 	Bazuka",
"Walking in Rhythm 	The Blackbyrds",
"The Way We Were/Try to Remember 	Gladys Knight & the Pips",
"Midnight Blue 	Melissa Manchester",
"Don't Call Us, We'll Call You 	Sugarloaf",
"Poetry Man 	Phoebe Snow",
"How Long? 	Ace",
"Express 	B.T. Express",
"That's the Way of the World 	Earth, Wind & Fire",
"Lady 	Styx",
"Bad Time 	Grand Funk",
"Only Women Bleed 	Alice Cooper",
"Doctor's Orders 	Carol Douglas",
"Get Down Tonight 	KC and the Sunshine Band",
"You Are So Beautiful 	Joe Cocker",
"One Man Woman/One Woman Man 	Paul Anka & Odia Coates",
"Feel Like Makin' Love 	Bad Company",
"How Sweet It Is (To Be Loved by You) 	James Taylor",
"Dance with Me 	Orleans",
"Cut the Cake 	Average White Band",
"Never Can Say Goodbye 	Gloria Gaynor",
"I Don't Like to Sleep Alone 	Paul Anka",
"Morning Side of the Mountain 	Donny & Marie Osmond",
"Some Kind of Wonderful 	Grand Funk Railroad",
"When Will I See You Again 	The Three Degrees",
"Get Down, Get Down (Get on the Floor) 	Joe Simon",
"I'm Sorry 	John Denver",
"Killer Queen 	Queen",
"Shoeshine Boy 	Eddie Kendricks",
"Do It ('Til You're Satisfied) 	B.T. Express",
"Can't Get It Out of My Head 	Electric Light Orchestra",
"Sha-La-La (Make Me Happy) 	Al Green",
"Lonely People 	America",
"You Got the Love 	Rufus",
"The Rockford Files 	Mike Post",
"It Only Takes a Minute 	Tavares",
"No No Song 	Ringo Starr",
"Junior's Farm 	Paul McCartney & Wings",
"Bungle in the Jungle 	Jethro Tull",
"Long Tall Glasses 	Leo Sayer",
"Someone Saved My Life Tonight 	Elton John",
"Misty 	Ray Stevens",
"Bad Blood 	Neil Sedaka & Elton John",
"Only Yesterday 	The Carpenters",
"I'm on Fire 	Dwight Twilley Band",
"Only You (And You Alone) 	Ringo Starr",
"Third Rate Romance 	Amazing Rhythm Aces",
"You Ain't Seen Nothing Yet 	Bachman–Turner Overdrive",
"Swearin' to God 	Frankie Valli",
"Get Dancin' 	Disco-Tex and the Sex-O-Lettes",
"İkimiz Bir Fidanız	Tülay",
"Hoşgör Sen	Ajda Pekkan",
"Deliyim Seviyorum	Selçuk Alagöz",
"Garip	Edip Akbayram",
"Tamirci Çırağı	Cem Karaca",
"Sessiz Gemi	Hümeyra",
"Ayyaş	Tanju Okan",
"Arkadaş	Melike Demirağ",
"Ayrılık Rüzgarı 	Alpay",
"Bir Bahar Akşamı	Barış Manço",
"Oh Ya	Nilüfer",
"2023	Barış Manço",
"Merhaba	Melike Demirağ",
"Günler Aylar	Aydın Tansel",
"Gam Üstüne Gam Yapılır	Edip Akbayram Dostlar",
"Benim Halkım	Tanju Okan",
"Ben Bilirim	Barış Manço",
"Estarabim	Erkin Koray",
"Ah Nerede	Füsun Önal",
"Kolum Nerden Aldın Bu Zinciri?	Edip Akbayram & Dostlar",
"Hadi Canım Sen de	Melike Demirağ",
"Sana Ne Kime Ne	Ajda Pekkan",
"Sen Gidince	Beyaz Kelebekler",
"Gafil Gezme Şaşkın	Ersen & Dadaşlar",
"Bana Gerçekleri Söyle	Gülden Karaböcek",
"Yarın Yarınlar	Ali Rıza Binboğa",
"Sen ve Ben	Yeliz",
"Anlasana (Beste)	İlhan İrem",
"Dostlar Beni Hatırlasın (Düzenleme)	Ersen & Dadaşlar",
"Hayat ve Ben (Aranjman)	Anne-Marie David",

 

    ];

var names = [

"Love Will Keep Us Together ",
"Rhinestone Cowboy ",
"Philadelphia Freedom ",
"Before the Next Teardrop Falls ",
"My Eyes Adored You ",
"Shining Star ",
"Fame ",
"Laughter in the Rain ",
"One of These Nights ",
"Thank God I'm a Country Boy ",
"Jive Talkin' ",
"Best of My Love ",
"Lovin' You ",
"Kung Fu Fighting ",
"Black Water ",
"The Ballroom Blitz ",
"(Hey Won't You Play) Another Somebody Done Somebody Wrong Song ",
"He Don't Love You (Like I Love You) ",
"At Seventeen ",
"Pick Up the Pieces ",
"The Hustle ",
"Lady Marmalade ",
"Why Can't We Be Friends ",
"Love Won't Let Me Wait ",
"Boogie On Reggae Woman ",
"Wasted Days and Wasted Nights ",
"Fight the Power ",
"Angie Baby ",
"Jackie Blue ",
"Fire ",
"Magic ",
"Please Mr. Postman ",
"Sister Golden Hair ",
"Lucy in the Sky with Diamonds ",
"Mandy ",
"Have You Never Been Mellow ",
"Could It Be Magic ",
"Cat's in the Cradle ",
"Wildfire ",
"I'm Not Lisa ",
"Listen to What the Man Said ",
"I'm Not in Love ",
"I Can Help ",
"Fallin' in Love ",
"Feelings ",
"Chevy Van ",
"When Will I Be Loved ",
"You're the First, the Last, My Everything ",
"Please Mr. Please ",
"You're No Good ",
"Dynomite ",
"Walking in Rhythm ",
"The Way We Were/Try to Remember ",
"Midnight Blue ",
"Don't Call Us, We'll Call You ",
"Poetry Man ",
"How Long? ",
"Express ",
"That's the Way of the World ",
"Lady ",
"Bad Time ",
"Only Women Bleed ",
"Doctor's Orders ",
"Get Down Tonight ",
"You Are So Beautiful ",
"One Man Woman/One Woman Man ",
"Feel Like Makin' Love ",
"How Sweet It Is (To Be Loved by You) ",
"Dance with Me ",
"Cut the Cake ",
"Never Can Say Goodbye ",
"I Don't Like to Sleep Alone ",
"Morning Side of the Mountain ",
"Some Kind of Wonderful ",
"When Will I See You Again ",
"Get Down, Get Down (Get on the Floor) ",
"I'm Sorry ",
"Killer Queen ",
"Shoeshine Boy ",
"Do It ('Til You're Satisfied) ",
"Can't Get It Out of My Head ",
"Sha-La-La (Make Me Happy) ",
"Lonely People ",
"You Got the Love ",
"The Rockford Files ",
"It Only Takes a Minute ",
"No No Song ",
"Junior's Farm ",
"Bungle in the Jungle ",
"Long Tall Glasses ",
"Someone Saved My Life Tonight ",
"Misty ",
"Bad Blood ",
"Only Yesterday ",
"I'm on Fire ",
"Only You (And You Alone) ",
"Third Rate Romance ",
"You Ain't Seen Nothing Yet ",
"Swearin' to God ",
"Get Dancin' ",
"İkimiz Bir Fidanız",
"Hoşgör Sen",
"Deliyim Seviyorum",
"Garip",
"Tamirci Çırağı",
"Sessiz Gemi",
"Ayyaş",
"Arkadaş",
"Ayrılık Rüzgarı ",
"Bir Bahar Akşamı",
"Oh Ya",
"2023",
"Merhaba",
"Günler Aylar",
"Gam Üstüne Gam Yapılır",
"Benim Halkım",
"Ben Bilirim",
"Estarabim",
"Ah Nerede",
"Kolum Nerden Aldın Bu Zinciri?",
"Hadi Canım Sen de",
"Sana Ne Kime Ne",
"Sen Gidince",
"Gafil Gezme Şaşkın",
"Bana Gerçekleri Söyle",
"Yarın Yarınlar",
"Sen ve Ben",
"Anlasana (Beste)",
"Dostlar Beni Hatırlasın (Düzenleme)",
"Hayat ve Ben (Aranjman)",




 ];

 var artist = [

"Captain & Tennille",
"Glen Campbell",
"Elton John",
"Freddy Fender",
"Frankie Valli",
"Earth, Wind & Fire",
"David Bowie",
"Neil Sedaka",
"Eagles",
"John Denver",
"Bee Gees",
"Eagles",
"Minnie Riperton",
"Carl Douglas",
"The Doobie Brothers",
"Sweet",
"B.J. Thomas",
"Tony Orlando and Dawn",
"Janis Ian",
"Average White Band",
"Van McCoy & the Soul City Symphony",
"Labelle",
"War",
"Major Harris",
"Stevie Wonder",
"Freddy Fender",
"The Isley Brothers",
"Helen Reddy",
"Ozark Mountain Daredevils",
"Ohio Players",
"Pilot",
"The Carpenters",
"America",
"Elton John",
"Barry Manilow",
"Olivia Newton-John",
"Barry Manilow",
"Harry Chapin",
"Michael Martin Murphey",
"Jessi Colter",
"Wings",
"10cc",
"Billy Swan",
"Hamilton, Joe Frank & Reynolds",
"Morris Albert",
"Sammy Johns",
"Linda Ronstadt",
"Barry White",
"Olivia Newton-John",
"Linda Ronstadt",
"Bazuka",
"The Blackbyrds",
"Gladys Knight & the Pips",
"Melissa Manchester",
"Sugarloaf",
"Phoebe Snow",
"Ace",
"B.T. Express",
"Earth, Wind & Fire",
"Styx",
"Grand Funk",
"Alice Cooper",
"Carol Douglas",
"KC and the Sunshine Band",
"Joe Cocker",
"Paul Anka & Odia Coates",
"Bad Company",
"James Taylor",
"Orleans",
"Average White Band",
"Gloria Gaynor",
"Paul Anka",
"Donny & Marie Osmond",
"Grand Funk Railroad",
"The Three Degrees",
"Joe Simon",
"John Denver",
"Queen",
"Eddie Kendricks",
"B.T. Express",
"Electric Light Orchestra",
"Al Green",
"America",
"Rufus",
"Mike Post",
"Tavares",
"Ringo Starr",
"Paul McCartney & Wings",
"Jethro Tull",
"Leo Sayer",
"Elton John",
"Ray Stevens",
"Neil Sedaka & Elton John",
"The Carpenters",
"Dwight Twilley Band",
"Ringo Starr",
"Amazing Rhythm Aces",
"Bachman–Turner Overdrive",
"Frankie Valli",
"Disco-Tex and the Sex-O-Lettes",
"Tülay",
"Ajda Pekkan",
"Selçuk Alagöz",
"Edip Akbayram",
"Cem Karaca",
"Hümeyra",
"Tanju Okan",
"Melike Demirağ",
"Alpay",
"Barış Manço",
"Nilüfer",
"Barış Manço",
"Melike Demirağ",
"Aydın Tansel",
"Edip Akbayram Dostlar",
"Tanju Okan",
"Barış Manço",
"Erkin Koray",
"Füsun Önal",
"Edip Akbayram & Dostlar",
"Melike Demirağ",
"Ajda Pekkan",
"Beyaz Kelebekler",
"Ersen & Dadaşlar",
"Gülden Karaböcek",
"Ali Rıza Binboğa",
"Yeliz",
"İlhan İrem",
"Ersen & Dadaşlar",
"Anne-Marie David",




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
