// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Get Up (I Feel Like Being a Sex Machine) Part I 	James Brown",
"Papa's Got a Brand New Bag 	James Brown & The Famous Flames",
"Thank You (Falletinme Be Mice Elf Agin) 	Sly & The Family Stone",
"Tear the Roof Off the Sucker/Give Up the Funk 	Parliament",
"Theme from "Shaft" 	Isaac Hayes",
"Superfly 	Curtis Mayfield",
"Superstition 	Stevie Wonder",
"Papa Was a Rollin' Stone 	The Temptations",
"When Doves Cry 	Prince & The Revolution",
"One Nation Under a Groove 	Funkadelic",
"Cold Sweat Part I 	James Brown & The Famous Flames",
"Out of Sight 	James Brown & The Famous Flames",
"Funky Broadway 	Dyke & The Blazers",
"Cissy Strut 	Meters",
"Chameleon 	Herbie Hancock",
"It's Your Thing 	Isley Brothers",
"Flash Light 	Parliament",
"War 	Edwin Starr",
"Super Freak Part I 	Rick James",
"Little Red Corvette 	Prince & The Revolution",
"Don't Stop ('Til You Get Enough) 	Michael Jackson",
"Family Affair 	Sly & The Family Stone",
"Living for the City 	Stevie Wonder",
"I'll Take You There 	Staple Singers",
"That Lady Part I 	Isley Brothers",
"Mr. Big Stuff 	Jean Knight",
"Tell Me Something Good 	Rufus",
"Kiss 	Prince & The Revolution",
"Higher Ground 	Stevie Wonder",
"Play That Funky Music (White Boy) 	Wild Cherry",
"Car Wash 	Rose Royce",
"Brick House 	Commodores",
"Fire 	Ohio Players",
"Low Rider 	War",
"Pick Up the Pieces 	Average White Band",
"Got to Give It Up Part I 	Marvin Gaye",
"More Bounce to the Ounce Part I 	Zapp & Roger",
"Jungle Boogie 	Kool & The Gang",
"Funky Drummer Parts I and II 	James Brown",
"Amen, Brother 	Winstons",
"Apache 	Incredible Bongo Band",
"The Payback 	James Brown",
"Think (About It) 	Lyn Collins",
"Word Up 	Cameo",
"Express Yourself 	Charles Wright & The Watts 103rd Street Rhythm Band",
"Atomic Dog 	George Clinton",
"You Sexy Thing 	Hot Chocolate",
"Funky Stuff 	Kool & The Gang",
"Dazz 	Brick",
"Shining Star 	Earth, Wind & Fire",
"Hollywood Swinging 	Kool & The Gang",
"Do It ('Til You're Satisfied) 	B.T. Express",
"For the Love of Money 	O'Jays",
"Give It to Me Baby 	Rick James",
"Clean Up Woman 	Betty Wright",
"Groove Me 	King Floyd",
"Ain't Nobody 	Rufus & Chaka Khan",
"Rock Steady 	Aretha Franklin",
"What is Hip? 	Tower of Power",
"You Dropped a Bomb on Me 	Gap Band",
"I Can't Stand the Rain 	Ann Peebles",
"Genius of Love 	Tom Tom Club",
"(Not Just) Knee Deep Part I 	Funkadelic",
"Get Down On It 	Kool & The Gang",
"Love Rollercoaster 	Ohio Players",
"It's Just Begun 	Jimmy Castor Bunch",
"Slide 	Slave",
"P Funk (Wants to Get Funked Up) 	Parliament",
"I Don't Believe You Want To Get Up and Dance (Oops, Up Side Your Head) 	Gap Band",
"Keep on Truckin' Part I 	Eddie Kendricks",
"Fight the Power Parts I and II 	Isley Brothers",
"Say It Loud  I'm Black and Proud Part I 	James Brown",
"Give It Up or Turnit a Loose (In the Jungle Groove remix) 	James Brown",
"Kung Fu Fighting 	Carl Douglas",
"Bustin' Loose 	Chuck Brown & The Soul Searchers",
"Hot Fun in the Summertime 	Sly & The Family Stone",
"Sign O' the Times 	Prince",
"Cloud Nine 	Temptations",
"Ball of Confusion (That's What the World is Today) 	Temptations",
"Funkin' for Jamaica 	Tom Browne",
"Heartbeat 	Taana Gardner",
"Use Me 	Bill Withers",
"Shakey Ground 	Temptations",
"Future Shock 	Curtis Mayfield",
"Just Kissed My Baby 	Meters",
"Burn Rubber (Why You Wanna Hurt Me?) 	Gap Band",
"Get the Funk Out of Ma Face 	Brothers Johnson",
"Freddie's Dead (Theme from "Superfly") 	Curtis Mayfield",
"Upside Down (Inside Out) 	Diana Ross",
"Lovely Day 	Bill Withers",
"The Jam 	Graham Central Station",
"Stand! 	Sly & The Family Stone",
"Right Place, Wrong Time 	Dr. John",
"Computer Love 	Zapp & Roger",
"Fantastic Voyage 	Lakeside",
"Let it Whip 	Dazz Band",
"I Got My Mind Made Up (You Can Get It Girl) 	Instant Funk",
"No Parking (On the Dancefloor) 	Midnight Star",
"Cutie Pie 	One Way",
"Get on the Good Foot 	James Brown",
 

    ];

var names = [

"Get Up (I Feel Like Being a Sex Machine) Part I ",
"Papa's Got a Brand New Bag ",
"Thank You (Falletinme Be Mice Elf Agin) ",
"Tear the Roof Off the Sucker/Give Up the Funk ",
"Theme from "Shaft" ",
"Superfly ",
"Superstition ",
"Papa Was a Rollin' Stone ",
"When Doves Cry ",
"One Nation Under a Groove ",
"Cold Sweat Part I ",
"Out of Sight ",
"Funky Broadway ",
"Cissy Strut ",
"Chameleon ",
"It's Your Thing ",
"Flash Light ",
"War ",
"Super Freak Part I ",
"Little Red Corvette ",
"Don't Stop ('Til You Get Enough) ",
"Family Affair ",
"Living for the City ",
"I'll Take You There ",
"That Lady Part I ",
"Mr. Big Stuff ",
"Tell Me Something Good ",
"Kiss ",
"Higher Ground ",
"Play That Funky Music (White Boy) ",
"Car Wash ",
"Brick House ",
"Fire ",
"Low Rider ",
"Pick Up the Pieces ",
"Got to Give It Up Part I ",
"More Bounce to the Ounce Part I ",
"Jungle Boogie ",
"Funky Drummer Parts I and II ",
"Amen, Brother ",
"Apache ",
"The Payback ",
"Think (About It) ",
"Word Up ",
"Express Yourself ",
"Atomic Dog ",
"You Sexy Thing ",
"Funky Stuff ",
"Dazz ",
"Shining Star ",
"Hollywood Swinging ",
"Do It ('Til You're Satisfied) ",
"For the Love of Money ",
"Give It to Me Baby ",
"Clean Up Woman ",
"Groove Me ",
"Ain't Nobody ",
"Rock Steady ",
"What is Hip? ",
"You Dropped a Bomb on Me ",
"I Can't Stand the Rain ",
"Genius of Love ",
"(Not Just) Knee Deep Part I ",
"Get Down On It ",
"Love Rollercoaster ",
"It's Just Begun ",
"Slide ",
"P Funk (Wants to Get Funked Up) ",
"I Don't Believe You Want To Get Up and Dance (Oops, Up Side Your Head) ",
"Keep on Truckin' Part I ",
"Fight the Power Parts I and II ",
"Say It Loud  I'm Black and Proud Part I ",
"Give It Up or Turnit a Loose (In the Jungle Groove remix) ",
"Kung Fu Fighting ",
"Bustin' Loose ",
"Hot Fun in the Summertime ",
"Sign O' the Times ",
"Cloud Nine ",
"Ball of Confusion (That's What the World is Today) ",
"Funkin' for Jamaica ",
"Heartbeat ",
"Use Me ",
"Shakey Ground ",
"Future Shock ",
"Just Kissed My Baby ",
"Burn Rubber (Why You Wanna Hurt Me?) ",
"Get the Funk Out of Ma Face ",
"Freddie's Dead (Theme from "Superfly") ",
"Upside Down (Inside Out) ",
"Lovely Day ",
"The Jam ",
"Stand! ",
"Right Place, Wrong Time ",
"Computer Love ",
"Fantastic Voyage ",
"Let it Whip ",
"I Got My Mind Made Up (You Can Get It Girl) ",
"No Parking (On the Dancefloor) ",
"Cutie Pie ",
"Get on the Good Foot ",




 ];

 var artist = [

"James Brown",
"James Brown & The Famous Flames",
"Sly & The Family Stone",
"Parliament",
"Isaac Hayes",
"Curtis Mayfield",
"Stevie Wonder",
"The Temptations",
"Prince & The Revolution",
"Funkadelic",
"James Brown & The Famous Flames",
"James Brown & The Famous Flames",
"Dyke & The Blazers",
"Meters",
"Herbie Hancock",
"Isley Brothers",
"Parliament",
"Edwin Starr",
"Rick James",
"Prince & The Revolution",
"Michael Jackson",
"Sly & The Family Stone",
"Stevie Wonder",
"Staple Singers",
"Isley Brothers",
"Jean Knight",
"Rufus",
"Prince & The Revolution",
"Stevie Wonder",
"Wild Cherry",
"Rose Royce",
"Commodores",
"Ohio Players",
"War",
"Average White Band",
"Marvin Gaye",
"Zapp & Roger",
"Kool & The Gang",
"James Brown",
"Winstons",
"Incredible Bongo Band",
"James Brown",
"Lyn Collins",
"Cameo",
"Charles Wright & The Watts 103rd Street Rhythm Band",
"George Clinton",
"Hot Chocolate",
"Kool & The Gang",
"Brick",
"Earth, Wind & Fire",
"Kool & The Gang",
"B.T. Express",
"O'Jays",
"Rick James",
"Betty Wright",
"King Floyd",
"Rufus & Chaka Khan",
"Aretha Franklin",
"Tower of Power",
"Gap Band",
"Ann Peebles",
"Tom Tom Club",
"Funkadelic",
"Kool & The Gang",
"Ohio Players",
"Jimmy Castor Bunch",
"Slave",
"Parliament",
"Gap Band",
"Eddie Kendricks",
"Isley Brothers",
"James Brown",
"James Brown",
"Carl Douglas",
"Chuck Brown & The Soul Searchers",
"Sly & The Family Stone",
"Prince",
"Temptations",
"Temptations",
"Tom Browne",
"Taana Gardner",
"Bill Withers",
"Temptations",
"Curtis Mayfield",
"Meters",
"Gap Band",
"Brothers Johnson",
"Curtis Mayfield",
"Diana Ross",
"Bill Withers",
"Graham Central Station",
"Sly & The Family Stone",
"Dr. John",
"Zapp & Roger",
"Lakeside",
"Dazz Band",
"Instant Funk",
"Midnight Star",
"One Way",
"James Brown",



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
