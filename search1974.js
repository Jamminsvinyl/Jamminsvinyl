// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"The Way We Were 	Barbra Streisand",
"Seasons in the Sun 	Terry Jacks",
"Love's Theme 	Love Unlimited Orchestra",
"Come and Get Your Love 	Redbone",
"Dancing Machine 	The Jackson 5",
"The Loco-Motion 	Grand Funk Railroad",
"TSOP (The Sound of Philadelphia) 	MFSB",
"The Streak 	Ray Stevens",
"Bennie and the Jets 	Elton John",
"One Hell of a Woman 	Mac Davis",
"Until You Come Back to Me (That's What I'm Gonna Do) 	Aretha Franklin",
"Jungle Boogie 	Kool & the Gang",
"Midnight at the Oasis 	Maria Muldaur",
"You Make Me Feel Brand New 	The Stylistics",
"Show and Tell 	Al Wilson",
"Spiders and Snakes 	Jim Stafford",
"Rock On 	David Essex",
"Sunshine on My Shoulders 	John Denver",
"Sideshow 	Blue Magic",
"Hooked on a Feeling 	Blue Swede",
"Billy Don't Be a Hero 	Bo Donaldson and The Heywoods",
"Band on the Run 	Paul McCartney & Wings",
"The Most Beautiful Girl 	Charlie Rich",
"Time in a Bottle 	Jim Croce",
"Annie's Song 	John Denver",
"Let Me Be There 	Olivia Newton-John",
"Sundown 	Gordon Lightfoot",
"(You're) Having My Baby 	Paul Anka",
"Rock Me Gently 	Andy Kim",
"Boogie Down 	Eddie Kendricks",
"You're Sixteen 	Ringo Starr",
"If You Love Me (Let Me Know) 	Olivia Newton-John",
"Dark Lady 	Cher",
"Best Thing That Ever Happened to Me 	Gladys Knight & the Pips",
"Feel Like Makin' Love 	Roberta Flack",
"Just Don't Want to Be Lonely 	The Main Ingredient",
"Nothing from Nothing 	Billy Preston",
"Rock Your Baby 	George McCrae",
"Top of the World 	The Carpenters",
"The Joker 	Steve Miller Band",
"I've Got to Use My Imagination 	Gladys Knight & the Pips",
"The Show Must Go On 	Three Dog Night",
"Rock the Boat 	The Hues Corporation",
"Smokin' in the Boys Room 	Brownsville Station",
"Living for the City 	Stevie Wonder",
"The Night Chicago Died 	Paper Lace",
"Then Came You 	Dionne Warwick & The Spinners",
"The Entertainer 	Marvin Hamlisch",
"Waterloo 	ABBA",
"The Air That I Breathe 	The Hollies",
"Rikki Don't Lose That Number 	Steely Dan",
"Mockingbird 	Carly Simon & James Taylor",
"Help Me 	Joni Mitchell",
"You Won't See Me 	Anne Murray",
"Never, Never Gonna Give You Up 	Barry White",
"Tell Me Something Good 	Rufus",
"You and Me Against the World 	Helen Reddy",
"Rock and Roll Heaven 	The Righteous Brothers",
"Hollywood Swinging 	Kool & the Gang",
"Be Thankful for What You Got 	William DeVaughn",
"Hang on in There Baby 	Johnny Bristol",
"Eres tú 	Mocedades",
"Takin' Care of Business 	Bachman-Turner Overdrive",
"Radar Love 	Golden Earring",
"Please Come to Boston 	Dave Loggins",
"Keep On Smilin' 	Wet Willie",
"Lookin' for a Love 	Bobby Womack",
"Put Your Hands Together 	The O'Jays",
"On and On 	Gladys Knight & the Pips",
"Oh Very Young 	Cat Stevens",
"Leave Me Alone (Ruby Red Dress) 	Helen Reddy",
"Goodbye Yellow Brick Road 	Elton John",
"(I've Been) Searchin' So Long 	Chicago",
"Oh My My 	Ringo Starr",
"For the Love of Money 	The O'Jays",
"I Shot the Sheriff 	Eric Clapton",
"Jet 	Paul McCartney & Wings",
"Don't Let the Sun Go Down on Me 	Elton John",
"Tubular Bells 	Mike Oldfield",
"A Love Song 	Anne Murray",
"I'm Leaving It Up to You 	Donny and Marie Osmond",
"Hello It's Me 	Todd Rundgren",
"I Love 	Tom T. Hall",
"Clap for the Wolfman 	The Guess Who featuring Wolfman Jack",
"I'll Have to Say I Love You in a Song 	Jim Croce",
"The Lord's Prayer 	Sister Janet Mead",
"Trying To Hold On To My Woman 	Lamont Dozier",
"Don't You Worry 'bout a Thing 	Stevie Wonder",
"A Very Special Love Song 	Charlie Rich",
"My Girl Bill 	Jim Stafford",
"My Mistake (Was to Love You) 	Diana Ross & Marvin Gaye",
"Helen Wheels 	Paul McCartney & Wings",
"Wildwood Weed 	Jim Stafford",
"Beach Baby 	The First Class",
"Me and Baby Brother 	War",
"Rockin' Roll Baby 	The Stylistics",
"I Honestly Love You 	Olivia Newton-John",
"Call on Me 	Chicago",
"Wild Thing 	Fancy",
"Mighty Love 	The Spinners",
"Memleketim	Ayten Alpman",
"İnce İnce Bir Kar Yağar	Edip Akbayram",
"Namus Belası	Cem Karaca",
"Değmen Benim	Edip Akbayram",
"Unutama Beni	Esmeray",
"Güle Güle Sana	Selçuk Ural",
"Haydi Sil Gözlerini	İlhan İrem",
"Ahu Gözlüm	Gülden Karaböcek",
"Olmaz Böyle Şey	Yeşim",
"Kadınım	Tanju Okan",
"Şaşkın	Erkin Koray",
"Yazık Oldu Yarınlara	İlhan İrem",
"Niye Çattın Kaşlarını	Tülay",
"Randevu	Gökben",
"Girne den Yol Bağladık	Yasemin Kumral",
"Fesupanallah	Erkin Koray",
"Rüzgar Gibi Geçti	Kenan",
"Hey Gidi Dünya Hey	Ali Kocatepe",
"Neydi Neydi Ne	Semiramis Pekkan",
"Elbet Birgün Buluşacağız	Yurdaer Doğulu",
"Beyaz Atlı	Cem Karaca",
"Nasılsın İyi misin	Ajda Pekkan",
"Yedin Beni	Ersen Dadaşlar",
"Allahım Yeter	Alpay",
"Ah Berelim	Alpay",
"Aç Gözünü	Füsun Önal",
"Yolver	Ertan Anapa",
"Yiğitler	Sevil - Ayla",
"Sen Olsan Yeter	Yeliz",

 

    ];

var names = [

"The Way We Were ",
"Seasons in the Sun ",
"Love's Theme ",
"Come and Get Your Love ",
"Dancing Machine ",
"The Loco-Motion ",
"TSOP (The Sound of Philadelphia) ",
"The Streak ",
"Bennie and the Jets ",
"One Hell of a Woman ",
"Until You Come Back to Me (That's What I'm Gonna Do) ",
"Jungle Boogie ",
"Midnight at the Oasis ",
"You Make Me Feel Brand New ",
"Show and Tell ",
"Spiders and Snakes ",
"Rock On ",
"Sunshine on My Shoulders ",
"Sideshow ",
"Hooked on a Feeling ",
"Billy Don't Be a Hero ",
"Band on the Run ",
"The Most Beautiful Girl ",
"Time in a Bottle ",
"Annie's Song ",
"Let Me Be There ",
"Sundown ",
"(You're) Having My Baby ",
"Rock Me Gently ",
"Boogie Down ",
"You're Sixteen ",
"If You Love Me (Let Me Know) ",
"Dark Lady ",
"Best Thing That Ever Happened to Me ",
"Feel Like Makin' Love ",
"Just Don't Want to Be Lonely ",
"Nothing from Nothing ",
"Rock Your Baby ",
"Top of the World ",
"The Joker ",
"I've Got to Use My Imagination ",
"The Show Must Go On ",
"Rock the Boat ",
"Smokin' in the Boys Room ",
"Living for the City ",
"The Night Chicago Died ",
"Then Came You ",
"The Entertainer ",
"Waterloo ",
"The Air That I Breathe ",
"Rikki Don't Lose That Number ",
"Mockingbird ",
"Help Me ",
"You Won't See Me ",
"Never, Never Gonna Give You Up ",
"Tell Me Something Good ",
"You and Me Against the World ",
"Rock and Roll Heaven ",
"Hollywood Swinging ",
"Be Thankful for What You Got ",
"Hang on in There Baby ",
"Eres tú ",
"Takin' Care of Business ",
"Radar Love ",
"Please Come to Boston ",
"Keep On Smilin' ",
"Lookin' for a Love ",
"Put Your Hands Together ",
"On and On ",
"Oh Very Young ",
"Leave Me Alone (Ruby Red Dress) ",
"Goodbye Yellow Brick Road ",
"(I've Been) Searchin' So Long ",
"Oh My My ",
"For the Love of Money ",
"I Shot the Sheriff ",
"Jet ",
"Don't Let the Sun Go Down on Me ",
"Tubular Bells ",
"A Love Song ",
"I'm Leaving It Up to You ",
"Hello It's Me ",
"I Love ",
"Clap for the Wolfman ",
"I'll Have to Say I Love You in a Song ",
"The Lord's Prayer ",
"Trying To Hold On To My Woman ",
"Don't You Worry 'bout a Thing ",
"A Very Special Love Song ",
"My Girl Bill ",
"My Mistake (Was to Love You) ",
"Helen Wheels ",
"Wildwood Weed ",
"Beach Baby ",
"Me and Baby Brother ",
"Rockin' Roll Baby ",
"I Honestly Love You ",
"Call on Me ",
"Wild Thing ",
"Mighty Love ",
"Memleketim",
"İnce İnce Bir Kar Yağar",
"Namus Belası",
"Değmen Benim",
"Unutama Beni",
"Güle Güle Sana",
"Haydi Sil Gözlerini",
"Ahu Gözlüm",
"Olmaz Böyle Şey",
"Kadınım",
"Şaşkın",
"Yazık Oldu Yarınlara",
"Niye Çattın Kaşlarını",
"Randevu",
"Girne den Yol Bağladık",
"Fesupanallah",
"Rüzgar Gibi Geçti",
"Hey Gidi Dünya Hey",
"Neydi Neydi Ne",
"Elbet Birgün Buluşacağız",
"Beyaz Atlı",
"Nasılsın İyi misin",
"Yedin Beni",
"Allahım Yeter",
"Ah Berelim",
"Aç Gözünü",
"Yolver",
"Yiğitler",
"Sen Olsan Yeter",




 ];

 var artist = [

"Barbra Streisand",
"Terry Jacks",
"Love Unlimited Orchestra",
"Redbone",
"The Jackson 5",
"Grand Funk Railroad",
"MFSB",
"Ray Stevens",
"Elton John",
"Mac Davis",
"Aretha Franklin",
"Kool & the Gang",
"Maria Muldaur",
"The Stylistics",
"Al Wilson",
"Jim Stafford",
"David Essex",
"John Denver",
"Blue Magic",
"Blue Swede",
"Bo Donaldson and The Heywoods",
"Paul McCartney & Wings",
"Charlie Rich",
"Jim Croce",
"John Denver",
"Olivia Newton-John",
"Gordon Lightfoot",
"Paul Anka",
"Andy Kim",
"Eddie Kendricks",
"Ringo Starr",
"Olivia Newton-John",
"Cher",
"Gladys Knight & the Pips",
"Roberta Flack",
"The Main Ingredient",
"Billy Preston",
"George McCrae",
"The Carpenters",
"Steve Miller Band",
"Gladys Knight & the Pips",
"Three Dog Night",
"The Hues Corporation",
"Brownsville Station",
"Stevie Wonder",
"Paper Lace",
"Dionne Warwick & The Spinners",
"Marvin Hamlisch",
"ABBA",
"The Hollies",
"Steely Dan",
"Carly Simon & James Taylor",
"Joni Mitchell",
"Anne Murray",
"Barry White",
"Rufus",
"Helen Reddy",
"The Righteous Brothers",
"Kool & the Gang",
"William DeVaughn",
"Johnny Bristol",
"Mocedades",
"Bachman-Turner Overdrive",
"Golden Earring",
"Dave Loggins",
"Wet Willie",
"Bobby Womack",
"The O'Jays",
"Gladys Knight & the Pips",
"Cat Stevens",
"Helen Reddy",
"Elton John",
"Chicago",
"Ringo Starr",
"The O'Jays",
"Eric Clapton",
"Paul McCartney & Wings",
"Elton John",
"Mike Oldfield",
"Anne Murray",
"Donny and Marie Osmond",
"Todd Rundgren",
"Tom T. Hall",
"The Guess Who featuring Wolfman Jack",
"Jim Croce",
"Sister Janet Mead",
"Lamont Dozier",
"Stevie Wonder",
"Charlie Rich",
"Jim Stafford",
"Diana Ross & Marvin Gaye",
"Paul McCartney & Wings",
"Jim Stafford",
"The First Class",
"War",
"The Stylistics",
"Olivia Newton-John",
"Chicago",
"Fancy",
"The Spinners",
"Ayten Alpman",
"Edip Akbayram",
"Cem Karaca",
"Edip Akbayram",
"Esmeray",
"Selçuk Ural",
"İlhan İrem",
"Gülden Karaböcek",
"Yeşim",
"Tanju Okan",
"Erkin Koray",
"İlhan İrem",
"Tülay",
"Gökben",
"Yasemin Kumral",
"Erkin Koray",
"Kenan",
"Ali Kocatepe",
"Semiramis Pekkan",
"Yurdaer Doğulu",
"Cem Karaca",
"Ajda Pekkan",
"Ersen Dadaşlar",
"Alpay",
"Alpay",
"Füsun Önal",
"Ertan Anapa",
"Sevil - Ayla",
"Yeliz",




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
