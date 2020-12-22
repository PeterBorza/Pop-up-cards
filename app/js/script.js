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

	

	// thirdBtn element button
	// **************

	thirdBtn.click(function () {
		const card = $(".card");
		card.remove();
		upperRightText.text("");
	}),
    
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

	
});
