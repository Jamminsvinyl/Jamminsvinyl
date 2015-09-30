// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"[Sittin’ On] The Dock Of The Bay 	Otis Redding",
"Billie Jean 	Michael Jackson",
"Superstition 	Stevie Wonder",
"Let’s Stay Together 	Al Greene",
"A Change Is Gonna Come 	Sam Cooke",
"My Girl 	The Temptations",
"Respect 	Aretha Franklin",
"I Heard It Through The Grapevine 	Marvin Gaye",
"When Doves Cry 	Prince",
"I Believe I Can Fly 	R. Kelly",
"What’s Going On 	Marvin Gaye",
"I Got You (I Feel Good) 	James Brown",
"I’ll Make Love To You 	Boyz II Men",
"What’d I Say 	Ray Charles",
"I’ll Be There 	Jackson 5",
"Always 	Atlantic Starr",
"Killing Me Softly With His Song 	Roberta Flack",
"Super Freak 	Rick James",
"The Tracks Of My Tears 	Smokey Robinson and The Miracles",
"Ain’t No Mountain High Enough 	Marvin gaye",
"ABC 	Jackson 5",
"Always On Time 	Ja Rule Feat. Ashanti",
"Back & Forth 	Aaliyah",
"Boombastic 	Shaggy",
"Ignition 	R. Kelly",
"Smack That 	Akon",
"Yeah! 	Usher",
"I’ll Be There For You 	Mary J. Blidge feat. Method Man",
"No Diggity 	Blackstreet",
"We Belong Together 	Mariah Carey",
"UnBreak My Heart 	Toni Braxton",
"Lonely 	Akon",
"In Da Club 	50 Cent",
"Rock With You 	Michael Jackson",
"Never Too Much 	Luther Vandross",
"Love And Happiness 	Al Greene",
"Purple Rain 	Prince",
"(What A) Wonderful World 	Sam Cooke",
"Sign Of The Times 	Prince",
"Any Love 	Luther Vandross",
"Here And Now 	Luther Vandross",
"Waterfalls 	TLC",
"Vision Of Love 	Mariah Carey",
"One Sweet Day 	Mariah Carey",
"That’s The Way Love Goes 	Janet Jackson",
"Say My Name 	Destiny’s Child",
"Remember The Time 	Michael Jackson",
"Scream 	Michael and Janet jackson",
"Ex Factor	Lauryn Hill",
"Love U 4 Life 	Jodeci",
"Hey Ya! 	Outkast",
"Umbrella 	Rihhana",
"Real Love 	Mary J. Blige",
"Foolish 	Ashanti",
"Beat It 	Michael Jackson",
"Living For The City 	Stevie Wonder",
"Higher Ground 	Stevie Wonder",
"You Are The Sunshine Of My Life 	Stevie Wonder",
"Sexual Healing 	Marvin Gaye",
"Let’s Get It On 	Marvin Gaye",
"Little Red Corvette 	Prince",
"Party Like It’s 1999 	Prince",
"Stop To Love 	Luther Vandross",
"I Will Always Love You 	Whitney Houston",
"End Of The Road 	Boys II Men",
"You Make Me Wanna… 	Usher",
"Best Things In Life Are Free 	Janet Jackson & Luther Vandross",
"Together Again 	Janet Jackson",
"If 	janet Jackson",
"Got ‘Til It’s Gone 	Janet Jackson",
"Power Of Love/Love Power 	Luther Vandross",
"Don’t Leave Me This Way 	Thelma Houston",
"Three Times A Lady 	Commodores",
"Ain’t Nobody 	Chaka Khan",
"I’ll Be Missing You 	P Diddy and Faith Evans",
"I Swear 	All 4 One",
"Boy Is Mine 	Brandy and Monica",
"Ice Ice Baby 	Vanilla Ice",
"Endless Love 	Diana Ross and Lionel Ritchie",
"Like You’ll Never See Me Again 	Alicia Keys",
"And Our Feelings 	Baby Face",
"Oh 	Ciara Feat. Ludacris",
"Home Alone 	R. Kelly feat. Keith Murray",
"The Seed (2.0) 	The Roots feat. Cody ChesnuTT",
"Fiesta (Remix) 	R. Kelly & Jay Z",
"Gold Digger 	Kanye West & Jamie Foxx",
"Deja Vu 	Beyonce feat. Jay Z",
"Locked Up 	Akon, feat. Styles P.",
"Fast Lane 	Bilal feat. Jadakiss and Dr. Dre",
"Just A Friend 	Biz Markie",
"Don’t Let Go (Love) 	En Vogue",
"Only You 	112",
"Twisted 	Keith Sweat",
"April Showers 	Dru Hill",
"All Cried Out 	112 and Allure",
"What’s Love Got To Do With It 	Tina Turner",
"Love Shoulda Brought You Home 	Toni Braxton",
"Fallin’ 	Alicia Keys",

 

    ];

var names = [

"[Sittin’ On] The Dock Of The Bay ",
"Billie Jean ",
"Superstition ",
"Let’s Stay Together ",
"A Change Is Gonna Come ",
"My Girl ",
"Respect ",
"I Heard It Through The Grapevine ",
"When Doves Cry ",
"I Believe I Can Fly ",
"What’s Going On ",
"I Got You (I Feel Good) ",
"I’ll Make Love To You ",
"What’d I Say ",
"I’ll Be There ",
"Always ",
"Killing Me Softly With His Song ",
"Super Freak ",
"The Tracks Of My Tears ",
"Ain’t No Mountain High Enough ",
"ABC ",
"Always On Time ",
"Back & Forth ",
"Boombastic ",
"Ignition ",
"Smack That ",
"Yeah! ",
"I’ll Be There For You ",
"No Diggity ",
"We Belong Together ",
"UnBreak My Heart ",
"Lonely ",
"In Da Club ",
"Rock With You ",
"Never Too Much ",
"Love And Happiness ",
"Purple Rain ",
"(What A) Wonderful World ",
"Sign Of The Times ",
"Any Love ",
"Here And Now ",
"Waterfalls ",
"Vision Of Love ",
"One Sweet Day ",
"That’s The Way Love Goes ",
"Say My Name ",
"Remember The Time ",
"Scream ",
"Ex Factor",
"Love U 4 Life ",
"Hey Ya! ",
"Umbrella ",
"Real Love ",
"Foolish ",
"Beat It ",
"Living For The City ",
"Higher Ground ",
"You Are The Sunshine Of My Life ",
"Sexual Healing ",
"Let’s Get It On ",
"Little Red Corvette ",
"Party Like It’s 1999 ",
"Stop To Love ",
"I Will Always Love You ",
"End Of The Road ",
"You Make Me Wanna… ",
"Best Things In Life Are Free ",
"Together Again ",
"If ",
"Got ‘Til It’s Gone ",
"Power Of Love/Love Power ",
"Don’t Leave Me This Way ",
"Three Times A Lady ",
"Ain’t Nobody ",
"I’ll Be Missing You ",
"I Swear ",
"Boy Is Mine ",
"Ice Ice Baby ",
"Endless Love ",
"Like You’ll Never See Me Again ",
"And Our Feelings ",
"Oh ",
"Home Alone ",
"The Seed (2.0) ",
"Fiesta (Remix) ",
"Gold Digger ",
"Deja Vu ",
"Locked Up ",
"Fast Lane ",
"Just A Friend ",
"Don’t Let Go (Love) ",
"Only You ",
"Twisted ",
"April Showers ",
"All Cried Out ",
"What’s Love Got To Do With It ",
"Love Shoulda Brought You Home ",
"Fallin’ ",



 ];

 var artist = [

"Otis Redding",
"Michael Jackson",
"Stevie Wonder",
"Al Greene",
"Sam Cooke",
"The Temptations",
"Aretha Franklin",
"Marvin Gaye",
"Prince",
"R. Kelly",
"Marvin Gaye",
"James Brown",
"Boyz II Men",
"Ray Charles",
"Jackson 5",
"Atlantic Starr",
"Roberta Flack",
"Rick James",
"Smokey Robinson and The Miracles",
"Marvin gaye",
"Jackson 5",
"Ja Rule Feat. Ashanti",
"Aaliyah",
"Shaggy",
"R. Kelly",
"Akon",
"Usher",
"Mary J. Blidge feat. Method Man",
"Blackstreet",
"Mariah Carey",
"Toni Braxton",
"Akon",
"50 Cent",
"Michael Jackson",
"Luther Vandross",
"Al Greene",
"Prince",
"Sam Cooke",
"Prince",
"Luther Vandross",
"Luther Vandross",
"TLC",
"Mariah Carey",
"Mariah Carey",
"Janet Jackson",
"Destiny’s Child",
"Michael Jackson",
"Michael and Janet jackson",
"Lauryn Hill",
"Jodeci",
"Outkast",
"Rihhana",
"Mary J. Blige",
"Ashanti",
"Michael Jackson",
"Stevie Wonder",
"Stevie Wonder",
"Stevie Wonder",
"Marvin Gaye",
"Marvin Gaye",
"Prince",
"Prince",
"Luther Vandross",
"Whitney Houston",
"Boys II Men",
"Usher",
"Janet Jackson & Luther Vandross",
"Janet Jackson",
"janet Jackson",
"Janet Jackson",
"Luther Vandross",
"Thelma Houston",
"Commodores",
"Chaka Khan",
"P Diddy and Faith Evans",
"All 4 One",
"Brandy and Monica",
"Vanilla Ice",
"Diana Ross and Lionel Ritchie",
"Alicia Keys",
"Baby Face",
"Ciara Feat. Ludacris",
"R. Kelly feat. Keith Murray",
"The Roots feat. Cody ChesnuTT",
"R. Kelly & Jay Z",
"Kanye West & Jamie Foxx",
"Beyonce feat. Jay Z",
"Akon, feat. Styles P.",
"Bilal feat. Jadakiss and Dr. Dre",
"Biz Markie",
"En Vogue",
"112",
"Keith Sweat",
"Dru Hill",
"112 and Allure",
"Tina Turner",
"Toni Braxton",
"Alicia Keys",



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
