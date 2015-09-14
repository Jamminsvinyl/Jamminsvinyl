// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Bridge over Troubled Water 	Simon & Garfunkel",
"(They Long to Be) Close to You 	The Carpenters",
"American Woman 	The Guess Who",
"Raindrops Keep Fallin' on My Head 	B.J. Thomas",
"War 	Edwin Starr",
"Ain't No Mountain High Enough 	Diana Ross",
"I'll Be There 	The Jackson 5",
"Get Ready 	Rare Earth",
"Let It Be 	The Beatles",
"Band of Gold 	Freda Payne",
"Mama Told Me (Not to Come) 	Three Dog Night",
"Everything Is Beautiful 	Ray Stevens",
"Make It with You 	Bread",
"Hitchin' a Ride 	Vanity Fare",
"ABC 	The Jackson 5",
"The Love You Save 	The Jackson 5",
"Cracklin' Rosie 	Neil Diamond",
"Candida 	Dawn",
"Thank You (Falettinme Be Mice Elf Agin) 	Sly & the Family Stone",
"Spill the Wine 	Eric Burdon & War",
"O-o-h Child 	Five Stairsteps",
"Spirit in the Sky 	Norman Greenbaum",
"Lay Down (Candles in the Rain) 	Melanie",
"Ball of Confusion (That's What the World Is Today) 	The Temptations",
"Love on a Two-Way Street 	The Moments",
"Which Way You Goin' Billy? 	The Poppy Family",
"All Right Now 	Free",
"I Want You Back 	The Jackson 5",
"Julie (Do Ya Love Me) 	Bobby Sherman",
"Green-Eyed Lady 	Sugarloaf",
"Signed, Sealed, Delivered I'm Yours 	Stevie Wonder",
"Ride Captain Ride 	Blues Image",
"Venus 	Shocking Blue",
"Instant Karma! 	John Lennon",
"Patches 	Clarence Carter",
"Lookin' out My Back Door 	Creedence Clearwater Revival",
"Rainy Night in Georgia 	Brook Benton",
"Something's Burning 	Kenny Rogers & The First Edition",
"Give Me Just a Little More Time 	Chairmen of the Board",
"Love Grows (Where My Rosemary Goes) 	Edison Lighthouse",
"The Long and Winding Road 	The Beatles",
"Snowbird 	Anne Murray",
"Reflections of My Life 	Marmalade",
"Hey There Lonely Girl 	Eddie Holman",
"The Rapper 	The Jaggerz",
"He Ain't Heavy, He's My Brother 	The Hollies",
"Tighter, Tighter 	Alive N Kickin'",
"Come and Get It 	Badfinger",
"Cecilia 	Simon & Garfunkel",
"Love Land 	Charles Wright & the Watts 103rd Street Rhythm Band",
"Turn Back the Hands of Time 	Tyrone Davis",
"Lola 	The Kinks",
"In the Summertime 	Mungo Jerry",
"Indiana Wants Me 	R. Dean Taylor",
"(I Know) I'm Losing You 	Rare Earth",
"Easy Come, Easy Go 	Bobby Sherman",
"Express Yourself 	Charles Wright & the Watts 103rd Street Rhythm Band",
"Still Water (Love) 	The Four Tops",
"Make Me Smile 	Chicago",
"The House of the Rising Sun 	Frijid Pink",
"25 or 6 to 4 	Chicago",
"My Baby Loves Lovin' 	White Plains",
"Love or Let Me Be Lonely 	The Friends of Distinction",
"United We Stand 	The Brotherhood of Man",
"We've Only Just Begun 	The Carpenters",
"Arizona 	Mark Lindsay",
"Fire and Rain 	James Taylor",
"Groovy Situation 	Gene Chandler",
"Evil Ways 	Santana",
"No Time 	The Guess Who",
"Didn't I (Blow Your Mind This Time) 	The Delfonics",
"The Wonder of You 	Elvis Presley",
"Up Around the Bend 	Creedence Clearwater Revival",
"(If You Let Me Make Love To You Then) Why Can't I Touch You? 	Ronnie Dyson",
"I Just Can't Help Believing 	B.J. Thomas",
"It's a Shame 	The Spinners",
"For the Love of Him 	Bobbi Martin",
"Mississippi Queen 	Mountain",
"I Want to Take You Higher 	Ike & Tina Turner",
"The Letter 	Joe Cocker",
"Ma Belle Amie 	Tee Set",
"The Bells 	The Originals",
"Yellow River 	Christie",
"Somebody's Been Sleeping 	100 Proof (Aged in Soul)",
"Vehicle 	The Ides of March",
"Gimme Dat Ding 	The Pipkins",
"Lay a Little Lovin' On Me 	Robin McNamara",
"Up the Ladder to the Roof 	The Supremes",
"Travelin' Band 	Creedence Clearwater Revival",
"Come Saturday Morning 	The Sandpipers",
"Psychedelic Shack 	The Temptations",
"Without Love (There Is Nothing) 	Tom Jones",
"Are You Ready? 	Pacific Gas & Electric",
"Woodstock 	Crosby, Stills, Nash & Young",
"I'll Never Fall in Love Again 	Dionne Warwick",
"Look What They've Done to My Song Ma 	The New Seekers",
"Walk A Mile In My Shoes 	Joe South",
"The Thrill Is Gone 	B.B. King",
"It's Only Make Believe 	Glen Campbell",
"Call Me 	Aretha Franklin",
"Dağlar Dağlar 	Barış Manço",
"Derule 	Barış Manço",
"Hasret 	Tanju Okan",
"Sensiz Yıllarda 	Ajda Pekkan",
"Söyle Sazım 	Fikret Kızılok",
"Kendim Ettim Kendim Buldum 	Cem Karaca",
"Yumma Gözün Kör Gibi 	Fikret Kızılok",
"Şeyh Şamil 	Durul Gence 10",
"Sana Gönül Verdim Diye 	Berkant",
"Güzel Ne Güzel Olmuşsun 	Fikret Kızılok",
"Ağlama Değmez Hayat 	Barış Manço",
"Duyduk Duymadık Demeyin 	Özdemir Erdoğan",
"Dağ ve Çocuk 	Moğollar",
"Yağmur 	Ajda Pekkan",
"Artık Sevmeyeceğim 	Neşe Karaböcek",
"Yoh Yoh 	Esin Afşar",
"Vakit Yok Gemi Kalkıyor 	Metin Ersoy",
"Meçhul 	Erkin Koray",
"Yavaş Yavaşça 	Ay-Feri",
"Leblebi 	Modern Folk Üçlüsü",
"Fabrika Kızı 	Alpay",
"Ali Paşa Ağıtı 	Modern Folk Üçlüsü",
"İnme 	Timur Selçuk",
"Ve Ölüm 	Üç Hür-El",
"Yeni Bir Dünya İstiyorum 	Ali Kocatepe",
"Seyyid Osman 	Dönüşüm",
"Gurbet Yorganı 	Esin Afşar",
"Kiziroğlu Mustafa Bey 	Dönüşüm"

 

    ];

var names = [

"Bridge over Troubled Water",
"(They Long to Be) Close to You",
"American Woman",
"Raindrops Keep Fallin' on My Head",
"War",
"Ain't No Mountain High Enough",
"I'll Be There",
"Get Ready",
"Let It Be",
"Band of Gold",
"Mama Told Me (Not to Come)",
"Everything Is Beautiful",
"Make It with You",
"Hitchin' a Ride",
"ABC",
"The Love You Save",
"Cracklin' Rosie",
"Candida",
"Thank You (Falettinme Be Mice Elf Agin)",
"Spill the Wine",
"O-o-h Child",
"Spirit in the Sky",
"Lay Down (Candles in the Rain)",
"Ball of Confusion (That's What the World Is Today)",
"Love on a Two-Way Street",
"Which Way You Goin' Billy?",
"All Right Now",
"I Want You Back",
"Julie (Do Ya Love Me)",
"Green-Eyed Lady",
"Signed, Sealed, Delivered I'm Yours",
"Ride Captain Ride",
"Venus",
"Instant Karma!",
"Patches",
"Lookin' out My Back Door",
"Rainy Night in Georgia",
"Something's Burning",
"Give Me Just a Little More Time",
"Love Grows (Where My Rosemary Goes)",
"The Long and Winding Road",
"Snowbird",
"Reflections of My Life",
"Hey There Lonely Girl",
"The Rapper",
"He Ain't Heavy, He's My Brother",
"Tighter, Tighter",
"Come and Get It",
"Cecilia",
"Love Land",
"Turn Back the Hands of Time",
"Lola",
"In the Summertime",
"Indiana Wants Me",
"(I Know) I'm Losing You",
"Easy Come, Easy Go",
"Express Yourself",
"Still Water (Love)",
"Make Me Smile",
"The House of the Rising Sun",
"25 or 6 to 4",
"My Baby Loves Lovin'",
"Love or Let Me Be Lonely",
"United We Stand",
"We've Only Just Begun",
"Arizona",
"Fire and Rain",
"Groovy Situation",
"Evil Ways",
"No Time",
"Didn't I (Blow Your Mind This Time)",
"The Wonder of You",
"Up Around the Bend",
"(If You Let Me Make Love To You Then) Why Can't I Touch You?",
"I Just Can't Help Believing",
"It's a Shame",
"For the Love of Him",
"Mississippi Queen",
"I Want to Take You Higher",
"The Letter",
"Ma Belle Amie",
"The Bells",
"Yellow River",
"Somebody's Been Sleeping",
"Vehicle",
"Gimme Dat Ding",
"Lay a Little Lovin' On Me",
"Up the Ladder to the Roof",
"Travelin' Band",
"Come Saturday Morning",
"Psychedelic Shack",
"Without Love (There Is Nothing)",
"Are You Ready?",
"Woodstock",
"I'll Never Fall in Love Again",
"Look What They've Done to My Song Ma",
"Walk A Mile In My Shoes",
"The Thrill Is Gone",
"It's Only Make Believe",
"Call Me",
"Dağlar Dağlar",
"Derule",
"Hasret",
"Sensiz Yıllarda",
"Söyle Sazım",
"Kendim Ettim Kendim Buldum",
"Yumma Gözün Kör Gibi",
"Şeyh Şamil",
"Sana Gönül Verdim Diye",
"Güzel Ne Güzel Olmuşsun",
"Ağlama Değmez Hayat",
"Duyduk Duymadık Demeyin",
"Dağ ve Çocuk",
"Yağmur",
"Artık Sevmeyeceğim",
"Yoh Yoh",
"Vakit Yok Gemi Kalkıyor",
"Meçhul",
"Yavaş Yavaşça",
"Leblebi",
"Fabrika Kızı",
"Ali Paşa Ağıtı",
"İnme",
"Ve Ölüm",
"Yeni Bir Dünya İstiyorum",
"Seyyid Osman",
"Gurbet Yorganı",
"Kiziroğlu Mustafa Bey"




 ];

 var artist = [

"Simon & Garfunkel",
"The Carpenters",
"The Guess Who",
"B.J. Thomas",
"Edwin Starr",
"Diana Ross",
"The Jackson 5",
"Rare Earth",
"The Beatles",
"Freda Payne",
"Three Dog Night",
"Ray Stevens",
"Bread",
"Vanity Fare",
"The Jackson 5",
"The Jackson 5",
"Neil Diamond",
"Dawn",
"Sly & the Family Stone",
"Eric Burdon & War",
"Five Stairsteps",
"Norman Greenbaum",
"Melanie",
"The Temptations",
"The Moments",
"The Poppy Family",
"Free",
"The Jackson 5",
"Bobby Sherman",
"Sugarloaf",
"Stevie Wonder",
"Blues Image",
"Shocking Blue",
"John Lennon",
"Clarence Carter",
"Creedence Clearwater Revival",
"Brook Benton",
"Kenny Rogers & The First Edition",
"Chairmen of the Board",
"Edison Lighthouse",
"The Beatles",
"Anne Murray",
"Marmalade",
"Eddie Holman",
"The Jaggerz",
"The Hollies",
"Alive N Kickin'",
"Badfinger",
"Simon & Garfunkel",
"Charles Wright & the Watts 103rd Street Rhythm Band",
"Tyrone Davis",
"The Kinks",
"Mungo Jerry",
"R. Dean Taylor",
"Rare Earth",
"Bobby Sherman",
"Charles Wright & the Watts 103rd Street Rhythm Band",
"The Four Tops",
"Chicago",
"Frijid Pink",
"Chicago",
"White Plains",
"The Friends of Distinction",
"The Brotherhood of Man",
"The Carpenters",
"Mark Lindsay",
"James Taylor",
"Gene Chandler",
"Santana",
"The Guess Who",
"The Delfonics",
"Elvis Presley",
"Creedence Clearwater Revival",
"Ronnie Dyson",
"B.J. Thomas",
"The Spinners",
"Bobbi Martin",
"Mountain",
"Ike & Tina Turner",
"Joe Cocker",
"Tee Set",
"The Originals",
"Christie",
"100 Proof (Aged in Soul)",
"The Ides of March",
"The Pipkins",
"Robin McNamara",
"The Supremes",
"Creedence Clearwater Revival",
"The Sandpipers",
"The Temptations",
"Tom Jones",
"Pacific Gas & Electric",
"Crosby, Stills, Nash & Young",
"Dionne Warwick",
"The New Seekers",
"Joe South",
"B.B. King",
"Glen Campbell",
"Aretha Franklin",
"Barış Manço",
"Barış Manço",
"Tanju Okan",
"Ajda Pekkan",
"Fikret Kızılok",
"Cem Karaca",
"Fikret Kızılok",
"Durul Gence 10",
"Berkant",
"Fikret Kızılok",
"Barış Manço",
"Özdemir Erdoğan",
"Moğollar",
"Ajda Pekkan",
"Neşe Karaböcek",
"Esin Afşar",
"Metin Ersoy",
"Erkin Koray",
"Ay-Feri",
"Modern Folk Üçlüsü",
"Alpay",
"Modern Folk Üçlüsü",
"Timur Selçuk",
"Üç Hür-El",
"Ali Kocatepe",
"Dönüşüm",
"Esin Afşar",
"Dönüşüm"




];




// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

 

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
