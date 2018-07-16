$(document).ready(function(){

});

// Click functions
$("#enviar").click(function(){
  verificarCampos();
});

$.each($("input"), function(){
  $(this).keypress(function(){
    $(this).css("border-bottom-color", "rgba(0,0,0,.12)");
  });
});

function verificarCampos(){
  var value = true;
  $.each($("input"), function(){
    if($(this).val() == ""){
      $(this).css("border-bottom-color", "red");
      value = false;
    }
  });

  if(value){
    loginCercania();
  }
}

function loginCercania(){
  
}