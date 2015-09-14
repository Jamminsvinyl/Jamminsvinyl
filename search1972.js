// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"The First Time Ever I Saw Your Face 	Roberta Flack",
"Alone Again (Naturally) 	Gilbert O'Sullivan",
"American Pie 	Don McLean",
"Without You 	Harry Nilsson",
"The Candy Man 	Sammy Davis, Jr.",
"I Gotcha 	Joe Tex",
"Lean on Me 	Bill Withers",
"Baby, Don't Get Hooked on Me 	Mac Davis",
"Brand New Key 	Melanie",
"Daddy Don't You Walk So Fast 	Wayne Newton",
"Let's Stay Together 	Al Green",
"Brandy (You're a Fine Girl) 	Looking Glass",
"Oh Girl 	The Chi-Lites",
"Nice to Be with You 	Gallery",
"My Ding-a-Ling 	Chuck Berry",
"(If Loving You Is Wrong) I Don't Want to Be Right 	Luther Ingram",
"Heart of Gold 	Neil Young",
"Betcha by Golly, Wow 	The Stylistics",
"I'll Take You There 	The Staple Singers",
"Ben 	Michael Jackson",
"The Lion Sleeps Tonight 	Robert John",
"Outa-Space 	Billy Preston",
"Slippin' Into Darkness 	War",
"Long Cool Woman in a Black Dress 	The Hollies",
"How Do You Do 	Mouth & MacNeal",
"Song Sung Blue 	Neil Diamond",
"A Horse with No Name 	America",
"Popcorn 	Hot Butter",
"Everybody Plays the Fool 	The Main Ingredient",
"Precious and Few 	Climax",
"(Last Night) I Didn't Get to Sleep at All 	The 5th Dimension",
"Nights in White Satin 	The Moody Blues",
"Go All the Way 	Raspberries",
"Too Late to Turn Back Now 	Cornelius Brothers & Sister Rose",
"Back Stabbers 	The O'Jays",
"Down by the Lazy River 	The Osmonds",
"Sunshine 	Jonathan Edwards",
"Starting All Over Again 	Mel and Tim",
"Day After Day 	Badfinger",
"Rocket Man 	Elton John",
"Rockin' Robin 	Michael Jackson",
"Beautiful Sunday 	Daniel Boone",
"Scorpio 	Dennis Coffey",
"Morning Has Broken 	Cat Stevens",
"City of New Orleans 	Arlo Guthrie",
"Garden Party 	Ricky Nelson",
"I Can See Clearly Now 	Johnny Nash",
"Burning Love 	Elvis Presley",
"Clean Up Woman 	Betty Wright",
"Hold Your Head Up 	Argent",
"Jungle Fever 	The Chakachas",
"Everything I Own 	Bread",
"In the Rain 	The Dramatics",
"Look What You Done for Me 	Al Green",
"The Happiest Girl in the Whole U.S.A. 	Donna Fargo",
"Get It On 	T. Rex",
"Mother and Child Reunion 	Paul Simon",
"Where Is the Love 	Roberta Flack & Donny Hathaway",
"I'm Still in Love with You 	Al Green",
"Layla 	Derek and the Dominos",
"Day Dreaming 	Aretha Franklin",
"The Way of Love 	Cher",
"Black and White 	Three Dog Night",
"Sylvia's Mother 	Dr. Hook & The Medicine Show",
"Hurting Each Other 	The Carpenters",
"Coconut 	Harry Nilsson",
"Puppy Love 	Donny Osmond",
"You Don't Mess Around with Jim 	Jim Croce",
"Hot Rod Lincoln 	Commander Cody and His Lost Planet Airmen",
"A Cowboy's Work Is Never Done 	Sonny & Cher",
"Joy 	Apollo 100",
"Anticipation 	Carly Simon",
"Never Been to Spain 	Three Dog Night",
"Kiss an Angel Good Mornin' 	Charley Pride",
"School's Out 	Alice Cooper",
"Saturday in the Park 	Chicago",
"Drowning In The Sea Of Love 	Joe Simon",
"Use Me 	Bill Withers",
"Family Affair 	Sly & the Family Stone",
"Troglodyte (Cave Man) 	Jimmy Castor Bunch",
"The Witch Queen of New Orleans 	Redbone",
"Freddie's Dead 	Curtis Mayfield",
"Power of Love 	Joe Simon",
"Ain't Understanding Mellow 	Jerry Butler & Brenda Lee Eager",
"Taxi 	Harry Chapin",
"Don't Say You Don't Remember 	Beverly Bremers",
"Sealed with a Kiss 	Bobby Vinton",
"I Saw the Light 	Todd Rundgren",
"Motorcycle Mama 	Sailcat",
"Day by Day 	Original Cast of Godspell",
"Roundabout 	Yes",
"Doctor My Eyes 	Jackson Browne",
"I'd Like to Teach the World to Sing (In Perfect Harmony) 	The New Seekers",
"Vincent 	Don McLean",
"Baby Let Me Take You (In My Arms) 	The Detroit Emeralds",
"Speak to the Sky 	Rick Springfield",
"I'd Like to Teach the World to Sing (In Perfect Harmony) 	The Hillside Singers",
"Walkin' in the Rain with the One I Love 	Love Unlimited",
"Get on the Good Foot 	James Brown",
"Pop That Thang 	The Isley Brothers",
"Senden Başka	Füsun Önal",
"Taka Taka Tak Füsun Önal/ -Neşe Karaböcek-1972 / Şaka Yaptım Ben Sana (Şaka Şaka)-Gülden Karaböcek-1972 / Aşk Mavidir-Parla Şenol-1971 / Kalbim Bir Pusula-Nilüfer-1972)	Füsun Önal",
"Ağlıyorum yine	Nilüfer",
"Sen nerde ben orda	Kamuran Akkor",
"Oy anam oy	Arda Kardeş",
"Sevenlerin Kaderi 	Gönül Yazar",
"Hayat boş	Kerem Yılmazer",
"Darla Dirlada	Tanju Okan",
"Yıllardan Sonra	Mehmet  Taneri"

 

    ];

var names = [

"The First Time Ever I Saw Your Face ",
"Alone Again (Naturally) ",
"American Pie ",
"Without You ",
"The Candy Man ",
"I Gotcha ",
"Lean on Me ",
"Baby, Don't Get Hooked on Me ",
"Brand New Key ",
"Daddy Don't You Walk So Fast ",
"Let's Stay Together ",
"Brandy (You're a Fine Girl) ",
"Oh Girl ",
"Nice to Be with You ",
"My Ding-a-Ling ",
"(If Loving You Is Wrong) I Don't Want to Be Right ",
"Heart of Gold ",
"Betcha by Golly, Wow ",
"I'll Take You There ",
"Ben ",
"The Lion Sleeps Tonight ",
"Outa-Space ",
"Slippin' Into Darkness ",
"Long Cool Woman in a Black Dress ",
"How Do You Do ",
"Song Sung Blue ",
"A Horse with No Name ",
"Popcorn ",
"Everybody Plays the Fool ",
"Precious and Few ",
"(Last Night) I Didn't Get to Sleep at All ",
"Nights in White Satin ",
"Go All the Way ",
"Too Late to Turn Back Now ",
"Back Stabbers ",
"Down by the Lazy River ",
"Sunshine ",
"Starting All Over Again ",
"Day After Day ",
"Rocket Man ",
"Rockin' Robin ",
"Beautiful Sunday ",
"Scorpio ",
"Morning Has Broken ",
"City of New Orleans ",
"Garden Party ",
"I Can See Clearly Now ",
"Burning Love ",
"Clean Up Woman ",
"Hold Your Head Up ",
"Jungle Fever ",
"Everything I Own ",
"In the Rain ",
"Look What You Done for Me ",
"The Happiest Girl in the Whole U.S.A. ",
"Get It On ",
"Mother and Child Reunion ",
"Where Is the Love ",
"I'm Still in Love with You ",
"Layla ",
"Day Dreaming ",
"The Way of Love ",
"Black and White ",
"Sylvia's Mother ",
"Hurting Each Other ",
"Coconut ",
"Puppy Love ",
"You Don't Mess Around with Jim ",
"Hot Rod Lincoln ",
"A Cowboy's Work Is Never Done ",
"Joy ",
"Anticipation ",
"Never Been to Spain ",
"Kiss an Angel Good Mornin' ",
"School's Out ",
"Saturday in the Park ",
"Drowning In The Sea Of Love ",
"Use Me ",
"Family Affair ",
"Troglodyte (Cave Man) ",
"The Witch Queen of New Orleans ",
"Freddie's Dead ",
"Power of Love ",
"Ain't Understanding Mellow ",
"Taxi ",
"Don't Say You Don't Remember ",
"Sealed with a Kiss ",
"I Saw the Light ",
"Motorcycle Mama ",
"Day by Day ",
"Roundabout ",
"Doctor My Eyes ",
"I'd Like to Teach the World to Sing (In Perfect Harmony) ",
"Vincent ",
"Baby Let Me Take You (In My Arms) ",
"Speak to the Sky ",
"I'd Like to Teach the World to Sing (In Perfect Harmony) ",
"Walkin' in the Rain with the One I Love ",
"Get on the Good Foot ",
"Pop That Thang ",
"Senden Başka",
"Taka Taka Tak Füsun Önal/ -Neşe Karaböcek-1972 / Şaka Yaptım Ben Sana (Şaka Şaka)-Gülden Karaböcek-1972 / Aşk Mavidir-Parla Şenol-1971 / Kalbim Bir Pusula-Nilüfer-1972)",
"Ağlıyorum yine",
"Sen nerde ben orda",
"Oy anam oy",
"Sevenlerin Kaderi ",
"Hayat boş",
"Darla Dirlada",
"Yıllardan Sonra"




 ];

 var artist = [

"Roberta Flack",
"Gilbert O'Sullivan",
"Don McLean",
"Harry Nilsson",
"Sammy Davis, Jr.",
"Joe Tex",
"Bill Withers",
"Mac Davis",
"Melanie",
"Wayne Newton",
"Al Green",
"Looking Glass",
"The Chi-Lites",
"Gallery",
"Chuck Berry",
"Luther Ingram",
"Neil Young",
"The Stylistics",
"The Staple Singers",
"Michael Jackson",
"Robert John",
"Billy Preston",
"War",
"The Hollies",
"Mouth & MacNeal",
"Neil Diamond",
"America",
"Hot Butter",
"The Main Ingredient",
"Climax",
"The 5th Dimension",
"The Moody Blues",
"Raspberries",
"Cornelius Brothers & Sister Rose",
"The O'Jays",
"The Osmonds",
"Jonathan Edwards",
"Mel and Tim",
"Badfinger",
"Elton John",
"Michael Jackson",
"Daniel Boone",
"Dennis Coffey",
"Cat Stevens",
"Arlo Guthrie",
"Ricky Nelson",
"Johnny Nash",
"Elvis Presley",
"Betty Wright",
"Argent",
"The Chakachas",
"Bread",
"The Dramatics",
"Al Green",
"Donna Fargo",
"T. Rex",
"Paul Simon",
"Roberta Flack & Donny Hathaway",
"Al Green",
"Derek and the Dominos",
"Aretha Franklin",
"Cher",
"Three Dog Night",
"Dr. Hook & The Medicine Show",
"The Carpenters",
"Harry Nilsson",
"Donny Osmond",
"Jim Croce",
"Commander Cody and His Lost Planet Airmen",
"Sonny & Cher",
"Apollo 100",
"Carly Simon",
"Three Dog Night",
"Charley Pride",
"Alice Cooper",
"Chicago",
"Joe Simon",
"Bill Withers",
"Sly & the Family Stone",
"Jimmy Castor Bunch",
"Redbone",
"Curtis Mayfield",
"Joe Simon",
"Jerry Butler & Brenda Lee Eager",
"Harry Chapin",
"Beverly Bremers",
"Bobby Vinton",
"Todd Rundgren",
"Sailcat",
"Original Cast of Godspell",
"Yes",
"Jackson Browne",
"The New Seekers",
"Don McLean",
"The Detroit Emeralds",
"Rick Springfield",
"The Hillside Singers",
"Love Unlimited",
"James Brown",
"The Isley Brothers",
"Füsun Önal",
"Füsun Önal",
"Nilüfer",
"Kamuran Akkor",
"Arda Kardeş",
"Gönül Yazar",
"Kerem Yılmazer",
"Tanju Okan",
"Mehmet  Taneri"




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
