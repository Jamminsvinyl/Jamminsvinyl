// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"My Sharona 	The Knack",
"Bad Girls 	Donna Summer",
"Le Freak 	Chic",
"Da Ya Think I'm Sexy? 	Rod Stewart",
"Reunited 	Peaches & Herb",
"I Will Survive 	Gloria Gaynor",
"Hot Stuff 	Donna Summer",
"Y.M.C.A. 	Village People",
"Ring My Bell 	Anita Ward",
"Sad Eyes 	Robert John",
"Too Much Heaven 	Bee Gees",
"MacArthur Park 	Donna Summer",
"When You're in Love with a Beautiful Woman 	Dr. Hook & The Medicine Show",
"Makin' It 	David Naughton",
"Fire 	The Pointer Sisters",
"Tragedy 	Bee Gees",
"A Little More Love 	Olivia Newton-John",
"Heart of Glass 	Blondie",
"What a Fool Believes 	The Doobie Brothers",
"Good Times 	Chic",
"You Don't Bring Me Flowers 	Neil Diamond & Barbra Streisand",
"Knock on Wood 	Amii Stewart",
"Stumblin' In 	Suzi Quatro & Chris Norman",
"Lead Me On 	Maxine Nightingale",
"Shake Your Body (Down to the Ground) 	The Jacksons",
"Don't Cry Out Loud 	Melissa Manchester",
"The Logical Song 	Supertramp",
"My Life 	Billy Joel",
"Just When I Needed You Most 	Randy VanWarmer",
"You Can't Change That 	Raydio",
"Shake Your Groove Thing 	Peaches & Herb",
"I'll Never Love This Way Again 	Dionne Warwick",
"Love You Inside Out 	Bee Gees",
"I Want You to Want Me 	Cheap Trick",
"The Main Event/Fight 	Barbra Streisand",
"Mama Can't Buy You Love 	Elton John",
"I Was Made for Dancin' 	Leif Garrett",
"After the Love Has Gone 	Earth, Wind & Fire",
"Heaven Knows 	Donna Summer and Brooklyn Dreams",
"The Gambler 	Kenny Rogers",
"Lotta Love 	Nicolette Larson",
"Lady 	Little River Band",
"Heaven Must Have Sent You 	Bonnie Pointer",
"Hold the Line 	Toto",
"He's the Greatest Dancer 	Sister Sledge",
"Sharing the Night Together 	Dr. Hook & The Medicine Show",
"She Believes in Me 	Kenny Rogers",
"In the Navy 	Village People",
"Music Box Dancer 	Frank Mills",
"The Devil Went Down to Georgia 	The Charlie Daniels Band",
"Gold 	John Stewart",
"Goodnight Tonight 	Wings",
"We Are Family 	Sister Sledge",
"Rock 'n' Roll Fantasy 	Bad Company",
"Every 1's a Winner 	Hot Chocolate",
"Take Me Home 	Cher",
"Boogie Wonderland 	Earth, Wind & Fire & The Emotions",
"(Our Love) Don't Throw It All Away 	Andy Gibb",
"What You Won't Do for Love 	Bobby Caldwell",
"New York Groove 	Ace Frehley",
"Sultans of Swing 	Dire Straits",
"I Want Your Love 	Chic",
"Chuck E.'s In Love 	Rickie Lee Jones",
"I Love the Nightlife 	Alicia Bridges",
"Ain't No Stoppin' Us Now 	McFadden & Whitehead",
"Lonesome Loser 	Little River Band",
"Renegade 	Styx",
"Love Is the Answer 	England Dan & John Ford Coley",
"Got to Be Real 	Cheryl Lynn",
"Born to Be Alive 	Patrick Hernandez",
"Shine a Little Love 	Electric Light Orchestra",
"I Just Fall in Love Again 	Anne Murray",
"Shake It 	Ian Matthews",
"I Was Made for Lovin' You 	Kiss",
"I Just Wanna Stop 	Gino Vannelli",
"Disco Nights (Rock-Freak) 	GQ",
"Ooo Baby Baby 	Linda Ronstadt",
"September 	Earth, Wind & Fire",
"Time Passages 	Al Stewart",
"Rise 	Herb Alpert",
"Don't Bring Me Down 	Electric Light Orchestra",
"Promises 	Eric Clapton",
"Get Used To It 	Roger Voudouris",
"How Much I Feel 	Ambrosia",
"Suspicions 	Eddie Rabbitt",
"You Take My Breath Away 	Rex Smith",
"How You Gonna See Me Now 	Alice Cooper",
"Double Vision 	Foreigner",
"Everytime I Think of You 	The Babys",
"I Got My Mind Made Up (You Can Get It Girl) 	Instant Funk",
"Don't Stop 'til You Get Enough 	Michael Jackson",
"Bad Case of Loving You (Doctor, Doctor) 	Robert Palmer",
"Somewhere in the Night 	Barry Manilow",
"We've Got Tonight 	Bob Seger & The Silver Bullet Band",
"Dance the Night Away 	Van Halen",
"Dancin' Shoes 	Nigel Olsson",
"The Boss 	Diana Ross",
"Sail On 	Commodores",
"I Do Love You 	GQ",
"Strange Way 	Firefall",
"Eşkiya Dünyaya Hükümdar	Edip Akbayram",
"Dışarda Kar Yağıyor	Ünol Büyükgönenç",
"Ölsem de Kalsam da Bir	Banu",
"Aldım Başımı Gidiyorum	Erol Evgin",
"Nerede	Sibel Egemen",
"Kara Gölgen Olaydım	Ersan Erdura",
"Bir Zamanlar	İlhan İrem",
"Yeter ki Anla	Meral Zühal",
"Ayrılık Çanları	Gülistan Okan",
"Bana Benzerler	Turgay Merih",

 

    ];

var names = [

"My Sharona ",
"Bad Girls ",
"Le Freak ",
"Da Ya Think I'm Sexy? ",
"Reunited ",
"I Will Survive ",
"Hot Stuff ",
"Y.M.C.A. ",
"Ring My Bell ",
"Sad Eyes ",
"Too Much Heaven ",
"MacArthur Park ",
"When You're in Love with a Beautiful Woman ",
"Makin' It ",
"Fire ",
"Tragedy ",
"A Little More Love ",
"Heart of Glass ",
"What a Fool Believes ",
"Good Times ",
"You Don't Bring Me Flowers ",
"Knock on Wood ",
"Stumblin' In ",
"Lead Me On ",
"Shake Your Body (Down to the Ground) ",
"Don't Cry Out Loud ",
"The Logical Song ",
"My Life ",
"Just When I Needed You Most ",
"You Can't Change That ",
"Shake Your Groove Thing ",
"I'll Never Love This Way Again ",
"Love You Inside Out ",
"I Want You to Want Me ",
"The Main Event/Fight ",
"Mama Can't Buy You Love ",
"I Was Made for Dancin' ",
"After the Love Has Gone ",
"Heaven Knows ",
"The Gambler ",
"Lotta Love ",
"Lady ",
"Heaven Must Have Sent You ",
"Hold the Line ",
"He's the Greatest Dancer ",
"Sharing the Night Together ",
"She Believes in Me ",
"In the Navy ",
"Music Box Dancer ",
"The Devil Went Down to Georgia ",
"Gold ",
"Goodnight Tonight ",
"We Are Family ",
"Rock 'n' Roll Fantasy ",
"Every 1's a Winner ",
"Take Me Home ",
"Boogie Wonderland ",
"(Our Love) Don't Throw It All Away ",
"What You Won't Do for Love ",
"New York Groove ",
"Sultans of Swing ",
"I Want Your Love ",
"Chuck E.'s In Love ",
"I Love the Nightlife ",
"Ain't No Stoppin' Us Now ",
"Lonesome Loser ",
"Renegade ",
"Love Is the Answer ",
"Got to Be Real ",
"Born to Be Alive ",
"Shine a Little Love ",
"I Just Fall in Love Again ",
"Shake It ",
"I Was Made for Lovin' You ",
"I Just Wanna Stop ",
"Disco Nights (Rock-Freak) ",
"Ooo Baby Baby ",
"September ",
"Time Passages ",
"Rise ",
"Don't Bring Me Down ",
"Promises ",
"Get Used To It ",
"How Much I Feel ",
"Suspicions ",
"You Take My Breath Away ",
"How You Gonna See Me Now ",
"Double Vision ",
"Everytime I Think of You ",
"I Got My Mind Made Up (You Can Get It Girl) ",
"Don't Stop 'til You Get Enough ",
"Bad Case of Loving You (Doctor, Doctor) ",
"Somewhere in the Night ",
"We've Got Tonight ",
"Dance the Night Away ",
"Dancin' Shoes ",
"The Boss ",
"Sail On ",
"I Do Love You ",
"Strange Way ",
"Eşkiya Dünyaya Hükümdar",
"Dışarda Kar Yağıyor",
"Ölsem de Kalsam da Bir",
"Aldım Başımı Gidiyorum",
"Nerede",
"Kara Gölgen Olaydım",
"Bir Zamanlar",
"Yeter ki Anla",
"Ayrılık Çanları",
"Bana Benzerler",




 ];

 var artist = [

"The Knack",
"Donna Summer",
"Chic",
"Rod Stewart",
"Peaches & Herb",
"Gloria Gaynor",
"Donna Summer",
"Village People",
"Anita Ward",
"Robert John",
"Bee Gees",
"Donna Summer",
"Dr. Hook & The Medicine Show",
"David Naughton",
"The Pointer Sisters",
"Bee Gees",
"Olivia Newton-John",
"Blondie",
"The Doobie Brothers",
"Chic",
"Neil Diamond & Barbra Streisand",
"Amii Stewart",
"Suzi Quatro & Chris Norman",
"Maxine Nightingale",
"The Jacksons",
"Melissa Manchester",
"Supertramp",
"Billy Joel",
"Randy VanWarmer",
"Raydio",
"Peaches & Herb",
"Dionne Warwick",
"Bee Gees",
"Cheap Trick",
"Barbra Streisand",
"Elton John",
"Leif Garrett",
"Earth, Wind & Fire",
"Donna Summer and Brooklyn Dreams",
"Kenny Rogers",
"Nicolette Larson",
"Little River Band",
"Bonnie Pointer",
"Toto",
"Sister Sledge",
"Dr. Hook & The Medicine Show",
"Kenny Rogers",
"Village People",
"Frank Mills",
"The Charlie Daniels Band",
"John Stewart",
"Wings",
"Sister Sledge",
"Bad Company",
"Hot Chocolate",
"Cher",
"Earth, Wind & Fire & The Emotions",
"Andy Gibb",
"Bobby Caldwell",
"Ace Frehley",
"Dire Straits",
"Chic",
"Rickie Lee Jones",
"Alicia Bridges",
"McFadden & Whitehead",
"Little River Band",
"Styx",
"England Dan & John Ford Coley",
"Cheryl Lynn",
"Patrick Hernandez",
"Electric Light Orchestra",
"Anne Murray",
"Ian Matthews",
"Kiss",
"Gino Vannelli",
"GQ",
"Linda Ronstadt",
"Earth, Wind & Fire",
"Al Stewart",
"Herb Alpert",
"Electric Light Orchestra",
"Eric Clapton",
"Roger Voudouris",
"Ambrosia",
"Eddie Rabbitt",
"Rex Smith",
"Alice Cooper",
"Foreigner",
"The Babys",
"Instant Funk",
"Michael Jackson",
"Robert Palmer",
"Barry Manilow",
"Bob Seger & The Silver Bullet Band",
"Van Halen",
"Nigel Olsson",
"Diana Ross",
"Commodores",
"GQ",
"Firefall",
"Edip Akbayram",
"Ünol Büyükgönenç",
"Banu",
"Erol Evgin",
"Sibel Egemen",
"Ersan Erdura",
"İlhan İrem",
"Meral Zühal",
"Gülistan Okan",
"Turgay Merih",




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
