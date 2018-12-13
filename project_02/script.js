// Test
$( document ).ready(function() {
    console.log( "ready!" );
});


// Toggle class

// $(document).ready(function(){
//   $("body").click(function(){
//     $("div:last").removeClass("bg1").addClass("bg3");
//   });
// });



// Screensaver

$(document).ready(function(){

	var bgImages = ["img/giphy1.gif", "img/giphy2.gif", "img/giphy3.gif", "img/giphy4.gif", "img/giphy5.gif", "img/giphy6.gif", "img/giphy7.gif"];
	// console.log("bgImages");
	var count = bgImages.length
	// console.log(count);
	var ticker = 0;
	var time = 0;

	var message = "Hello"
	var name = "Katelyn"
	var date = new Date();
	console.log(message);
	console.log(name);
	console.log(date);

	$("#text").text(message + " " + name + ",");
	$("#date").text(date);

	function screensaver(){
		var url = "url(" + bgImages[ticker] + ")";
		$("#bg").css("background-image", url)

		var tickerText = ticker + 1 + "/" + count;
		// console.log(tickerText);
		$("#bg").text(tickerText);

		ticker+=1; 
		if(ticker == count) {
			ticker = 0; 
		}

	}
	// screensaver();

	$(document).click(function(){
		// screensaver(); 
	})

	setInterval(function(){
		screensaver();
	}, 2000)

	$(document).mousemove(function(){
		ticker=0;
		time=0;
		$("#bg").css("opacity", 0)
		$("#ticker").css("opacity", 0)
	})

	setInterval(function(){
		time+=1;
		if(time > 2){
			$("#screensaver").css("opacity", 1)
			$("#ticker").css("opacity", 1)	
		}
	}, 1000)
})