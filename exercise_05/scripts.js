$(document).ready(function(){

	var bgImages = ["imgs/slide1.jpg", "imgs/slide2.jpg", "imgs/slide3.jpg", "imgs/slide4.jpg", "imgs/slide5.jpg", "imgs/slide6.jpg", "imgs/slide7.jpg", "imgs/slide8.jpg", "imgs/slide9.jpg"];
	// console.log("bgImages");
	var count = bgImages.length
	// console.log(count);
	var ticker = 0;
	var time = 0;

	var message = "Hello"
	var name = "Katelyn"
	var date = new Date();
	// console.log(message);
	// console.log(name);
	// console.log(date);

	$("#text").text(message+", the date and time is");
	$("#date").text(date);

	function screensaver(){
		var url = "url(" + bgImages[ticker] + ")";
		$("#screensaver").css("background-image", url)

		var tickerText = ticker + 1 + "/" + count;
		// console.log(tickerText);
		$("#ticker").text(tickerText);

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
		$("#screensaver").css("opacity", 0)
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