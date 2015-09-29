// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Take Five	Dave Brubeck",
"So What	Miles Davis",
"Take The A Train	Duke Ellington",
"Round Midnight	Thelonious Monk",
"My Favorite Things	John Coltrane",
"A Love Supreme (Acknowledgment)	John Coltrane",
"All Blues	Miles Davis",
"Birdland	Weather Report",
"The Girl From Ipanema	Stan Getz & Astrud Gilberto",
"Sing, Sing, Sing	Benny Goodman",
"Strange Fruit	Billie Holiday",
"A Night in Tunisia	Dizzy Gillespie",
"Giant Steps	John Coltrane",
"Blue Rondo a la Turk	Dave Brubeck",
"Goodbye Pork Pie Hat	Charles Mingus",
"Stolen Moments	Oliver Nelson",
"West End Blues	Louis Armstrong",
"God Bless The Child	Billie Holiday",
"Cantaloupe Island	Herbie Hancock",
"My Funny Valentine	Chet Baker",
"Body And Soul	Coleman Hawkins",
"Song For My Father	Horace Silver",
"Spain	Chick Corea",
"Blue In Green	Miles Davis",
"Naima	John Coltrane",
"Flamenco Sketches	Miles Davis",
"Waltz For Debby	Bill Evans",
"Autumn Leaves	Cannonball Adderley",
"St. Thomas	Sonny Rollins",
"Mercy, Mercy, Mercy	Cannonball Adderley",
"What A Wonderful World	Louis Armstrong",
"Lush Life	John Coltrane/Johnny Hartman",
"Blue Train	John Coltrane",
"Poinciana	Ahmad Jamal",
"In a Sentimental Mood	Duke Ellington & John Coltrane",
"Freddie Freeloader	Miles Davis",
"Summertime	Ella Fitzgerald",
"Watermelon Man	Herbie Hancock",
"Salt Peanuts	Dizzy Gillespie",
"Moanin'	Art Blakey",
"Straight, No Chaser	Thelonious Monk",
"Good Morning Heartache	Billie Holiday",
"Mack the Knife	Ella Fitzgerald",
"In the Mood	Glenn Miller",
"Desafinado	Stan Getz",
"Cast Your Fate To The Wind	Vince Guaraldi",
"Rhapsody in Blue	George Gershwin",
"Blue Monk	Thelonious Monk",
"Caravan	Duke Ellington",
"Sidewinder	Lee Morgan",
"Django	Modern Jazz Quartet",
"Compared To What	Les McCann",
"Red Clay	Freddie Hubbard",
"Ruby, My Dear	Thelonious Monk",
"April in Paris	Count Basie",
"Bitches Brew	Miles Davis",
"Twisted	Lambert, Hendricks & Ross",
"Maiden Voyage	Herbie Hancock",
"Mood Indigo	Duke Ellington",
"St. Louis Blues	Louis Armstrong",
"Manteca	Dizzy Gillespie",
"How High The Moon	Ella Fitzgerald",
"At Last	Etta James",
"Fever	Peggy Lee",
"Satin Doll	Duke Ellington",
"Someday My Prince Will Come	Miles Davis",
"Autumn in New York	Billie Holiday",
"Epistrophy	Thelonious Monk",
"I Loves You Porgy	Nina Simone",
"It Don't Mean A Thing	Duke Ellington",
"Koko	Charlie Parker",
"Milestones	Miles Davis",
"Misterioso	Thelonious Monk",
"Nuages	Django Reinhardt",
"Struttin' with Some BBQ	Louis Armstrong",
"The In Crowd	Ramsey Lewis",
"Ain't Misbehavin	Fats Waller",
"Bye Bye Blackbird	John Coltrane",
"On Green Dolphin Street	Miles Davis",
"Linus and Lucy	Vince Guaraldi",
"Georgia on My Mind	Ray Charles",
"Joy Spring	Clifford Brown & Max Roach",
"One O'Clock Jump 	Count Basie",
"Potato Head Blues	Louis Armstrong",
"Bumpin’ (On Sunset)	Wes Montgomery",
"Feeling Good	Nina Simone",
"Misty	Errol Garner",
"Moody's Mood For Love	James Moody",
"Stardust	Louis Armstrong",
"Yardbird Suite	Charlie Parker",
"Diminuendo & Crescendo in Blue	Duke Ellington",
"Donna Lee	Charlie Parker",
"Water Boy	Don Shirley",
"Ornithology	Charlie Parker",
"Begin the Beguine	Artie Shaw",
"Ceora	Lee Morgan",
"Sophisticated Lady	Duke Ellington",
"Sugar	Stanley Turrentine",
"Footprints	Wayne Shorter",
"Four on Six	Wes Montgomery",

 

    ];

var names = [

"Take Five",
"So What",
"Take The A Train",
"Round Midnight",
"My Favorite Things",
"A Love Supreme (Acknowledgment)",
"All Blues",
"Birdland",
"The Girl From Ipanema",
"Sing, Sing, Sing",
"Strange Fruit",
"A Night in Tunisia",
"Giant Steps",
"Blue Rondo a la Turk",
"Goodbye Pork Pie Hat",
"Stolen Moments",
"West End Blues",
"God Bless The Child",
"Cantaloupe Island",
"My Funny Valentine",
"Body And Soul",
"Song For My Father",
"Spain",
"Blue In Green",
"Naima",
"Flamenco Sketches",
"Waltz For Debby",
"Autumn Leaves",
"St. Thomas",
"Mercy, Mercy, Mercy",
"What A Wonderful World",
"Lush Life",
"Blue Train",
"Poinciana",
"In a Sentimental Mood",
"Freddie Freeloader",
"Summertime",
"Watermelon Man",
"Salt Peanuts",
"Moanin'",
"Straight, No Chaser",
"Good Morning Heartache",
"Mack the Knife",
"In the Mood",
"Desafinado",
"Cast Your Fate To The Wind",
"Rhapsody in Blue",
"Blue Monk",
"Caravan",
"Sidewinder",
"Django",
"Compared To What",
"Red Clay",
"Ruby, My Dear",
"April in Paris",
"Bitches Brew",
"Twisted",
"Maiden Voyage",
"Mood Indigo",
"St. Louis Blues",
"Manteca",
"How High The Moon",
"At Last",
"Fever",
"Satin Doll",
"Someday My Prince Will Come",
"Autumn in New York",
"Epistrophy",
"I Loves You Porgy",
"It Don't Mean A Thing",
"Koko",
"Milestones",
"Misterioso",
"Nuages",
"Struttin' with Some BBQ",
"The In Crowd",
"Ain't Misbehavin",
"Bye Bye Blackbird",
"On Green Dolphin Street",
"Linus and Lucy",
"Georgia on My Mind",
"Joy Spring",
"One O'Clock Jump ",
"Potato Head Blues",
"Bumpin’ (On Sunset)",
"Feeling Good",
"Misty",
"Moody's Mood For Love",
"Stardust",
"Yardbird Suite",
"Diminuendo & Crescendo in Blue",
"Donna Lee",
"Water Boy",
"Ornithology",
"Begin the Beguine",
"Ceora",
"Sophisticated Lady",
"Sugar",
"Footprints",
"Four on Six",




 ];

 var artist = [

"Dave Brubeck",
"Miles Davis",
"Duke Ellington",
"Thelonious Monk",
"John Coltrane",
"John Coltrane",
"Miles Davis",
"Weather Report",
"Stan Getz & Astrud Gilberto",
"Benny Goodman",
"Billie Holiday",
"Dizzy Gillespie",
"John Coltrane",
"Dave Brubeck",
"Charles Mingus",
"Oliver Nelson",
"Louis Armstrong",
"Billie Holiday",
"Herbie Hancock",
"Chet Baker",
"Coleman Hawkins",
"Horace Silver",
"Chick Corea",
"Miles Davis",
"John Coltrane",
"Miles Davis",
"Bill Evans",
"Cannonball Adderley",
"Sonny Rollins",
"Cannonball Adderley",
"Louis Armstrong",
"John Coltrane/Johnny Hartman",
"John Coltrane",
"Ahmad Jamal",
"Duke Ellington & John Coltrane",
"Miles Davis",
"Ella Fitzgerald",
"Herbie Hancock",
"Dizzy Gillespie",
"Art Blakey",
"Thelonious Monk",
"Billie Holiday",
"Ella Fitzgerald",
"Glenn Miller",
"Stan Getz",
"Vince Guaraldi",
"George Gershwin",
"Thelonious Monk",
"Duke Ellington",
"Lee Morgan",
"Modern Jazz Quartet",
"Les McCann",
"Freddie Hubbard",
"Thelonious Monk",
"Count Basie",
"Miles Davis",
"Lambert, Hendricks & Ross",
"Herbie Hancock",
"Duke Ellington",
"Louis Armstrong",
"Dizzy Gillespie",
"Ella Fitzgerald",
"Etta James",
"Peggy Lee",
"Duke Ellington",
"Miles Davis",
"Billie Holiday",
"Thelonious Monk",
"Nina Simone",
"Duke Ellington",
"Charlie Parker",
"Miles Davis",
"Thelonious Monk",
"Django Reinhardt",
"Louis Armstrong",
"Ramsey Lewis",
"Fats Waller",
"John Coltrane",
"Miles Davis",
"Vince Guaraldi",
"Ray Charles",
"Clifford Brown & Max Roach",
"Count Basie",
"Louis Armstrong",
"Wes Montgomery",
"Nina Simone",
"Errol Garner",
"James Moody",
"Louis Armstrong",
"Charlie Parker",
"Duke Ellington",
"Charlie Parker",
"Don Shirley",
"Charlie Parker",
"Artie Shaw",
"Lee Morgan",
"Duke Ellington",
"Stanley Turrentine",
"Wayne Shorter",
"Wes Montgomery",




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
