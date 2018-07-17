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
    errores = [];
    if($(this).val() == ""){
      swal({
        title: "Incompleto",
        text: "Te falta comepletar campos",
        icon: "error",
      });
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