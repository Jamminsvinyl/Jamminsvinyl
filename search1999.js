// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Believe 	Cher",
"No Scrubs 	TLC",
"Angel of Mine 	Monica",
"Heartbreak Hotel 	Whitney Houston featuring Faith Evans and Kelly Price",
"...Baby One More Time 	Britney Spears",
"Kiss Me 	Sixpence None the Richer",
"Genie in a Bottle 	Christina Aguilera",
"Every Morning 	Sugar Ray",
"Nobody's Supposed to Be Here 	Deborah Cox",
"Livin' la Vida Loca 	Ricky Martin",
"Where My Girls At? 	702",
"If You Had My Love 	Jennifer Lopez",
"Slide 	Goo Goo Dolls",
"Have You Ever? 	Brandy",
"I Want It That Way 	Backstreet Boys",
"I'm Your Angel 	R. Kelly and Celine Dion",
"All Star 	Smash Mouth",
"Angel 	Sarah McLachlan",
"Smooth 	Santana featuring Rob Thomas",
"Unpretty 	TLC",
"Bills, Bills, Bills 	Destiny's Child",
"Save Tonight 	Eagle-Eye Cherry",
"Last Kiss 	Pearl Jam",
"Fortunate 	Maxwell",
"All I Have to Give 	Backstreet Boys",
"Bailamos 	Enrique Iglesias",
"What's It Gonna Be?! 	Busta Rhymes featuring Janet",
"What It's Like 	Everlast",
"Fly Away 	Lenny Kravitz",
"Someday 	Sugar Ray",
"Lately 	Divine",
"That Don't Impress Me Much 	Shania Twain",
"Wild Wild West 	Will Smith featuring Dru Hill and Kool Moe Dee",
"Scar Tissue 	Red Hot Chili Peppers",
"Heartbreaker 	Mariah Carey featuring Jay-Z",
"I Still Believe 	Mariah Carey",
"The Hardest Thing 	98 Degrees",
"Summer Girls 	LFO",
"Can I Get A... 	Jay-Z featuring Amil and Ja Rule",
"Jumper 	Third Eye Blind",
"Doo Wop (That Thing) 	Lauryn Hill",
"Mambo No. 5 	Lou Bega",
"Sweet Lady 	Tyrese",
"It's Not Right but It's Okay 	Whitney Houston",
"(God Must Have Spent) A Little More Time on You 	'N Sync",
"Lullaby 	Shawn Mullins",
"Anywhere 	112 featuring Lil Zane",
"Tell Me It's Real 	K-Ci & JoJo",
"Back 2 Good 	Matchbox 20",
"808	Blaque",
"She's So High 	Tal Bachman",
"She's All I Ever Had 	Ricky Martin",
"Miami 	Will Smith",
"Hands 	Jewel",
"Who Dat 	JT Money featuring Solé",
"Please Remember Me 	Tim McGraw",
"From This Moment On 	Shania Twain",
"Love Like This 	Faith Evans",
"You 	Jesse Powell",
"Trippin' 	Total featuring Missy Elliott",
"If You 	Silk",
"Ex-Factor 	Lauryn Hill",
"Give It to You 	Jordan Knight",
"Black Balloon 	Goo Goo Dolls",
"Spend My Life with You 	Eric Benét featuring Tamia",
"These Are the Times 	Dru Hill",
"I Don't Want to Miss a Thing 	Mark Chesnutt",
"I Do (Cherish You) 	98 Degrees",
"Because of You 	98 Degrees",
"I Will Remember You 	Sarah McLachlan",
"Chanté's Got a Man 	Chanté Moore",
"Happily Ever After 	Case",
"My Love Is Your Love 	Whitney Houston",
"All Night Long 	Faith Evans featuring Puff Daddy",
"Back That Azz Up 	Juvenile featuring Mannie Fresh and Lil Wayne",
"Almost Doesn't Count 	Brandy",
"Man! I Feel Like a Woman! 	Shania Twain",
"Steal My Sunshine 	Len",
"I Need to Know 	Marc Anthony",
"So Anxious 	Ginuwine",
"Faded Pictures 	Case featuring Joe",
"Back at One 	Brian McKnight",
"When a Woman's Fed Up 	R. Kelly",
"How Forever Feels 	Kenny Chesney",
"Amazed 	Lonestar",
"Sometimes 	Britney Spears",
"Ghetto Cowboy 	Mo Thugs",
"Out of My Head 	Fastball",
"Hard Knock Life (Ghetto Anthem) 	Jay-Z",
"Jamboree 	Naughty by Nature featuring Zhané",
"Take Me There 	Blackstreet featuring Mýa, Mase and Blinky Blink",
"Stay the Same 	Joey McIntyre",
"A Lesson in Leavin' 	Jo Dee Messina",
"Iris 	Goo Goo Dolls",
"Satisfy You 	Puff Daddy featuring R. Kelly",
"Better Days (And the Bottom Drops Out) 	Citizen King",
"Music of My Heart 	'N Sync and Gloria Estefan",
"Write This Down 	George Strait",
"When You Believe 	Whitney Houston and Mariah Carey",
"(God Must Have Spent) A Little More Time on You 	Alabama and 'N Sync",
"Bindik Bir Alamete Gidiyoruz Kıyamete	Cem Karaca",
"Çeri Başı	Nükhet Duru",
"Deli Gönlüm 	Aşkın Nur Yengi",
"Zühtü	Ayna",
"Kurtulamıyorum	Bendeniz",
"Bir Günah Daha	Ayşen",
"Kutupta Yaz Gibi	Baha",
"Bebek	Duman",
"Laubali	Özlem Tekin",
"Günah Pazarı 	Doğuş",
"Aziza	Atilla Taş",
"Uğur Böceği	Banu Zorlu",
"Olmadı Yar	Asya",
"İbreti Alem	Emre Altuğ",
"Boynumun Borcu	Ali Güven",
"Beni Azad Et	Kayahan",
"Benim Hala Umudum Var	Mazhar Alanson",
"Züleyha	Erkin Koray",
"Kumdan Kaleler	Özlem Tekin",
"Nefret	Ceza",

 

    ];

var names = [

"Believe ",
"No Scrubs ",
"Angel of Mine ",
"Heartbreak Hotel ",
"...Baby One More Time ",
"Kiss Me ",
"Genie in a Bottle ",
"Every Morning ",
"Nobody's Supposed to Be Here ",
"Livin' la Vida Loca ",
"Where My Girls At? ",
"If You Had My Love ",
"Slide ",
"Have You Ever? ",
"I Want It That Way ",
"I'm Your Angel ",
"All Star ",
"Angel ",
"Smooth ",
"Unpretty ",
"Bills, Bills, Bills ",
"Save Tonight ",
"Last Kiss ",
"Fortunate ",
"All I Have to Give ",
"Bailamos ",
"What's It Gonna Be?! ",
"What It's Like ",
"Fly Away ",
"Someday ",
"Lately ",
"That Don't Impress Me Much ",
"Wild Wild West ",
"Scar Tissue ",
"Heartbreaker ",
"I Still Believe ",
"The Hardest Thing ",
"Summer Girls ",
"Can I Get A... ",
"Jumper ",
"Doo Wop (That Thing) ",
"Mambo No. 5 ",
"Sweet Lady ",
"It's Not Right but It's Okay ",
"(God Must Have Spent) A Little More Time on You ",
"Lullaby ",
"Anywhere ",
"Tell Me It's Real ",
"Back 2 Good ",
"808",
"She's So High ",
"She's All I Ever Had ",
"Miami ",
"Hands ",
"Who Dat ",
"Please Remember Me ",
"From This Moment On ",
"Love Like This ",
"You ",
"Trippin' ",
"If You ",
"Ex-Factor ",
"Give It to You ",
"Black Balloon ",
"Spend My Life with You ",
"These Are the Times ",
"I Don't Want to Miss a Thing ",
"I Do (Cherish You) ",
"Because of You ",
"I Will Remember You ",
"Chanté's Got a Man ",
"Happily Ever After ",
"My Love Is Your Love ",
"All Night Long ",
"Back That Azz Up ",
"Almost Doesn't Count ",
"Man! I Feel Like a Woman! ",
"Steal My Sunshine ",
"I Need to Know ",
"So Anxious ",
"Faded Pictures ",
"Back at One ",
"When a Woman's Fed Up ",
"How Forever Feels ",
"Amazed ",
"Sometimes ",
"Ghetto Cowboy ",
"Out of My Head ",
"Hard Knock Life (Ghetto Anthem) ",
"Jamboree ",
"Take Me There ",
"Stay the Same ",
"A Lesson in Leavin' ",
"Iris ",
"Satisfy You ",
"Better Days (And the Bottom Drops Out) ",
"Music of My Heart ",
"Write This Down ",
"When You Believe ",
"(God Must Have Spent) A Little More Time on You ",
"Bindik Bir Alamete Gidiyoruz Kıyamete",
"Çeri Başı",
"Deli Gönlüm ",
"Zühtü",
"Kurtulamıyorum",
"Bir Günah Daha",
"Kutupta Yaz Gibi",
"Bebek",
"Laubali",
"Günah Pazarı ",
"Aziza",
"Uğur Böceği",
"Olmadı Yar",
"İbreti Alem",
"Boynumun Borcu",
"Beni Azad Et",
"Benim Hala Umudum Var",
"Züleyha",
"Kumdan Kaleler",
"Nefret",




 ];

 var artist = [

"Cher",
"TLC",
"Monica",
"Whitney Houston featuring Faith Evans and Kelly Price",
"Britney Spears",
"Sixpence None the Richer",
"Christina Aguilera",
"Sugar Ray",
"Deborah Cox",
"Ricky Martin",
"702",
"Jennifer Lopez",
"Goo Goo Dolls",
"Brandy",
"Backstreet Boys",
"R. Kelly and Celine Dion",
"Smash Mouth",
"Sarah McLachlan",
"Santana featuring Rob Thomas",
"TLC",
"Destiny's Child",
"Eagle-Eye Cherry",
"Pearl Jam",
"Maxwell",
"Backstreet Boys",
"Enrique Iglesias",
"Busta Rhymes featuring Janet",
"Everlast",
"Lenny Kravitz",
"Sugar Ray",
"Divine",
"Shania Twain",
"Will Smith featuring Dru Hill and Kool Moe Dee",
"Red Hot Chili Peppers",
"Mariah Carey featuring Jay-Z",
"Mariah Carey",
"98 Degrees",
"LFO",
"Jay-Z featuring Amil and Ja Rule",
"Third Eye Blind",
"Lauryn Hill",
"Lou Bega",
"Tyrese",
"Whitney Houston",
"'N Sync",
"Shawn Mullins",
"112 featuring Lil Zane",
"K-Ci & JoJo",
"Matchbox 20",
"Blaque",
"Tal Bachman",
"Ricky Martin",
"Will Smith",
"Jewel",
"JT Money featuring Solé",
"Tim McGraw",
"Shania Twain",
"Faith Evans",
"Jesse Powell",
"Total featuring Missy Elliott",
"Silk",
"Lauryn Hill",
"Jordan Knight",
"Goo Goo Dolls",
"Eric Benét featuring Tamia",
"Dru Hill",
"Mark Chesnutt",
"98 Degrees",
"98 Degrees",
"Sarah McLachlan",
"Chanté Moore",
"Case",
"Whitney Houston",
"Faith Evans featuring Puff Daddy",
"Juvenile featuring Mannie Fresh and Lil Wayne",
"Brandy",
"Shania Twain",
"Len",
"Marc Anthony",
"Ginuwine",
"Case featuring Joe",
"Brian McKnight",
"R. Kelly",
"Kenny Chesney",
"Lonestar",
"Britney Spears",
"Mo Thugs",
"Fastball",
"Jay-Z",
"Naughty by Nature featuring Zhané",
"Blackstreet featuring Mýa, Mase and Blinky Blink",
"Joey McIntyre",
"Jo Dee Messina",
"Goo Goo Dolls",
"Puff Daddy featuring R. Kelly",
"Citizen King",
"'N Sync and Gloria Estefan",
"George Strait",
"Whitney Houston and Mariah Carey",
"Alabama and 'N Sync",
"Cem Karaca",
"Nükhet Duru",
"Aşkın Nur Yengi",
"Ayna",
"Bendeniz",
"Ayşen",
"Baha",
"Duman",
"Özlem Tekin",
"Doğuş",
"Atilla Taş",
"Banu Zorlu",
"Asya",
"Emre Altuğ",
"Ali Güven",
"Kayahan",
"Mazhar Alanson",
"Erkin Koray",
"Özlem Tekin",
"Ceza",




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
