$(window).on('load', function() {

  $('input').bind("click", change);

})

function change() {
  if(this.value==="night"){
    $("body").css({"background": "black"});
    $("a").css({"color": "white"});
    $("ul").css({"color":"white"});
    this.value="day";
  } else {
    $("body").css({"background":"white"});
    $("a").css({"color":"black"});
    $("ul").css({"color":"white"});
    this.value = "night";
  }
}
