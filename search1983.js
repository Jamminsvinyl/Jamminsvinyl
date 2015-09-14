// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Every Breath You Take 	The Police",
"Billie Jean 	Michael Jackson",
"Flashdance... What a Feeling 	Irene Cara",
"Down Under 	Men at Work",
"Beat It 	Michael Jackson",
"Total Eclipse of the Heart 	Bonnie Tyler",
"Maneater 	Daryl Hall & John Oates",
"Baby, Come to Me 	Patti Austin and James Ingram",
"Maniac 	Michael Sembello",
"Sweet Dreams (Are Made of This) 	Eurythmics",
"Do You Really Want to Hurt Me 	Culture Club",
"You and I 	Eddie Rabbitt and Crystal Gayle",
"Come On Eileen 	Dexys Midnight Runners",
"Shame on the Moon 	Bob Seger & The Silver Bullet Band",
"She Works Hard for the Money 	Donna Summer",
"Never Gonna Let You Go 	Sérgio Mendes",
"Hungry Like the Wolf 	Duran Duran",
"Let's Dance 	David Bowie",
"Twilight Zone 	Golden Earring",
"I Know There's Something Going On 	Frida",
"Jeopardy 	The Greg Kihn Band",
"Electric Avenue 	Eddy Grant",
"She Blinded Me with Science 	Thomas Dolby",
"Africa 	Toto",
"Little Red Corvette 	Prince",
"Back on the Chain Gang 	The Pretenders",
"Up Where We Belong 	Joe Cocker and Jennifer Warnes",
"Mr. Roboto 	Styx",
"You Are 	Lionel Richie",
"Der Kommissar 	After the Fire",
"Puttin' on the Ritz 	Taco",
"Sexual Healing 	Marvin Gaye",
"(Keep Feeling) Fascination 	The Human League",
"Time (Clock of the Heart) 	Culture Club",
"The Safety Dance 	Men Without Hats",
"Mickey 	Toni Basil",
"You Can't Hurry Love 	Phil Collins",
"Separate Ways (Worlds Apart) 	Journey",
"One on One 	Daryl Hall & John Oates",
"We've Got Tonight 	Kenny Rogers and Sheena Easton",
"1999	Prince",
"Stray Cat Strut 	Stray Cats",
"Allentown 	Billy Joel",
"Stand Back 	Stevie Nicks",
"Tell Her About It 	Billy Joel",
"Always Something There to Remind Me 	Naked Eyes",
"Truly 	Lionel Richie",
"Dirty Laundry 	Don Henley",
"The Girl Is Mine 	Michael Jackson and Paul McCartney",
"Too Shy 	Kajagoogoo",
"Goody Two-Shoes 	Adam Ant",
"Rock the Casbah 	The Clash",
"Our House 	Madness",
"Overkill 	Men at Work",
"Is There Something I Should Know? 	Duran Duran",
"Gloria 	Laura Branigan",
"Affair of the Heart 	Rick Springfield",
"She's a Beauty 	The Tubes",
"Solitaire 	Laura Branigan",
"Don't Let It End 	Styx",
"How Am I Supposed to Live Without You 	Laura Branigan",
"China Girl 	David Bowie",
"Come Dancing 	The Kinks",
"Promises, Promises 	Naked Eyes",
"The Other Guy 	Little River Band",
"Making Love Out of Nothing at All 	Air Supply",
"Family Man 	Daryl Hall & John Oates",
"Wanna Be Startin' Somethin' 	Michael Jackson",
"I Won't Hold You Back 	Toto",
"All Right 	Christopher Cross",
"Straight from the Heart 	Bryan Adams",
"Heart to Heart 	Kenny Loggins",
"My Love 	Lionel Richie",
"I'm Still Standing 	Elton John",
"Hot Girls in Love 	Loverboy",
"It's a Mistake 	Men at Work",
"I'll Tumble 4 Ya 	Culture Club",
"All This Love 	DeBarge",
"Your Love Is Driving Me Crazy 	Sammy Hagar",
"Heartbreaker 	Dionne Warwick",
"Faithfully 	Journey",
"Steppin Out 	Joe Jackson",
"Take Me to Heart 	Quarterflash",
"(She's) Sexy + 17 	Stray Cats",
"Try Again 	Champaign",
"Dead Giveaway 	Shalamar",
"Lawyers in Love 	Jackson Browne",
"What About Me 	Moving Pictures",
"Human Nature 	Michael Jackson",
"Photograph 	Def Leppard",
"Pass the Dutchie 	Musical Youth",
"True 	Spandau Ballet",
"Far from Over 	Frank Stallone",
"I've Got a Rock 'n' Roll Heart 	Eric Clapton",
"It Might Be You 	Stephen Bishop",
"Tonight, I Celebrate My Love 	Peabo Bryson and Roberta Flack",
"You Got Lucky 	Tom Petty and the Heartbreakers",
"Don't Cry 	Asia",
"Breaking Us in Two 	Joe Jackson",
"Fall in Love with Me 	Earth, Wind & Fire",
"Heyamola	Mavi Yolcular",
"Uykusuz Her Gece	Ajda Pekkan",
"Bir Günah Gibi	Ajda Pekkan",
"Al Gönlümü Diyar Diyar Sürükle	Nükhet Duru",
"Dünya	İlhan İrem",
"Aman Yavaş Aheste	Barış Manço",
"Marşandiz Dansı	Marşandiz",
"Ne Oldu Bize	Nükhet Duru",
"Tek Başına	Fikret Kızılok",
"Terazi	İlhan irem",

 

    ];

var names = [

"Every Breath You Take ",
"Billie Jean ",
"Flashdance... What a Feeling ",
"Down Under ",
"Beat It ",
"Total Eclipse of the Heart ",
"Maneater ",
"Baby, Come to Me ",
"Maniac ",
"Sweet Dreams (Are Made of This) ",
"Do You Really Want to Hurt Me ",
"You and I ",
"Come On Eileen ",
"Shame on the Moon ",
"She Works Hard for the Money ",
"Never Gonna Let You Go ",
"Hungry Like the Wolf ",
"Let's Dance ",
"Twilight Zone ",
"I Know There's Something Going On ",
"Jeopardy ",
"Electric Avenue ",
"She Blinded Me with Science ",
"Africa ",
"Little Red Corvette ",
"Back on the Chain Gang ",
"Up Where We Belong ",
"Mr. Roboto ",
"You Are ",
"Der Kommissar ",
"Puttin' on the Ritz ",
"Sexual Healing ",
"(Keep Feeling) Fascination ",
"Time (Clock of the Heart) ",
"The Safety Dance ",
"Mickey ",
"You Can't Hurry Love ",
"Separate Ways (Worlds Apart) ",
"One on One ",
"We've Got Tonight ",
"1999",
"Stray Cat Strut ",
"Allentown ",
"Stand Back ",
"Tell Her About It ",
"Always Something There to Remind Me ",
"Truly ",
"Dirty Laundry ",
"The Girl Is Mine ",
"Too Shy ",
"Goody Two-Shoes ",
"Rock the Casbah ",
"Our House ",
"Overkill ",
"Is There Something I Should Know? ",
"Gloria ",
"Affair of the Heart ",
"She's a Beauty ",
"Solitaire ",
"Don't Let It End ",
"How Am I Supposed to Live Without You ",
"China Girl ",
"Come Dancing ",
"Promises, Promises ",
"The Other Guy ",
"Making Love Out of Nothing at All ",
"Family Man ",
"Wanna Be Startin' Somethin' ",
"I Won't Hold You Back ",
"All Right ",
"Straight from the Heart ",
"Heart to Heart ",
"My Love ",
"I'm Still Standing ",
"Hot Girls in Love ",
"It's a Mistake ",
"I'll Tumble 4 Ya ",
"All This Love ",
"Your Love Is Driving Me Crazy ",
"Heartbreaker ",
"Faithfully ",
"Steppin' Out ",
"Take Me to Heart ",
"(She's) Sexy + 17 ",
"Try Again ",
"Dead Giveaway ",
"Lawyers in Love ",
"What About Me ",
"Human Nature ",
"Photograph ",
"Pass the Dutchie ",
"True ",
"Far from Over ",
"I've Got a Rock 'n' Roll Heart ",
"It Might Be You ",
"Tonight, I Celebrate My Love ",
"You Got Lucky ",
"Don't Cry ",
"Breaking Us in Two ",
"Fall in Love with Me ",
"Heyamola",
"Uykusuz Her Gece",
"Bir Günah Gibi",
"Al Gönlümü Diyar Diyar Sürükle",
"Dünya",
"Aman Yavaş Aheste",
"Marşandiz Dansı",
"Ne Oldu Bize",
"Tek Başına",
"Terazi",




 ];

 var artist = [

"The Police",
"Michael Jackson",
"Irene Cara",
"Men at Work",
"Michael Jackson",
"Bonnie Tyler",
"Daryl Hall & John Oates",
"Patti Austin and James Ingram",
"Michael Sembello",
"Eurythmics",
"Culture Club",
"Eddie Rabbitt and Crystal Gayle",
"Dexys Midnight Runners",
"Bob Seger & The Silver Bullet Band",
"Donna Summer",
"Sérgio Mendes",
"Duran Duran",
"David Bowie",
"Golden Earring",
"Frida",
"The Greg Kihn Band",
"Eddy Grant",
"Thomas Dolby",
"Toto",
"Prince",
"The Pretenders",
"Joe Cocker and Jennifer Warnes",
"Styx",
"Lionel Richie",
"After the Fire",
"Taco",
"Marvin Gaye",
"The Human League",
"Culture Club",
"Men Without Hats",
"Toni Basil",
"Phil Collins",
"Journey",
"Daryl Hall & John Oates",
"Kenny Rogers and Sheena Easton",
"Prince",
"Stray Cats",
"Billy Joel",
"Stevie Nicks",
"Billy Joel",
"Naked Eyes",
"Lionel Richie",
"Don Henley",
"Michael Jackson and Paul McCartney",
"Kajagoogoo",
"Adam Ant",
"The Clash",
"Madness",
"Men at Work",
"Duran Duran",
"Laura Branigan",
"Rick Springfield",
"The Tubes",
"Laura Branigan",
"Styx",
"Laura Branigan",
"David Bowie",
"The Kinks",
"Naked Eyes",
"Little River Band",
"Air Supply",
"Daryl Hall & John Oates",
"Michael Jackson",
"Toto",
"Christopher Cross",
"Bryan Adams",
"Kenny Loggins",
"Lionel Richie",
"Elton John",
"Loverboy",
"Men at Work",
"Culture Club",
"DeBarge",
"Sammy Hagar",
"Dionne Warwick",
"Journey",
"Joe Jackson",
"Quarterflash",
"Stray Cats",
"Champaign",
"Shalamar",
"Jackson Browne",
"Moving Pictures",
"Michael Jackson",
"Def Leppard",
"Musical Youth",
"Spandau Ballet",
"Frank Stallone",
"Eric Clapton",
"Stephen Bishop",
"Peabo Bryson and Roberta Flack",
"Tom Petty and the Heartbreakers",
"Asia",
"Joe Jackson",
"Earth, Wind & Fire",
"Mavi Yolcular",
"Ajda Pekkan",
"Ajda Pekkan",
"Nükhet Duru",
"İlhan İrem",
"Barış Manço",
"Marşandiz",
"Nükhet Duru",
"Fikret Kızılok",
"İlhan irem",




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
