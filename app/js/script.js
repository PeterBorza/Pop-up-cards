console.log("Hello javaScript");
$(document).ready(function () {
	// HEADER
	// ********

	//  elements
	const firstBtn = $("#create-div");
	const secondBtn = $("#create");
	const thirdBtn = $("#delete");
	const upperRightText = $("#btn");
	const cardContainer = $(".card-box");
	const container = $(".container");

	// when page finished loading. SETTIMEOUT needed here!
    $("header, footer").addClass("load");
    
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from("header", { y: -100, opacity: 0 })
      .from("footer", { x: 100, opacity: 0 })

	// changing paragraph content as we create elements
	// upperRightText.text("Click on the buttons.");

	// container title shown middleof screen
	// **************

	container.prepend("<h2></h2>");
	const contText = $(".container h2");
	contText.addClass("cont-text");
	contText.text("Image toggler");

	// Toggle Image or first button
	// ****************
    // first we create an img and a p tag, append it to our card-box, then clickfunction
    
	cardContainer.prepend("<img> <p></p>");
	const pic = $(".card-box img");
	pic.attr("src", "/Documentation/ls11.jpg");
	pic.addClass("image");
	const text = $(".card-box p");
	text.attr("alt", "This picture has birds in it.");
	text.text("This picture has birds in it.");
	firstBtn.click(function () {
		cardContainer.toggleClass("open");
		upperRightText.text("");
	});

	// secondBtn element button
	// ****************

	// secondBtn.click(function () {
	// 	$(".card-box p").text("");
	// 	cardContainer.append("<div></div>");
	// 	$(".card-box div").addClass("card");
	// 	$(".card").append("<p></p>");
	// 	$(".card p").text("This is the card.Image will show here");
	// 	upperRightText.text("Image should appear.");
	// });

	// thirdBtn element button
	// **************

	thirdBtn.click(function () {
		const card = $(".card");
		card.remove();
		upperRightText.text("");
	}),
		// text hovering
		// *************
	// 	upperRightText.mouseover(function () {
	// 		$(this).html("<p>Not clickable.Yet.</p>");
	// 	});
	// upperRightText.mouseout(function () {
	// 	$(this).html("<p>First, create a parent.</p>");
    // });
    
    upperRightText.hover(function() {
		$(this).html("<p>Not clickable.Yet.</p>");
    }, function() {
        $(this).html("<p>Click on the buttons</p>");
    });

	// MAIN
	// ******

	// img-front class div position is fixed, and this is animation to it
	// ******************************************************************

	secondBtn.click(function () {
		$(".img-front").toggleClass("img-front-slide-in");
		$(".img-box img").addClass("moving");
	});
	// adding images to each .img-box div /// and adding also class
	const sliders = [
		'url("/Documentation/ls11.jpg")',
		'url("/Documentation/ls12.jpg")',
		'url("/Documentation/ls13.jpg")',
		'url("/Documentation/ls14.jpg")',
		'url("/Documentation/ls15.jpg")',
	];
	sliders.push['url("/Documentation/ls1.jpg")'];

	for (var i = 0; i < sliders.length; i++) {
		var boxes = document.querySelectorAll(".img-front div");
		boxes[i].style.backgroundImage = sliders[i];
		boxes[i].classList.add("img-box-picture");
	}
	$(".img-front div").addClass("img-box");

	// img-front close button upper right corner of popup
	// **************************************************
	$("#img-front-close").click(function () {
		$(".img-front").removeClass("img-front-slide-in");
	});

	// animation of images inside the .img-front div
	// $(".img-box").mouseover(function(){
	//     $(this).html('<p>pic info</p>');
	// });
	// $(".img-box").mouseout(function(){
	//     $(this).html("");
	// });
});
