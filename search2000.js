// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Breathe 	Faith Hill",
"Smooth 	Santana featuring Rob Thomas",
"Maria Maria 	Santana featuring The Product G&B",
"I Wanna Know 	Joe",
"Everything You Want 	Vertical Horizon",
"Say My Name 	Destiny's Child",
"I Knew I Loved You 	Savage Garden",
"Amazed 	Lonestar",
"Bent 	Matchbox Twenty",
"He Wasn't Man Enough 	Toni Braxton",
"Higher 	Creed",
"Try Again 	Aaliyah",
"Jumpin', Jumpin' 	Destiny's Child",
"Thong Song 	Sisqó",
"Kryptonite 	3 Doors Down",
"There You Go 	Pink",
"Music 	Madonna",
"Doesn't Really Matter 	Janet Jackson",
"What a Girl Wants 	Christina Aguilera",
"Back at One 	Brian McKnight",
"Bye Bye Bye 	'N Sync",
"You Sang to Me 	Marc Anthony",
"I Need to Know 	Marc Anthony",
"Get It On Tonite 	Montell Jordan",
"Incomplete 	Sisqó",
"I Try 	Macy Gray",
"It's Gonna Be Me 	'N Sync",
"That's The Way It Is 	Celine Dion",
"Country Grammar (Hot Shit) 	Nelly",
"Bring It All to Me 	Blaque",
"Show Me the Meaning of Being Lonely 	Backstreet Boys",
"Hot Boyz 	Missy Elliott featuring Nas, Eve and Q-Tip",
"Back Here 	BBMak",
"It Feels So Good 	Sonique",
"Absolutely (Story of a Girl) 	Nine Days",
"With Arms Wide Open 	Creed",
"Be with You 	Enrique Iglesias",
"Come On Over Baby (All I Want Is You) 	Christina Aguilera",
"No More 	Ruff Endz",
"All The Small Things 	Blink 182",
"The Way You Love Me 	Faith Hill",
"I Turn To You 	Christina Aguilera",
"Never Let You Go 	Third Eye Blind",
"I Need You 	LeAnn Rimes",
"Thank God I Found You 	Mariah Carey featuring Joe and 98 Degrees",
"Let's Get Married 	Jagged Edge",
"My Love Is Your Love 	Whitney Houston",
"Then The Morning Comes 	Smash Mouth",
"Blue (Da Ba Dee) 	Eiffel 65",
"Desert Rose 	Sting featuring Cheb Mami",
"The Real Slim Shady 	Eminem",
"Most Girls 	Pink",
"Wifey 	Next",
"Wonderful 	Everclear",
"Oops!... I Did It Again 	Britney Spears",
"I Wanna Love You Forever 	Jessica Simpson",
"Give Me Just One Night (Una Noche) 	98 Degrees",
"Take a Picture 	Filter",
"Otherside 	Red Hot Chili Peppers",
"Big Pimpin' 	Jay-Z featuring UGK",
"A Puro Dolor 	Son by Four",
"He Can't Love U 	Jagged Edge",
"Separated 	Avant",
"I Wish 	Carl Thomas",
"U Know What's Up 	Donell Jones",
"Faded 	soulDecision featuring Thrust",
"Only God Knows Why 	Kid Rock",
"Shake Ya Ass 	Mystikal",
"Bag Lady 	Erykah Badu",
"Meet Virginia 	Train",
"Party Up (Up in Here) 	DMX",
"Case of the Ex 	Mýa",
"Forgot About Dre 	Dr. Dre featuring Eminem",
"That's the Way 	Jo Dee Messina",
"Swear It Again 	Westlife",
"The Next Episode 	Dr. Dre featuring Snoop Dogg",
"From the Bottom of My Broken Heart 	Britney Spears",
"Crash and Burn 	Savage Garden",
"Yes! 	Chad Brock",
"The Best Day 	George Strait",
"Where I Wanna Be 	Donell Jones",
"How Do You Like Me Now?! 	Toby Keith",
"My Best Friend 	Tim McGraw",
"Broadway 	Goo Goo Dolls",
"What'chu Like 	Da Brat featuring Tyrese",
"Don't Think I'm Not 	Kandi",
"I Hope You Dance 	Lee Ann Womack",
"Better Off Alone 	Alice Deejay",
"Dance with Me 	Debelah Morgan",
"What About Now 	Lonestar",
"I Like It 	Sammie",
"24/7	Kevon Edmonds",
"Girl on TV 	LFO",
"Bounce with Me 	Lil' Bow Wow featuring Xscape",
"Cowboy Take Me Away 	Dixie Chicks",
"I Don't Wanna 	Aaliyah",
"Independent Women 	Destiny's Child",
"Gotta Tell You 	Samantha Mumba",
"Waiting for Tonight 	Jennifer Lopez",
"Shackles (Praise You) 	Mary Mary",
"Dön Ne Olur 	Ebru Gündeş",
"Bilsem ki 	Serdar Ortaç",
"Güller Yanıyor 	Bengü",
"Sarı Odalar 	Sezen Aksu",
"Senin Anan Güzel Mi? 	Demet Akalın",
"Aslan Gibi 	Özcan Deniz",
"Bence Talih 	Sibel Can",
"Karam 	Hakan Peker",
"Sök Kalbini 	Nalan",
"Gönül Sayfam	Kayahan",
"Elbette	Candan Erçetin",
"illa ki	Hakan Peker",
"Onyedi	Teoman",
"Bu Akşam Ölürüm	Murat Kekilli",
"Nefes	Ayşegül Aldinç",
"Eğer İstersen	Deniz Seki",

 

    ];

var names = [

"Breathe ",
"Smooth ",
"Maria Maria ",
"I Wanna Know ",
"Everything You Want ",
"Say My Name ",
"I Knew I Loved You ",
"Amazed ",
"Bent ",
"He Wasn't Man Enough ",
"Higher ",
"Try Again ",
"Jumpin', Jumpin' ",
"Thong Song ",
"Kryptonite ",
"There You Go ",
"Music ",
"Doesn't Really Matter ",
"What a Girl Wants ",
"Back at One ",
"Bye Bye Bye ",
"You Sang to Me ",
"I Need to Know ",
"Get It On Tonite ",
"Incomplete ",
"I Try ",
"It's Gonna Be Me ",
"That's The Way It Is ",
"Country Grammar (Hot Shit) ",
"Bring It All to Me ",
"Show Me the Meaning of Being Lonely ",
"Hot Boyz ",
"Back Here ",
"It Feels So Good ",
"Absolutely (Story of a Girl) ",
"With Arms Wide Open ",
"Be with You ",
"Come On Over Baby (All I Want Is You) ",
"No More ",
"All The Small Things ",
"The Way You Love Me ",
"I Turn To You ",
"Never Let You Go ",
"I Need You ",
"Thank God I Found You ",
"Let's Get Married ",
"My Love Is Your Love ",
"Then The Morning Comes ",
"Blue (Da Ba Dee) ",
"Desert Rose ",
"The Real Slim Shady ",
"Most Girls ",
"Wifey ",
"Wonderful ",
"Oops!... I Did It Again ",
"I Wanna Love You Forever ",
"Give Me Just One Night (Una Noche) ",
"Take a Picture ",
"Otherside ",
"Big Pimpin' ",
"A Puro Dolor ",
"He Can't Love U ",
"Separated ",
"I Wish ",
"U Know What's Up ",
"Faded ",
"Only God Knows Why ",
"Shake Ya Ass ",
"Bag Lady ",
"Meet Virginia ",
"Party Up (Up in Here) ",
"Case of the Ex ",
"Forgot About Dre ",
"That's the Way ",
"Swear It Again ",
"The Next Episode ",
"From the Bottom of My Broken Heart ",
"Crash and Burn ",
"Yes! ",
"The Best Day ",
"Where I Wanna Be ",
"How Do You Like Me Now?! ",
"My Best Friend ",
"Broadway ",
"What'chu Like ",
"Don't Think I'm Not ",
"I Hope You Dance ",
"Better Off Alone ",
"Dance with Me ",
"What About Now ",
"I Like It ",
"24/7",
"Girl on TV ",
"Bounce with Me ",
"Cowboy Take Me Away ",
"I Don't Wanna ",
"Independent Women ",
"Gotta Tell You ",
"Waiting for Tonight ",
"Shackles (Praise You) ",
"Dön Ne Olur ",
"Bilsem ki ",
"Güller Yanıyor ",
"Sarı Odalar ",
"Senin Anan Güzel Mi? ",
"Aslan Gibi ",
"Bence Talih ",
"Karam ",
"Sök Kalbini ",
"Gönül Sayfam",
"Elbette",
"illa ki",
"Onyedi",
"Bu Akşam Ölürüm",
"Nefes",
"Eğer İstersen",




 ];

 var artist = [

"Faith Hill",
"Santana featuring Rob Thomas",
"Santana featuring The Product G&B",
"Joe",
"Vertical Horizon",
"Destiny's Child",
"Savage Garden",
"Lonestar",
"Matchbox Twenty",
"Toni Braxton",
"Creed",
"Aaliyah",
"Destiny's Child",
"Sisqó",
"3 Doors Down",
"Pink",
"Madonna",
"Janet Jackson",
"Christina Aguilera",
"Brian McKnight",
"'N Sync",
"Marc Anthony",
"Marc Anthony",
"Montell Jordan",
"Sisqó",
"Macy Gray",
"'N Sync",
"Celine Dion",
"Nelly",
"Blaque",
"Backstreet Boys",
"Missy Elliott featuring Nas, Eve and Q-Tip",
"BBMak",
"Sonique",
"Nine Days",
"Creed",
"Enrique Iglesias",
"Christina Aguilera",
"Ruff Endz",
"Blink 182",
"Faith Hill",
"Christina Aguilera",
"Third Eye Blind",
"LeAnn Rimes",
"Mariah Carey featuring Joe and 98 Degrees",
"Jagged Edge",
"Whitney Houston",
"Smash Mouth",
"Eiffel 65",
"Sting featuring Cheb Mami",
"Eminem",
"Pink",
"Next",
"Everclear",
"Britney Spears",
"Jessica Simpson",
"98 Degrees",
"Filter",
"Red Hot Chili Peppers",
"Jay-Z featuring UGK",
"Son by Four",
"Jagged Edge",
"Avant",
"Carl Thomas",
"Donell Jones",
"soulDecision featuring Thrust",
"Kid Rock",
"Mystikal",
"Erykah Badu",
"Train",
"DMX",
"Mýa",
"Dr. Dre featuring Eminem",
"Jo Dee Messina",
"Westlife",
"Dr. Dre featuring Snoop Dogg",
"Britney Spears",
"Savage Garden",
"Chad Brock",
"George Strait",
"Donell Jones",
"Toby Keith",
"Tim McGraw",
"Goo Goo Dolls",
"Da Brat featuring Tyrese",
"Kandi",
"Lee Ann Womack",
"Alice Deejay",
"Debelah Morgan",
"Lonestar",
"Sammie",
"Kevon Edmonds",
"LFO",
"Lil' Bow Wow featuring Xscape",
"Dixie Chicks",
"Aaliyah",
"Destiny's Child",
"Samantha Mumba",
"Jennifer Lopez",
"Mary Mary",
"Ebru Gündeş",
"Serdar Ortaç",
"Bengü",
"Sezen Aksu",
"Demet Akalın",
"Özcan Deniz",
"Sibel Can",
"Hakan Peker",
"Nalan",
"Kayahan",
"Candan Erçetin",
"Hakan Peker",
"Teoman",
"Murat Kekilli",
"Ayşegül Aldinç",
"Deniz Seki",




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
