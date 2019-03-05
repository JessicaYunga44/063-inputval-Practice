// create a click handler for the Post button
$("button").click(function() {
var cat=$(".responds").val();
    console.log(cat);
});





// header toggles brands when clicked :)
var header = $(".header");
header.click(function () {
    header.toggleClass("instagram");
    var brand = header.text();
    header.text(brand === "Instagram" ? "Facebook" : "Instagram");
});