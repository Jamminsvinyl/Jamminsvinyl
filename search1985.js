// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Careless Whisper 	Wham! featuring George Michael",
"Like a Virgin 	Madonna",
"Wake Me Up Before You Go-Go 	Wham!",
"I Want To Know What Love Is 	Foreigner",
"I Feel For You 	Chaka Khan",
"Out of Touch 	Daryl Hall & John Oates",
"Everybody Wants to Rule the World 	Tears for Fears",
"Money for Nothing 	Dire Straits",
"Crazy for You 	Madonna",
"Take on Me 	a-ha",
"Everytime You Go Away 	Paul Young",
"Easy Lover 	Philip Bailey and Phil Collins",
"Can't Fight This Feeling 	REO Speedwagon",
"We Built This City 	Starship",
"The Power of Love 	Huey Lewis and the News",
"Don't You (Forget About Me) 	Simple Minds",
"Cherish 	Kool & the Gang",
"St. Elmo's Fire (Man in Motion) 	John Parr",
"The Heat Is On 	Glenn Frey",
"We Are the World 	USA for Africa",
"Shout 	Tears for Fears",
"Part-Time Lover 	Stevie Wonder",
"Saving All My Love For You 	Whitney Houston",
"Heaven 	Bryan Adams",
"Everything She Wants 	Wham!",
"Cool It Now 	New Edition",
"Miami Vice Theme 	Jan Hammer",
"Loverboy 	Billy Ocean",
"Lovergirl 	Teena Marie",
"You Belong to the City 	Glenn Frey",
"Oh Sheila 	Ready for the World",
"Rhythm of the Night 	DeBarge",
"One More Night 	Phil Collins",
"Sea of Love 	The Honeydrippers",
"A View to a Kill 	Duran Duran",
"The Wild Boys 	Duran Duran",
"You're the Inspiration 	Chicago",
"Neutron Dance 	The Pointer Sisters",
"We Belong 	Pat Benatar",
"Nightshift 	Commodores",
"Things Can Only Get Better 	Howard Jones",
"All I Need 	Jack Wagner",
"Freeway of Love 	Aretha Franklin",
"Never Surrender 	Corey Hart",
"Sussudio 	Phil Collins",
"Strut 	Sheena Easton",
"You Give Good Love 	Whitney Houston",
"The Search Is Over 	Survivor",
"Missing You 	Diana Ross",
"Separate Lives 	Phil Collins and Marilyn Martin",
"Raspberry Beret 	Prince and The Revolution",
"Suddenly 	Billy Ocean",
"The Boys of Summer 	Don Henley",
"One Night in Bangkok 	Murray Head",
"If You Love Somebody Set Them Free 	Sting",
"Obsession 	Animotion",
"We Don't Need Another Hero 	Tina Turner",
"Material Girl 	Madonna",
"Better Be Good to Me 	Tina Turner",
"Head over Heels 	Tears for Fears",
"Axel F 	Harold Faltermeyer",
"Smooth Operator 	Sade",
"In My House 	Mary Jane Girls",
"Don't Lose My Number 	Phil Collins",
"All Through the Night 	Cyndi Lauper",
"Run to You 	Bryan Adams",
"Glory Days 	Bruce Springsteen",
"Voices Carry 	'Til Tuesday",
"Misled 	Kool & the Gang",
"Would I Lie to You? 	Eurythmics",
"Be Near Me 	ABC",
"No More Lonely Nights 	Paul McCartney",
"I Can't Hold Back 	Survivor",
"Summer Of '69 	Bryan Adams",
"Walking on Sunshine 	Katrina and the Waves",
"Freedom 	Wham!",
"Too Late for Goodbyes 	Julian Lennon",
"Valotte 	Julian Lennon",
"Some Like It Hot 	Power Station",
"Solid 	Ashford & Simpson",
"Angel 	Madonna",
"I'm on Fire 	Bruce Springsteen",
"Method of Modern Love 	Daryl Hall & John Oates",
"Lay Your Hands on Me 	Thompson Twins",
"Who's Holding Donna Now 	DeBarge",
"Lonely Ol' Night 	John Cougar Mellencamp",
"What About Love 	Heart",
"California Girls 	David Lee Roth",
"Fresh 	Kool & the Gang",
"Do What You Do 	Jermaine Jackson",
"Jungle Love 	The Time",
"Born in the U.S.A. 	Bruce Springsteen",
"Private Dancer 	Tina Turner",
"Who's Zoomin' Who 	Aretha Franklin",
"Fortress Around Your Heart 	Sting",
"Penny Lover 	Lionel Richie",
"All She Wants to Do Is Dance 	Don Henley",
"Dress You Up 	Madonna",
"Sentimental Street 	Night Ranger",
"Sugar Walls 	Sheena Easton",
"Muallim	Mustafa Topaloğlu",
"Şarkılardan Fal Tuttum	Bülent Ersoy",
"Geçip Gitme Yanımdan	Faruk Tınaz",
"Ziyankar	Mine Koşan",
"Özgürlük	Zülfü Livaneli",
"Sen Ağlama 	Sezen Aksu",
"Canım Anam 	Ersen Dadaşlar",
"Senden Korkulur	ipek Pınar",
"Cumbullu	Belkıs Akkale",
"Ben Yarime Neler Alayım	Burhan Çaçan",
"Yaranamadım	Kamuran Akkor",
"Herşey Yarım	Hakkı Bulut",
"Mavi Mavi	ibrahim Tatlıses",
"Aşkın Çeşmesi	Erol Evgin",
"Gitme Güzeller Güzeli	Faruk Tınaz",
"Üç Gün Ağlarsın	Vahdet Vural",

 

    ];

var names = [

"Careless Whisper ",
"Like a Virgin ",
"Wake Me Up Before You Go-Go ",
"I Want To Know What Love Is ",
"I Feel For You ",
"Out of Touch ",
"Everybody Wants to Rule the World ",
"Money for Nothing ",
"Crazy for You ",
"Take on Me ",
"Everytime You Go Away ",
"Easy Lover ",
"Can't Fight This Feeling ",
"We Built This City ",
"The Power of Love ",
"Don't You (Forget About Me) ",
"Cherish ",
"St. Elmo's Fire (Man in Motion) ",
"The Heat Is On ",
"We Are the World ",
"Shout ",
"Part-Time Lover ",
"Saving All My Love For You ",
"Heaven ",
"Everything She Wants ",
"Cool It Now ",
"Miami Vice Theme ",
"Loverboy ",
"Lovergirl ",
"You Belong to the City ",
"Oh Sheila ",
"Rhythm of the Night ",
"One More Night ",
"Sea of Love ",
"A View to a Kill ",
"The Wild Boys ",
"You're the Inspiration ",
"Neutron Dance ",
"We Belong ",
"Nightshift ",
"Things Can Only Get Better ",
"All I Need ",
"Freeway of Love ",
"Never Surrender ",
"Sussudio ",
"Strut ",
"You Give Good Love ",
"The Search Is Over ",
"Missing You ",
"Separate Lives ",
"Raspberry Beret ",
"Suddenly ",
"The Boys of Summer ",
"One Night in Bangkok ",
"If You Love Somebody Set Them Free ",
"Obsession ",
"We Don't Need Another Hero ",
"Material Girl ",
"Better Be Good to Me ",
"Head over Heels ",
"Axel F ",
"Smooth Operator ",
"In My House ",
"Don't Lose My Number ",
"All Through the Night ",
"Run to You ",
"Glory Days ",
"Voices Carry ",
"Misled ",
"Would I Lie to You? ",
"Be Near Me ",
"No More Lonely Nights ",
"I Can't Hold Back ",
"Summer Of '69 ",
"Walking on Sunshine ",
"Freedom ",
"Too Late for Goodbyes ",
"Valotte ",
"Some Like It Hot ",
"Solid ",
"Angel ",
"I'm on Fire ",
"Method of Modern Love ",
"Lay Your Hands on Me ",
"Who's Holding Donna Now ",
"Lonely Ol' Night ",
"What About Love ",
"California Girls ",
"Fresh ",
"Do What You Do ",
"Jungle Love ",
"Born in the U.S.A. ",
"Private Dancer ",
"Who's Zoomin' Who ",
"Fortress Around Your Heart ",
"Penny Lover ",
"All She Wants to Do Is Dance ",
"Dress You Up ",
"Sentimental Street ",
"Sugar Walls ",
"Muallim",
"Şarkılardan Fal Tuttum",
"Geçip Gitme Yanımdan",
"Ziyankar",
"Özgürlük",
"Sen Ağlama ",
"Canım Anam ",
"Senden Korkulur",
"Cumbullu",
"Ben Yarime Neler Alayım",
"Yaranamadım",
"Herşey Yarım",
"Mavi Mavi",
"Aşkın Çeşmesi",
"Gitme Güzeller Güzeli",
"Üç Gün Ağlarsın",




 ];

 var artist = [

"Wham! featuring George Michael",
"Madonna",
"Wham!",
"Foreigner",
"Chaka Khan",
"Daryl Hall & John Oates",
"Tears for Fears",
"Dire Straits",
"Madonna",
"a-ha",
"Paul Young",
"Philip Bailey and Phil Collins",
"REO Speedwagon",
"Starship",
"Huey Lewis and the News",
"Simple Minds",
"Kool & the Gang",
"John Parr",
"Glenn Frey",
"USA for Africa",
"Tears for Fears",
"Stevie Wonder",
"Whitney Houston",
"Bryan Adams",
"Wham!",
"New Edition",
"Jan Hammer",
"Billy Ocean",
"Teena Marie",
"Glenn Frey",
"Ready for the World",
"DeBarge",
"Phil Collins",
"The Honeydrippers",
"Duran Duran",
"Duran Duran",
"Chicago",
"The Pointer Sisters",
"Pat Benatar",
"Commodores",
"Howard Jones",
"Jack Wagner",
"Aretha Franklin",
"Corey Hart",
"Phil Collins",
"Sheena Easton",
"Whitney Houston",
"Survivor",
"Diana Ross",
"Phil Collins and Marilyn Martin",
"Prince and The Revolution",
"Billy Ocean",
"Don Henley",
"Murray Head",
"Sting",
"Animotion",
"Tina Turner",
"Madonna",
"Tina Turner",
"Tears for Fears",
"Harold Faltermeyer",
"Sade",
"Mary Jane Girls",
"Phil Collins",
"Cyndi Lauper",
"Bryan Adams",
"Bruce Springsteen",
"'Til Tuesday",
"Kool & the Gang",
"Eurythmics",
"ABC",
"Paul McCartney",
"Survivor",
"Bryan Adams",
"Katrina and the Waves",
"Wham!",
"Julian Lennon",
"Julian Lennon",
"Power Station",
"Ashford & Simpson",
"Madonna",
"Bruce Springsteen",
"Daryl Hall & John Oates",
"Thompson Twins",
"DeBarge",
"John Cougar Mellencamp",
"Heart",
"David Lee Roth",
"Kool & the Gang",
"Jermaine Jackson",
"The Time",
"Bruce Springsteen",
"Tina Turner",
"Aretha Franklin",
"Sting",
"Lionel Richie",
"Don Henley",
"Madonna",
"Night Ranger",
"Sheena Easton",
"Mustafa Topaloğlu",
"Bülent Ersoy",
"Faruk Tınaz",
"Mine Koşan",
"Zülfü Livaneli",
"Sezen Aksu",
"Ersen Dadaşlar",
"ipek Pınar",
"Belkıs Akkale",
"Burhan Çaçan",
"Kamuran Akkor",
"Hakkı Bulut",
"ibrahim Tatlıses",
"Erol Evgin",
"Faruk Tınaz",
"Vahdet Vural",




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
