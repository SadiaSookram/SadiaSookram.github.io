// When the factbutton is clicked...

$("#factButton").on("click", function() {
	// We display a random fact...
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

// This array holds all of our Boo Facts!

var booFacts = ["Boo is a pomeranian, Boo's best friend is another pomeranian named Buddy, Boo the Pomeranian was born on March 16, making him a Pisces, Boo's favourite food is grass, Boo has released two books" ]

// When the Pinktext button is pressed...

$("#textPink").on("click", function() {
	// Change text to pink
	$("#funText").css("color", pink)
})
// When the Organetext button is pressed...

$("#textOrange").on("click", function() {
	// Change text to orange
$("#funText").css("color", "orange")
})
// When the greentext button is pressed...
$("#textGreen").on("click", function() {
	// Change text to green
	$("#funText").css("color", "green")
})

// When the boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	// Increase Size of box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})
// When the boxshrink button is clicked...
$("#boxShrink").on("click", function() {
	// Decrease size of box
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})