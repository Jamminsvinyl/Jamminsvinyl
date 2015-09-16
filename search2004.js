// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Yeah! 	Usher featuring Lil Jon and Ludacris",
"Burn 	Usher",
"If I Ain't Got You 	Alicia Keys",
"This Love 	Maroon 5",
"The Way You Move 	Outkast featuring Sleepy Brown",
"The Reason 	Hoobastank",
"I Don't Wanna Know 	Mario Winans featuring Enya and P. Diddy",
"Hey Ya! 	Outkast",
"Goodies 	Ciara featuring Petey Pablo",
"Lean Back 	Terror Squad",
"Tipsy 	J-Kwon",
"Confessions Part II 	Usher",
"Slow Motion 	Juvenile featuring Soulja Slim",
"Freek-a-Leek 	Petey Pablo",
"Here Without You 	3 Doors Down",
"Slow Jamz 	Twista featuring Kanye West and Jamie Foxx",
"Someday 	Nickelback",
"Naughty Girl 	Beyoncé",
"My Immortal 	Evanescence",
"Sunshine 	Lil' Flip featuring Lea",
"Dirt Off Your Shoulder 	Jay-Z",
"Move Ya Body 	Nina Sky",
"Dip It Low 	Christina Milian",
"My Boo 	Usher and Alicia Keys",
"One Call Away 	Chingy featuring J-Weav",
"Me, Myself and I 	Beyoncé",
"Turn Me On 	Kevin Lyttle",
"The First Cut Is the Deepest 	Sheryl Crow",
"You Don't Know My Name 	Alicia Keys",
"My Place 	Nelly featuring Jaheim",
"Overnight Celebrity 	Twista",
"Hotel 	Cassidy featuring R. Kelly",
"Numb 	Linkin Park",
"Diary 	Alicia Keys featuring Tony! Toni! Toné!",
"She Will Be Loved 	Maroon 5",
"White Flag 	Dido",
"Heaven 	Los Lonely Boys",
"It's My Life 	No Doubt",
"Pieces of Me 	Ashlee Simpson",
"Leave (Get Out) 	JoJo",
"Milkshake 	Kelis",
"Splash Waterfalls 	Ludacris",
"Jesus Walks 	Kanye West",
"Locked Up 	Akon featuring Styles P",
"Stand Up 	Ludacris featuring Shawnna",
"Suga Suga 	Baby Bash featuring Frankie J",
"All Falls Down 	Kanye West featuring Syleena Johnson",
"Toxic 	Britney Spears",
"Salt Shaker 	Ying Yang Twins featuring Lil Jon & the East Side Boyz",
"With You 	Jessica Simpson",
"Meant to Live 	Switchfoot",
"I Like That 	Houston featuring Chingy, Nate Dogg and I-20",
"Sorry 2004 	Ruben Studdard",
"My Happy Ending 	Avril Lavigne",
"On Fire 	Lloyd Banks",
"Roses 	Outkast",
"Walked Outta Heaven 	Jagged Edge",
"Lose My Breath 	Destiny's Child",
"My Band 	D12",
"I'm Still in Love with You 	Sean Paul featuring Sasha",
"Through the Wire 	Kanye West",
"Why? 	Jadakiss",
"Fuck It (I Don't Want You Back) 	Eamon",
"Read Your Mind 	Avant featuring Snoop Dogg",
"Game Over (Flip) 	Lil' Flip",
"One Thing 	Finger Eleven",
"Headsprung 	LL Cool J",
"Damn! 	YoungBloodZ featuring Lil Jon",
"Baby Boy 	Beyoncé featuring Sean Paul",
"Get Low 	Lil Jon & the East Side Boyz featuring Ying Yang Twins",
"Drop It Like It's Hot 	Snoop Dogg featuring Pharrell",
"U Should've Known Better 	Monica",
"On the Way Down 	Ryan Cabrera",
"Breakaway 	Kelly Clarkson",
"Why Don't You & I 	Santana featuring Alex Band",
"Are You Gonna Be My Girl 	Jet",
"100 Years 	Five for Fighting",
"Step in the Name of Love 	R. Kelly",
"Breaking the Habit 	Linkin Park",
"Gigolo 	Nick Cannon featuring R. Kelly",
"Live Like You Were Dying 	Tim McGraw",
"Remember When 	Alan Jackson",
"Everytime 	Britney Spears",
"Southside 	Lloyd featuring Ashanti",
"Dude 	Beenie Man",
"Wanna Get to Know You 	G-Unit featuring Joe",
"Holidae In 	Chingy featuring Ludacris and Snoop Dogg",
"Let's Get It Started 	The Black Eyed Peas",
"When the Sun Goes Down 	Kenny Chesney featuring Uncle Kracker",
"American Soldier 	Toby Keith",
"Change Clothes 	Jay-Z",
"Don't Tell Me 	Avril Lavigne",
"You'll Think of Me 	Keith Urban",
"Happy People 	R. Kelly",
"Hey Mama 	The Black Eyed Peas",
"Over and Over 	Nelly featuring Tim McGraw",
"Redneck Woman 	Gretchen Wilson",
"Just Lose It 	Eminem",
"Letters from Home 	John Michael Montgomery",
"I Go Back 	Kenny Chesney",
"Hay Hay	Nazan Öncel",
"Yalancı Şahidim	Rafet El Roman",
"İsyankar	Mustafa Sandal",
"Of Of	Gülşen",
"Beni Unut	Serdar Ortaç",
"Kırmızı	Hande Yener",
"Sahilden	Burcu Güneş",
"Ellerine Sağlık (Zalim)	Yalın",
"Bu Aşkın Katili Sensin	Levent Yüksel",
"Aşkımsın	Mirkelam",
"Bir Kadın Çizeceksin	Manga",
"Şakası Yok	Nedim Zeper",
"14 Bahar	Melih Görgün",
"Of Of	Gülşen",
"İkimize Birden	Alişan",
"Ölüm de Var	Gece Yolcuları",
"Fırtınalar	Pamela",
"Yaşın Tutmaz	Gökhan Özen",
"Nereye Böyle	Nazan Öncel & Tarkan",
"Yağmur	Sinem",

 

    ];

var names = [

"Yeah! ",
"Burn ",
"If I Ain't Got You ",
"This Love ",
"The Way You Move ",
"The Reason ",
"I Don't Wanna Know ",
"Hey Ya! ",
"Goodies ",
"Lean Back ",
"Tipsy ",
"Confessions Part II ",
"Slow Motion ",
"Freek-a-Leek ",
"Here Without You ",
"Slow Jamz ",
"Someday ",
"Naughty Girl ",
"My Immortal ",
"Sunshine ",
"Dirt Off Your Shoulder ",
"Move Ya Body ",
"Dip It Low ",
"My Boo ",
"One Call Away ",
"Me, Myself and I ",
"Turn Me On ",
"The First Cut Is the Deepest ",
"You Don't Know My Name ",
"My Place ",
"Overnight Celebrity ",
"Hotel ",
"Numb ",
"Diary ",
"She Will Be Loved ",
"White Flag ",
"Heaven ",
"It's My Life ",
"Pieces of Me ",
"Leave (Get Out) ",
"Milkshake ",
"Splash Waterfalls ",
"Jesus Walks ",
"Locked Up ",
"Stand Up ",
"Suga Suga ",
"All Falls Down ",
"Toxic ",
"Salt Shaker ",
"With You ",
"Meant to Live ",
"I Like That ",
"Sorry 2004 ",
"My Happy Ending ",
"On Fire ",
"Roses ",
"Walked Outta Heaven ",
"Lose My Breath ",
"My Band ",
"I'm Still in Love with You ",
"Through the Wire ",
"Why? ",
"Fuck It (I Don't Want You Back) ",
"Read Your Mind ",
"Game Over (Flip) ",
"One Thing ",
"Headsprung ",
"Damn! ",
"Baby Boy ",
"Get Low ",
"Drop It Like It's Hot ",
"U Should've Known Better ",
"On the Way Down ",
"Breakaway ",
"Why Don't You & I ",
"Are You Gonna Be My Girl ",
"100 Years ",
"Step in the Name of Love ",
"Breaking the Habit ",
"Gigolo ",
"Live Like You Were Dying ",
"Remember When ",
"Everytime ",
"Southside ",
"Dude ",
"Wanna Get to Know You ",
"Holidae In ",
"Let's Get It Started ",
"When the Sun Goes Down ",
"American Soldier ",
"Change Clothes ",
"Don't Tell Me ",
"You'll Think of Me ",
"Happy People ",
"Hey Mama ",
"Over and Over ",
"Redneck Woman ",
"Just Lose It ",
"Letters from Home ",
"I Go Back ",
"Hay Hay",
"Yalancı Şahidim",
"İsyankar",
"Of Of",
"Beni Unut",
"Kırmızı",
"Sahilden",
"Ellerine Sağlık (Zalim)",
"Bu Aşkın Katili Sensin",
"Aşkımsın",
"Bir Kadın Çizeceksin",
"Şakası Yok",
"14 Bahar",
"Of Of",
"İkimize Birden",
"Ölüm de Var",
"Fırtınalar",
"Yaşın Tutmaz",
"Nereye Böyle",
"Yağmur",




 ];

 var artist = [

"Usher featuring Lil Jon and Ludacris",
"Usher",
"Alicia Keys",
"Maroon 5",
"Outkast featuring Sleepy Brown",
"Hoobastank",
"Mario Winans featuring Enya and P. Diddy",
"Outkast",
"Ciara featuring Petey Pablo",
"Terror Squad",
"J-Kwon",
"Usher",
"Juvenile featuring Soulja Slim",
"Petey Pablo",
"3 Doors Down",
"Twista featuring Kanye West and Jamie Foxx",
"Nickelback",
"Beyoncé",
"Evanescence",
"Lil' Flip featuring Lea",
"Jay-Z",
"Nina Sky",
"Christina Milian",
"Usher and Alicia Keys",
"Chingy featuring J-Weav",
"Beyoncé",
"Kevin Lyttle",
"Sheryl Crow",
"Alicia Keys",
"Nelly featuring Jaheim",
"Twista",
"Cassidy featuring R. Kelly",
"Linkin Park",
"Alicia Keys featuring Tony! Toni! Toné!",
"Maroon 5",
"Dido",
"Los Lonely Boys",
"No Doubt",
"Ashlee Simpson",
"JoJo",
"Kelis",
"Ludacris",
"Kanye West",
"Akon featuring Styles P",
"Ludacris featuring Shawnna",
"Baby Bash featuring Frankie J",
"Kanye West featuring Syleena Johnson",
"Britney Spears",
"Ying Yang Twins featuring Lil Jon & the East Side Boyz",
"Jessica Simpson",
"Switchfoot",
"Houston featuring Chingy, Nate Dogg and I-20",
"Ruben Studdard",
"Avril Lavigne",
"Lloyd Banks",
"Outkast",
"Jagged Edge",
"Destiny's Child",
"D12",
"Sean Paul featuring Sasha",
"Kanye West",
"Jadakiss",
"Eamon",
"Avant featuring Snoop Dogg",
"Lil' Flip",
"Finger Eleven",
"LL Cool J",
"YoungBloodZ featuring Lil Jon",
"Beyoncé featuring Sean Paul",
"Lil Jon & the East Side Boyz featuring Ying Yang Twins",
"Snoop Dogg featuring Pharrell",
"Monica",
"Ryan Cabrera",
"Kelly Clarkson",
"Santana featuring Alex Band",
"Jet",
"Five for Fighting",
"R. Kelly",
"Linkin Park",
"Nick Cannon featuring R. Kelly",
"Tim McGraw",
"Alan Jackson",
"Britney Spears",
"Lloyd featuring Ashanti",
"Beenie Man",
"G-Unit featuring Joe",
"Chingy featuring Ludacris and Snoop Dogg",
"The Black Eyed Peas",
"Kenny Chesney featuring Uncle Kracker",
"Toby Keith",
"Jay-Z",
"Avril Lavigne",
"Keith Urban",
"R. Kelly",
"The Black Eyed Peas",
"Nelly featuring Tim McGraw",
"Gretchen Wilson",
"Eminem",
"John Michael Montgomery",
"Kenny Chesney",
"Nazan Öncel",
"Rafet El Roman",
"Mustafa Sandal",
"Gülşen",
"Serdar Ortaç",
"Hande Yener",
"Burcu Güneş",
"Yalın",
"Levent Yüksel",
"Mirkelam",
"Manga",
"Nedim Zeper",
"Melih Görgün",
"Gülşen",
"Alişan",
"Gece Yolcuları",
"Pamela",
"Gökhan Özen",
"Nazan Öncel & Tarkan",
"Sinem",




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
