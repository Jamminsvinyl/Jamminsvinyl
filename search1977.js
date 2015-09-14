// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Tonight's the Night (Gonna Be Alright) 	Rod Stewart",
"I Just Want to Be Your Everything 	Andy Gibb",
"Best of My Love 	The Emotions",
"Evergreen (Love Theme from A Star Is Born) 	Barbra Streisand",
"Angel in Your Arms 	Hot",
"I Like Dreamin' 	Kenny Nolan",
"Don't Leave Me This Way 	Thelma Houston",
"(Your Love Has Lifted Me) Higher and Higher 	Rita Coolidge",
"Undercover Angel 	Alan O'Day",
"Torn Between Two Lovers 	Mary MacGregor",
"I'm Your Boogie Man 	KC and the Sunshine Band",
"Dancing Queen 	ABBA",
"You Make Me Feel Like Dancing 	Leo Sayer",
"Margaritaville 	Jimmy Buffett",
"Telephone Line 	Electric Light Orchestra",
"Whatcha Gonna Do? 	Pablo Cruise",
"Do You Wanna Make Love 	Peter McCann",
"Sir Duke 	Stevie Wonder",
"Hotel California 	Eagles",
"Got to Give It Up 	Marvin Gaye",
"Gonna Fly Now 	Bill Conti, DeEtta Little and Nelson Pigford",
"Southern Nights 	Glen Campbell",
"Rich Girl 	Hall & Oates",
"When I Need You 	Leo Sayer",
"Hot Line 	The Sylvers",
"Car Wash 	Rose Royce",
"You Don't Have to Be a Star (To Be in My Show) 	Marilyn McCoo & Billy Davis, Jr.",
"Fly Like an Eagle 	Steve Miller Band",
"Don't Give Up on Us 	David Soul",
"On and On 	Stephen Bishop",
"Feels Like the First Time 	Foreigner",
"Couldn't Get It Right 	Climax Blues Band",
"Easy 	Commodores",
"Right Time of the Night 	Jennifer Warnes",
"I've Got Love on My Mind 	Natalie Cole",
"Blinded by the Light 	Manfred Mann's Earth Band",
"Looks Like We Made It 	Barry Manilow",
"So In to You 	Atlanta Rhythm Section",
"Dreams 	Fleetwood Mac",
"Enjoy Yourself 	The Jacksons",
"Dazz 	Brick",
"I'm in You 	Peter Frampton",
"Lucille 	Kenny Rogers",
"The Things We Do for Love 	10cc",
"Da Doo Ron Ron 	Shaun Cassidy",
"Handy Man 	James Taylor",
"Just a Song Before I Go 	Crosby, Stills & Nash",
"You and Me 	Alice Cooper",
"Swayin' to the Music (Slow Dancing) 	Johnny Rivers",
"Lonely Boy 	Andrew Gold",
"I Wish 	Stevie Wonder",
"Don't Stop 	Fleetwood Mac",
"Barracuda 	Heart",
"Strawberry Letter 23 	The Brothers Johnson",
"Night Moves 	Bob Seger & The Silver Bullet Band",
"You're My World 	Helen Reddy",
"Heard It in a Love Song 	The Marshall Tucker Band",
"Carry On Wayward Son 	Kansas",
"New Kid in Town 	Eagles",
"My Heart Belongs to Me 	Barbra Streisand",
"After the Lovin' 	Engelbert Humperdinck",
"Jet Airliner 	Steve Miller Band",
"Stand Tall 	Burton Cummings",
"Way Down 	Elvis Presley",
"Weekend in New England 	Barry Manilow",
"It Was Almost Like a Song 	Ronnie Milsap",
"Smoke from a Distant Fire 	Sanford-Townsend Band",
"Cold as Ice 	Foreigner",
"Ariel 	Dean Friedman",
"Lost Without Your Love 	Bread",
"Star Wars Theme/Cantina Band 	Meco",
"Float On 	The Floaters",
"Jeans On 	Lord David Dundas",
"Lido Shuffle 	Boz Scaggs",
"Keep It Comin' Love 	KC and the Sunshine Band",
"You Made Me Believe in Magic 	Bay City Rollers",
"Livin' Thing 	Electric Light Orchestra",
"Give a Little Bit 	Supertramp",
"That's Rock 'n' Roll 	Shaun Cassidy",
"Love So Right 	Bee Gees",
"The Rubberband Man 	The Spinners",
"I Never Cry 	Alice Cooper",
"Nobody Does It Better 	Carly Simon",
"High School Dance 	The Sylvers",
"Love's Grown Deep 	Kenny Nolan",
"Ain't Gonna Bump No More (With No Big Fat Woman) 	Joe Tex",
"I Wanna Get Next to You 	Rose Royce",
"Somebody to Love 	Queen",
"Muskrat Love 	Captain & Tennille",
"Walk This Way 	Aerosmith",
"Cherchez La Femme 	Dr. Buzzard's Original Savannah Band",
"Year of the Cat 	Al Stewart",
"Boogie Nights 	Heatwave",
"Go Your Own Way 	Fleetwood Mac",
"Sorry Seems to Be the Hardest Word 	Elton John",
"Don't Worry Baby 	B.J. Thomas",
"Knowing Me, Knowing You 	ABBA",
"How Much Love 	Leo Sayer",
"Star Wars (Main Title) 	London Symphony Orchestra",
"Devil's Gun 	C.J. & Company",
"Aldırma Gönül	Edip Akbayram ve  Dostlar",
"Kendine İyi Bak	Bilgen Bengü",
"Kaç Yıl Geçti Aradan	Sezen Aksu",
"Sessiz Bir Yer	Şenay",
"Eylülde Gel	Alpay",
"Kıymayın Efendiler	Kerem Güney",
"Son Pişmanlık	Atilla Atasoy",
"Ne Bilirdim ki / Çeşme	Gülden Karaböcek",
"365 Günüm de Yandı Ha Yandı	Elvan Sevil",

 

    ];

var names = [

"Tonight's the Night (Gonna Be Alright) ",
"I Just Want to Be Your Everything ",
"Best of My Love ",
"Evergreen (Love Theme from A Star Is Born) ",
"Angel in Your Arms ",
"I Like Dreamin' ",
"Don't Leave Me This Way ",
"(Your Love Has Lifted Me) Higher and Higher ",
"Undercover Angel ",
"Torn Between Two Lovers ",
"I'm Your Boogie Man ",
"Dancing Queen ",
"You Make Me Feel Like Dancing ",
"Margaritaville ",
"Telephone Line ",
"Whatcha Gonna Do? ",
"Do You Wanna Make Love ",
"Sir Duke ",
"Hotel California ",
"Got to Give It Up ",
"Gonna Fly Now ",
"Southern Nights ",
"Rich Girl ",
"When I Need You ",
"Hot Line ",
"Car Wash ",
"You Don't Have to Be a Star (To Be in My Show) ",
"Fly Like an Eagle ",
"Don't Give Up on Us ",
"On and On ",
"Feels Like the First Time ",
"Couldn't Get It Right ",
"Easy ",
"Right Time of the Night ",
"I've Got Love on My Mind ",
"Blinded by the Light ",
"Looks Like We Made It ",
"So In to You ",
"Dreams ",
"Enjoy Yourself ",
"Dazz ",
"I'm in You ",
"Lucille ",
"The Things We Do for Love ",
"Da Doo Ron Ron ",
"Handy Man ",
"Just a Song Before I Go ",
"You and Me ",
"Swayin' to the Music (Slow Dancing) ",
"Lonely Boy ",
"I Wish ",
"Don't Stop ",
"Barracuda ",
"Strawberry Letter 23 ",
"Night Moves ",
"You're My World ",
"Heard It in a Love Song ",
"Carry On Wayward Son ",
"New Kid in Town ",
"My Heart Belongs to Me ",
"After the Lovin' ",
"Jet Airliner ",
"Stand Tall ",
"Way Down ",
"Weekend in New England ",
"It Was Almost Like a Song ",
"Smoke from a Distant Fire ",
"Cold as Ice ",
"Ariel ",
"Lost Without Your Love ",
"Star Wars Theme/Cantina Band ",
"Float On ",
"Jeans On ",
"Lido Shuffle ",
"Keep It Comin' Love ",
"You Made Me Believe in Magic ",
"Livin' Thing ",
"Give a Little Bit ",
"That's Rock 'n' Roll ",
"Love So Right ",
"The Rubberband Man ",
"I Never Cry ",
"Nobody Does It Better ",
"High School Dance ",
"Love's Grown Deep ",
"Ain't Gonna Bump No More (With No Big Fat Woman) ",
"I Wanna Get Next to You ",
"Somebody to Love ",
"Muskrat Love ",
"Walk This Way ",
"Cherchez La Femme ",
"Year of the Cat ",
"Boogie Nights ",
"Go Your Own Way ",
"Sorry Seems to Be the Hardest Word ",
"Don't Worry Baby ",
"Knowing Me, Knowing You ",
"How Much Love ",
"Star Wars (Main Title) ",
"Devil's Gun ",
"Aldırma Gönül",
"Kendine İyi Bak",
"Kaç Yıl Geçti Aradan",
"Sessiz Bir Yer",
"Eylülde Gel",
"Kıymayın Efendiler",
"Son Pişmanlık",
"Ne Bilirdim ki / Çeşme",
"365 Günüm de Yandı Ha Yandı",




 ];

 var artist = [

"Rod Stewart",
"Andy Gibb",
"The Emotions",
"Barbra Streisand",
"Hot",
"Kenny Nolan",
"Thelma Houston",
"Rita Coolidge",
"Alan O'Day",
"Mary MacGregor",
"KC and the Sunshine Band",
"ABBA",
"Leo Sayer",
"Jimmy Buffett",
"Electric Light Orchestra",
"Pablo Cruise",
"Peter McCann",
"Stevie Wonder",
"Eagles",
"Marvin Gaye",
"Bill Conti, DeEtta Little and Nelson Pigford",
"Glen Campbell",
"Hall & Oates",
"Leo Sayer",
"The Sylvers",
"Rose Royce",
"Marilyn McCoo & Billy Davis, Jr.",
"Steve Miller Band",
"David Soul",
"Stephen Bishop",
"Foreigner",
"Climax Blues Band",
"Commodores",
"Jennifer Warnes",
"Natalie Cole",
"Manfred Mann's Earth Band",
"Barry Manilow",
"Atlanta Rhythm Section",
"Fleetwood Mac",
"The Jacksons",
"Brick",
"Peter Frampton",
"Kenny Rogers",
"10cc",
"Shaun Cassidy",
"James Taylor",
"Crosby, Stills & Nash",
"Alice Cooper",
"Johnny Rivers",
"Andrew Gold",
"Stevie Wonder",
"Fleetwood Mac",
"Heart",
"The Brothers Johnson",
"Bob Seger & The Silver Bullet Band",
"Helen Reddy",
"The Marshall Tucker Band",
"Kansas",
"Eagles",
"Barbra Streisand",
"Engelbert Humperdinck",
"Steve Miller Band",
"Burton Cummings",
"Elvis Presley",
"Barry Manilow",
"Ronnie Milsap",
"Sanford-Townsend Band",
"Foreigner",
"Dean Friedman",
"Bread",
"Meco",
"The Floaters",
"Lord David Dundas",
"Boz Scaggs",
"KC and the Sunshine Band",
"Bay City Rollers",
"Electric Light Orchestra",
"Supertramp",
"Shaun Cassidy",
"Bee Gees",
"The Spinners",
"Alice Cooper",
"Carly Simon",
"The Sylvers",
"Kenny Nolan",
"Joe Tex",
"Rose Royce",
"Queen",
"Captain & Tennille",
"Aerosmith",
"Dr. Buzzard's Original Savannah Band",
"Al Stewart",
"Heatwave",
"Fleetwood Mac",
"Elton John",
"B.J. Thomas",
"ABBA",
"Leo Sayer",
"London Symphony Orchestra",
"C.J. & Company",
"Edip Akbayram ve  Dostlar",
"Bilgen Bengü",
"Sezen Aksu",
"Şenay",
"Alpay",
"Kerem Güney",
"Atilla Atasoy",
"Gülden Karaböcek",
"Elvan Sevil",




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
