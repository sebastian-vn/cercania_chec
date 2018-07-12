$(document).ready(function() {
  getMainHeight();
  getOpacoHeight();
  $('select').formSelect();

});

function getMainHeight(){
  $("main").css("height", $("body").height());
}

function getOpacoHeight(){
  $("#opaco").css("height", $("body").height() / 2);
}

