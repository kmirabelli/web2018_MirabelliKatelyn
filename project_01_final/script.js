$(document).ready(function() {

var randomHSL1 =  "hsl(" + Math.random()*360 + ", 100% , 50%)"
var randomHSL2 =  "hsl(" + Math.random()*360 + ", 100% , 50%)"
var randomHSL3 =  "hsl(" + Math.random()*360 + ", 100% , 50%)"
var randomHSL4 =  "hsl(" + Math.random()*360 + ", 100% , 50%)"
var randomHSL5 =  "hsl(" + Math.random()*360 + ", 100% , 50%)"



    var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var grd = ctx.createLinearGradient(0, 0, 400, 0);
	grd.addColorStop(0, randomHSL1);
	grd.addColorStop(0.3, randomHSL2);
	grd.addColorStop(0.5, randomHSL3);
	grd.addColorStop(0.7, randomHSL4);
	grd.addColorStop(1.0, randomHSL5);



	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
	

setInterval(function(){
	randomHSL1 =  "hsl(" + Math.random()*360 + ", 100% , 50%)"
 	randomHSL2 =  "hsl(" + Math.random()*360 + ", 100% , 50%)"
 	randomHSL3 =  "hsl(" + Math.random()*360 + ", 100% , 50%)"
 	randomHSL4 =  "hsl(" + Math.random()*360 + ", 100% , 50%)"
 	randomHSL5 =  "hsl(" + Math.random()*360 + ", 100% , 50%)"
	var grd = ctx.createLinearGradient(0, 0, 400, 0);
	grd.addColorStop(0, randomHSL1);
	grd.addColorStop(0.3, randomHSL2);
	grd.addColorStop(0.5, randomHSL3);
	grd.addColorStop(0.7, randomHSL4);
	grd.addColorStop(1.0, randomHSL5);
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
	$("#greeting").text("Hello")
	$("#color1").text(randomHSL1)
	$("#color2").text(randomHSL2)
	$("#color3").text(randomHSL3)
	$("#color4").text(randomHSL4)
	$("#color5").text(randomHSL5)


},2500)
})

    $("html").mousemove(function(event) {
    	$("#greeting").offset({
    		left: event.pageX,
    		top: event.pageY
    	})
    })
