// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Shadow Dancing 	Andy Gibb",
"Night Fever 	Bee Gees",
"You Light Up My Life 	Debby Boone",
"Stayin' Alive 	Bee Gees",
"Kiss You All Over 	Exile",
"How Deep Is Your Love 	Bee Gees",
"Baby Come Back 	Player",
"(Love Is) Thicker Than Water 	Andy Gibb",
"Boogie Oogie Oogie 	A Taste of Honey",
"Three Times a Lady 	Commodores",
"Grease 	Frankie Valli",
"I Go Crazy 	Paul Davis",
"You're the One That I Want 	John Travolta & Olivia Newton-John",
"Emotion 	Samantha Sang",
"Lay Down Sally 	Eric Clapton",
"Miss You 	The Rolling Stones",
"Just the Way You Are 	Billy Joel",
"With a Little Luck 	Wings",
"If I Can't Have You 	Yvonne Elliman",
"Dance, Dance, Dance (Yowsah, Yowsah, Yowsah) 	Chic",
"Feels So Good 	Chuck Mangione",
"Hot Child in the City 	Nick Gilder",
"Love Is Like Oxygen 	Sweet",
"It's a Heartache 	Bonnie Tyler",
"We Will Rock You/We Are the Champions 	Queen",
"Baker Street 	Gerry Rafferty",
"Can't Smile Without You 	Barry Manilow",
"Too Much, Too Little, Too Late 	Johnny Mathis & Deniece Williams",
"Dance With Me 	Peter Brown",
"Two Out of Three Ain't Bad 	Meat Loaf",
"Jack And Jill 	Raydio",
"Take a Chance on Me 	ABBA",
"Sometimes When We Touch 	Dan Hill",
"Last Dance 	Donna Summer",
"Hopelessly Devoted to You 	Olivia Newton-John",
"Hot Blooded 	Foreigner",
"You're in My Heart (The Final Acclaim) 	Rod Stewart",
"The Closer I Get to You 	Roberta Flack & Donny Hathaway",
"Dust in the Wind 	Kansas",
"Magnet and Steel 	Walter Egan",
"Short People 	Randy Newman",
"Use ta Be My Girl 	The O'Jays",
"Our Love 	Natalie Cole",
"Love Will Find a Way 	Pablo Cruise",
"An Everlasting Love 	Andy Gibb",
"Love Is in the Air 	John Paul Young",
"Goodbye Girl 	David Gates",
"Slip Slidin' Away 	Paul Simon",
"The Groove Line 	Heatwave",
"Thunder Island 	Jay Ferguson",
"Imaginary Lover 	Atlanta Rhythm Section",
"Still the Same 	Bob Seger & The Silver Bullet Band",
"My Angel Baby 	Toby Beau",
"Disco Inferno 	The Trammps",
"On Broadway 	George Benson",
"Come Sail Away 	Styx",
"(Every Time I Turn Around) Back in Love Again 	L.T.D.",
"This Time I'm In It For Love 	Player",
"You Belong to Me 	Carly Simon",
"Here You Come Again 	Dolly Parton",
"Blue Bayou 	Linda Ronstadt",
"Peg 	Steely Dan",
"You Needed Me 	Anne Murray",
"Shame 	    Evelyn Champagne King",
"Reminiscing 	Little River Band",
"Count On Me 	Jefferson Starship",
"Baby Hold On 	Eddie Money",
"Hey Deanie 	Shaun Cassidy",
"Summer Nights 	John Travolta & Olivia Newton-John",
"What's Your Name 	Lynyrd Skynyrd",
"Don't It Make My Brown Eyes Blue 	Crystal Gayle",
"Because the Night 	Patti Smith Group",
"Every Kinda People 	Robert Palmer",
"Copacabana 	Barry Manilow",
"Always and Forever 	Heatwave",
"You and I 	Rick James",
"Serpentine Fire 	Earth, Wind & Fire",
"Sentimental Lady 	Bob Welch",
"Falling 	LeBlanc & Carr",
"Don't Let Me Be Misunderstood 	Santa Esmeralda",
"Bluer Than Blue 	Michael Johnson",
"Running on Empty 	Jackson Browne",
"Whenever I Call You 'Friend' 	Kenny Loggins & Stevie Nicks",
"Fool (If You Think It's Over) 	Chris Rea",
"Get Off 	Foxy",
"Sweet Talkin' Woman 	Electric Light Orchestra",
"Life's Been Good 	Joe Walsh",
"I Love the Nightlife 	Alicia Bridges",
"You Can't Turn Me Off (In The Middle Of Turning Me On) 	High Inergy",
"It's So Easy 	Linda Ronstadt",
"Native New Yorker 	Odyssey",
"Flash Light 	Parliament",
"Don't Look Back 	Boston",
"Turn to Stone 	Electric Light Orchestra",
"I Can't Stand the Rain 	Eruption",
"Ebony Eyes 	Bob Welch",
"The Name of the Game 	ABBA",
"We're All Alone 	Rita Coolidge",
"Hollywood Nights 	Bob Seger & The Silver Bullet Band",
"Deacon Blues 	Steely Dan",
"Kaybolan Yıllar	Sezen Aksu",
"Melankoli	Nükhet Duru",
"Gölge Etme	Sezen Aksu",
"Acılar Sürekli Olmaz	Ersan Erdura",
"İşte Öyle Bir şey	Erol Evgin",
"Ayrılık Akşamı	ilhan irem",
"İçimdeki Fırtına	Erol Evgin",
"Bir Tanem (Beni Hatırlar mısın)	Füsun Önal",
"Sana Merhaba Dedim	Nazan şoray",
"Zor Dostum Zor	Mehmet Pekün",
"Seven Ağlatılmaz	Tülay",
"Ya Sonra	Ajda Pekkan",
"Yoksulluk Kader Olamaz	Cem Karaca",
"Çocuk Gözler	Ersan Erdura",
"Sakın Sakın Ha	Ajda Pekkan",

 

    ];

var names = [

"Shadow Dancing ",
"Night Fever ",
"You Light Up My Life ",
"Stayin' Alive ",
"Kiss You All Over ",
"How Deep Is Your Love ",
"Baby Come Back ",
"(Love Is) Thicker Than Water ",
"Boogie Oogie Oogie ",
"Three Times a Lady ",
"Grease ",
"I Go Crazy ",
"You're the One That I Want ",
"Emotion ",
"Lay Down Sally ",
"Miss You ",
"Just the Way You Are ",
"With a Little Luck ",
"If I Can't Have You ",
"Dance, Dance, Dance (Yowsah, Yowsah, Yowsah) ",
"Feels So Good ",
"Hot Child in the City ",
"Love Is Like Oxygen ",
"It's a Heartache ",
"We Will Rock You/We Are the Champions ",
"Baker Street ",
"Can't Smile Without You ",
"Too Much, Too Little, Too Late ",
"Dance With Me ",
"Two Out of Three Ain't Bad ",
"Jack And Jill ",
"Take a Chance on Me ",
"Sometimes When We Touch ",
"Last Dance ",
"Hopelessly Devoted to You ",
"Hot Blooded ",
"You're in My Heart (The Final Acclaim) ",
"The Closer I Get to You ",
"Dust in the Wind ",
"Magnet and Steel ",
"Short People ",
"Use ta Be My Girl ",
"Our Love ",
"Love Will Find a Way ",
"An Everlasting Love ",
"Love Is in the Air ",
"Goodbye Girl ",
"Slip Slidin' Away ",
"The Groove Line ",
"Thunder Island ",
"Imaginary Lover ",
"Still the Same ",
"My Angel Baby ",
"Disco Inferno ",
"On Broadway ",
"Come Sail Away ",
"(Every Time I Turn Around) Back in Love Again ",
"This Time I'm In It For Love ",
"You Belong to Me ",
"Here You Come Again ",
"Blue Bayou ",
"Peg ",
"You Needed Me ",
"Shame ",
"Reminiscing ",
"Count On Me ",
"Baby Hold On ",
"Hey Deanie ",
"Summer Nights ",
"What's Your Name ",
"Don't It Make My Brown Eyes Blue ",
"Because the Night ",
"Every Kinda People ",
"Copacabana ",
"Always and Forever ",
"You and I ",
"Serpentine Fire ",
"Sentimental Lady ",
"Falling ",
"Don't Let Me Be Misunderstood ",
"Bluer Than Blue ",
"Running on Empty ",
"Whenever I Call You 'Friend' ",
"Fool (If You Think It's Over) ",
"Get Off ",
"Sweet Talkin' Woman ",
"Life's Been Good ",
"I Love the Nightlife ",
"You Can't Turn Me Off (In The Middle Of Turning Me On) ",
"It's So Easy ",
"Native New Yorker ",
"Flash Light ",
"Don't Look Back ",
"Turn to Stone ",
"I Can't Stand the Rain ",
"Ebony Eyes ",
"The Name of the Game ",
"We're All Alone ",
"Hollywood Nights ",
"Deacon Blues ",
"Kaybolan Yıllar",
"Melankoli",
"Gölge Etme",
"Acılar Sürekli Olmaz",
"İşte Öyle Bir şey",
"Ayrılık Akşamı",
"İçimdeki Fırtına",
"Bir Tanem (Beni Hatırlar mısın)",
"Sana Merhaba Dedim",
"Zor Dostum Zor",
"Seven Ağlatılmaz",
"Ya Sonra",
"Yoksulluk Kader Olamaz",
"Çocuk Gözler",
"Sakın Sakın Ha",




 ];

 var artist = [

"Andy Gibb",
"Bee Gees",
"Debby Boone",
"Bee Gees",
"Exile",
"Bee Gees",
"Player",
"Andy Gibb",
"A Taste of Honey",
"Commodores",
"Frankie Valli",
"Paul Davis",
"John Travolta & Olivia Newton-John",
"Samantha Sang",
"Eric Clapton",
"The Rolling Stones",
"Billy Joel",
"Wings",
"Yvonne Elliman",
"Chic",
"Chuck Mangione",
"Nick Gilder",
"Sweet",
"Bonnie Tyler",
"Queen",
"Gerry Rafferty",
"Barry Manilow",
"Johnny Mathis & Deniece Williams",
"Peter Brown",
"Meat Loaf",
"Raydio",
"ABBA",
"Dan Hill",
"Donna Summer",
"Olivia Newton-John",
"Foreigner",
"Rod Stewart",
"Roberta Flack & Donny Hathaway",
"Kansas",
"Walter Egan",
"Randy Newman",
"The O'Jays",
"Natalie Cole",
"Pablo Cruise",
"Andy Gibb",
"John Paul Young",
"David Gates",
"Paul Simon",
"Heatwave",
"Jay Ferguson",
"Atlanta Rhythm Section",
"Bob Seger & The Silver Bullet Band",
"Toby Beau",
"The Trammps",
"George Benson",
"Styx",
"L.T.D.",
"Player",
"Carly Simon",
"Dolly Parton",
"Linda Ronstadt",
"Steely Dan",
"Anne Murray",
"Evelyn Champagne King",
"Little River Band",
"Jefferson Starship",
"Eddie Money",
"Shaun Cassidy",
"John Travolta & Olivia Newton-John",
"Lynyrd Skynyrd",
"Crystal Gayle",
"Patti Smith Group",
"Robert Palmer",
"Barry Manilow",
"Heatwave",
"Rick James",
"Earth, Wind & Fire",
"Bob Welch",
"LeBlanc & Carr",
"Santa Esmeralda",
"Michael Johnson",
"Jackson Browne",
"Kenny Loggins & Stevie Nicks",
"Chris Rea",
"Foxy",
"Electric Light Orchestra",
"Joe Walsh",
"Alicia Bridges",
"High Inergy",
"Linda Ronstadt",
"Odyssey",
"Parliament",
"Boston",
"Electric Light Orchestra",
"Eruption",
"Bob Welch",
"ABBA",
"Rita Coolidge",
"Bob Seger & The Silver Bullet Band",
"Steely Dan",
"Sezen Aksu",
"Nükhet Duru",
"Sezen Aksu",
"Ersan Erdura",
"Erol Evgin",
"ilhan irem",
"Erol Evgin",
"Füsun Önal",
"Nazan şoray",
"Mehmet Pekün",
"Tülay",
"Ajda Pekkan",
"Cem Karaca",
"Ersan Erdura",
"Ajda Pekkan",




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
