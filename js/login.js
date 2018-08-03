$(document).ready(function(){
});

// Click functions
$("#enviar").click(function(){
  verificarCampos();
});

$.each($("input"), function(){
  $(this).keypress(function(){
    $(this).removeClass("validation");
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
      $(this).addClass("validation");
      value = false;
    }
  });

  if(value){
    loginCercania();
  }
}

function loginCercania(){
  
}