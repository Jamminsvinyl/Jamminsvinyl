// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Joy to the World 	Three Dog Night",
"Maggie May 	Rod Stewart",
"It's Too Late 	Carole King",
"One Bad Apple 	The Osmonds",
"How Can You Mend a Broken Heart 	Bee Gees",
"Indian Reservation (The Lament of the Cherokee Reservation Indian) 	Paul Revere & the Raiders",
"Go Away Little Girl 	Donny Osmond",
"Take Me Home, Country Roads 	John Denver",
"Just My Imagination (Running Away with Me) 	The Temptations",
"Knock Three Times 	Tony Orlando and Dawn",
"Me and Bobby McGee 	Janis Joplin",
"Tired of Being Alone 	Al Green",
"Want Ads 	Honey Cone",
"Smiling Faces Sometimes 	The Undisputed Truth",
"Treat Her Like a Lady 	Cornelius Brothers & Sister Rose",
"You've Got a Friend 	James Taylor",
"Mr. Big Stuff 	Jean Knight",
"Brown Sugar 	The Rolling Stones",
"Do You Know What I Mean 	Lee Michaels",
"The Night They Drove Old Dixie Down 	Joan Baez",
"What's Going On 	Marvin Gaye",
"Uncle Albert/Admiral Halsey 	Paul & Linda McCartney",
"Ain't No Sunshine 	Bill Withers",
"Signs 	Five Man Electrical Band",
"She's a Lady 	Tom Jones",
"Superstar 	Murray Head & The Trindad Singers",
"I've Found Someone Of My Own 	The Free Movement",
"Amos Moses 	Jerry Reed",
"Temptation Eyes 	The Grass Roots",
"Superstar 	The Carpenters",
"My Sweet Lord 	George Harrison",
"Sweet and Innocent 	Donny Osmond",
"Put Your Hand in the Hand 	Ocean",
"Chick-A-Boom 	Daddy Dewdrop",
"For All We Know 	The Carpenters",
"Help Me Make It Through the Night 	Sammi Smith",
"Rainy Days and Mondays 	The Carpenters",
"If You Could Read My Mind 	Gordon Lightfoot",
"Gypsys, Tramps & Thieves 	Cher",
"Never Can Say Goodbye 	The Jackson 5",
"Rose Garden 	Lynn Anderson",
"Don't Pull Your Love 	Hamilton, Joe Frank & Reynolds",
"It Don't Come Easy 	Ringo Starr",
"Mr. Bojangles 	Nitty Gritty Dirt Band",
"I Love You for All Seasons 	The Fuzz",
"Whatcha See is Whatcha Get 	The Dramatics",
"That's the Way I've Always Heard It Should Be 	Carly Simon",
"If You Really Love Me 	Stevie Wonder",
"Spanish Harlem 	Aretha Franklin",
"I Don't Know How to Love Him 	Helen Reddy",
"Yo-Yo 	The Osmonds",
"Bridge over Troubled Water 	Aretha Franklin",
"Doesn't Somebody Want to Be Wanted 	The Partridge Family",
"Draggin' the Line 	Tommy James",
"Proud Mary 	Ike & Tina Turner",
"Beginnings 	Chicago",
"Stay Awhile 	The Bells",
"Sweet City Woman 	The Stampeders",
"Me and You and a Dog Named Boo 	Lobo",
"Another Day 	Paul McCartney",
"If 	Bread",
"Mercy Mercy Me (The Ecology) 	Marvin Gaye",
"One Toke Over the Line 	Brewer & Shipley",
"She's Not Just Another Woman 	8th Day",
"Bring the Boys Home 	Freda Payne",
"I Just Want to Celebrate 	Rare Earth",
"Never Ending Song of Love 	Delaney & Bonnie & Friends",
"Easy Loving 	Freddie Hart",
"Liar 	Three Dog Night",
"Stick-Up 	The Honey Cone",
"Chirpy Chirpy Cheep Cheep 	Mac and Katie Kissoon",
"(Where Do I Begin?) Love Story 	Andy Williams",
"Wild World 	Cat Stevens",
"When You're Hot, You're Hot 	Jerry Reed",
"Funky Nassau 	The Beginning of the End",
"If Not for You 	Olivia Newton-John",
"Groove Me 	King Floyd",
"Watching Scotty Grow 	Bobby Goldsboro",
"Woodstock 	Matthews Southern Comfort",
"Amazing Grace 	Judy Collins",
"I Hear You Knocking 	Dave Edmunds",
"Lonely Days 	Bee Gees",
"Here Comes That Rainy Day Feeling Again 	The Fortunes",
"Won't Get Fooled Again 	The Who",
"Trapped By a Thing Called Love 	Denise LaSalle",
"Mama's Pearl 	The Jackson 5",
"Timothy 	The Buoys",
"I Woke Up In Love This Morning 	The Partridge Family",
"Theme from Shaft 	Isaac Hayes",
"If I Were Your Woman 	Gladys Knight & the Pips",
"I Am...I Said 	Neil Diamond",
"The Wedding Song (There Is Love) 	Paul Stookey",
"Don't Knock My Love 	Wilson Pickett",
"Love Her Madly 	The Doors",
"Here Comes the Sun 	Richie Havens",
"Sweet Mary 	Wadsworth Mansion",
"Right on the Tip of My Tongue 	Brenda & the Tabulations",
"One Less Bell to Answer 	The 5th Dimension",
"Riders on the Storm 	The Doors",
"Somos Novios (It's Impossible) 	Perry Como",
"Sev Kardeşim	Şenay",
"Tatlı Dillim (Neredesin Sen)	Selda",
"İşte Hendek İşte Deve	Barış Manço",
"Aşk Hikayesi	Gönül Yazar",
"Gün Ola Devran Döne	Fikret Kızılok",
"Kıskanıyorum (Kara Kara Gözler)	Nesrin Sipahi",
"Yağmur	Erkin Koray",
"Sonbahar rüzgarları	Handan Kara",
"Çemberimde Gül Oya	Selda",
"Oyun Bitti	Neşe Karaböcek",
"Gençlik Yılları	Ajda Pekkan"


 

    ];

var names = [

"Joy to the World ",
"Maggie May ",
"It's Too Late ",
"One Bad Apple ",
"How Can You Mend a Broken Heart ",
"Indian Reservation (The Lament of the Cherokee Reservation Indian) ",
"Go Away Little Girl ",
"Take Me Home, Country Roads ",
"Just My Imagination (Running Away with Me) ",
"Knock Three Times ",
"Me and Bobby McGee ",
"Tired of Being Alone ",
"Want Ads ",
"Smiling Faces Sometimes ",
"Treat Her Like a Lady ",
"You've Got a Friend ",
"Mr. Big Stuff ",
"Brown Sugar ",
"Do You Know What I Mean ",
"The Night They Drove Old Dixie Down ",
"What's Going On ",
"Uncle Albert/Admiral Halsey ",
"Ain't No Sunshine ",
"Signs ",
"She's a Lady ",
"Superstar ",
"I've Found Someone Of My Own ",
"Amos Moses ",
"Temptation Eyes ",
"Superstar ",
"My Sweet Lord ",
"Sweet and Innocent ",
"Put Your Hand in the Hand ",
"Chick-A-Boom ",
"For All We Know ",
"Help Me Make It Through the Night ",
"Rainy Days and Mondays ",
"If You Could Read My Mind ",
"Gypsys, Tramps & Thieves ",
"Never Can Say Goodbye ",
"Rose Garden ",
"Don't Pull Your Love ",
"It Don't Come Easy ",
"Mr. Bojangles ",
"I Love You for All Seasons ",
"Whatcha See is Whatcha Get ",
"That's the Way I've Always Heard It Should Be ",
"If You Really Love Me ",
"Spanish Harlem ",
"I Don't Know How to Love Him ",
"Yo-Yo ",
"Bridge over Troubled Water ",
"Doesn't Somebody Want to Be Wanted ",
"Draggin' the Line ",
"Proud Mary ",
"Beginnings ",
"Stay Awhile ",
"Sweet City Woman ",
"Me and You and a Dog Named Boo ",
"Another Day ",
"If ",
"Mercy Mercy Me (The Ecology) ",
"One Toke Over the Line ",
"She's Not Just Another Woman ",
"Bring the Boys Home ",
"I Just Want to Celebrate ",
"Never Ending Song of Love ",
"Easy Loving ",
"Liar ",
"Stick-Up ",
"Chirpy Chirpy Cheep Cheep ",
"(Where Do I Begin?) Love Story ",
"Wild World ",
"When You're Hot, You're Hot ",
"Funky Nassau ",
"If Not for You ",
"Groove Me ",
"Watching Scotty Grow ",
"Woodstock ",
"Amazing Grace ",
"I Hear You Knocking ",
"Lonely Days ",
"Here Comes That Rainy Day Feeling Again ",
"Won't Get Fooled Again ",
"Trapped By a Thing Called Love ",
"Mama's Pearl ",
"Timothy ",
"I Woke Up In Love This Morning ",
"Theme from Shaft ",
"If I Were Your Woman ",
"I Am...I Said ",
"The Wedding Song (There Is Love) ",
"Don't Knock My Love ",
"Love Her Madly ",
"Here Comes the Sun ",
"Sweet Mary ",
"Right on the Tip of My Tongue ",
"One Less Bell to Answer ",
"Riders on the Storm ",
"Somos Novios (It's Impossible) ",
"Sev Kardeşim",
"Tatlı Dillim (Neredesin Sen)",
"İşte Hendek İşte Deve",
"Aşk Hikayesi",
"Gün Ola Devran Döne",
"Kıskanıyorum (Kara Kara Gözler)",
"Yağmur",
"Sonbahar rüzgarları",
"Çemberimde Gül Oya",
"Oyun Bitti",
"Gençlik Yılları",




 ];

 var artist = [

"Three Dog Night",
"Rod Stewart",
"Carole King",
"The Osmonds",
"Bee Gees",
"Paul Revere & the Raiders",
"Donny Osmond",
"John Denver",
"The Temptations",
"Tony Orlando and Dawn",
"Janis Joplin",
"Al Green",
"Honey Cone",
"The Undisputed Truth",
"Cornelius Brothers & Sister Rose",
"James Taylor",
"Jean Knight",
"The Rolling Stones",
"Lee Michaels",
"Joan Baez",
"Marvin Gaye",
"Paul & Linda McCartney",
"Bill Withers",
"Five Man Electrical Band",
"Tom Jones",
"Murray Head & The Trindad Singers",
"The Free Movement",
"Jerry Reed",
"The Grass Roots",
"The Carpenters",
"George Harrison",
"Donny Osmond",
"Ocean",
"Daddy Dewdrop",
"The Carpenters",
"Sammi Smith",
"The Carpenters",
"Gordon Lightfoot",
"Cher",
"The Jackson 5",
"Lynn Anderson",
"Hamilton, Joe Frank & Reynolds",
"Ringo Starr",
"Nitty Gritty Dirt Band",
"The Fuzz",
"The Dramatics",
"Carly Simon",
"Stevie Wonder",
"Aretha Franklin",
"Helen Reddy",
"The Osmonds",
"Aretha Franklin",
"The Partridge Family",
"Tommy James",
"Ike & Tina Turner",
"Chicago",
"The Bells",
"The Stampeders",
"Lobo",
"Paul McCartney",
"Bread",
"Marvin Gaye",
"Brewer & Shipley",
"8th Day",
"Freda Payne",
"Rare Earth",
"Delaney & Bonnie & Friends",
"Freddie Hart",
"Three Dog Night",
"The Honey Cone",
"Mac and Katie Kissoon",
"Andy Williams",
"Cat Stevens",
"Jerry Reed",
"The Beginning of the End",
"Olivia Newton-John",
"King Floyd",
"Bobby Goldsboro",
"Matthews Southern Comfort",
"Judy Collins",
"Dave Edmunds",
"Bee Gees",
"The Fortunes",
"The Who",
"Denise LaSalle",
"The Jackson 5",
"The Buoys",
"The Partridge Family",
"Isaac Hayes",
"Gladys Knight & the Pips",
"Neil Diamond",
"Paul Stookey",
"Wilson Pickett",
"The Doors",
"Richie Havens",
"Wadsworth Mansion",
"Brenda & the Tabulations",
"The 5th Dimension",
"The Doors",
"Perry Como",
"Şenay",
"Selda",
"Barış Manço",
"Gönül Yazar",
"Fikret Kızılok",
"Nesrin Sipahi",
"Erkin Koray",
"Handan Kara",
"Selda",
"Neşe Karaböcek",
"Ajda Pekkan"




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
