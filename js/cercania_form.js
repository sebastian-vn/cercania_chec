$(document).ready(function() {
  $(".datepicker").datepicker();
  $("select").formSelect();
  getOpacoHeight();
  getSelectWidth();
  getDateWidth();
  selectWidth();
  getdividerWidth();
});

function getSelectWidth() {
  $(".select-wrapper").css("width", $("#container_form").width() / 2);
}

function getdividerWidth(){
  $(".divider").css("width", $("#container_form").width() - 300);
}

function getOpacoHeight() {
  $("#opaco").css("height", $("body").height() / 2);
}

function getDateWidth() {
  $(".datepicker").css("width", $("#container_form").width() / 2);
}

//Set margin for all elements in container_form DIV
function selectWidth() {
  var x = document.getElementById("etj").querySelectorAll("div");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.marginRight = "1em";
    x[i].style.width = "300px";
    x[i].style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.3)";
    x[i].style.padding = "7px";
  }
}

