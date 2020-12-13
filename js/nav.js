function toggleNav() {
    document.getElementById("bottom-menu").style.display = "none";
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("side-menu").style.width = "60%";
    document.getElementById("side-hidden").style.width = "50%";
    document.getElementById("noScroll").style.position = "fixed";
    document.getElementById("btn-close").style.color = "#000000";
    document.getElementById("btn-close").style.background = "white";
    document.getElementById("on-top").style.display = "block";
}

function closeSideMenu() {
    document.getElementById("bottom-menu").style.display = "block";
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("side-hidden").style.width = "0";
    document.getElementById("noScroll").style.position = "relative";
    document.getElementById("btn-close").style.background = "white";
    document.getElementById("btn-close").style.color = "#CE2026";
    document.getElementById("on-top").style.display = "none";
}

/* Modals collected in variables */

var $modalOne = $(".modal-one");
var $modalTwo = $(".modal-two");
var $modalThree = $(".modal-three");
var $modalFour = $(".modal-four");
var $modalFive = $(".modal-five");
var $modalSix = $(".modal-six");
var $modalSeven = $(".modal-seven");
var $modalEight = $(".modal-eight");
var $modalNine = $(".modal-nine");
var $modalTen = $(".modal-ten");
var $modalEleven = $(".modal-eleven");
var $modalTwelve = $(".modal-twelve");
var $modalThirteen = $(".modal-thirteen");
var $modalFourteen = $(".modal-fourteen");
var $modalFifteen = $(".modal-fifteen");
var $modalSixteen = $(".modal-sixteen");
var $modalSeventeen = $(".modal-seventeen");
var $modalEighteen = $(".modal-eighteen");
var $modalNineteen = $(".modal-nineteen");
var $modalTwenty = $(".modal-twenty");
var $modalTwentyOne = $(".modal-twenty-one");
var $modalTwenty2 = $(".modal-twenty-2");
var $modalTwenty3 = $(".modal-twenty-3");
var $modalTwenty4 = $(".modal-twenty-4");
var $modalTwenty5 = $(".modal-twenty-5");
var $modalTwenty6 = $(".modal-twenty-6");
var $modalTwenty7 = $(".modal-twenty-7");
var $modalTwenty8 = $(".modal-twenty-8");
var $modalTwenty9 = $(".modal-twenty-9");
var $modalThirty = $(".modal-thirty");
var $modalThirty1 = $(".modal-thirty-1");
var $modalThirty2 = $(".modal-thirty-2");
var $modalThirty3 = $(".modal-thirty-3");
var $modalThirty4 = $(".modal-thirty-4");


/* Images collected in variables */

var $homeIcon = $(".home-icon");
var $html = $("html");

var $one = $("#one");
var $two = $("#two");
var $three = $("#three");
var $four = $("#four");
var $five = $("#five");
var $six = $("#six");
var $seven = $("#seven");
var $eight = $("#eight");
var $nine = $("#nine");
var $ten = $("#ten");
var $eleven = $("#eleven");
var $twelve = $("#twelve");
var $thirteen = $("#thirteen");
var $fourteen = $("#fourteen");
var $fifteen = $("#fifteen");
var $sixteen = $("#sixteen");
var $seventeen = $("#seventeen");
var $eighteen = $("#eighteen");
var $nineteen = $("#nineteen");
var $twenty = $("#twenty");
var $twentyOne = $("#twenty-one");
var $twenty2 = $("#twenty-2");
var $twenty3 = $("#twenty-3");
var $twenty4 = $("#twenty-4");
var $twenty5 = $("#twenty-5");
var $twenty6 = $("#twenty-6");
var $twenty7 = $("#twenty-7");
var $twenty8 = $("#twenty-6");
var $twenty9 = $("#twenty-9");
var $thirty = $("#thirty");
var $thirty1 = $("#thirty-1");
var $thirty2 = $("#thirty-2");
var $thirty3 = $("#thirty-3");
var $thirty4 = $("#thirty-4");

/* Add Clicked Class */

$one.on("click", function(e) {
  $modalOne.addClass("clicked");
  $html.addClass("clicked");
});

$two.on("click", function(e) {
  $modalTwo.addClass("clicked");
  $html.addClass("clicked");
});

$three.on("click", function(e) {
  $modalThree.addClass("clicked");
  $html.addClass("clicked");
});

$four.on("click", function(e) {
  $modalFour.addClass("clicked");
  $html.addClass("clicked");
});

$five.on("click", function(e) {
  $modalFive.addClass("clicked");
  $html.addClass("clicked");
});

$six.on("click", function(e) {
  $modalSix.addClass("clicked");
  $html.addClass("clicked");
});

$seven.on("click", function(e) {
  $modalSeven.addClass("clicked");
  $html.addClass("clicked");
});

$eight.on("click", function(e) {
  $modalEight.addClass("clicked");
  $html.addClass("clicked");
});

$nine.on("click", function(e) {
  $modalNine.addClass("clicked");
  $html.addClass("clicked");
});

$ten.on("click", function(e) {
  $modalTen.addClass("clicked");
  $html.addClass("clicked");
});

$eleven.on("click", function(e) {
  $modalEleven.addClass("clicked");
  $html.addClass("clicked");
});

$twelve.on("click", function(e) {
  $modalTwelve.addClass("clicked");
  $html.addClass("clicked");
});

$thirteen.on("click", function(e) {
  $modalThirteen.addClass("clicked");
  $html.addClass("clicked");
});

$fourteen.on("click", function(e) {
  $modalFourteen.addClass("clicked");
  $html.addClass("clicked");
});

$fifteen.on("click", function(e) {
  $modalFifteen.addClass("clicked");
  $html.addClass("clicked");
});

$sixteen.on("click", function(e) {
  $modalSixteen.addClass("clicked");
  $html.addClass("clicked");
});

$seventeen.on("click", function(e) {
  $modalSeventeen.addClass("clicked");
  $html.addClass("clicked");
});

$eighteen.on("click", function(e) {
  $modalEighteen.addClass("clicked");
  $html.addClass("clicked");
});

$nineteen.on("click", function(e) {
  $modalNineteen.addClass("clicked");
  $html.addClass("clicked");
});

$twenty.on("click", function(e) {
  $modalTwenty.addClass("clicked");
  $html.addClass("clicked");
});

$twentyOne.on("click", function(e) {
  $modalTwentyOne.addClass("clicked");
  $html.addClass("clicked");
});

$twenty2.on("click", function (e) {
  $modalTwenty2.addClass("clicked");
  $html.addClass("clicked");
});

$twenty3.on("click", function (e) {
  $modalTwenty3.addClass("clicked");
  $html.addClass("clicked");
});

$twenty4.on("click", function (e) {
  $modalTwenty4.addClass("clicked");
  $html.addClass("clicked");
});

$twenty5.on("click", function (e) {
  $modalTwenty5.addClass("clicked");
  $html.addClass("clicked");
});

$twenty6.on("click", function (e) {
  $modalTwenty6.addClass("clicked");
  $html.addClass("clicked");
});

$twenty7.on("click", function (e) {
  $modalTwenty7.addClass("clicked");
  $html.addClass("clicked");
});

$twenty8.on("click", function (e) {
  $modalTwenty8.addClass("clicked");
  $html.addClass("clicked");
});

$twenty9.on("click", function (e) {
  $modalTwenty9.addClass("clicked");
  $html.addClass("clicked");
});

$thirty.on("click", function (e) {
  $modalThirty.addClass("clicked");
  $html.addClass("clicked");
});

$thirty1.on("click", function (e) {
  $modalThirty1.addClass("clicked");
  $html.addClass("clicked");
});

$thirty2.on("click", function (e) {
  $modalThirty2.addClass("clicked");
  $html.addClass("clicked");
});

$thirty3.on("click", function (e) {
  $modalThirty3.addClass("clicked");
  $html.addClass("clicked");
});

$thirty4.on("click", function (e) {
  $modalThirty4.addClass("clicked");
  $html.addClass("clicked");
});

/* Remove Clicked Class */

$homeIcon.on("click", function(e) {
  $modalOne.removeClass("clicked");
  $modalTwo.removeClass("clicked");
  $modalThree.removeClass("clicked");
  $modalFour.removeClass("clicked");
  $modalFive.removeClass("clicked");
  $modalSix.removeClass("clicked");
  $modalSeven.removeClass("clicked");
  $modalEight.removeClass("clicked");
  $modalNine.removeClass("clicked");
  $modalTen.removeClass("clicked");
  $modalEleven.removeClass("clicked");
  $modalTwelve.removeClass("clicked");
  $modalThirteen.removeClass("clicked");
  $modalFourteen.removeClass("clicked");
  $modalFifteen.removeClass("clicked");
  $modalSixteen.removeClass("clicked");
  $modalSeventeen.removeClass("clicked");
  $modalEighteen.removeClass("clicked");
  $modalNineteen.removeClass("clicked");
  $modalTwenty.removeClass("clicked");
  $modalTwentyOne.removeClass("clicked");
  $modalTwenty2.removeClass("clicked");
  $modalTwenty3.removeClass("clicked");
  $modalTwenty4.removeClass("clicked");
  $modalTwenty5.removeClass("clicked");
  $modalTwenty6.removeClass("clicked");
  $modalTwenty7.removeClass("clicked");
  $modalTwenty8.removeClass("clicked");
  $modalTwenty9.removeClass("clicked");
  $modalThirty.removeClass("clicked");
  $modalThirty1.removeClass("clicked");
  $modalThirty2.removeClass("clicked");
  $modalThirty3.removeClass("clicked");
  $modalThirty4.removeClass("clicked");
  $html.removeClass("clicked");
});